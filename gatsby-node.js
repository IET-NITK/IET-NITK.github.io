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
  const projects = yaml.safeLoad(
    fs.readFileSync("./content/yml/projects.yml", "utf-8")
  )
  const projectReportTemplate = path.resolve("./src/templates/report-page.js")
  const projectTemplate = path.resolve(`./src/templates/projects-page.js`)
  const sigTemplate = path.resolve(`./src/templates/sig-page.js`)
  const sigs = yaml.safeLoad(fs.readFileSync("./content/yml/sig.yml", "utf-8"))
  const blogTemplate = path.resolve("./src/templates/blog-post.js")
  const eventsTemplate = path.resolve('./src/templates/events-post.js')

  authors.forEach(element => {
    let projectsDone = projects.filter(e => {
      return e.builtBy && e.builtBy.indexOf(element.name) > -1
    })
    console.log(
      "Member:",
      "Endpoint for " + lcrs(element.name)
    )
    createPage({
      path: "member/" + lcrs(element.name),
      component: authorTemplate,
      context: {
        tag: [element.name],
        ...element,
        projects: projectsDone,
      },
    })
  })

  sigs.forEach(element => {
    if (element.no_link !== true) {
      console.log("SIG:", "Endpoint for " + lcrs(element.name))
      createPage({
        path: "sig/" + lcrs(element.name),
        component: sigTemplate,
        context: {
          pathSlug: `/^${element.name}/`,
          sigDetails: element,
        },
      })
    }
  })

  try {
    graphql(`
      query {
        allFile(
          filter: { sourceInstanceName: { eq: "blog" }, ext: { eq: ".md" } }
        ) {
          nodes {
            relativeDirectory
            childMarkdownRemark {
              frontmatter {
                publishDate
              }
            }
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
            articleDate: element.childMarkdownRemark.frontmatter.publishDate
          },
        })
      })
    })
  } catch {
    throw Error("Error in generating pages for Blogs")
  }

  try {
    graphql(`
      query {
        allFile(
          filter: { sourceInstanceName: { eq: "events" }, ext: { eq: ".md" } }
        ) {
          nodes {
            relativeDirectory
          }
        }
      }
    `).then(result => {
      let titleArray = result.data.allFile.nodes
      titleArray.forEach(element => {
        console.log("Events:", "Endpoint for " + lcrs(element.relativeDirectory))
        // eslint-disable-next-line
        createPage({
          path: "events/" + lcrs(element.relativeDirectory),
          component: eventsTemplate,
          context: {
            pathSlug: element.relativeDirectory,
          },
        })
      })
    })
  } catch {
    throw Error("Error in generating pages for Blogs")
  }

  projects.forEach(element => {
    console.log("Project:", "Endpoint for " + lcrs(element.title))
    createPage({
      path: "projects/" + lcrs(element.title),
      component: projectTemplate,
      context: {
        pathSlug: "/" + element.title + "/",
        ...element,
      },
    })
    graphql(`
    query MyQuery {
      allFile(filter: {sourceInstanceName: {eq: "project-reports"}, ext: {eq: ".md"}, relativeDirectory: {regex: "/${element.title}/"}}, sort: {fields: birthTime}) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
            }
          }
          relativeDirectory
        }
      }
    }
    
    `).then(result => {
      result.data.allFile.nodes.forEach(arr => {
        let handle = arr.relativeDirectory.split("/").slice(-1)[0]
        console.log(
          "Project Report:",
          "Endpoint for " + lcrs(element.title) + "/" + lcrs(handle)
        )
        createPage({
          path: "projects/" + lcrs(element.title) + "/" + lcrs(handle),
          component: projectReportTemplate,
          context: {
            pathSlug: lcrs(element.title) + "/" + handle,
          },
        })
      })
    })
  })
}
