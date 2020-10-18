import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const Blog = props => {
  let blogs = props.data.allFile.nodes
  
  return (
    <Layout location={props.location.pathname} title={"Main"}>
      <SEO title="Blog" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Official Blog</h2>
              <p>
                We post cool stuff. Subscribe to our Newsletter to stay updated!
              </p>
            </div>
            <div className="block-content">
              {/* {% for post in site.posts %}
        {% assign author = site.data.authors | where: 'short_name', post.short_name | first %} */}
              {blogs.map((element, index) => {
                let link = element.relativeDirectory
                let excerpt = element.childMarkdownRemark.excerpt
                element = element.childMarkdownRemark.frontmatter
                return (
                  <div className="clean-blog-post">
                    <div className="row">
                      <div className="col-lg-5">
                        <img
                          alt="X"
                          className="rounded img-fluid"
                          src={element.image.childImageSharp.fluid.src}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="col-lg-7">
                        <h3>{element.title}</h3>
                        <div className="info">
                          {/* <span className="text-muted">
                  {{ post.date | date_to_long_string }} by&nbsp;
                  <a href="/about#{{ author.short_name }}">{{author.name}}</a>
                  <br>
                  {% assign words = content | number_of_words %}
                </span> */}
                        </div>
                        <p>{excerpt}</p>
                        <Link
                          to={link}
                          className="btn btn-outline-primary btn-sm"
                          type="button"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "blog" }, ext: { eq: ".md" } }
      sort: { fields: birthTime, order: DESC }
    ) {
      nodes {
        relativeDirectory
        childMarkdownRemark {
          timeToRead
          excerpt(format: PLAIN)
          frontmatter {
            author
            title
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
