const fs = require("fs")
const yaml = require("js-yaml")

export const sorter = (arr, index, desc) => {
  return arr.sort(function (a, b) {
    if (a[index] < b[index]) {
      return desc ? 1 : -1
    }
    if (a[index] > b[index]) {
      return desc ? -1 : 1
    }
    return 0
  })
}

const capitalize = s => {
  if (typeof s !== "string") return ""
  return s
    .split(" ")
    .map(
      element =>
        element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    )
    .join(" ")
}

const passoutMarker = 2020
try {
  let fileContents = fs.readFileSync("../content/yml/authors.yml", "utf8")
  let data = yaml.safeLoad(fileContents)

  let names_hash = {}
  data = data.map(a => {
    a.name = capitalize(a.name)
    console.log(a.name)
    if (Object.keys(names_hash).indexOf(a.name) <= -1) {
      if (a.short_name) {
        delete a.short_name
      }
      names_hash[a.name] = a
    } else {
      names_hash[a.name] = { ...names_hash[a.name], ...a }
    }
    return a
  })

  let alumni = []
  let rest = []
  const corePositionMapper = {
    Convenor: 1,
    Chair: 2,
    "Vice-Chair": 3,
    Secretary: 4,
    "Cipher Lead": 5,
    "Rovisp Lead": 5,
    "Torsion Lead": 5,
    "Inkheart And Medium Lead": 5,
    
  }
  const coreWithinPosition = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6:[]
  }
  let names = Object.values(names_hash).map(e => {
    e.social = {
      email: e.email || null,
      github: e.github || null,
      linkedin: e.linkedin || null,
      facebook: e.facebook || null,
    }

    delete e.email
    delete e.github
    delete e.linkedin
    delete e.facebook
    if (e.passoutYr <= passoutMarker) {
      e.alumni = true
      alumni.push(e)
    } else if (e.position !== "Executive Member" && e.alumni !== true) {
      e.positionWeight = corePositionMapper[e.position] || 6
      coreWithinPosition[e.positionWeight].push(e)
    } else {
      rest.push(e)
    }
    return e
  })
  rest = sorter(rest, "name")
  alumni = sorter(alumni, "passoutYr", true)
  const core = sorter(
    sorter(coreWithinPosition["1"], "position").concat(
      sorter(coreWithinPosition["2"], "position"),
      sorter(coreWithinPosition["3"], "position"),
      sorter(coreWithinPosition["4"], "position"),
      sorter(coreWithinPosition["5"], "position"),
      sorter(coreWithinPosition["6"], "position")
    ),
    "positionWeight"
  )
  core.map(c => delete c.positionWeight)
  console.log(alumni.length, core.length, rest.length)
  
  let yamlStr = yaml.safeDump(
    JSON.parse(JSON.stringify(alumni.concat(core, rest)))
  )
  fs.writeFileSync("../content/yml/authors.yml", yamlStr, "utf8")
} catch (e) {
  console.log(e)
}
