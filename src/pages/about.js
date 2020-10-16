import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import members from "../../content/yml/authors.yaml"
import Img_Beach from "../assets/img/beach.jpg"
export const About = props => {
  let alumni = members.filter(mem => mem.alumni)
  let core = members.filter(
    mem => mem.position !== "Executive Member" && mem.alumni !== true
  )
  let others = members.filter(
    mem => mem.position === "Executive Member" && mem.alumni !== true
  )
  return (
    <Layout location={props.location.pathname} title={"About Us"}>
      <SEO title="About Us" />
      <main className="page">
        <section className="clean-block about-us">
          <div className="container">
            <div className=" clean-card" style={{ boxShadow: "0px!important" }}>
              <div className="card-body info">
                <p className="card-text">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <img
                        src={Img_Beach}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <h2 className="text-info">About Us</h2>

                      <p>
                        Chapter is a exclusive technical club under IET
                        Bangalore Division. We are actively involved in
                        inculcating a passion for innovation and appreciation
                        for scientific temperament in the minds of those who
                        have the potential to change the future. We conducts
                        seminars and workshops throughout the academic calendar
                        striving to impart technical , social and managerial
                        skills to the students.
                      </p>
                      <p>
                        IET also plays an integral role in planning and
                        organizing various events in the techno-cultural fests
                        of the institute ie ENGINEER and INCIDENT.
                      </p>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Our Family</h2>
            </div>

            <div className="row justify-content-center">
              {/* {% assign coremembers = site.data.authors | where_exp: "item", "item.position != 'Executive Member'"%}
{% assign execmembers = site.data.authors | where_exp: "item", "item.position == 'Executive Member'"%}
{% for author in coremembers %}
{% if author.alumni != true %} */}
              {core.map((author, index) => (
                <div
                  to={`/member/${author.name}`}
                  className="col-sm-6 col-md-4 col-lg-3"
                  style={{ paddingBottom: "3em" }}
                  id={author.name}
                  key={index}
                >
                  <div
                    className="card clean-card text-center"
                    style={{ height: "100%" }}
                    id={author.name}
                  >
                    <div className="card-body info">
                      <Link to={`/member/${author.name}`}>
                        <h4 className="card-title">{author.name}</h4>
                      </Link>
                      <p className="card-text">{author.position}</p>
                      <div className="icons">
                        <a href="https://www.facebook.com/{{author.facebook}}">
                          <i className="icon-social-facebook {%if author.alumni==true%} text-light {% endif %}"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/{{author.linkedin}}">
                          <i className="icon-social-linkedin {%if author.alumni==true%} text-light {% endif %}"></i>
                        </a>
                        <a href="https://www.github.com/{{author.github}}">
                          <i className="icon-social-github {%if author.alumni==true%} text-light {% endif %}"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <div className="row justify-content-center">
              {others.map((author, index) => (
                <>
                  {" "}
                  <div
                    className="col-sm-6 col-md-4 col-lg-3"
                    style={{ paddingBottom: "3em" }}
                    id={author.name}
                  >
                    <div
                      className="card clean-card text-center"
                      style={{ boxShadow: "0 0 0px", height: "100%" }}
                    >
                      <div className="card-body info">
                        {" "}
                        <Link to={`/member/${author.name}`}>
                          <h4 className="card-title">{author.name}</h4>
                        </Link>
                        <p className="card-text">{author.position}</p>
                        <div className="icons">
                          {/* {% if author.facebook %} */}
                          <a href="https://www.facebook.com/{{author.facebook}}">
                            <i className="icon-social-facebook"></i>
                          </a>
                          {/* {% endif %} */}
                          {/* {% if author.linkedin %} */}
                          <a href="https://www.linkedin.com/in/{{author.linkedin}}">
                            <i className="icon-social-linkedin"></i>
                          </a>
                          {/* {% endif %} */}
                          {/* {% if author.github %} */}
                          <a href="https://www.github.com/{{author.github}}">
                            <i className="icon-social-github"></i>
                          </a>
                          {/* {% endif %} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default About
