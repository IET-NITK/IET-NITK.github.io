import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { RenderAuthors } from "../components/helper"
const RenderArticles = ({ articles, element, index }) => (
  <div
    key={index}
    className="clean-blog-post"
    style={{ paddingBottom: "35px" }}
  >
    <div className="row">
      <div className="col-lg-12">
        <h3>
          <Link
            className="btn-link"
            to={
              "/blog/" +
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
            {RenderAuthors(element.childMarkdownRemark.frontmatter.authors, "")}
            <br />
            {element.birthTime}
          </span>
        </div>
        <p> {element.childMarkdownRemark.excerpt} </p>
      </div>
    </div>
  </div>
)

const RenderProject = ({
  title,
  SIG,
  description,
  builtBy,
  ongoing,
  year,
  URL,
}) => {
  return (
    <div className="clean-blog-post" style={{ paddingBottom: "35px" }}>
      <div className="row">
        <div className="col-lg-12">
          <h3>
            <Link
              className="btn-link"
              to={"/projects/" + title.toLowerCase().split(" ").join("")}
            >
              {title} {year ? `(${year})` : null}
              <span className="badge badge-primary">{SIG}</span>
            </Link>
          </h3>
          <div className="info">
            <span className="text-muted">
              By
              {RenderAuthors(builtBy, "")}
            </span>
          </div>
          <p> {description} </p>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://" + URL}
            className="card-link"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export const Author = ({ data, location }) => {
  const {
    member_details,
    member_projects,
    member_articles,
    member_reports,
  } = data

  return (
    <Layout location={location.pathname}>
      <SEO title={"About " + member_details.name} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container-fluid">
            <div className="block-content">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="text-center mt-4">
                        <h5 className="text-primary">{member_details.name}</h5>
                        <h6>{member_details.position}</h6>
                        <small>{member_details.social.email}</small>
                        <p>
                          {Object.keys(member_details.social).map(s =>
                            member_details.social[s] && s!=="email" ? (
                              <a
                                target="_blank"
                                rel="noreferrer"
                                className="mr-1 ml-1"
                                href={
                                  "https://www.facebook.com/" +
                                  member_details.social[s]
                                }
                              >
                                &nbsp;
                                <i className={`fa fa-${s}`} />
                              </a>
                            ) : null
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                  <div
                    className="card clean-blog-post mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-title">
                        <h4>Projects</h4>
                      </div>
                      {member_projects.nodes.map((e, i) => (
                        <RenderProject {...e} />
                      ))}
                    </div>
                  </div>
                  <div
                    className="card clean-blog-post mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-title">
                        <h4>Blog Articles</h4>
                      </div>
                      {member_articles.nodes.map((e, i) => (
                        <RenderArticles element={e} index={i} />
                      ))}
                    </div>
                  </div>

                  <div
                    className="card clean-blog-post mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-title">
                        <h4>Project Reports</h4>
                      </div>
                      {member_reports.nodes.map((e, i) => (
                        <RenderArticles element={e} index={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  query($pathSlug: [String]
  ) {
    member_details: authorsYaml(name: { in: $pathSlug }) {
      name
      position
      passoutYr
      social {
        email
        github
        linkedin
        facebook
      }
    }
    member_projects: allProjectsYaml(
      filter: { builtBy: { in: $pathSlug } }
      sort: { fields: title }
    ) {
      nodes {
        builtBy
        title
        sig
        year
        description
        URL
      }
    }
    member_reports: allFile(
      filter: {
        childMarkdownRemark: {
          frontmatter: { authors: { in: $pathSlug } }
        }
        sourceInstanceName: { eq: "project-reports" }
        extension: { eq: "md" }
      }
      sort: { fields: childrenMarkdownRemark___frontmatter___title }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            authors
            date(formatString: "MMMM Do, YYYY")
            title
          }
          excerpt
        }
      }
    }
    member_articles: allFile(
      filter: {
        childMarkdownRemark: {
          frontmatter: { authors: { in: $pathSlug } }
        }
        sourceInstanceName: { eq: "blog" }
        extension: { eq: "md" }
      }
      sort: { fields: childrenMarkdownRemark___frontmatter___title }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            authors
            date(formatString: "MMMM Do, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`
export default Author
