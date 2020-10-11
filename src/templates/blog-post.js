import React from "react"
import Layout from "../components/layout"

export const BlogArticle = props => {
  const { pageContext } = props
  const member = pageContext.pathSlug
  return <Layout>Author page for {member}, with blogs.</Layout>
}

export default BlogArticle

// query MyQuery {
//     allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
//       edges {
//         node {
//           sourceInstanceName
//           childMarkdownRemark {
//             frontmatter {
//               title
//             }
//           }
//         }
//         previous {
//           childMarkdownRemark {
//             frontmatter {
//               title
//             }
//           }
//         }
//         next {
//           childMarkdownRemark {
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//     }
//   }
