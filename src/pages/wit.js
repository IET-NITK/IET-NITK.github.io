import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { MemberDetails } from "../components/partials/member";
import SearchEngineOps from "../components/seo";

const Events = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Events" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Women in Tech @ IET NITK</h2>
              <p>
                We hold many events throughtout the year, here's a glimpse of it
                all
              </p>
            </div>
            <div className="block-content text-center">
              No content here yet, stay tuned!
            </div>
          </div>
          <div className="container">
            <div className="row">
              {data.members.nodes.map((e, i) => (
                <div className="col-lg-6 col-md-6 mt-4">
                  <MemberDetails author={e} index={i}/>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const postQuery = graphql`
  {
    members: allStrapiMembers(
      filter: { alumni: { eq: false }, position: { glob: "*Women in Tech*" } }
    ) {
      nodes {
        alumni
        passoutYr
        position
        name
        social: contacts {
          facebook
          github
          email
          linkedin
        }
      }
    }
  }
`;

export default Events;
