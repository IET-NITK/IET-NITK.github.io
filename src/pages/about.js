import React, { useState } from "react"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import { graphql } from "gatsby"
import Img_Beach from "../assets/img/beach.jpg"
import { Nav, NavDropdown } from "react-bootstrap"
import { MemberDetails } from "../components/partials/member"

const KEY_ALUMNI = "Alumni"
const KEY_EXEC_MEMBERS = "Executive Members 2021"
const KEY_CURR_CORE = "Core 2021"


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
                    <div
                    className="col-sm-6 col-md-4 col-lg-3"
                    style={{ paddingBottom: "3em" }}
                    // id={author.name}
                  >
                <MemberDetails author={author} key={index} />
                </div>
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
    members: allStrapiMembers(sort: { order: ASC, fields: rank }) {
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
