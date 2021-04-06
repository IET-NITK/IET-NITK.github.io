const Papa = require("papaparse")
const fs = require("fs")
const admin = require("firebase-admin")

let members = []
admin.initializeApp({
    credential: admin.credential.cert(require("../master.json")),
})
const db = admin.firestore()

Papa.parse(fs.createReadStream("./s2.csv"), {
    delimiter: ",",
    skipEmptyLines: true,
    complete: function (results) {
        results.data.map(element => {
            let py = parseInt("20" + element[2].slice(0, 2)) + 4
            members.push({
                name: element[0].toLowerCase().replace(/\b\w/g, l => l.toUpperCase()),
                passoutYr: py,
                social: {
                    email: element[1],
                },
                alumni: py < 2021 ? true : false,
                position: element[3]
            })
        })
        members.forEach(element => {
            try {
                const memberRef = db
                .collection("members")
                .where("name", "==", element.name)
                db.runTransaction(async transaction => {
                    return transaction.get(memberRef).then(function (refDoc) {
                        if (!refDoc.exists) {
                            return transaction.set(db.collection("members").doc(), {
                                ...element,
                            })
                        } else {
                            return transaction.update(memberRef, {
                                ...element,
                            })
                        }
                    })
                })
                console.log("Transaction success!",element.name)
            } catch (e) {
                console.log("Transaction failure:", e)
            }
        })
    }
})