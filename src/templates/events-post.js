import React from "react";
import { graphql } from "gatsby";
import SearchEngineOps from "../elements/seo";
import ReactMarkdown from "react-markdown";
import ArticleLayout from "../layouts/article";
import { commonMdProps } from "../elements/helper/helper.js";

const EventArticle = ({ data, uri }) => {
  return (
    <ArticleLayout uri={uri}>
      <SearchEngineOps
        title={data.event.title}
      />
      <div className="post-body">
        <h3>{data.event.title}</h3>
        <div className="post-info">
          <span>
            {data.event.date}
          </span>
        </div>
        <ReactMarkdown  components={commonMdProps}>
          {data.event.description}
        </ReactMarkdown>
        <span>
          Last updated on {data.event.updated_at}
        </span>
      </div>
    </ArticleLayout>
  );
};

export const postQuery = graphql`
  query($pathSlug: String!) {
    event: strapiEvents(route: {eq: $pathSlug}) {
      title
      updated_at(formatString: "MMMM Do, YYYY")
      description
      date(formatString: "MMMM Do, YYYY")
    }
  }
`;

export default EventArticle;
