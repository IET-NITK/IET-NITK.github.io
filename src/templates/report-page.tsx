import React from "react";
import Layout from "../components/layout";

export const Project: React.FC = () => {
  return (
    <Layout>
      {/* <main className="page blog-post">
        <section className="clean-block clean-post dark">
          <div className="container">
            <div className="block-content">
              <div className="post-body">
                <h3>{current.frontmatter.title}</h3>
                <div className="post-info">
                  <span>
                    By <b>{renderAuthors(current.frontmatter.authors, "")}</b>
                  </span>
                  -
                  <span>
                    {moment(blog.node.birthtime).format("Do MMMM, YYYY")}
                  </span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: current.html }} />
                <span>
                  Written by&nbsp;
                  <b>
                    {renderAuthors(current.frontmatter.authors, "")}
                    <br />
                    on {moment(blog.node.birthtime).format("Do MMMM, YYYY")}
                  </b>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main> */}
    </Layout>
  );
};

export default Project;
