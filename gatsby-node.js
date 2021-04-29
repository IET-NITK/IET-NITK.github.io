const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fs = require("fs")
const yaml = require("js-yaml")

const lcrs = name => {
  return name.toLowerCase().split(" ").join("")
}
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const templateHash = {
    members: path.resolve(`./src/templates/author-page.js`),
    projectreports: path.resolve("./src/templates/report-page.js"),
    projects: path.resolve(`./src/templates/projects-page.js`),
    blog: path.resolve("./src/templates/blog-post.js"),
    events: path.resolve("./src/templates/events-post.js"),
    sigs: path.resolve(`./src/templates/sig-page.js`),
  }
  try {
    graphql(`
      query {
        members: allStrapiMembers {
          nodes {
            link: name
          }
        }
        projects: allProjects(filter: { url: { ne: null } }) {
          nodes {
            link: title
            sig
          }
        }
        sigs: allSigYaml(filter: { no_link: { ne: true } }) {
          nodes {
            link: name
          }
        }
      }
    `).then(result => {
      Object.keys(result.data).forEach(key => {
        result.data[key].nodes.forEach(e => {
          console.log(`${key}:`, `Endpoint for ${lcrs(e.link)}`)
          createPage({
            path: `${key}/${lcrs(e.link)}`,
            component: templateHash[key],
            context: {
              pathSlug: e.link,
              sig: e.sig || null
            },
          })
        })
      })
    })
  } catch {
    throw Error("Error in generating pages for Authors/Projects/SIGs")
  }

  
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
                date
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
          component: templateHash.blog,
          context: {
            pathSlug: element.relativeDirectory,
            articleDate: element.childMarkdownRemark.frontmatter.date,
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
        console.log(
          "Events:",
          "Endpoint for " + lcrs(element.relativeDirectory)
        )
        // eslint-disable-next-line
        createPage({
          path: "events/" + lcrs(element.relativeDirectory),
          component: templateHash.events,
          context: {
            pathSlug: element.relativeDirectory,
          },
        })
      })
    })
  } catch {
    throw Error("Error in generating pages for Blogs")
  }
}
