import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SMP = props => {
  return (
    <Layout>
      <SEO />
      <main className="page">
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">IET NITK SMP</h2>
              <p>
                IET NITK's Official Mentorship Program, exclusive for first and
                second years.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default SMP
