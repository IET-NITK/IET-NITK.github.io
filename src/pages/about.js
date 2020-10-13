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
    <Layout location={props.location.pathname} title={"Main"}>
      <SEO title="Official Website of IET NITK" />
      <main class="page">
        <section class="clean-block about-us">
          <div class="container">
            <div class=" clean-card" style={{ boxShadow: "0px!important" }}>
              <div class="card-body info">
                <p class="card-text">
                  <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <img
                        src={Img_Beach}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <h2 class="text-info">About Us</h2>

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
        <section class="clean-block about-us">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Our Family</h2>
            </div>

            <div class="row justify-content-center">
              {/* {% assign coremembers = site.data.authors | where_exp: "item", "item.position != 'Executive Member'"%}
{% assign execmembers = site.data.authors | where_exp: "item", "item.position == 'Executive Member'"%}
{% for author in coremembers %}
{% if author.alumni != true %} */}
              {core.map((author, index) => (
                <div
                  to={`/member/${author.name}`}
                  class="col-sm-6 col-md-4 col-lg-3"
                  style={{ paddingBottom: "3em" }}
                  id={author.name}
                >
                  <div
                    class="card clean-card text-center"
                    style={{ height: "100%" }}
                    id={author.name}
                  >
                    <div class="card-body info">
                      <Link to={`/member/${author.name}`}>
                        <h4 class="card-title">{author.name}</h4>
                      </Link>
                      <p class="card-text">{author.position}</p>
                      <div class="icons">
                        <a href="https://www.facebook.com/{{author.facebook}}">
                          <i class="icon-social-facebook {%if author.alumni==true%} text-light {% endif %}"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/{{author.linkedin}}">
                          <i class="icon-social-linkedin {%if author.alumni==true%} text-light {% endif %}"></i>
                        </a>
                        <a href="https://www.github.com/{{author.github}}">
                          <i class="icon-social-github {%if author.alumni==true%} text-light {% endif %}"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <div class="row justify-content-center">
              {others.map((author, index) => (
                <>
                  {" "}
                  <div
                    class="col-sm-6 col-md-4 col-lg-3"
                    style={{ paddingBottom: "3em" }}
                    id={author.name}
                  >
                    <div
                      class="card clean-card text-center"
                      style={{ boxShadow: "0 0 0px", height: "100%" }}
                    >
                      <div class="card-body info">
                        {" "}
                        <Link to={`/member/${author.name}`}>
                          <h4 class="card-title">{author.name}</h4>
                        </Link>
                        <p class="card-text">{author.position}</p>
                        <div class="icons">
                          {/* {% if author.facebook %} */}
                          <a href="https://www.facebook.com/{{author.facebook}}">
                            <i class="icon-social-facebook"></i>
                          </a>
                          {/* {% endif %} */}
                          {/* {% if author.linkedin %} */}
                          <a href="https://www.linkedin.com/in/{{author.linkedin}}">
                            <i class="icon-social-linkedin"></i>
                          </a>
                          {/* {% endif %} */}
                          {/* {% if author.github %} */}
                          <a href="https://www.github.com/{{author.github}}">
                            <i class="icon-social-github"></i>
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
