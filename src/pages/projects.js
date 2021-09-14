import { graphql, Link } from "gatsby";
import React from "react";
import { lcrs, renderAuthors } from "../components/helper";
import Layout from "../components/layout";
import PaginationComponent from "../components/partials/pagination";
import SearchEngineOps from "../components/seo";

const Projects = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Projects" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Projects @ IET NITK</h2>
              <p>
                We do many projects throughtout the year, here's a glimpse of it
                all
              </p>
            </div>
            <div className="block-content">
              <PaginationComponent
                filterLabel="Filter by SIG"
                item={(element, index) => (
                  <div className="clean-blog-post" key={index}>
                    <h3 className="text-capitalize">{element.title}</h3>
                    {element.label ? (
                      <div className="badge badge-primary mr-2 ">
                        {element.label}
                      </div>
                    ) : null}
                    <Link
                      className="badge badge-info text-uppercase"
                      to={`/sigs/${  element.sig.name.toLowerCase()}`}
                    >
                      {element.sig.name}
                    </Link>
                    <p>{element.description || ""}</p>
                    {element.authors ? (
                      <p>
                        Built by
                        {renderAuthors(element.authors || [], "")}
                      </p>
                    ) : null}
                    {element.url ? (
                      <Link
                        className="btn btn-outline-primary btn-sm"
                        to={
                          `/projects/${ 
                          lcrs(element.title)}`}
                        type="button"
                      >
                        Read More
                      </Link>
                    ) : null}
                  </div>
                )}
                list={data.projects.nodes}
                max={10}
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
    projects: allStrapiProjects(sort: { fields: authors, order: DESC }) {
      nodes {
        title
        description
        sig {
          name
        }
        url
        authors {
          name
        }
      }
    }
  }
`;

export default Projects;
