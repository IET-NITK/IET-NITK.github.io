import React from "react";
import SearchEngineOps from "../elements/seo";
import { Link, graphql } from "gatsby";
import { lcrs, renderAuthors } from "../elements/helper";
import PaginationComponent from "../elements/pagination";
import Glimpse from "../elements/glimpse";
import InformationLayout from "../layouts/information";

const SIG = ({ pathname, data, uri }) => {
  const { sigDetails, sigProjects } = data;
  return (
    <InformationLayout location={pathname && pathname.location} uri={uri}>
      <SearchEngineOps title={sigDetails.name} />
            <div className="block-heading">
              <Link to={`/sigs/${  sigDetails.name.toLowerCase()}`}>
                <img
                  alt={sigDetails.name}
                  className="sig-logo"
                  src={sigDetails.logo.localFile.childImageSharp.fixed.srcWebp}
                  style={{ maxWidth: "200px" }}
                />
              </Link>
              <p>{sigDetails.description}</p>
            </div>
            <div className="block-content">
              <PaginationComponent
                item={(element, index) => (
                  <div className="clean-blog-post" key={index}>
                    <div className="row">
                      <div className="col-lg-12">
                        <h3>
                          {element.authors && element.url ? (
                            <Link
                              to={
                                `/projects/${ 
                                lcrs(element.title)}`}
                            >
                              {element.title}
                            </Link>
                          ) : (
                            element.title
                          )}
                        </h3>
                        {element.label ? (
                          <div className="badge badge-primary">
                            {element.label}
                          </div>
                        ) : null}
                        {element.authors.length ? (
                          <div className="info">
                              <span className="text-muted">
                                By
                                {renderAuthors(element.authors, "")}
                              </span>
                            </div>
                        ) : null}

                        <p> {element.description} </p>
                      </div>
                    </div>
                  </div>
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
      sort: { fields: authors___name }
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
            fixed {
              srcWebp
            }
          }
        }
      }
    }
  }
`;
