import { graphql } from "gatsby";
import React from "react";
import SearchEngineOps from "../elements/seo";
import InformationLayout from "../layouts/information";

const ProjectReports = ({ location }) => {
  return (
    <InformationLayout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Project Reports" />
 
            <div className="block-heading">
              <h2 className="text-primary">Project Reports @ IET NITK</h2>
              <p>
                We do many projects throughtout the year, and we love to learn
                something and give back from them. Here's our reports from our
                projects.
              </p>
            </div>

    </InformationLayout>
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
