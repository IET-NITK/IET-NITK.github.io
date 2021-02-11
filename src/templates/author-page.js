import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { RenderAuthors } from "../components/helper"
import moment from "moment"
const RenderArticles = ({ articles, type }) => (
  <>
    {articles &&
      articles.map((element, index) => (
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
                  {RenderAuthors(
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
      ))}
  </>
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
              {title} ({year})<span className="badge badge-primary">{SIG}</span>
            </Link>
          </h3>
          <div className="info">
            <span className="text-muted">
              By
              {RenderAuthors(builtBy, "")}
            </span>
          </div>
          <p> {description} </p>
          <a target="_blank" rel="noreferrer" href={"https://" + URL} className="card-link">
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}
export const Author = props => {
  const blogArticles = props.data.content.nodes.filter(
    e => e.sourceInstanceName === "blog"
  )
  console.log(props.pageContext)
  const projectReports = props.data.content.nodes.filter(
    e => e.sourceInstanceName === "project-reports"
  )
  return (
    <Layout location={props.location.pathname}>
      <SEO title={"About " + props.pageContext.name} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container-fluid">
            <div className="block-content">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  {/* <img  className="img-fluid" style={{height:"10em"}} src={props.data.image.edges[0] && props.data.image.edges[0].node.childImageSharp.fluid.srcWebp} alt=""/> */}
                  <div className="card">
                    <div className="card-body">
                      {props.pageContext.image ? (
                        <img
                          src={`https://drive.google.com/uc?export=view&id=${new URL(
                            props.pageContext.image
                          ).searchParams.get("id")}`}
                          alt=""
                          className="img-fluid"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                  <div
                    className="card clean-blog-post mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <div className="card-body">
                      {" "}
                      <div className="card-title">
                        <h4>Projects</h4>
                      </div>
                      {props.pageContext.projects.map((e, i) => (
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
                      <RenderArticles articles={blogArticles} type="blog" />
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
                        <RenderArticles
                          articles={projectReports}
                          type="reports"
                        />
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

// query($tag: [String], $image: String) {
//   image: allFile(
//     filter: {
//       internal: { mediaType: { regex: "/image/*/" } }
//       relativeDirectory: { eq: "members" }
//       childImageSharp: { fluid: { originalName: { eq: $image } } }
//     }
//   ) {
//     edges {
//       node {
//         publicURL
//       }
//     }
//   }
//   content: allFile(
//     filter: {
//       ext: { eq: ".md" }
//       childMarkdownRemark: { frontmatter: { authors: { in: $tag } } }
//     }
//   ) {
//     nodes {
//       sourceInstanceName
//       childMarkdownRemark {
//         frontmatter {
//           title
//           authors
//         }
//         excerpt
//       }
//       birthTime
//     }
//   }
// }

export const postQuery = graphql`
  query($tag: [String]) {
    content: allFile(
      filter: {
        ext: { eq: ".md" }
        childMarkdownRemark: { frontmatter: { authors: { in: $tag } } }
      }
    ) {
      nodes {
        sourceInstanceName
        childMarkdownRemark {
          frontmatter {
            title
            authors
          }
          excerpt
        }
        birthTime
      }
    }
  }
`
export default Author
