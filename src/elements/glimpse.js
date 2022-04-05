import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { lcrs, OnBrowser, renderAuthors } from "./helper";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import sampleSize from "lodash/sampleSize";
import truncate from "lodash/truncate";

// eslint-disable-next-line
function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}

const getRandomThings = (arr, num) => {
  return sampleSize(arr, num);
};

export const Glimpse = () => {
  return (
    <OnBrowser>
      <StaticQuery
        query={graphql`
          query {
            sigs: allStrapiSigs(filter: { no_link: { eq: false } }) {
              nodes {
                name
                description
              }
            }
            blogs: allStrapiBlogs(
              limit: 3
              sort: { fields: date, order: DESC }
            ) {
              nodes {
                name: title
                route
                authors {
                  name
                }
                excerpt
                id
              }
            }
            events: allStrapiEvents(
              limit: 3
              sort: { fields: date, order: DESC }
            ) {
              nodes {
                route
                name: title
                id
                excerpt
              }
            }
            projects: allStrapiProjects(
              sort: { fields: id }
              filter: {
                description: { ne: null }
                authors: { elemMatch: { name: { ne: null } } }
              }
            ) {
              nodes {
                name: title
                excerpt: description
                id
                authors {
                  name
                }
              }
            }
          }
        `}
        render={({ sigs, blogs, events, projects }) => {
          const [state] = React.useState({
            sigs: getRandomThings(sigs.nodes, 1),
            rest: getRandomThings(
              [...blogs.nodes, ...events.nodes, ...projects.nodes],
              20
            ),
          });
          return (
            <div className="bg-gradient-primary text-light pt-4 pb-4">
              <div className="container">
                <h5>
                  <strong>Glimpse @ IET NITK</strong>
                </h5>
                <div className="row">
                  <div className="col-lg-3 col-md-4  mt-5 mb-5">
                    {state.sigs.map((element, index) => (
                      <Link
                        className="card bg-gradient-white text-primary text-decoration-none"
                        key={index}
                        style={{ height: "15em" }}
                        to={`/sig/${lcrs(element.name)}`}
                      >
                        <div className="card-body">
                          <h5 className="card-title">{element.name}</h5>
                          <p className="card-text">{element.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="col-lg-9 col-md-8  mt-5 mb-5">
                    <Splide
                      options={{
                        perPage: 2,
                        gap: "2rem",
                        type: "loop",
                        keyboard: true,
                        pauseonFocus: true,
                        autoplay: true,
                        rewind: true,
                        perMove: 1,
                        interval: 5000,
                        arrows: false,
                        pagination: false,
                        hasAutoplayProgress: true,
                      }}
                      style={{ height: "13em" }}
                    >
                      {state.rest.map((element) => {
                        const id = element.id.split("lodash")[0].split("_")[0];
                        return (
                          <SplideSlide key={id} style={{ height: "15em" }}>
                            <div
                              className="card bg-gradient-white"
                              style={{ height: "15em" }}
                            >
                              <Link
                                className="card-body text-primary text-decoration-none"
                                to={
                                  id === "Projects"
                                    ? `/project/${lcrs(element.name)}`
                                    : `/${id.slice(0, -1).toLowerCase()}/${lcrs(
                                        element.route
                                      )}`
                                }
                              >
                                <h5 className="card-title">{element.name}</h5>
                                <span className="badge badge-info">
                                  {" "}
                                  {id === "Blogs"
                                    ? "Blog "
                                    : id === "Events"
                                    ? "Event "
                                    : "Project "}
                                </span>

                                <div className="card-text ">
                                  {id === "Events"
                                    ? truncate(element.excerpt, {
                                        length: 200,
                                      })
                                    : null}
                                </div>
                              </Link>
                              {element.authors ? (
                                <div className="card-footer text-primary">
                                  By
                                  {renderAuthors(
                                    element.authors,
                                    "text-primary"
                                  )}
                                </div>
                              ) : null}
                            </div>
                          </SplideSlide>
                        );
                      })}
                    </Splide>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      />
    </OnBrowser>
  );
};

export default Glimpse;
