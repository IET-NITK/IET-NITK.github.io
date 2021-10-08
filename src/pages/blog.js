import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SearchEngineOps from "../components/seo";
import { renderAuthors } from "../components/helper";
import PaginationComponent from "../components/partials/pagination";

const Blog = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Blog" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Official IET-NITK Blog</h2>
              <p>
                We post cool stuff. Subscribe to our Newsletter to stay updated!
              </p>
            </div>
            <div className="block-content">
              <PaginationComponent
                item={(element, inx) => {
                  let imagelink = element.header.localFile.childImageSharp && element.header.localFile.childImageSharp.fixed.srcWebp;
                  if(!imagelink){
                    imagelink= element.header.localFile.publicURL;
                  }
                  return (
                    <div className="clean-blog-post" key={inx}>
                      <div className="row">
                        <div className="col-lg-5">
                          <img
                            alt={element.title}
                            className="rounded img-fluid"
                            src={imagelink}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                        <div className="col-lg-7">
                          <h3 className="text-capitalize">
                            {element.title.toLowerCase()}
                          </h3>
                          <div className="info">
                            <span className="text-muted">
                              By&nbsp;
                              {renderAuthors(
                                element.authors,
                                ""
                              )}
                              <br />
                              {element.date}
                            </span>
                          </div>
                          <p>{element.excerpt}</p>
                          <Link
                            className="btn btn-outline-primary btn-sm"
                            to={`/blog/${  element.route.toLowerCase()}`}
                            type="button"
                          >
                            Read More
                            <i className="fa fa-angle-right ml-2"/>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }}
                list={data.blogs.nodes}
                max={5}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const postQuery = graphql`
  {
    blogs: allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        excerpt
        title
        route
        header {
          localFile{
            childImageSharp {
              fixed {
                srcWebp
              }
            }
            publicURL
          }
        }
        authors {
          name
        }
      }
    }
  }
`;

export default Blog;
