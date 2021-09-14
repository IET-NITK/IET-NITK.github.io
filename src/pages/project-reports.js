import { graphql } from "gatsby";
import React from "react";
// import { renderAuthors } from "../components/helper"
import Layout from "../components/layout";
// import PaginationComponent from "../components/partials/pagination"
import SearchEngineOps from "../components/seo";

const ProjectReports = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Project Reports" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Project Reports @ IET NITK</h2>
              <p>
                We do many projects throughtout the year, and we love to learn
                something and give back from them. Here's our reports from our
                projects.
              </p>
            </div>
            <div className="block-content">
              {/* <div className="card mb-4">
                <div className="card-body">Cipher Rovisp Torsion</div>
              </div> */}
              {/* <PaginationComponent
                max={10}
                noneMessage="No project reports here. Come back soon!"
                list={data.allFile.nodes}
                item={(element, index) => (
                  <div key={index} className="clean-blog-post">
                    <h3>{element.childMarkdownRemark.frontmatter.title}</h3>
                    <div className="info">
                      <span className="text-muted">
                        {element.relativeDirectory}&nbsp; (
                        <Link
                          to={
                            "/sigs/" +
                            element.childMarkdownRemark.frontmatter.sig.toLowerCase()
                          }
                        >
                          {element.childMarkdownRemark.frontmatter.sig}
                        </Link>
                        )
                      </span>
                    </div>
                    <p>
                      {element.childMarkdownRemark.frontmatter.authors ? (
                        <p>
                          Built by
                          {renderAuthors(
                            element.childMarkdownRemark.frontmatter.authors ||
                              [],
                            ""
                          )}
                        </p>
                      ) : null}
                    </p>
                    <Link
                      to={
                        "/projects/" +
                        element.relativeDirectory
                          .toLowerCase()
                          .split(" ")
                          .join("")
                      }
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                    >
                      Read More
                    </Link>
                  </div>
                )}
              /> */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const postQuery = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "project-reports" }
        extension: { eq: "md" }
      }
    ) {
      nodes {
        relativeDirectory
        sourceInstanceName
        
      }
    }
  }
`;

export default ProjectReports;
