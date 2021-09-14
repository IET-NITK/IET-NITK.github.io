const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require("fs");
const yaml = require("js-yaml");

const lcrs = (name) => {
  return name.toLowerCase().split(" ").join("");
};
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const templateHash = {
    members: path.resolve(`./src/templates/author-page.js`),
    projectreports: path.resolve("./src/templates/report-page.js"),
    projects: path.resolve(`./src/templates/projects-page.js`),
    blog: path.resolve("./src/templates/blog-post.js"),
    events: path.resolve("./src/templates/events-post.js"),
    sigs: path.resolve(`./src/templates/sig-page.js`),
  };
  try {
    graphql(`
      query {
        members: allStrapiMembers {
          nodes {
            link: name
            date: updated_at
          }
        }
        projects: allStrapiProjects {
          nodes {
            link: title
            date: updated_at
          }
        }
        sigs: allStrapiSigs(filter: { no_link: { eq: false } }) {
          nodes {
            link: name
            date: updated_at
          }
        }
        events: allStrapiEvents {
          nodes {
            link: route
            date
          }
        }
        blog: allStrapiBlogs {
          nodes {
            link: route
            date
          }
        }
      }
    `).then((result) => {
      Object.keys(result.data).forEach((key) => {
        result.data[key].nodes.forEach((e) => {
          console.log(`${key}:`, `Endpoint for ${lcrs(e.link)}`);
          createPage({
            path: `${key}/${lcrs(e.link)}`,
            component: templateHash[key],
            context: {
              pathSlug: e.link,
              sig: e.sig || null,
              date: e.date,
            },
          });
        });
      });
    });
  } catch {
    throw Error("Error in generating pages for Authors/Projects/SIGs");
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // With SSR enabled during development, we capture this
  // in development and during production build.
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@splidejs/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
