const admin = require("firebase-admin")
const yaml = require("js-yaml")
const fs = require("fs")

admin.initializeApp({
  credential: admin.credential.cert(require("../master.json")),
})

let data = { members: [], projects: [], smp: [] }
data.members = yaml.safeLoad(
  fs.readFileSync("../content/yml/authors.yml", "utf-8")
)
data.projects = yaml.safeLoad(
  fs.readFileSync("../content/yml/projects.yml", "utf-8")
)
data.smp = yaml.safeLoad(fs.readFileSync("../content/yml/smp.yml", "utf-8"))

const db = admin.firestore()
const batch = db.batch()

Object.keys(data).forEach(element => {
  const ref = db.collection(element)
  data[element].forEach(element2 => {
    ref
      .add(element2)
      .then(() => console.log(element))
      .catch(err => console.error(err))
  })
})

batch.commit()
