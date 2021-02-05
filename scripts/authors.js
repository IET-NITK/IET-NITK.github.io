const fs = require("fs")
const yaml = require("js-yaml")

try {
  let fileContents = fs.readFileSync("../content/yml/authors.yml", "utf8")
  let data = yaml.safeLoad(fileContents)

  data = data.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })

  let names_hash = {}
  data.map(a => {
    if (Object.keys(names_hash).indexOf(a.name) <= -1) {
      if(a.short_name){
        delete a.short_name
      }
      names_hash[a.name] = {...a}
    }
  })



  console.log(Object.values(names_hash))

  let yamlStr = yaml.safeDump(Object.values(names_hash))
  fs.writeFileSync("../content/yml/authors.yml", yamlStr, "utf8")
} catch (e) {
  console.log(e)
}
