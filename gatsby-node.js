const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fs = require("fs")
const yaml = require("js-yaml")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const authorTemplate = path.resolve(`./src/templates/author-page.js`)
  const authors = yaml.safeLoad(
    fs.readFileSync("./content/yml/authors.yml", "utf-8")
  )
  authors.forEach(element => {
    console.log("Member: Endpoint for " + element.name.toLowerCase().split(" ").join(""))
    createPage({
      path: "member/" + element.name.toLowerCase().split(" ").join(""),
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
      console.log("SIG: Endpoint for " + element.name)
      createPage({
        path: "sig/" + element.name.toLowerCase(),
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
        console.log("Blog: Endpoint for " + element.relativeDirectory)
        createPage({
          path: "blog/" + element.relativeDirectory,
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

  // const projects = yaml.safeLoad(
  //   fs.readFileSync("./content/yml/projects.yml", "utf-8")
  // )
  // const project = path.resolve(`./src/templates/project.js`)
  // projects.forEach(element => {
  //   graphql(
  //     `query MyQuery {
  //         allFile(filter: {sourceInstanceName: {eq: "project-reports"}, relativeDirectory: {eq: "${element.title.toLowerCase()}"}}) {
  //           edges {
  //             node {
  //               sourceInstanceName
  //               childMarkdownRemark {
  //                 frontmatter {
  //                   title
  //                 }
  //               }
  //               relativeDirectory
  //             }
  //           }
  //         }
  //       }
  //       `
  //   ).then(result => {
  //     if (result.data.allFile.edges.length !== 0) {
  //       console.log("Projects: Endpoint for " + element.title);
  //       createPage({
  //         path: "project/" + element.title,
  //         component: project,
  //         context: {
  //           pathSlug: element.title,
  //           projectDetails: element,
  //         },
  //       })

  //     }
  //   })
  // })
}
