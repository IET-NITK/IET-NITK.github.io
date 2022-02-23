import { graphql, Link } from "gatsby";
import React from "react";
import PaginationComponent from "../elements/pagination";
import SearchEngineOps from "../elements/seo";
import InformationLayout from "../layouts/information";

const Events = ({ data, location }) => {
  return (
    <InformationLayout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Events" />
            <div className="block-heading">
              <h2 className="text-primary">Events @ IET NITK</h2>
              <p>
                We hold many events throughtout the year, here's a glimpse of it
                all
              </p>
            </div>
            <div className="block-content">
              <PaginationComponent
                item={(element, index) => (
                  <div className="clean-blog-post" key={index}>
                    <div className="row">
                      <div className="col-lg-7">
                        <h3>{element.title}</h3>
                        <div className="info">
                          <span className="text-muted">
                            {element.date}
                          </span>
                        </div>
                        <p>{element.excerpt}</p>
                        <Link
                          className="btn btn-outline-primary btn-sm"
                          to={`/events/${  element.route}`}
                          type="button"
                        >
                          Read More 
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                list={data.events.nodes}
                max={5}
                noneMessage="No event reports here. Come back soon!"
              />
            </div>
    </InformationLayout>
  );
};

export const postQuery = graphql`
  {
    events:   allStrapiEvents(sort: {fields: date, order: DESC}) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        title
        excerpt
        route
      }
    }
  }
`;

export default Events;
