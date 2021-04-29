const Papa = require("papaparse")
const fs = require("fs")
const admin = require("firebase-admin")
const { default: axios } = require("axios")
// const members= require("./members.json")

// let members = []
admin.initializeApp({
  credential: admin.credential.cert(require("../master.json")),
})
const db = admin.firestore()

let builtBy = []
const members = []
db.collection("members")
  .get()
  .then(querySnapshot => {
      console.log(`${querySnapshot.length} entries`)
    querySnapshot.forEach(doc => {
      axios.post(
        "https://ietnitk-cms.herokuapp.com/members",
        {
          id: doc.id,
          alumni: doc.data().alumni,
          roll: doc.id,
          passoutYr: doc.data().passoutYr,
          position: doc.data().position,
          contacts: doc.data().social,
        //   image: doc.data().image,
          name: doc.data().name,
          sigs: [],
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE5MjU2NDkzLCJleHAiOjE2MjE4NDg0OTN9.Bo5OAWm5qwlxth_h53Y3mGL01IOhdgIKgPOiAXYNAt4`,
          },
        }
      ).catch(e=>console.log(`Error ${doc.data().name}`))
    })
  })
  .catch(error => {
    console.log("Error getting documents: ", error)
  })
