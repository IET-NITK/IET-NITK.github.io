import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img_IETUpview from "../assets/img/iet-upview.jpg"
import { RenderAuthors } from "../components/helper"
import SIG from "../../content/yml/sig.yml"
import { generateSIGHash } from "../components/helper"
// import 

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
                <Link to={`/sig/${s.name.toLowerCase()}`}>
                  <img
                    alt=""
                    src={img_hash[`${s.name}-logo`]}
                    style={{
                      width: "150px",
                      height: "auto!important",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </Link>
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
        <section className="hero" />
        <section
          id="purple-overlay"
          className="clean-block clean-hero hero"
          style={{
            color: "#a046b480",
            position: "absolute",
            zIndex: "0",
            width: "100%",
            height: "90vh",
          }}
        />
        <div id="video" className="video-hero">
          <iframe
            title="Intro Youtube Video"
            className="ytplayer"
            style={{ width: "100%", height: "90vh", zIndex: "1" }}
            src="https://www.youtube.com/embed/rGz1NS3FEvw?autoplay=1&controls=0&loop=1&playlist=rGz1NS3FEvw&mute=1&modestbranding=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

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
            <SIGShowcase sigs={SIG} sig_images={data && data.sig.nodes} />
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
                              .publicURL
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
            }
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
    sig: allFile(filter: { sourceInstanceName: { eq: "sig_logo" } }) {
      nodes {
        name
        publicURL
      }
    }
  }
`
export default MainPage
