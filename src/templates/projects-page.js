import { Link, graphql } from "gatsby";
import React from "react";
import SearchEngineOps from "../elements/seo";
import { lcrs } from "../elements/helper";
import InformationLayout from "../layouts/information";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Project = ({ data, pathname, uri }) => {
  return (
    <InformationLayout location={pathname && pathname.location} uri={uri}>
      <SearchEngineOps
        title={`${data.projects.title  } @${  data.projects.sig.name}`}
      />

            <div className="block-heading row">
              <div className="col-lg-9 col-md-9">
                <h2 className="text-primary" style={{ paddingTop: "1em" }}>
                  {data.projects.title}
                </h2>
                <p>{data.projects.description}</p>
              </div>

              <div className="col-lg-3 col-md-3 text-right">
                <Link to={`/sigs/${  data.projects.sig.name.toLowerCase()}`}>
                  {data.projects.sig.logo ? (
                    <GatsbyImage
                      alt={data.projects.sig.name}
                      className="sig-logo"
                      image={getImage(data.projects.sig.logo.localFile)}
                      style={{ maxWidth: "200px" }}
                    />
                  ) : null}
                </Link>
              </div>
            </div>
            <div className="block-content">
              {data.projects.label ? (
                <div className="mb-2 badge badge-primary">
                  {data.projects.label}
                </div>
              ) : null}
              <div className="row">
                <div className="col-lg-6">
                  <h4>Built by</h4>
                  <ul>
                    {data.projects.authors &&
                      data.projects.authors.map(({ name }) => (
                        <li key={name}>
                          <Link
                            to={
                              `/members/${ 
                              lcrs(name)}`}
                          >
                            {name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-lg-6 text-right">
                  {data.projects.url &&
                  new URL(data.projects.url).hostname === "github.com" ? (
                    <a
                      className="btn btn-outline-dark"
                      href={data.projects.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-github mr-2" /> Repository URL
                    </a>
                  ) : (
                    <a
                      className="btn btn-primary"
                      href={data.projects.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-link" /> Project Link
                    </a>
                  )}
                </div>
              </div>
            </div>

    </InformationLayout>
  );
};

export const postQuery = graphql`
  query($pathSlug: String!) {
    projects: strapiProjects(title: { eq: $pathSlug }) {
      authors {
        name
      }
      sig {
        name
        logo {
          localFile{
            childImageSharp {
              gatsbyImageData(width: 200,placeholder: BLURRED)
   
            }
           }
        }
      }
      url
      title
      description
      ongoing
    }
  }
`;

export default Project;
