import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SearchEngineOps from "../components/seo";
import { graphql } from "gatsby";
import Glimpse from "../components/partials/glimpse";
import { lcrs } from "../components/helper";

const Project = ({ data, pathname, pageContext, uri }) => {
  return (
    <Layout location={pathname && pathname.location}>
      <SearchEngineOps
        title={`${data.projects.title  } @${  data.projects.sig.name}`}
      />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading row">
              <div className="col-lg-9 col-md-9">
                <h2 className="text-primary" style={{ paddingTop: "1em" }}>
                  {data.projects.title}
                </h2>
                <p>{data.projects.description}</p>
              </div>

              <div className="col-lg-3 col-md-3 text-right">
                <Link to={`/sigs/${  data.projects.sig.name.toLowerCase()}`}>
                  {data.projects.sig.logo ? (
                    <img
                      alt={data.projects.sig.name}
                      className="sig-logo"
                      src={data.projects.sig.logo.localFile.childImageSharp.fixed.srcWebp}
                      style={{ maxWidth: "200px" }}
                    />
                  ) : null}
                </Link>
              </div>
            </div>
            <div className="block-content">
              {data.projects.label ? (
                <div className="mb-2 badge badge-primary">
                  {data.projects.label}
                </div>
              ) : null}
              <div className="row">
                <div className="col-lg-6">
                  <h4>Built by</h4>
                  <ul>
                    {data.projects.authors &&
                      data.projects.authors.map(({ name }, i) => (
                        <li key={i}>
                          <Link
                            to={
                              `/members/${ 
                              lcrs(name)}`}
                          >
                            {name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-lg-6 text-right">
                  {data.projects.url &&
                  new URL(data.projects.url).hostname === "github.com" ? (
                    <a
                      className="btn btn-outline-dark"
                      href={data.projects.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-github mr-2" /> Repository URL
                    </a>
                  ) : (
                    <a
                      className="btn btn-primary"
                      href={data.projects.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-link" /> Project Link
                    </a>
                  )}
                </div>
              </div>
              {/* {data.allFile && data.allFile.nodes.length !== 0 ? (
                <>
                  <hr />
                  <h4>Project Reports</h4>
                </>
              ) : null} */}

              {/* {data.allFile &&
                data.allFile.nodes.map((element, index) => (
                  <div key={index} className="clean-blog-post">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3>
                          <Link
                            className="btn-link"
                            to={
                              "/projects/" +
                              data.projectsYaml.title
                                .toLowerCase()
                                .split(" ")
                                .join("") +
                              "/" +
                              element.childMarkdownRemark.frontmatter.title
                                .toLowerCase()
                                .split(" ")
                                .join("")
                            }
                          >
                            {element.childMarkdownRemark.frontmatter.title}
                          </Link>
                        </h3>
                        <div className="info">
                          <span className="text-muted">
                            By
                            {renderAuthors(
                              element.childMarkdownRemark.frontmatter.authors,
                              ""
                            )}
                            <br />
                            {moment(element.birthTime).format("Do MMMM, YYYY")}
                          </span>
                        </div>
                        <p> {element.childMarkdownRemark.excerpt} </p>
                      </div>
                    </div>
                  </div>
                ))} */}
            </div>
          </div>
        </section>
      </main>
      <Glimpse currentRoute={uri} />
    </Layout>
  );
};

export const postQuery = graphql`
  query($pathSlug: String!) {
    projects: strapiProjects(title: { eq: $pathSlug }) {
      authors {
        name
      }
      sig {
        name
        logo {
          localFile{
            childImageSharp {
              fixed {
                srcWebp
              }
            }
           }
        }
      }
      url
      title
      description
      ongoing
    }
  }
`;

export default Project;
