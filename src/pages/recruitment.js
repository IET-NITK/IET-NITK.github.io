import React, { useEffect } from "react";
import Layout from "../components/layout";
import SearchEngineOps from "../components/seo";
import { graphql, navigate } from "gatsby";
import { SIGShowcase } from "../components/SIGShowcase";
import ReactMarkdown from "react-markdown";

const Recruitments = ({ location, data }) => {
  useEffect(() => {
    if (data.rec_questions.open !== true) {
      navigate("/");
    }
  });
  return (
    <Layout location={location.pathname}>
      <SearchEngineOps title="Join Us!" />
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
          <h2>Fill the Application Forms Now</h2>
          <a
            className="btn btn-light btn-lg ml-5"
            href="https://forms.gle/TjVQ7YFAFZWQaVSV6"
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
                <ReactMarkdown skipHtml>{data.rec_questions.FAQ}</ReactMarkdown>
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
