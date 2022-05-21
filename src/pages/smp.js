import React, { useEffect } from "react";
import Layout from "../layouts/main/main";
import SearchEngineOps from "../elements/seo";
import { lcrs, newrenderAuthors, commonMdProps } from "../elements/helper";
import { Link, graphql, navigate } from "gatsby";
import ReactMarkdown from "react-markdown";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import remarkGfm from "remark-gfm";


const SMP = ({ data, location }) => {
  const { smp } = data;
  useEffect(() => {
    if (data.smp_basic.open !== true && process.env.NODE_ENV!=="development") {
      navigate("/");
    }
  });

  return (
    <Layout location={location.pathname}>
    <SearchEngineOps title={`SMP ${  new Date().getFullYear()}`} />
      {data.smp_basic.open !== true ? null : (
        <>
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
            {data.smp_basic.form_url ? (
            <div
              className="clean-block bg-gradient-primary text-center text-light"
              style={{
                padding: "30px 0px",
                marginTop: "2em",
              }}
            >
              <h2>Sign up for a Course Now!</h2>
              <OutboundLink
                className="btn btn-light btn-lg mt-5"
                href={data.smp_basic.form_url}
                rel="noreferrer"
                target="_blank"
                type="button"
              >
                Registration Form
              </OutboundLink>
            </div>
          ) : null}
            </section>
          </main>
              
          <div className="site-section pb-5" style={{ paddingTop: "1em" }}>
            <div className="container">

              {smp.group.map((smpGroup, ind) => (
                <React.Fragment key={ind}>
                  <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                      <h3 className="smp-signames" id={smpGroup.fieldValue}>
                        <Link to={`/sig/${  lcrs(smpGroup.fieldValue)}`}>
                          {smpGroup.fieldValue}
                        </Link>
                      </h3>
                      {smpGroup.nodes.map((e2) => (
                        <React.Fragment key={e2.title}>
                          <h5 id={smp.title}>{e2.title}</h5>
                          <div className="pb-5">
                            <p>
                              {e2.description}.
                              <br />
                              <span className="text-muted">
                                <strong>Mentors:</strong>
                                {newrenderAuthors(e2.members, "")}
                              </span>
                              <br />
                              <OutboundLink
                                className="btn btn-primary btn-sm mt-2"
                                href={e2.url}
                                rel="noreferrer"
                                target="_blank"
                              >
                                Course Curriculum
                              </OutboundLink>

                            </p>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="col-lg-6 col-md-4 hidden-sm hidden-xs smp-logo-div">
                      <Link to={`/sig/${  lcrs(smpGroup.fieldValue)}`}>
                        <GatsbyImage
                          alt={smpGroup.fieldValue}
                          className="mobile-invisible smp-logo"
                          image={getImage(smpGroup.nodes[0].sigx.logox.localFile)}
                          style={{ maxWidth: "150px", paddingTop: "2em" }}
                        />
                      </Link>
                    </div>
                  </div>
                  {ind !== smp.group.length - 1 ? <hr /> : null}
                </React.Fragment>
              ))}
            </div>
          </div>
          {data.smp_basic.form_url ? (
            <div
              className="clean-block bg-gradient-primary text-center text-light"
              style={{
                padding: "30px 0px",
                marginTop: "2em",
              }}
            >
              <h2>Sign up for a Course Now!</h2>
              <OutboundLink
                className="btn btn-light btn-lg mt-5"
                href={data.smp_basic.form_url}
                rel="noreferrer"
                target="_blank"
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
                  <ReactMarkdown 
                components={commonMdProps} remarkPlugins={[remarkGfm]}>{data.smp_basic.faq}</ReactMarkdown>
                  <p className="text-primary mt-5">
                    Please stay tuned to our social media pages for updates.
                  </p>
                </div>
              </div>
            </section>
          ) : null}
        </>
      )}
    </Layout>
  );
};

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
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 150, placeholder: BLURRED)
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
`;

export default SMP;
