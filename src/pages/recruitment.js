import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import recruitmentQ from "../../content/yml/recrfaq.yml"
import SIG from "../../content/yml/sig.yml"
import { SIGShowcase } from "./index"
import { graphql } from "gatsby"

const SMP = ({ location, data }) => {
  const [state]=useState({
    recQ: recruitmentQ
  })
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
            {/* {% include sig.html %} */}
            <SIGShowcase sigs={SIG} hide_link={false} sig_images={data.allFile.nodes} />
          </div>
        </section>
        <div
          className="clean-block add-on newsletter-sign-up blue"
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
                {state.recQ.map((e, i) => (
                  <>
                    <h4 className="question mb-0">{e.question}</h4>
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
    allFile(filter: { sourceInstanceName: { eq: "sig_logo" } }) {
      nodes {
        name
        publicURL
      }
    }
  }
`

export default SMP
