import { graphql } from "gatsby";
import React from "react";
import PaginationComponent from "../elements/pagination";
import ProjectElement from "../elements/projectElement";
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
            <ProjectElement
              authors={element.authors}
              description={element.description}
              key={index}
              label={element.label}
              projectReport={element.project_report}
              signame={element.sig.name}
              title={element.title}
              url={element.url}
            />
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
    projects: allStrapiProjects(sort: {fields: [project_report___id, description, url, title], order: [ASC,ASC,ASC,ASC]}) {
      nodes {
        title
        description
        project_report {
          project
        }
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
