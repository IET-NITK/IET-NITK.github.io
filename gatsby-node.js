const path = require(`path`);

const lcrs = (name) => {
  return name.toLowerCase().split(" ").join("");
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templateHash = {
    members: path.resolve(`./src/templates/author-page.tsx`),
    projectreports: path.resolve("./src/templates/report-page.tsx"),
    projects: path.resolve(`./src/templates/projects-page.tsx`),
    blog: path.resolve("./src/templates/blog-post.tsx"),
    events: path.resolve("./src/templates/events-post.tsx"),
    sigs: path.resolve(`./src/templates/sig-page.tsx`),
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
