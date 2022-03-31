require("dotenv").config({
  path: `.env`,
});
const config = {
  pathPrefix: process.env.PATH_PREFIX || "",
  siteMetadata: {
    title: `IET NITK`,
    author: `Nirmal Khedkar`,
    contactDetails: [
      {
        name: "Laksh Sadhwani",
        number: "9893008641",
      },
    ],
    contactEmail: "iet@nitk.edu.in",
    siteUrl: `https://iet.nitk.ac.in/`,
  },

  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              withWebp: true,
              withAvif: true,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img`,
        name: `weblogo`,
      },
    },

    `gatsby-transformer-yaml`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-187907527-1`,
        head: true,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `ietnitk`,
      },
    },
    `gatsby-plugin-react-helmet`,

    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://octaweb.herokuapp.com",
        collectionTypes: [
          "Blogs",
          "Events",
          "Members",
          "Project-Reports",
          "SMPS",
          "SIGS",
          "Projects",
        ],
        singleTypes: [
          `recruitment-faq`,
          `about-club`,
          `expo`,
          `wit`,
          `summer-programs`,
        ],
        queryLimit: 10000,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

config.plugins.push({
  resolve: `gatsby-source-rss-feed`,
  options: {
    url: process.env.GATSBY_WIT_PODCAST,
    name: `podcast`,
  },
});

module.exports = config;
