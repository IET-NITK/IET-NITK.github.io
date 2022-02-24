import React from "react";
import Glimpse from "../elements/glimpse";
import Layout from "./main/main";

const InformationLayout = ({ location, children, showFooter = true, uri }) => {
  return (
    <Layout location={location} showFooter={showFooter}>
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            {children}
          </div>
        </section></main>

      <Glimpse currentRoute={uri} />
    </Layout>
  );
};
export default InformationLayout; 