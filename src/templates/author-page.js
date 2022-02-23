import React from "react";
import SearchEngineOps from "../elements/seo";
import { graphql, Link } from "gatsby";
import { lcrs, renderAuthors } from "../elements/helper";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Glimpse from "../elements/glimpse";
import InformationLayout from "../layouts/information";
const RenderArticles = ({ element, index }) => (
  <div
    className="clean-blog-post"
    key={index}
    style={{ paddingBottom: "35px" }}
  >
    <div className="row">
      <div className="col-lg-12">
        <h3>
          <Link className="btn-link" to={`/blog/${  lcrs(element.route)}`}>
            {element.title}
          </Link>
        </h3>
        <div className="info">
          <span className="text-muted">
            By
            {renderAuthors(element.authors, "")}
            <br />
            {element.birthTime}
          </span>
        </div>
        <p> {element.excerpt} </p>
      </div>
    </div>
  </div>
);

const RenderProject = ({
  title,
  description,
  authors,
  year,
  label,
  sig,
  url,
}) => {
  return (
    <div className="clean-blog-post" style={{ paddingBottom: "35px" }}>
      <div className="row">
        <div className="col-lg-12">
          <h3>
            {url ? (
              <Link to={`/projects/${  lcrs(title)}`}>
                {title} {year ? `(${year})` : null}
              </Link>
            ) : (
              <>
                {title} {year ? `(${year})` : null}
              </>
            )}
          </h3>
          {label ? (
            <div className="badge badge-primary mr-2">{label}</div>
          ) : null}
          {sig ? (
            <Link
              className="badge badge-info text-uppercase"
              to={`/sigs/${  lcrs(sig.name)}`}
            >
              {sig.name}
            </Link>
          ) : null}
          <div className="info">
            <span className="text-muted">
              By
              {renderAuthors(authors, "")}
            </span>
          </div>
          <p> {description} </p>
        </div>
      </div>
    </div>
  );
};

const Author = ({ data, location, uri }) => {
  const { memberDetails, memberProjects, memberArticles } = data;

  return (
    <InformationLayout location={location.pathname}>
      <SearchEngineOps title={`About ${  memberDetails.name}`} />
            <div className="block-content">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="text-center mt-4">
                        <div className="text-center">
                          {memberDetails.image ? (
                            <img
                              alt={memberDetails.name}
                              className="img-fluid rounded  mb-5"
                              src={`https://drive.google.com/thumbnail?id=${new URL(
                                memberDetails.image
                              ).searchParams.get("id")}`}
                            />
                          ) : null}
                        </div>
                        <h5 className="text-primary">{memberDetails.name}</h5>
                        <h6>{memberDetails.position}</h6>
                        <p>
                          {memberDetails.social &&
                          memberDetails.social.email ? (
                            <OverlayTrigger
                              delay={{ show: 250, hide: 400 }}
                              overlay={(props) => (
                                <Tooltip {...props}>
                                  {memberDetails.social.email
                                    .replace("@", " [at] ")
                                    .split(".")
                                    .join(" [dot] ")}
                                </Tooltip>
                              )}
                              placement="bottom"
                            >
                              <i className="fa fa-envelope text-primary" />
                            </OverlayTrigger>
                          ) : null}
                          {memberDetails.social &&
                          memberDetails.social.facebook ? (
                            <a
                              className="mr-1 ml-1"
                              href={`https://www.facebook.com/${memberDetails.social.facebook}`}
                              rel="noreferrer"
                              target="_blank"
                            >
                              &nbsp;
                              <i className="fa fa-facebook" />
                            </a>
                          ) : null}
                          {memberDetails.social &&
                          memberDetails.social.linkedin ? (
                            <a
                              className="mr-1 ml-1"
                              href={`https://www.linkedin.com/in/${memberDetails.social.linkedin}`}
                              rel="noreferrer"
                              target="_blank"
                            >
                              &nbsp;
                              <i className="fa fa-linkedin" />
                            </a>
                          ) : null}
                          {memberDetails.social &&
                          memberDetails.social.github ? (
                            <a
                              className="mr-1 ml-1"
                              href={`https://www.github.com/${memberDetails.social.github}`}
                              rel="noreferrer"
                              target="_blank"
                            >
                              &nbsp;
                              <i className="fa fa-github" />
                            </a>
                          ) : null}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                  <div
                    className="card clean-blog-post mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-title">
                        <h4>Projects</h4>
                      </div>
                      {memberProjects.nodes.map((project, index) => (
                        <RenderProject {...project} key={index} />
                      ))}
                    </div>
                  </div>
                  <div
                    className="card clean-blog-post mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-title">
                        <h4>Blog Articles</h4>
                      </div>
                      {memberArticles.nodes.map((article, ind) => (
                        <RenderArticles element={article} key={ind} />
                      ))}
                    </div>
                  </div>

                  <div
                    className="card clean-blog-post mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-title">
                        <h4>Project Reports</h4>
                      </div>
                      {/* {member_reports.nodes.map((e, i) => (
                        <RenderArticles element={e} index={i} />
                      ))} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </InformationLayout>
  );
};

export const postQuery = graphql`
  query ($pathSlug: String) {
    memberDetails: strapiMembers(name: { in: [$pathSlug] }) {
      name
      position
      image
      passoutYr
      contacts {
        email
        facebook
        github
        linkedin
      }
    }
    memberProjects: allStrapiProjects(
      filter: { authors: { elemMatch: { name: { in: [$pathSlug] } } } }
    ) {
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
    memberArticles: allStrapiBlogs(
      sort: { fields: date, order: DESC }
      filter: { authors: { elemMatch: { name: { in: [$pathSlug] } } } }
    ) {
      nodes {
        title
        authors {
          name
        }
        excerpt
        date(formatString: "MMMM Do, YYYY")
        route
      }
    }
  }
`;
export default Author;
