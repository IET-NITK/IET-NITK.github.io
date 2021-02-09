import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import members from "../../content/yml/authors.yml"
import Img_Beach from "../assets/img/beach.jpg"

const KEY_ALUMNI = "Alumni"
const KEY_EXEC_MEMBERS = "Executive Members 2020"
const KEY_CURR_CORE = "Core 2020"


const MemberDetails = ({ author, index }) => {
  let isntExecMember = author.position !== "Executive Member"
  let isntAlumni = author.alumni !== true
  let color_bg =
    isntExecMember && isntAlumni ? "bg-primary" : isntAlumni ? "" : "bg-green"
  let color_text = isntExecMember ? "text-light" : ""
  return (
    <div
      to={`/member/${author.name.toLowerCase().split(" ").join("")}`}
      className="col-sm-6 col-md-4 col-lg-3"
      style={{ paddingBottom: "3em" }}
      id={author.name}
      key={index}
    >
      <div
        className={`h-100 card clean-card text-center  ${color_bg}`}
        id={author.name}
      >
        <div className="card-body info">
          <Link to={`/member/${author.name.toLowerCase().split(" ").join("")}`}>
            <h4 className={`card-title ${color_text}`}>{author.name}</h4>
          </Link>
          <p className={`card-text ${color_text}`}>{author.position}</p>
          <div className="icon">
            {author.social.facebook ? (
              <a className="mr-1 ml-1" href={"https://www.facebook.com/" + author.social.facebook}>
                &nbsp;
                <i className={`fa fa-facebook ${color_text}`} />
              </a>
            ) : null}
            {author.social.linkedin ? (
              <a className="mr-1 ml-1" href={"https://www.linkedin.com/in/" + author.social.linkedin}>
                &nbsp;
                <i className={`fa fa-linkedin ${color_text}`} />
              </a>
            ) : null}
            {author.social.github ? (
              <a className="mr-1 ml-1" href={"https://www.github.com/" + author.social.github}>
                &nbsp;
                <i className={`fa fa-github ${color_text}`} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export const About = props => {
  const [category, setCategory] = useState(KEY_CURR_CORE)
  let members_hsx = {
    [KEY_ALUMNI]: members.filter(mem => mem.alumni === true),
    [KEY_CURR_CORE]: members.filter(
      mem => mem.position !== "Executive Member" && mem.alumni !== true
    ),
    [KEY_EXEC_MEMBERS]: members.filter(
      mem => mem.position === "Executive Member" && mem.alumni !== true
    ),
  }
  return (
    <Layout location={props.location.pathname} title={"About Us"}>
      <SEO title="About Us" />
      <main className="page">
        <section className="clean-block about-us">
          <div className="container" style={{marginTop:"5em"}}>
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
                      <h2 className="text-primary">About Us</h2>

                      <p>
                        IET NITK Chapter is a exclusive technical club under IET
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
              <h2 className="text-primary">Our Family</h2>
            </div>
            <div
              className="btn-group w-100 mb-5"
              role="group"
              aria-label="Basic example"
            >
              {[KEY_ALUMNI, KEY_CURR_CORE, KEY_EXEC_MEMBERS].map((e, i) => (
                <button
                  type="button"
                  key={i}
                  className={`btn btn-outline-primary ${
                    category === e ? "active" : ""
                  }`}
                  onClick={() => setCategory(e)}
                >
                  {e}
                </button>
              ))}
            </div>
            <div className="row justify-content-center">
              {members_hsx[category].map((author, index) => (
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
