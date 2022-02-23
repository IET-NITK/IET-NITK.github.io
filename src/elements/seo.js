/**
 * SearchEngineOps component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SearchEngineOps = ({ description, lang, meta, title }) => {
  const { siteDetails, logo } = useStaticQuery(
    graphql`
      query {
        siteDetails: site {
          siteMetadata {
            title
            description
          }
        }
        logo: file(
          name: { eq: "logo" }
          sourceInstanceName: { eq: "weblogo" }
        ) {
          publicURL
        }
      }
    `
  );

  const metaDescription = description || siteDetails.siteMetadata.description;
  const defaultTitle = siteDetails.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: "/",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: logo.publicURL,
        },
        {
          property: `og:type`,
          content: `article`,
        },
      ].concat(meta)}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
    >
      <link href={logo.publicURL} rel="icon" />
    </Helmet>
  );
};

SearchEngineOps.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SearchEngineOps.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SearchEngineOps;
