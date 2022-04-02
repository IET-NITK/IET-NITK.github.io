import React, { useEffect } from "react";
import Layout from "../layouts/main/main";
import SearchEngineOps from "../elements/seo";
import { graphql, Link, navigate } from "gatsby";
import { SIGShowcase } from "../elements/sigshowcase/SIGShowcase";
import ReactMarkdown from "react-markdown";
import { commonMdProps } from "../elements/helper/helper.js";
import * as styles from "../assets/stylesheets/recruitment.module.css";

const Recruitments = ({ location, data }) => {
  useEffect(() => {
    if (data.rec_questions.open !== true && process.env.NODE_ENV!=="development") {
      navigate("/");
    }
  });
  return (
    <Layout location={location.pathname}>
      <SearchEngineOps title={`Recruitments ${new Date().getFullYear()}`} />
      <main className="page faq-page">
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              I send this message to any future candidates taking refuge within
              the campus
              <h2 className={`text-primary ${styles.transformers}`}>
                We are here. We are waiting.
              </h2>
              <p>
                IET NITK is looking for smart people willing to reach out to
                others! Check out where we're recruiting:
              </p>
            </div>
            <SIGShowcase hide_link />
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
          We may not be worlds apart, but like us, there's more to you than
          meets the eye.
          <br />
          <br />
          <Link className="btn btn-light btn-lg" to="/recruitment/form">
            Fill the Application Form Now
          </Link>
        </div>
        <section className="clean-block clean-faq dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Recruitments FAQ</h2>
              <p>{new Date().getFullYear()} Recruitment FAQs and Details</p>
            </div>

            <div className="block-content">
              <div className="faq-item">
                <ReactMarkdown components={commonMdProps}>
                  {data.rec_questions.FAQ}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const postQuery = graphql`
  {
    rec_questions: strapiRecruitmentFaq {
      FAQ
      open
    }
  }
`;

export default Recruitments;
