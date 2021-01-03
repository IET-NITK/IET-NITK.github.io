import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import smp from "../../content/yml/smp.yml"

const SMP = props => {
  let smp_by_sig = {}
  smp.forEach(element => {
    if (!smp_by_sig[element.sig]) {
      smp_by_sig[element.sig] = []
    }
    smp_by_sig[element.sig].push(element)
  })
  Object.keys(smp_by_sig).map(e => smp_by_sig[e].sort())
  console.log(smp_by_sig)
  return (
    <Layout>
      <SEO />
      <main className="page">
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">IET NITK SMP</h2>
              <p>
                IET NITK's Official Mentorship Program, exclusive for first and
                second years.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div class="site-section" style={{ paddingTop: "1em" }}>
        <div class="container">
          {Object.keys(smp_by_sig).map((sig, i) => (
            <React.Fragment key={i}>
              <div class="row">
                <div class="col-lg-6 col-md-8 col-sm-12">
                  <h3 id={sig} class="smp-signames">
                    {sig}
                  </h3>
                  {smp_by_sig[sig].map((smp, i) => (
                    <>
                      <h5 id={smp.title}>{smp.title}</h5>
                      <div>
                        <p>
                          {smp.description}.
                          <br />
                          <strong>Mentors:</strong> {smp.mentors}
                          <br />
                          <a href={smp.link}>Click to register</a>
                        </p>
                      </div>
                    </>
                  ))}
                </div>
                <div class="col-lg-6 col-md-4 hidden-sm hidden-xs smp-logo-div">
                  <img
                    class="mobile-invisible smp-logo"
                    style={{ maxWidth: "200px", paddingTop: "2em" }}
                    src="/assets/img/{{sig.name}}-logo.jpeg"
                    alt="{{sig.name}}"
                  />
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default SMP
