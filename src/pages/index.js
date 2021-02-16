import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img_IETUpview from "../assets/img/iet-upview.jpg"
import { RenderAuthors } from "../components/helper"

import { generateSIGHash } from "../components/helper"
import video from "../../static/home.mp4"
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

export const SIGShowcase = ({ sigs, sig_images, hide_link }) => {
  let img_hash = generateSIGHash(sig_images)
  return (
    <>
      <div className="row justify-content-center">
        {sigs.map((s, i) => (
          <div
            key={i}
            className="col-md-5 col-lg-4"
            style={{ marginBottom: "1em" }}
          >
            <div className="clean-pricing-item" style={{ height: "100%" }}>
              <div style={{ width: "100%" }}>
                <img
                  alt=""
                  src={img_hash[`${s.name}`]}
                  style={{
                    width: "150px",
                    height: "auto!important",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </div>
              <p>{s.description}</p>
              {s.no_link === false && hide_link !== false ? (
                <>
                  <Link
                    to={`sig/${s.name.toLowerCase()}`}
                    className="btn btn-outline-primary btn-block"
                  >
                    Read More
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
const MainPage = ({ location, data }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SEO title="We are IET NITK" />
      <main className="page landing-page">
        <video
          loop={true}
          style={{
            width: "100%",
            zIndex: "1",
            backgroundColor: "black",
            // cursor: "none",
          }}
          autoPlay={true}
          muted={true}
          // oncontextmenu="return false;"
          className="hero-video"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>

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
              sig_images={data && data.sig.nodes}
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
                  <p className="text-center">We love to write!</p>
                </div>
                <div className="row articles" style={{ paddingTop: "2em" }}>
                  {data.blog.nodes.map((element, index) => (
                    <div key={index} className="col-sm-6 col-md-4 item">
                      <div className="card">
                        <img
                          alt={element.childMarkdownRemark.frontmatter.title}
                          className="card-img-top w-100 d-block"
                          src={
                            element.childMarkdownRemark.frontmatter.image
                              .childImageSharp.fixed.srcWebp
                          }
                        />
                        <div className="card-body">
                          <h4 className="card-title">
                            {element.childMarkdownRemark.frontmatter.title}
                          </h4>
                          <h6 className="text-muted card-subtitle mb-2">
                            {/* {"by "+element.childMarkdownRemark.frontmatter.author} */}
                            By{" "}
                            {RenderAuthors(
                              element.childMarkdownRemark.frontmatter.authors,
                              ""
                            )}{" "}
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
                <div className="intro">
                  <h2
                    className="text-primary text-center"
                    style={{ fontWeight: "500", paddingBottom: "-1em" }}
                  >
                    Our Projects
                  </h2>
                  <p className="text-center">
                    Find more <Link to="/projects">here</Link>
                  </p>
                </div>
                <div className="articles row" style={{ paddingTop: "2em" }}>
                  {getRandom(data.projects.nodes, 4).map((element, index) => (
                    <div key={index} className="col-lg-6 col-md-6 mt-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="card-title">
                            {" "}
                            <Link
                              to={
                                "/projects/" +
                                element.title.toLowerCase().split(" ").join("")
                              }
                              className="card-link"
                            >
                              {element.title}
                            </Link>
                          </h6>
                          <Link
                            to={
                              "/sig/" +
                              element.sig.toLowerCase().split(" ").join("")
                            }
                          >
                            <small className="text-uppercase text-muted card-subtitle mb-2">
                              {element.sig}
                            </small>
                          </Link>
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
    sig: allFile(filter: { sourceInstanceName: { eq: "sig_logo" } }) {
      nodes {
        name
        childImageSharp {
          fixed {
            srcWebp
          }
        }
      }
    }
    sigdetails: allSigYaml(sort: { fields: no_link }) {
      nodes {
        name
        no_link
        description
      }
    }
    projects: allProjectsYaml(filter: { builtBy: { ne: null } }) {
      nodes {
        title
        builtBy
        description
        sig
      }
    }
  }
`
export default MainPage
