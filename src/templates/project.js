// query MyQuery {
//     allFile(filter: {sourceInstanceName: {eq: "project-reports"}}) {
//       edges {
//         node {
//           sourceInstanceName
//           childMarkdownRemark {
//             frontmatter {
//               title
//             }
//           }
//           relativeDirectory
//         }
//       }
//     }
//   }

import React from "react"
import Layout from "../components/layout"

export const Project = props => {
  const { pageContext } = props
  const sig = pageContext.projectDetails
  return <Layout>Projects page for {sig.title}, with all blogs and projects listed</Layout>
}

export default Project
