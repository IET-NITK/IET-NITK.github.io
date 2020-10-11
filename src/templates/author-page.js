import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const Author = props => {
  const { pageContext } = props
  const member = pageContext.memberDetails
  return (
    <Layout location={props.pathname && props.pathname.location}>
      <SEO title={"About "+member.name} />
      Author page for {member.name}, with all blogs and projects listed
    </Layout>
  )
}

export default Author
