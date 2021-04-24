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
db.collection("members")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data())
    // console.log(doc.data().builtBy)
      console.log(doc.data())
      const member= doc.data()
      const id= doc.id()
      const {data} = axios.post('http://localhost:1337/articles',  {
        data: {
          name: member.name,
          alumni: member.alumni,
          sigs:
        },
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc2OTM4MTUwLCJleHAiOjE1Nzk1MzAxNTB9.UgsjjXkAZ-anD257BF7y1hbjuY3ogNceKfTAQtzDEsU'
        }
      }).then(()=>{
        console.log(member.name,"copied")
      });
    })
  })
  .catch(error => {
    console.log("Error getting documents: ", error)
  })
