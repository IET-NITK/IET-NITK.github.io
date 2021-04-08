const Papa = require("papaparse")
const fs = require("fs")
const admin = require("firebase-admin")

let members = []
admin.initializeApp({
  credential: admin.credential.cert(require("../master.json")),
})
const db = admin.firestore()

Papa.parse(fs.createReadStream("./s3.csv"), {
  delimiter: ",",
  skipEmptyLines: true,
  complete: function (results) {
    results.data.map(element => {
      let py = parseInt("20" + element[1].slice(0, 2)) + 4
      members.push({
        id: element[1],
        name: element[0].toLowerCase().replace(/\b\w/g, l => l.toUpperCase()),
        passoutYr: py,
        position:
          element[2] === "Executive Member" ? "Executive Member" : element[2],
        alumni: py < 2021 ? true : false,
      })
    })
    members.forEach(element => {
      const idx = element.id
      delete element.id
      const snapshot = db
        .collection("members")
        .where("name", "==", element.name)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.empty) {
            db.collection("members")
              .doc(idx)
              .set(element)
              .then(() => console.log("EMPTY", element.name))
          } else {
            querySnapshot.forEach(doc => {
              db.collection("members")
                .doc(idx)
                .set(doc.data())
                .then(db.collection("members").doc(doc.id).delete())
                .then(() => console.log("FOUND", element.name))
            })
          }
        })
        .catch(error => {
          console.log("Error getting documents: ", error, element.name)
        })
    })
  },
})
