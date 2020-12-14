const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fs = require("fs")
const yaml = require("js-yaml")

const lcrs = name => {
  return name.toLowerCase().split(" ").join("")
}
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const authorTemplate = path.resolve(`./src/templates/author-page.js`)
  const authors = yaml.safeLoad(
    fs.readFileSync("./content/yml/authors.yml", "utf-8")
  )
  authors.forEach(element => {
    console.log("Member:", "Endpoint for " + lcrs(element.name))
    createPage({
      path: "member/" + lcrs(element.name),
      component: authorTemplate,
      context: {
        pathSlug: element.name,
        memberDetails: element,
      },
    })
  })

  const sigTemplate = path.resolve(`./src/templates/sig-page.js`)
  const sigs = yaml.safeLoad(fs.readFileSync("./content/yml/sig.yml", "utf-8"))
  sigs.forEach(element => {
    if (element.no_link !== true) {
      console.log("SIG:", "Endpoint for " + lcrs(element.name))
      createPage({
        path: "sig/" + lcrs(element.name),
        component: sigTemplate,
        context: {
          pathSlug: element.name,
          sigDetails: element,
        },
      })
    }
  })

  const blogTemplate = path.resolve("./src/templates/blog-post.js")
  try {
    graphql(`
      query {
        allFile(
          filter: { sourceInstanceName: { eq: "blog" }, ext: { eq: ".md" } }
        ) {
          nodes {
            relativeDirectory
          }
        }
      }
    `).then(result => {
      let titleArray = result.data.allFile.nodes
      titleArray.forEach(element => {
        console.log("Blog:", "Endpoint for " + lcrs(element.relativeDirectory))
        // eslint-disable-next-line
        createPage({
          path: "blog/" + lcrs(element.relativeDirectory),
          component: blogTemplate,
          context: {
            pathSlug: element.relativeDirectory,
          },
        })
      })
    })
  } catch {
    throw Error("Error in generating pages for Blogs")
  }

  const projects = yaml.safeLoad(
    fs.readFileSync("./content/yml/projects.yml", "utf-8")
  )
  const projectReportTemplate = path.resolve("./src/templates/report-page.js")
  const projectTemplate = path.resolve(`./src/templates/projects-page.js`)
  projects.forEach(element => {
    console.log("Project:", "Endpoint for " + lcrs(element.title))
    createPage({
      path: "projects/" + lcrs(element.title),
      component: projectTemplate,
      context: {
        pathSlug: element.title,
        ...element
      },
    })
    graphql(`
    query {
      allFile(filter: {sourceInstanceName: {eq: "project-reports"}, ext: {eq: ".md"}, relativeDirectory: {eq: "${element.title}"}}) {
        nodes {
          name
        }
      }
    }
    `).then(result => {
        result.data.allFile.nodes.forEach(arr => {
          console.log(
            "Project Report:",
            "Endpoint for " + arr.name + " (" + lcrs(element.title) + ")"
          )
          createPage({
            path: "projects/" + lcrs(element.title) + "/" + lcrs(arr.name),
            component: projectReportTemplate,
            context: {
              pathSlug: lcrs(element.title) + "/" + arr.name,
            },
          })
        })
    })
  })
}
