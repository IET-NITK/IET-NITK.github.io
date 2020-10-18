import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SMP = props => {
  return (
    <Layout>
      <SEO />
      <main class="page">
        <section class="clean-block about-us">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">IET NITK SMP</h2>
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
