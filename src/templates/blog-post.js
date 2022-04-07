import React from "react";
import { graphql, Link } from "gatsby";
import { Disqus } from "gatsby-plugin-disqus";
import { commonMdProps, niceFormat, renderAuthors } from "../elements/helper";
import SearchEngineOps from "../elements/seo";
import { ShareButtons } from "../elements/social";
import ReactMarkdown from "react-markdown";
import ArticleLayout from "../layouts/article";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import remarkGfm from "remark-gfm";

const PreviewOther = ({ post, isPrevious }) => {
  if (post)
    return (
      <div className={`m-4 text-${isPrevious === true ? "left" : "right"}`}>
        <b>
          {isPrevious === true ? "Previous Post: " : "Next Up: "}
          <Link to={`/blog/${post.route}`}>{niceFormat(post.title)}</Link>
        </b>
        <div className="post-info">
          <span>
            By&nbsp;
            <b>{renderAuthors(post.authors, "")}</b>
          </span>
          <br />
          <span>{post.date}</span>
        </div>
        {post.excerpt}
      </div>
    );
  return null;
};

const BlogArticle = ({ data, location, uri }) => {
  return (
    <ArticleLayout uri={uri}>
      <SearchEngineOps title={niceFormat(data.post.title)} />

      {!data.post.displayOnBlog ? null :
        <GatsbyImage
          alt={niceFormat(data.post.title)}
          className="post-image"
          image={getImage(data.post.header.localFile)}
          style={{
            backgroundRepeat: "no-repeat",
          }}
        />
      }

      <div className="post-body">
        <h3 className="pt-4">{niceFormat(data.post.title)}</h3>
        <div className="post-info">
          <span>
            By&nbsp;
            <b>{renderAuthors(data.post.authors, "")}</b>
          </span>
          -<span>{data.post.date}</span>
          <br />
          <ShareButtons
            author={data.post.authors}
            title={data.post.title}
            url={location.href}
          />
        </div>
        <ReactMarkdown components={commonMdProps} 
                remarkPlugins={[remarkGfm]}>
          {data.post.content}
        </ReactMarkdown>

        <span>
          Written by&nbsp;
          <b>
            {renderAuthors(data.post.authors, "")}
            <br />
            on {data.post.date}
          </b>
        </span>
        <br />
        <ShareButtons
          author={data.post.authors}
          title={data.post.title}
          url={location.href}
        />
      </div>
      <div className="post-body pt-4 pb-4">
        <Disqus
          config={{
            url: location.href,
            identifier: data.post.id,
            title: `${data.post.title} | IET NITK`,
          }}
        />
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <PreviewOther isPrevious post={data.before.nodes[0]} />
        </div>
        <div className="col-lg-6">
          <PreviewOther post={data.after.nodes[0]} />
        </div>
      </div>
    </ArticleLayout>
  );
};

export const postQuery = graphql`
  query ($pathSlug: String!, $date: Date!) {
    post: strapiBlogs(route: { eq: $pathSlug }) {
      authors {
        name
      }
      header {
        localFile{
          childImageSharp {
            gatsbyImageData(width: 1110, placeholder: BLURRED)
          }
        }
      }
      id
      content
      date(formatString: "MMMM Do, YYYY")
      displayOnBlog
      excerpt
      title
    }
    before: allStrapiBlogs(
      sort: { fields: date, order: DESC }
      filter: { date: { lt: $date } }
      limit: 1
    ) {
      nodes {
        route
        title
        date(formatString: "MMMM Do, YYYY")
        excerpt
        authors {
          name
        }
      }
    }

    after: allStrapiBlogs(
      sort: { fields: date, order: DESC }
      filter: { date: { gt: $date } }
      limit: 1
    ) {
      nodes {
        route
        title
        date(formatString: "MMMM Do, YYYY")
        excerpt
        authors {
          name
        }
      }
    }
  }
`;

export default BlogArticle;
