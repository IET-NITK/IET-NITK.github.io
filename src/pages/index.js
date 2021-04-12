import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import Img_IETUpview from "../assets/img/iet-upview.jpg"
import { RenderAuthors } from "../components/helper"
import video from "../../static/home.mp4"
import { SIGShowcase } from "../components/SIGShowcase"
// import

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len)
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available")
  while (n--) {
    var x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}



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
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                The Institute of Engineering Technology - National Institute of
                Technology Karnataka (IET-NITK) Student Chapter is actively
                involved in inculcating a passion for innovation and
                appreciation temperament in the minds of those who have
                potential to change the future. We conduct workshops and
                seminars throughout the academic calendar striving to impact
                relevant skills to the students. Apart from this, we strive to
                invite eminent personalities to conduct lectures for the benefit
                of the club members and keeping doors opened for others
                interested. We are affiliated to IET London, which is one of the
                world’s leading professional societies for the engineering and
                technology community, with more than 168,000 members in 150
                countries and offices in Europe, North America and Asia-Pacific.
                The IET provides a global knowledge network to facilitate the
                exchange of ideas and promote the positive role of science,
                engineering and technology in the world.
              </div>
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
            <SIGShowcase
              sigs={data.sigdetails.nodes}
            />
          </div>
        </section>

        <section className="clean-block about-us">
          <div className="container">
            <div className="article-list">
              <div className="container">
                <div className="intro">
                  <h2
                    className="text-primary text-center"
                    style={{ fontWeight: "500" }}
                  >
                    Latest Articles
                  </h2>
                  <p className="text-center">
                    We love to write! Check out more of our stuff on{" "}
                    <Link to="/blog">the IET Blog</Link>
                  </p>
                </div>
                <div className="row" style={{ paddingTop: "2em" }}>
                  {data.blog.nodes.map((element, index) => {
                    let imagelink =
                      element.childMarkdownRemark.frontmatter.image
                    if (imagelink) {
                      if (imagelink.childImageSharp) {
                        imagelink = imagelink.childImageSharp.fixed.srcWebp
                      } else {
                        imagelink = imagelink.publicURL
                      }
                    } else {
                      imagelink = data.ietlogo.fixed.srcWebp
                    }
                    return (
                      <div key={index} className="col-sm-6 col-md-4 item h-100">
                        <div className="card">
                          <img
                            alt={element.childMarkdownRemark.frontmatter.title}
                            className="card-img-top w-100 d-block"
                            src={imagelink}
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              {element.childMarkdownRemark.frontmatter.title}
                            </h4>
                            <h6 className="text-muted card-subtitle mb-2">
                              By&nbsp;
                              {RenderAuthors(
                                element.childMarkdownRemark.frontmatter.authors,
                                ""
                              )}
                              &nbsp;
                              <br />
                              {element.childMarkdownRemark.frontmatter.date}
                            </h6>
                            {/* <p className="card-text">ost.excerpt</p> */}
                            <div style={{ textAlign: "center" }}>
                              <Link
                                className=""
                                style={{ textDecoration: "none" }}
                                to={"blog/" + element.relativeDirectory}
                              >
                                Read More
                                <i className="fa fa-arrow-circle-right ml-2" />
                              </Link>
                            </div>
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
                  <h2
                    className="text-primary text-center"
                    style={{ fontWeight: "500", paddingBottom: "-1em" }}
                  >
                    Our Projects
                  </h2>
                  <p className="text-center">
                    We love doing our projects! Find more{" "}
                    <Link to="/projects">here</Link>
                  </p>
                </div>
                <div className="articles row" style={{ paddingTop: "2em" }}>
                  {getRandom(data.projects.nodes, 4).map((element, index) => (
                    <div key={index} className="col-lg-6 col-md-6 mt-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="card-title">
                            {element.url ? (
                              <Link
                                to={
                                  "/projects/" +
                                  element.title
                                    .toLowerCase()
                                    .split(" ")
                                    .join("")
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
                              to={"/sigs/" + element.sig.toLowerCase()}
                              className="badge badge-info text-uppercase mr-2"
                            >
                              {element.sig}
                            </Link>
                          ) : null}
                          {element.label ? (
                            <div className="badge badge-primary ">
                              {element.label}
                            </div>
                          ) : null}
                          <p className="card-text">
                            Built by
                            {RenderAuthors(element.builtBy || [], "")}
                          </p>
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
                <div className="articles row" style={{ paddingTop: "2em" }}>
                  <div className="col-lg-6 col-md-6 mt-4">
                    <div className="intro">
                      <h2
                        className="text-primary text-center"
                        style={{ fontWeight: "500", paddingBottom: "-1em" }}
                      >
                        Our Events
                      </h2>
                      <p className="text-center">
                        Our latest event was{" "}
                        {
                          data.events.nodes[0].childMarkdownRemark.frontmatter
                            .title
                        }
                        , but we conduct many events throughout the year. Find
                        more <Link to="/events">here</Link>
                      </p>
                    </div>
                  </div>
                  {/* {data.events.nodes.map((element, index) => ( */}
                  <div className="col-lg-6 col-md-6 mt-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="card-title">
                          <Link
                            to={
                              "/events/" +
                              data.events.nodes[0].relativeDirectory
                            }
                            className="card-link text-capitalize"
                          >
                            {
                              data.events.nodes[0].childMarkdownRemark
                                .frontmatter.title
                            }
                          </Link>
                        </h6>
                        <div className="text-muted card-subtitle">
                          {
                            data.events.nodes[0].childMarkdownRemark.frontmatter
                              .date
                          }
                        </div>
                        <p className="card-text">
                          {data.events.nodes[0].childMarkdownRemark.excerpt}
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
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  {
    blog: allFile(
      filter: { sourceInstanceName: { eq: "blog" }, ext: { eq: ".md" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      limit: 3
    ) {
      nodes {
        relativeDirectory
        childMarkdownRemark {
          frontmatter {
            authors
            title
            image {
              publicURL
              childImageSharp {
                fixed {
                  srcWebp
                }
              }
            }
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
    events: allFile(
      filter: { sourceInstanceName: { eq: "events" }, ext: { eq: ".md" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      limit: 1
    ) {
      nodes {
        relativeDirectory
        childMarkdownRemark {
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
          excerpt
        }
      }
    }
    sigdetails: allStrapiSigs(sort: {order: ASC, fields: no_link}) {
      nodes {
        name
        description
        no_link
        logo {
          childImageSharp {
            fixed {
              srcWebp
            }
          }
        }
      }
    }
    ietlogo: imageSharp(fixed: { originalName: { eq: "logo-wide-1.png" } }) {
      fixed {
        srcWebp
      }
    }
    projects: allProjects(filter: { builtBy: { ne: null } }) {
      nodes {
        title
        builtBy
        description
        sig
        url
        label
      }
    }
  }
`
export default MainPage
