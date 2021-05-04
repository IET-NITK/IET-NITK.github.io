import React, { useEffect } from "react"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import { newRenderAuthors } from "../components/helper"
import { Link } from "gatsby"
import { graphql, navigate } from "gatsby"
import ReactMarkdown from "react-markdown"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const SMP = ({ data, location }) => {
  const { smp } = data
  useEffect(() => {
    if (data.smp_basic.open !== true) {
      navigate("/")
    }
  })

  return (
    <Layout location={location.pathname}>
      <SearchEngineOps title={"SMP " + new Date().getFullYear()} />
      <main className="page">
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">
                IET NITK SMP {new Date().getFullYear()}
              </h2>
              <p>{data.smp_basic.description}</p>
            </div>
          </div>
        </section>
      </main>
      <div className="site-section pb-5" style={{ paddingTop: "1em" }}>
        <div className="container">
          {smp.group.map((e, i) => (
            <React.Fragment key={i}>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <h3 id={e.fieldValue} className="smp-signames">
                    <Link to={"/sigs/" + e.fieldValue.toLowerCase()}>
                      {e.fieldValue}
                    </Link>
                  </h3>
                  {e.nodes.map((e2, i) => (
                    <React.Fragment key={i}>
                      <h5 id={smp.title}>{e2.title}</h5>
                      <div className="pb-5">
                        <p>
                          {e2.description}.
                          <br />
                          <span className="text-muted">
                            <strong>Mentors:</strong>
                            {newRenderAuthors(e2.members, "")}
                          </span>
                          <br />
                          <OutboundLink
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary btn-sm mt-2"
                            href={e2.url}
                          >
                            Course Curriculum
                          </OutboundLink>
                        </p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                <div className="col-lg-6 col-md-4 hidden-sm hidden-xs smp-logo-div">
                  <Link to={"/sigs/" + e.fieldValue.toLowerCase()}>
                    <img
                      className="mobile-invisible smp-logo"
                      style={{ maxWidth: "150px", paddingTop: "2em" }}
                      src={e.nodes[0].sigx.logox.publicURL}
                      alt={e.fieldValue}
                    />
                  </Link>
                </div>
              </div>
              {i !== smp.group.length - 1 ? <hr /> : null}
            </React.Fragment>
          ))}
        </div>
      </div>
      {data.smp_basic.form_url ? (
        <div
          className="clean-block bg-primary text-center text-light"
          style={{
            padding: "30px 0px",
            marginTop: "2em",
          }}
        >
          <h2>Sign up for a Course Now!</h2>
          <OutboundLink
            href={data.smp_basic.form_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-light btn-lg mt-5"
            type="button"
          >
            Registration Form
          </OutboundLink>
        </div>
      ) : null}
      {data.smp_basic.faq ? (
        <section className="clean-block clean-faq dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">
                SMP {new Date().getFullYear()} FAQ
              </h2>
              <p>{new Date().getFullYear()} SMP FAQs and Details</p>
            </div>

            <div className="block-content">
              <ReactMarkdown>{data.smp_basic.faq}</ReactMarkdown>
              <p className="text-primary mt-5">
                Please stay tuned to our social media pages for updates.
              </p>
            </div>
          </div>
        </section>
      ) : null}
    </Layout>
  )
}

export const postQuery = graphql`
  {
    smp_basic: strapiSummerPrograms {
      open
      description
      faq
      form_url
    }

    smp: allStrapiSmps {
      group(field: SIG___name) {
        fieldValue
        nodes {
          sigx: SIG {
            logox: logo {
              publicURL
            }
          }
          description
          title
          url
          members {
            name
          }
        }
      }
    }
  }
`

export default SMP
