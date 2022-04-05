import React from "react";
import SearchEngineOps from "../elements/seo";
import { Link, graphql } from "gatsby";
import PaginationComponent from "../elements/pagination";
import InformationLayout from "../layouts/information";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProjectElement from "../elements/projectElement";

const SIG = ({ pathname, data, uri }) => {
  const { sigDetails, sigProjects } = data;
  return (
    <InformationLayout location={pathname && pathname.location} uri={uri}>
      <SearchEngineOps title={sigDetails.name} />
      <div className="block-heading">
        <Link to={`/sig/${sigDetails.name.toLowerCase()}`}>
          <GatsbyImage
            alt={sigDetails.name}
            className="sig-logo"
            image={getImage(sigDetails.logo.localFile)}
            style={{ maxWidth: "200px" }}
          />
        </Link>
        <p>{sigDetails.description}</p>
      </div>
      <div className="block-content">
        <PaginationComponent
          item={(element, index) => (
            <ProjectElement
              authors={element.authors}
              description={element.description}
              key={index}
              label={element.label}
              title={element.title}
              url={element.url}
            />
          )}
          list={sigProjects.nodes}
          max={10}
        />
      </div>
    </InformationLayout>
  );
};

export default SIG;

export const postQuery = graphql`
  query sigpage($pathSlug: String!) {
    sigProjects: allStrapiProjects(
      filter: { sig: { name: { eq: $pathSlug } } }
      sort: {fields: [project_report___project, description, url, title], order: [ASC,ASC,ASC,ASC]}
    ) {
      nodes {
        description
        title
        url
        authors {
          name
        }
      }
    }
    sigDetails: strapiSigs(name: { eq: $pathSlug }) {
      name
      description
      logo {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
