import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import smp from "../../content/yml/smp.yml"
import { RenderAuthors, generateSIGHash } from "../components/helper"
import { Link } from "gatsby"
import moment from "moment"

import { graphql } from "gatsby"

const SMP = ({ data, location }) => {
  let smp_by_sig = {}
  smp.forEach(element => {
    if (!smp_by_sig[element.sig]) {
      smp_by_sig[element.sig] = []
    }
    smp_by_sig[element.sig].push(element)
  })
  Object.keys(smp_by_sig).map(e => smp_by_sig[e].sort())
  let sig_images = generateSIGHash(data.allFile.nodes)
  return (
    <Layout location={location.pathname}>
      <SEO title={"SMP " + moment().year()} />
      <main className="page">
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">IET NITK SMP {moment().year()}</h2>
              <p>
                IET NITK's Official Mentorship Program, exclusive for first and
                second years.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="site-section" style={{ paddingTop: "1em" }}>
        <div className="container">
          {Object.keys(smp_by_sig).map((sig, i) => (
            <React.Fragment key={i}>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <h3 id={sig} className="smp-signames">
                    <Link to={"/sig/" + sig}>{sig}</Link>
                  </h3>
                  {smp_by_sig[sig].map((smp, i) => (
                    <>
                      <h5 id={smp.title}>{smp.title}</h5>
                      <div>
                        <p>
                          {smp.description}.
                          <br />
                          <span className="text-muted">
                            <strong>Mentors:</strong>
                            {RenderAuthors(smp.mentors, "")}
                          </span>
                          <br />
                          <a href={smp.link}>Click to register</a>
                        </p>
                      </div>
                    </>
                  ))}
                </div>
                <div className="col-lg-6 col-md-4 hidden-sm hidden-xs smp-logo-div">
                  <img
                    className="mobile-invisible smp-logo"
                    style={{ maxWidth: "150px", paddingTop: "2em" }}
                    src={sig_images[sig + "-logo"]}
                    alt={sig}
                  />
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "sig_logo" } }) {
      nodes {
        name
        publicURL
      }
    }
  }
`

export default SMP
