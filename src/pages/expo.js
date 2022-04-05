import { graphql, navigate } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React, { useEffect } from "react";
import PaginationComponent from "../elements/pagination";
import ProjectElement from "../elements/projectElement";
import SearchEngineOps from "../elements/seo";
import InformationLayout from "../layouts/information";

const Expo = ({ data, location }) => {
  useEffect(() => {
    if (data.expo.open !== true && process.env.NODE_ENV !== "development") {
      navigate("/");
    }
  });
  return (
    <InformationLayout location={location.pathname} title={"Main"}>
      <SearchEngineOps title={`Expo ${new Date().getFullYear()}`} />

      <div className="block-heading">
        <OutboundLink
          className="avengers h6"
          href="https://www.youtube.com/watch?v=W54Y0cn78NY"
        >
          I Love you 3000
        </OutboundLink>
        <h2 className="text-primary">
          IET NITK @ Expo {new Date().getFullYear()}
        </h2>
        <p>
          Expo '{String(new Date().getFullYear()).slice(2)} is a club-wide
          project showcase showing the best of the products made by NITK. Here's
          some of ours.
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
              projectReport={element.project_report}
              signame={element.sig.name}
              title={element.title}
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
    expo: strapiExpo {
      open
    }
    projects: allStrapiProjects(
      filter: {onDisplayForExpo: {eq: true}}
      sort: {
        fields: [project_report___project, description, url, title]
        order: [ASC, ASC, ASC, ASC]
      }
    ) {
      nodes {
        title
        project_report {
          project
        }
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
export default Expo;
