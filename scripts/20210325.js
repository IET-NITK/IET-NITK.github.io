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

projects = projects.map(e => {
  e.builtBy &&
    e.builtBy.map(authorname => {
      if (!getAuthorsList().includes(authorname)) {
        console.log(authorname)
        let yamlStr = yaml.safeDump(
          JSON.parse(
            JSON.stringify(
              authors.concat(authors, {
                name: authorname,
                position: "Executive Member",
                social: {
                  email: null,
                  github: null,
                  linkedin: null,
                  facebook: null,
                },
              })
            )
          )
        )
        fs.writeFileSync("../content/yml/authors.yml", yamlStr, "utf8")
      }
    })
  return sortObject(e)
})
// console.log("x",projects[0])
// console.log(authors.map(e => e.name))
