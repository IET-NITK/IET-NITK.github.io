import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import members from "../../content/yml/authors.yml"
import Img_Beach from "../assets/img/beach.jpg"

const MemberDetails = ({ author, index }) => {
  let textcolor = author.alumni === true ? "text-light" : ""
  return (
    <div
      to={`/member/${author.name.toLowerCase().split(" ").join("")}`}
      className="col-sm-6 col-md-4 col-lg-3"
      style={{ paddingBottom: "3em" }}
      id={author.name}
      key={index}
    >
      <div
        className={`card clean-card text-center  ${
          author.alumni === true ? "bg-primary" : ""
        }`}
        style={{ height: "100%" }}
        id={author.name}
      >
        <div className="card-body info">
          <Link to={`/member/${author.name.toLowerCase().split(" ").join("")}`}>
            <h4 className={`card-title ${textcolor}`}>{author.name}</h4>
          </Link>
          <p className={`card-text ${textcolor}`}>{author.position}</p>
          <div className="icons">
            {author.facebook ? (
              <a href={"https://www.facebook.com/" + author.facebook}>
                <i className={`fa fa-facebook ${textcolor}`}></i>
              </a>
            ) : (
              <></>
            )}
            {author.linkedin ? (
              <a href={"https://www.linkedin.com/in/" + author.linkedin}>
                <i
                  className={`fa fa-linkedin ${
                    author.alumni === true ? "text-light" : ""
                  }`}
                ></i>
              </a>
            ) : (
              <></>
            )}
            {author.github ? (
              <a href={"https://www.github.com/" + author.github}>
                <i
                  className={`fa fa-github ${
                    author.alumni === true ? "text-light" : ""
                  }`}
                ></i>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const About = props => {
  //eslint-ignore-next-line
  let alumni = members.filter(mem => mem.alumni === true)
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
                <div className="card-text">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <img
                        alt=""
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Our Family</h2>
            </div>
            <div class="btn-group w-100 mb-5" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-outline-primary">
                All
              </button>
              <button type="button" class="btn btn-outline-primary">
                Alumni
              </button>
              <button type="button" class="btn btn-outline-primary">
                Core
              </button>
              <button type="button" class="btn btn-outline-primary">
                Members
              </button>
            </div>
            <div className="row justify-content-center">
              {alumni.map((author, index) => (
                <MemberDetails author={author} key={index} />
              ))}
              {core.map((author, index) => (
                <MemberDetails author={author} key={index} />
              ))}
            </div>
            <hr />
            <div className="row justify-content-center">
              {others.map((author, index) => (
                <MemberDetails author={author} key={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default About
