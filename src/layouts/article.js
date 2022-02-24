import React from "react";
import Glimpse from "../elements/glimpse";
import Layout from "./main/main";

const ArticleLayout = ({ location, children, showFooter = true, uri }) => {
  return (
    <Layout location={location} showFooter={showFooter}>
      <main className="page blog-post">
        <section className="clean-block clean-post dark">
          <div className="container">
            <div className="block-content">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Glimpse currentRoute={uri} />
    </Layout>
  );
};
export default ArticleLayout; 