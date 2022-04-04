import { graphql, Link } from "gatsby";
import React from "react";
import { lcrs, renderAuthors } from "../elements/helper";
import PaginationComponent from "../elements/pagination";
import ProjectURL from "../elements/projecturl";
import SearchEngineOps from "../elements/seo";
import InformationLayout from "../layouts/information";

const Projects = ({ data, location }) => {
  return (
    <InformationLayout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Projects" />

      <div className="block-heading">
        <h2 className="text-primary">Projects @ IET NITK</h2>
        <p>
          We do many projects throughtout the year, here's a glimpse of it all
        </p>
      </div>
      <div className="block-content">
        <PaginationComponent
          filterBy="sig"
          filterFunction={(element) => element.sig.name}
          filterLabel="Filter by SIG"
          item={(element, index) => (
            <div className="clean-blog-post" key={index}>
              <h3 className="text-capitalize">{element.title}</h3>
              {element.label ? (
                <div className="badge badge-primary mr-2 ">{element.label}</div>
              ) : null}
              <Link
                className="badge badge-info text-uppercase"
                to={`/sigs/${element.sig.name.toLowerCase()}`}
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

              <ProjectURL customClass="btn-sm mr-2" url={element.url} />
              <Link
                className="btn btn-outline-primary btn-sm"
                to={`/projects/${lcrs(element.title)}`}
                type="button"
              >
                <i className="fa fa-info mr-2" />
                Know More
              </Link>
            </div>
          )}
          list={data.projects.nodes}
          max={10}
        />
      </div>
    </InformationLayout>
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
