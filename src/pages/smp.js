import React, { useEffect } from "react"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import { RenderAuthors, generateSIGHash } from "../components/helper"
import { Link } from "gatsby"
import { graphql,navigate } from "gatsby"



const SMP = ({ data, location }) => {
  const { sigImages, smp } = data
  const sig_images = generateSIGHash(sigImages.nodes)
  useEffect(()=>{
    if(data.site_data.siteMetadata.smp.allow!==true){
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
          {smp.group.map((e, i) => (
            <React.Fragment key={i}>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <h3 id={e.fieldValue} className="smp-signames">
                    <Link to={"/sigs/" + e.fieldValue.toLowerCase()}>
                      {e.fieldValue}
                    </Link>
                  </h3>
                  {e.nodes.map((smp, i) => (
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
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={data.site_data.siteMetadata.smp.link}
                          >
                            Click to register
                          </a>
                        </p>
                      </div>
                    </>
                  ))}
                </div>
                <div className="col-lg-6 col-md-4 hidden-sm hidden-xs smp-logo-div">
                  <Link to={"/sigs/" + e.fieldValue.toLowerCase()}>
                    <img
                      className="mobile-invisible smp-logo"
                      style={{ maxWidth: "150px", paddingTop: "2em" }}
                      src={sig_images[e.fieldValue]}
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
    sigImages: allFile(filter: { sourceInstanceName: { eq: "sig_logo" } }) {
      nodes {
        name
        childImageSharp {
          fixed {
            srcWebp
          }
        }
      }
    }

    site_data: site {
      siteMetadata {
        smp {
          allow
          link
        }
      }
    }
    smp: allSmpYaml(sort: { fields: title }) {
      group(field: sig) {
        nodes {
          title
          description
          link
          mentors
        }
        fieldValue
      }
    }
  }
`

export default SMP
