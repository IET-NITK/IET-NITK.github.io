import React from "react";
import { graphql } from "gatsby";
import SearchEngineOps from "../elements/seo";
import InformationLayout from "../layouts/information";

const NotFoundPage = ({  location }) => {
  return (
    <InformationLayout location={location.pathname}>
      <SearchEngineOps title="404" />
            <div className="block-heading">
              <h2 className="text-primary">Sorry, thats a 404!</h2>
              <p>We do a lot of stuff, but unfortunately not on this page :)</p>
            </div>
            <input
              className="form-control form-control-lg"
              id="c_name"
              name="name"
              // onChange={this.onChangeHandle}
              type="text"
            />
    </InformationLayout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
