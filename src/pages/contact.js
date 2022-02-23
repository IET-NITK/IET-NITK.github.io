import React from "react";
import Layout from "../layouts/main";
import SearchEngineOps from "../elements/seo";
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
