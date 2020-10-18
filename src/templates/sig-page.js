import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img_Cipher from "../assets/img/siglogo/Cipher-logo.png"
import Img_Rovisp from "../assets/img/siglogo/Rovisp-logo.png"
import Img_Torsion from "../assets/img/siglogo/Torsion-logo.png"
import Img_Medium from "../assets/img/siglogo/Medium-logo.png"
import Img_Inkheart from "../assets/img/siglogo/Inkheart-logo.png"
import projectyml from "../../content/yml/projects.yml"
import { Link } from "gatsby"

export const SIG = props => {
  const { pageContext } = props
  const sig = pageContext.sigDetails
  let image = null
  if (sig.name === "Cipher") image = Img_Cipher
  else if (sig.name === "Torsion") image = Img_Torsion
  else if (sig.name === "Rovisp") image = Img_Rovisp
  else if (sig.name === "Medium") image = Img_Medium
  else if (sig.name === "Inkheart") image = Img_Inkheart
  let projects = projectyml.filter(element => element.sig === sig.name)
  console.log(projects)
  return (
    <Layout location={props.pathname && props.pathname.location}>
      <SEO title={sig.name} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <img
                alt={sig.name}
                src={image}
                className="sig-logo"
                style={{ maxWidth: "200px" }}
              />
              <h2 className="text-info" style={{ paddingTop: "1em" }}>
                {/* {sig.name} */}
              </h2>
              <p>{sig.description}</p>
            </div>
            <div className="block-content">
              {projects.map((element, index) => {
                return (
                  <div key={index} className="clean-blog-post">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3> {element.title} </h3>
                        {element.builtBy !== null ? (
                          <>
                            <div className="info">
                              <span className="text-muted">
                                By
                                {element.builtBy.map((name, index2) => (
                                  <>{" "}
                                    <Link
                                      key={index2}
                                      to={
                                        "/member/" +
                                        name.toLowerCase().split(" ").join("")
                                      }
                                    >
                                      {name}
                                    </Link>

                                    {index2+2===element.builtBy.length? " and": index2+1!==element.builtBy.length ? "," : ""}
                                  </>
                                ))}
                              </span>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}

                        <p> {element.description} </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default SIG
