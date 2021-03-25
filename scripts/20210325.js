// Read projects.yml, sort both project-name wise and inner objects.
// Add any authors not in authors.yml to it, along with Executive Member position

const fs = require("fs")
const yaml = require("js-yaml")

let projects = yaml.safeLoad(
  fs.readFileSync("../content/yml/projects.yml", "utf8")
)
let authors = yaml.safeLoad(
  fs.readFileSync("../content/yml/authors.yml", "utf8")
)
let missingAuthors = []
let getAuthorsList = () => {
  return authors.map(e => e.name)
}

function sortObject(obj) {
  return Object.keys(obj)
    .sort()
    .reduce(function (result, key) {
      result[key] = obj[key]
      return result
    }, {})
}

fs.writeFileSync("../content/yml/projects.yml",yaml.safeDump(JSON.parse(JSON.stringify(projects.map(e => {
    e.builtBy &&
      e.builtBy.map(authorname => {
        if (
          !getAuthorsList().includes(authorname) &&
          !missingAuthors.includes(authorname)
        ) {
          let yamlStr = yaml.safeDump(
            JSON.parse(
              JSON.stringify([
                ...authors,
                {
                  name: authorname,
                  position: "Executive Member",
                },
              ])
            )
          )
          fs.writeFileSync("../content/yml/authors.yml", yamlStr, "utf8")
          missingAuthors.push(authorname)
        console.log(authorname)
          // fs.appendFileSync
        }
      })
    return sortObject(e)
  })))),'utf8')
