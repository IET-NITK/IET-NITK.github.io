import React, { useState } from "react"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img_Beach from "../assets/img/beach.jpg"
import { Nav, NavDropdown, OverlayTrigger, Tooltip } from "react-bootstrap"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const KEY_ALUMNI = "Alumni"
const KEY_EXEC_MEMBERS = "Executive Members 2021"
const KEY_CURR_CORE = "Core 2021"

const MemberDetails = ({ author, index }) => {
  let color_bg =
    author.position !== "Executive Member" && author.alumni !== true
      ? "bg-gradient-primary"
      : author.alumni !== true
      ? ""
      : "bg-gradient-alumni"
  let color_text =
    author.position !== "Executive Member" || author.alumni === true
      ? "text-light"
      : ""
  return (
    <div
      to={`/members/${author.name.toLowerCase().split(" ").join("")}`}
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
          <Link
            to={`/members/${author.name.toLowerCase().split(" ").join("")}`}
          >
            <h5 className={`card-title ${color_text}`}>{author.name}</h5>
          </Link>
          <p className={`card-text ${color_text}`}>{author.position}</p>
          <div className="icon">
            {author.social && author.social.email ? (
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={props => (
                  <Tooltip {...props}>
                    {author.social.email
                      .replace("@", " [at] ")
                      .split(".")
                      .join(" [dot] ")}
                  </Tooltip>
                )}
              >
                <i className={`fa fa-envelope ${color_text}`} />
              </OverlayTrigger>
            ) : null}
            {author.social && author.social.facebook ? (
              <OutboundLink
                target="_blank"
                rel="noreferrer"
                className="mr-1 ml-1"
                href={"https://www.facebook.com/" + author.social.facebook}
              >
                &nbsp;
                <i className={`fa fa-facebook ${color_text}`} />
              </OutboundLink>
            ) : null}
            {author.social && author.social.linkedin ? (
              <OutboundLink
                target="_blank"
                rel="noreferrer"
                className="mr-1 ml-1"
                href={"https://www.linkedin.com/in/" + author.social.linkedin}
              >
                &nbsp;
                <i className={`fa fa-linkedin ${color_text}`} />
              </OutboundLink>
            ) : null}
            {author.social && author.social.github ? (
              <OutboundLink
                target="_blank"
                rel="noreferrer"
                className="mr-1 ml-1"
                href={"https://www.github.com/" + author.social.github}
              >
                &nbsp;
                <i className={`fa fa-github ${color_text}`} />
              </OutboundLink>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

const About = ({ location, data }) => {
  const [category, setCategory] = useState(KEY_CURR_CORE)
  let members_hsx = {
    [KEY_CURR_CORE]: data.members.nodes.filter(
      mem => mem.position !== "Executive Member" && mem.alumni !== true
    ),
    [KEY_EXEC_MEMBERS]: data.members.nodes.filter(
      mem => mem.position === "Executive Member" && mem.alumni !== true
    ),
  }
  data.passouts.group.map(
    e =>
      (members_hsx[KEY_ALUMNI + "-" + e.fieldValue] = data.members.nodes.filter(
        mem => mem.alumni === true && mem.passoutYr === parseInt(e.fieldValue)
      ))
  )
  return (
    <Layout location={location.pathname} title={"About Us"}>
      <SearchEngineOps title="About Us" />
      <main className="page">
        <section className="clean-block about-us">
          <div className="container" style={{ marginTop: "5em" }}>
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

                      <p>{data.about.info}</p>
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
            <Nav
              className="mb-5"
              variant="pills"
              justify={true}
              activeKey={category}
            >
              <NavDropdown
                title={
                  category.split("-").length > 1
                    ? "Batch of " + category.split("-")[1]
                    : KEY_ALUMNI
                }
              >
                {data.passouts.group.map(e => (
                  <NavDropdown.Item
                    onClick={() => setCategory(KEY_ALUMNI + "-" + e.fieldValue)}
                    eventKey={e.fieldValue}
                  >
                    Batch of {e.fieldValue}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Item>
                <Nav.Link
                  onClick={() => setCategory(KEY_CURR_CORE)}
                  eventKey={KEY_CURR_CORE}
                >
                  {KEY_CURR_CORE}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey={KEY_EXEC_MEMBERS}
                  title={KEY_EXEC_MEMBERS}
                  onClick={() => setCategory(KEY_EXEC_MEMBERS)}
                >
                  {KEY_EXEC_MEMBERS}
                </Nav.Link>
              </Nav.Item>
            </Nav>

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

export const postQuery = graphql`
  {

    members: allStrapiMembers(sort: {order: ASC, fields: rank}) {
      nodes {
        alumni
        passoutYr
        position
        name
        social: contacts {
          facebook
          github
          email
          linkedin
        }
      }
    }
    about: strapiAboutClub {
      info: about_us
    }
    passouts: allStrapiMembers {
      group(field: passoutYr) {
        fieldValue
      }
    }
  }
`
