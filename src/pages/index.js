import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import Img_IETUpview from "../assets/img/iet-upview.jpg"
import IconLink from "../assets/img/link.svg"
import {
  getRandom,
  lcrs,
  RenderAuthors,
  RenderAuthorsName,
  RenderProjectDescription,
} from "../components/helper"
import video from "../../static/home.mp4"
import { SIGShowcase } from "../components/SIGShowcase"
import ReactMarkdown from "react-markdown"
// import



const MainPage = ({ location, data }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="We are IET NITK" />
      <main className="page landing-page">
        <div className="video-overlay-wrap">
          <div
            id="video-overlay"
            style={{
              // backgroundColor: "rgba(128, 51, 145, 0.44)",
              width: "100%",
              height: "100vh",
              position: "absolute",
              zIndex: 2,
            }}
          />
          <video
            loop={true}
            style={{
              width: "100%",
              zIndex: "1",
              backgroundColor: "black",
            }}
            autoPlay={true}
            muted={true}
            id="hero-video"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>

        <section className="clean-block about-us" id="about-us">
          <div className="container">
            <div className="block-heading mobile-marginx2">
              <h2 className="text-primary">Who are we?</h2>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  alt="IET"
                  src={Img_IETUpview}
                  style={{
                    width: "100%",
                    height: "auto",
                    paddingBottom: "1em",
                  }}
                />
              </div>
              <ReactMarkdown
                skipHtml={true}
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
              >
                {data.about.main}
              </ReactMarkdown>
            </div>
          </div>
        </section>
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Our SIGs</h2>
              <p>
                IET NITK consists of three different Special Interest Groups:
              </p>
            </div>
            <SIGShowcase hide_link={false} />
          </div>
        </section>

        <section className="clean-block about-us">
          <div className="container">
            <div className="article-list">
              <div className="container">
                <div className="intro">
                  <h2 className="text-primary section-heading">
                    Latest Articles
                  </h2>
                  <p className="section-description">
                    We love to write! Check out more of our stuff on{" "}
                    <Link to="/blog">
                      <img alt="IET" src={IconLink} className="mr-2" />
                      The IETNITK Blog
                    </Link>
                  </p>
                </div>
                <div className="row" style={{ paddingTop: "2em" }}>
                  {data.blog.nodes.map((element, index) => {
                    let imagelink =
                      element.header.localFile.childImageSharp &&
                      element.header.localFile.childImageSharp.fixed.srcWebp
                    if (!imagelink) {
                      imagelink = element.header.localFile.publicURL
                    }
                    return (
                      <div key={index} className="col-sm-6 col-md-4 item h-100">
                        <div className="card clean-blog-card">
                          <img
                            alt={element.title}
                            className="card-img-top w-100 d-block"
                            src={imagelink}
                          />
                          <div className="card-body">
                            <h4 className="card-title">{element.title}</h4>
                            <h6 className="text-muted card-subtitle mb-2">
                              <footer className="blockquote-footer">
                                {RenderAuthors(element.authors || [], "")}
                                {", "}
                                {element.date}
                              </footer>
                            </h6>
                          </div>
                          <div className="clean-blog-footer">
                            <Link
                              className="btn btn-sm"
                              style={{ textDecoration: "none" }}
                              to={"blog/" + lcrs(element.route)}
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="clean-block about-us">
          <div className="container">
            <div className="article-list">
              <div className="container">
                <div className="intro">
                  <h2 className="text-primary section-heading">Our Projects</h2>
                  <p className="section-description">
                    We have projects from many different domains of interest. We love doing our projects!{" "}
                    <Link to="/projects">
                      <img alt="IET" src={IconLink} className="mr-2" />
                      Find More
                    </Link>
                  </p>
                </div>
                <div className="articles row" style={{ paddingTop: "2em" }}>
                  {getRandom(data.projects.nodes, 4).map((element, index) => (
                    <div key={index} className="col-lg-6 col-md-6 mt-4">
                      <div className="card h-100 clean-card">
                        <div className="card-body">
                          <h6 className="card-title">
                            {element.url ? (
                              <Link
                                to={
                                  "/projects/" + lcrs(element.title)
                                }
                                className="card-link text-capitalize"
                              >
                                {element.title}
                              </Link>
                            ) : (
                              element.title
                            )}
                          </h6>
                          {element.sig ? (
                            <Link
                              to={"/sigs/" + element.sig.name.toLowerCase()}
                              className="badge badge-info text-uppercase mr-2"
                            >
                              {element.sig.name}
                            </Link>
                          ) : null}
                          {element.label ? (
                            <div className="badge badge-primary ">
                              {element.label}
                            </div>
                          ) : null}
                          <div className="mb-3">
                            <div className="text-muted">
                              {RenderProjectDescription(
                                element.description,
                                100
                              )}
                            </div>
                          </div>
                          <div className="card-text">
                            {RenderAuthorsName(element.authors || [], "")}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block about-us">
          <div className="container">
            <div className="article-list">
              <div className="container">
                <div
                  className="articles row align-items-center"
                  style={{ paddingTop: "2em" }}
                >
                  <div className="col-lg-6 col-md-6">
                    <div className="intro">
                      <h2 className="text-primary section-heading">
                        Our Events
                      </h2>
                      <p className="section-description">
                        Our latest event was {data.events.nodes[0].title}, but
                        we conduct many events throughout the year. Find more{" "}
                        <Link to="/events">
                          <img alt="IET" src={IconLink} className="mr-2" />
                          Find More
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-4">
                    <div className="card clean-card">
                      <div className="card-body">
                        <h6 className="card-title">
                          <Link
                            to={"/events/" + data.events.nodes[0].route}
                            className="card-link text-capitalize"
                          >
                            {data.events.nodes[0].title}
                          </Link>
                        </h6>
                        <div className="text-muted card-subtitle">
                          {data.events.nodes[0].date}
                        </div>
                        <p className="card-text">
                          {data.events.nodes[0].excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block about-us">
          <div className="container">
            <div className="article-list">
              <div className="container">
                <div
                  className="articles row align-items-center"
                  style={{ paddingTop: "2em" }}
                >
                  <div className="col-lg-6 col-md-6">
                    <div className="intro">
                      <h2 className="text-primary section-heading">
                        IET NITK Women In Tech
                      </h2>
                      <p className="section-description">
                      Women in Tech is an international organization with a double mission: to close the gender gap and to help women embrace technology. Find more{" "}
                        <Link to="/wit">
                          <img alt="IET" src={IconLink} className="mr-2" />
                          Find More
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  {
    about: strapiAboutClub {
      main
    }
    blog: allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        excerpt
        title
        route
        header {
          localFile{
            publicURL
            childImageSharp {
              fixed {
                srcWebp
              }
            }
          }

        }
        authors {
          name
        }
      }
    }
    events: allStrapiEvents(sort: { fields: date, order: DESC }, limit: 1) {
      nodes {
        route
        title
        route
        date(formatString: "MMMM Do, YYYY")
        excerpt
      }
    }
    projects: allStrapiProjects(
      filter: { authors: { elemMatch: { name: { ne: null } } } }
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
  }
`
export default MainPage
