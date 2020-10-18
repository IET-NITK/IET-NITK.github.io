import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import recruitmentQ from "../../content/yml/recrfaq.yml"

const SMP = props => {
  return (
    <Layout>
      <SEO title="Join Us!" />
      <main class="page faq-page">
        <section class="clean-block about-us">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">We're Looking For You!</h2>
              <p>
                IET NITK is looking for smart people willing to reach out to
                others! Check out where we're recruiting:
              </p>
            </div>
            {/* {% include sig.html %} */}
          </div>
        </section>
        <div
          class="clean-block add-on newsletter-sign-up blue"
          style={{
            backgroundColor: "#803391",
            padding: "30px 0px",
            marginTop: "2em",
          }}
        >
          <h2>Fill the Application Forms Now</h2>
          <a
            href="https://forms.gle/TjVQ7YFAFZWQaVSV6"
            class="btn btn-light btn-lg ml-5"
            type="button"
          >
            Join Us
          </a>
        </div>
        <section class="clean-block clean-faq dark">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Recruitments FAQ</h2>
              <p>{new Date().getFullYear()} Recruitment FAQs and Details</p>
            </div>

            <div class="block-content">
              <div class="faq-item">
                {recruitmentQ.map((e, i) => (
                  <>
                    <h4 class="question">{e.question}</h4>
                    <div class="answer">{e.answer}</div>
                  </>
                ))}
              </div>
              <p class="text-primary mt-5">
                Please stay tuned to our social media pages for updates.{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default SMP
