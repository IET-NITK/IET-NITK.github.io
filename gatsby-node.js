const path = require(`path`);

const lcrs = (name) => {
  return name.toLowerCase().split(" ").join("");
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templateHash = {
    member: path.resolve(`./src/templates/author-page.js`),
    project: path.resolve(`./src/templates/projects-page.js`),
    blog: path.resolve("./src/templates/blog-post.js"),
    event: path.resolve("./src/templates/events-post.js"),
    sig: path.resolve(`./src/templates/sig-page.js`),
  };
  try {
    graphql(`
      query jnjn($memberYear: Int){
        member: allStrapiMembers(filter: {passoutYr: {gte: $memberYear}}) {
          nodes {
            link: name
            date: updated_at
          }
        }
        project: allStrapiProjects {
          nodes {
            link: title
            date: updated_at
          }
        }
        sig: allStrapiSigs(filter: { no_link: { eq: false } }) {
          nodes {
            link: name
            date: updated_at
          }
        }
        event: allStrapiEvents {
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
    `,{memberYear: (new Date().getFullYear())-1}).then((result) => {
      Object.keys(result.data).forEach((key) => {
        result.data[key].nodes.forEach((element) => {
          console.log(`${key}:`, `Endpoint for ${lcrs(element.link)}`);
          createPage({
            path: `${key}/${lcrs(element.link)}`,
            component: templateHash[key],
            context: {
              pathSlug: element.link,
              sig: element.sig || null,
              date: element.date,
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
