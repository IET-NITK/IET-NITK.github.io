import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const SIG = props => {
  const { pageContext } = props
  const sig = pageContext.sigDetails
  return (
    <Layout location={props.pathname && props.pathname.location}>
      <SEO title={sig.name} />
      SIG page for {sig.name}, with all blogs and projects listed
    </Layout>
  )
}

export default SIG
