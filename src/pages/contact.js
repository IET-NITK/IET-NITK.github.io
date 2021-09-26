import React from "react";
import Layout from "../components/layout";
import SearchEngineOps from "../components/seo";
import { graphql } from "gatsby";

class Contact extends React.Component {
  state = {
    firstName: "",
    email: "",
    message: "",
  }
  onChangeHandle = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  render() {
    return (
      <Layout location={this.props.location.pathname} title={"Main"}>
        <SearchEngineOps title="Contact Us" />
        <main className="page">
          <section className="clean-block about-us">
            <form
              className="container"
              data-netlify="true"
              method="post"
              name="contact"
              netlify-honeypot="bot-field"
            >
              <input name="bot-field" type="hidden" />
              <input name="form-name" type="hidden" value="contact" />
              <div className="block-heading">
                <h2 className="text-primary">Say Hi!</h2>
                <p>For any assistance, contact us at:</p>
              </div>
              <div style={{ textAlign: "center" }}>
                {this.props.data.site.siteMetadata.contactDetails.map(
                  (contact, ind) => (
                    <React.Fragment key={ind}>
                      <h4 className="card-title">{contact.name}</h4>
                      <p className="card-text">{contact.number}</p>
                    </React.Fragment>
                  )
                )}
                <br />
                Email: {this.props.data.site.siteMetadata.contactEmail}
              </div>
              {/* <div className="block-heading">
                <p>You can also reach us out here:</p>
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Full Name</label>
                <input
                  className="form-control form-control-lg"
                  id="c_name"
                  name="name"
                  onChange={this.onChangeHandle}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="c_email">Email Address</label>
                <input
                  className="form-control form-control-lg"
                  id="c_email"
                  name="email"
                  onChange={this.onChangeHandle}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="c_message">Message</label>
                <textarea
                  className="form-control"
                  cols="30"
                  id="c_message"
                  name="message"
                  onChange={this.onChangeHandle}
                  rows="10"
                />
              </div>
              <div className="row" style={{ marginBottom: "2em" }}>
                <div className="col-12">
                  <input
                    className="btn btn-primary btn-lg px-5"
                    type="submit"
                    value="Send Message"
                  />
                </div>
              </div>
         */}
            </form>
          </section>
        </main>
      </Layout>
    );
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
`;
export default Contact;
