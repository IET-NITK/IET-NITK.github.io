import { graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import { IWit } from "../types/pages";
import Layout from "../components/layout";
import { MemberDetails } from "../components/partials/member";
import SearchEngineOps from "../components/seo";

const wit: React.FC<IWit> = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Women in Tech" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Women in Tech @ IET NITK</h2>
              <p>
                Women in Tech is an international organization with a double
                mission: to close the gender gap and to help women embrace
                technology.
              </p>
            </div>
            <div className="block-content">
              <h1>
                Latest from our podcast: pitc<strong>HER</strong>
              </h1>
              <hr />
              {data.podcast.edges.map(({ node }, index) => (
                <div className="clean-blog-post" key={index}>
                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        alt={node.title}
                        className="rounded img-fluid"
                        src={node.itunes.image}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="col-lg-9">
                      <h3 className="text-capitalize">{node.title}</h3>
                      <div className="info">
                        <span className="text-muted">{node.isoDate}</span>
                      </div>
                      <p>{node.contentSnippet}</p>
                      <OutboundLink
                        className="btn btn-outline-primary btn-sm"
                        href="https://open.spotify.com/show/0uVCTQRZxPY6xy4L4JytI7?si=e49e041a63eb4bd3"
                        type="button"
                      >
                        Listen <i className="fa fa-volume-up" />
                      </OutboundLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="row">
              {data.members.nodes.map((member, ind) => (
                <div className="col-lg-6 col-md-6 mt-4" key={ind}>
                  <MemberDetails author={member} />
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
    podcast: allFeedpodcast {
      edges {
        node {
          contentSnippet
          title
          itunes {
            episode
            image
          }
          isoDate(formatString: "Do MMMM")
          pubDate
        }
      }
    }
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

export default wit;
