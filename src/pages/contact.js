import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component{
  state = {
    firstName: "",
    email: "",
    message: ""
  }
  onChangeHandle = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render(){
    return(
      <Layout location={this.props.location.pathname} title={"Main"}>
      <SEO />
      <main className="page">
        <section className="clean-block about-us">
          <form className="container">
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
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                onChange={this.onChangeHandle}
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
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
    );
  }
}

export default Contact
