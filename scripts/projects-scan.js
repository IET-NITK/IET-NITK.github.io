const Papa = require("papaparse")
const fs = require("fs")
const admin = require("firebase-admin")
// const members= require("./members.json")

// let members = []
admin.initializeApp({
  credential: admin.credential.cert(require("../master.json")),
})
const db = admin.firestore()

let builtBy = []

const members=[]
db.collection("projects")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data())
    // console.log(doc.data().builtBy)
      doc.data().builtBy && doc.data().builtBy.forEach(element => {
        builtBy.push([{ title: doc.data().title, member: element, sig: doc.data().sig }])
      })
    })
  })
  .then(()=>{
      db.collection("members").get().then(qs=>{
        qs.forEach(doc=>{
            if(doc.data().name){
                members.push(doc.data().name)
            }
        })
      }).then(()=>{
            console.log(members)
            builtBy.forEach(x=>{
                // console.log("Checking for",x[0])
                if(!Object(members).includes(x[0].member)){
                    console.log(x[0].member,x[0].title,x[0].sig)
                }
            })
      })
  })
  .catch(error => {
    console.log("Error getting documents: ", error)
  })
