import React, { useEffect } from "react"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import { newRenderAuthors, generateSIGHash } from "../components/helper"
import { Link } from "gatsby"
import { graphql, navigate } from "gatsby"

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
      <div className="site-section" style={{ paddingTop: "1em" }}>
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
                      <div>
                        <p>
                          {e2.description}.
                          <br />
                          <span className="text-muted">
                            <strong>Mentors:</strong>
                            {newRenderAuthors(e2.members, "")}
                          </span>
                          <br />
                          {/* <a
                            target="_blank"
                            rel="noreferrer"
                            href={data.site_data.siteMetadata.smp.link}
                          >
                            Click to register
                          </a> */}
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
                      src={e.nodes[0].sig.logo.childImageSharp.fixed.srcWebp}
                      alt={e.fieldValue}
                    />
                  </Link>
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

    smp_basic: strapiSummerPrograms {
      open
      description
    }

    smp: allStrapiSmps {
      group(field: SIG___name) {
        fieldValue
        nodes {
          sig: SIG {
            logo {
              childImageSharp {
                fixed {
                  srcWebp
                }
              }
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
