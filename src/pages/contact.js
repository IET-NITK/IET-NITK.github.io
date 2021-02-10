import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class Contact extends React.Component {
  state = {
    firstName: "",
    email: "",
    message: "",
  }
  onChangeHandle = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  render() {
    return (
      <Layout location={this.props.location.pathname} title={"Main"}>
        <SEO />
        <main className="page">
          <section className="clean-block about-us">
           <form className="container" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
   <input type="hidden" name="bot-field" />
   <input type="hidden" name="form-name" value="contact" />
              <div className="block-heading">
                <h2 className="text-primary">Say Hi!</h2>
                <p>For any assistance, contact us at:</p>
              </div>
              <div style={{ textAlign: "center" }}>
                {this.props.data.site.siteMetadata.contactDetails.map(
                  (e, i) => (
                    <>
                      <h4 className="card-title">{e.name}</h4>
                      <p className="card-text">{e.number}</p>
                    </>
                  )
                )}
                <br />
                Email: {this.props.data.site.siteMetadata.contactEmail}
              </div>
              <div className="block-heading">
                <p>You can also reach us out here:</p>
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Full Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="name"
                  onChange={this.onChangeHandle}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  name="email_add"
                  id="email"
                  onChange={this.onChangeHandle}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Message</label>
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="10"
                  name="message"
                  onChange={this.onChangeHandle}
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
            </form>
          </section>
        </main>
      </Layout>
    )
  }
}
export const postQuery = graphql`
  query MyQuery {
    site {
      siteMetadata {
        contactDetails {
          number
          name
        }
        contactEmail
      }
    }
  }
`
export default Contact
