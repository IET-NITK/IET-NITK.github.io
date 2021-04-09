const Papa = require("papaparse")
const fs = require("fs")
const admin = require("firebase-admin")
const members= require("./members.json")

// let members = []
admin.initializeApp({
  credential: admin.credential.cert(require("../master.json")),
})
const db = admin.firestore()

members.forEach(element => {
    const idx=element.roll
    delete element.roll
    console.log(element,idx)
    db.collection("members").doc(idx).set(element)
});