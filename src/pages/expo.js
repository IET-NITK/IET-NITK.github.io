import { graphql, Link, navigate } from "gatsby";
import React, { useEffect } from "react";
import { lcrs, renderAuthors } from "../elements/helper";
import Layout from "../layouts/main";
import PaginationComponent from "../elements/pagination";
import SearchEngineOps from "../elements/seo";
import InformationLayout from "../layouts/information";

const Expo = ({ data, location }) => {
  useEffect(() => {
    if (data.expo.open !== true) {
      navigate("/");
    }
  });
  return (
    <InformationLayout location={location.pathname} title={"Main"}>
      <SearchEngineOps title={`Expo ${new Date().getFullYear()}`} />

      <div className="block-heading">
        <h2 className="text-primary">IET NITK @ Expo {new Date().getFullYear()}</h2>
        <p>
          Expo '{String(new Date().getFullYear()).slice(2)} is a club-wide project showcase showing the best of the
          products made by NITK. Here's some of ours.
        </p>
      </div>
      <div className="block-content">
        <PaginationComponent
          filterBy="sig"
          filterLabel="Filter by SIG"
          item={(element, index) => (
            <div className="clean-blog-post" key={index}>
              <h3 className="text-capitalize">{element.title}</h3>
              <div className="info">
                <span className="text-muted">
                  <Link to={`/sigs/${element.sig.name.toLowerCase()}`}>
                    {element.sig.name}
                  </Link>
                </span>
              </div>
              {element.description || ""}
              {element.authors ? (
                <p>
                  Built by
                  {renderAuthors(element.authors, "")}
                </p>
              ) : null}

              {element.url ? (
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to={
                    `/projects/${lcrs(element.title)}`}
                  type="button"
                >
                  Read More
                </Link>
              ) : null}
            </div>
          )}
          list={data.projects.nodes}
          max={10}
        />
      </div>

    </InformationLayout>
  );
};

export const postQuery = graphql`
  {
    expo: strapiExpo {
      open
    }
    projects:   allStrapiProjects(sort: {fields: title, order: DESC}) {
      nodes {
        title
        description
        sig {
          name
        }
        url
        authors {
          name
        }
      }
    }
  }
`;
export default Expo;
