import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SIGShowcase } from "./index"
import { graphql } from "gatsby"

const SMP = ({ location, data }) => {

  const {sigdata, rec_questions, siglogo}= data;
  return (
    <Layout location={location.pathname}>
      <SEO title="Join Us!" />
      <main className="page faq-page">
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">We're Looking For You!</h2>
              <p>
                IET NITK is looking for smart people willing to reach out to
                others! Check out where we're recruiting:
              </p>
            </div>
            <SIGShowcase
              sigs={sigdata.nodes}
              hide_link={false}
              sig_images={siglogo.nodes}
            />
          </div>
        </section>
        <div
          className="clean-block text-center text-light"
          style={{
            backgroundColor: "#803391",
            padding: "30px 0px",
            marginTop: "2em",
          }}
        >
          <h2>Fill the Application Forms Now</h2>
          <a
            href="https://forms.gle/TjVQ7YFAFZWQaVSV6"
            className="btn btn-light btn-lg ml-5"
            type="button"
          >
            Join Us
          </a>
        </div>
        <section className="clean-block clean-faq dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Recruitments FAQ</h2>
              <p>{new Date().getFullYear()} Recruitment FAQs and Details</p>
            </div>

            <div className="block-content">
              <div className="faq-item">
                {rec_questions.nodes.map((e, i) => (
                  <>
                    <b className="question mb-0">{e.question}</b>
                    <div className="answer mt-0 mb-2">{e.answer}</div>
                  </>
                ))}
              </div>
              <p className="text-primary mt-5">
                Please stay tuned to our social media pages for updates.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  {
    siglogo: allFile(filter: { sourceInstanceName: { eq: "sig_logo" } }) {
      nodes {
        name
        childImageSharp {
          fixed {
            srcWebp
          }
        }
      }
    }
    sigdata: allSigYaml(sort: { fields: no_link }) {
      nodes {
        name
        description
      }
    }
    rec_check: site {
      siteMetadata {
        join {
          allow
          link
        }
      }
    }
    rec_questions: allRecrfaqYaml {
      nodes {
        answer
        question
      }
    }
  }
`

export default SMP
