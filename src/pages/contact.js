import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = props => {
  return (
    <Layout location={props.location.pathname} title={"Main"}>
    <SEO />
    <main className="page">
      <section className="clean-block about-us">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Say Hi!</h2>
            <p>For any assistance, contact us at:</p>
          </div>
          <div style={{ textAlign: "center" }}>
            {/* <h4 className="card-title">{ person.name }</h4>
          <p className="card-text">{ person.phone }</p>
        <br/>
        Email: {site.contactemail} */}
          </div>
          <div className="block-heading">
            <p>You can also reach us out here:</p>
          </div>
          <div className="form-group">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              className="form-control form-control-lg"
            />
          </div>
          <div className="form-group">
            <label for="eaddress">Email Address</label>
            <input
              type="text"
              id="eaddress"
              className="form-control form-control-lg"
            />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              className="form-control"
            />
          </div>
          <div className="row" style={{ marginBottom: "2em" }}>
            <div className="col-12">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-primary btn-lg px-5"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    </Layout>
  )
}

export default Contact
