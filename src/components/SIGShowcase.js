import { generateSIGHash } from "../components/helper"
import React from "react"
import { Link } from "gatsby"

export const SIGShowcase = ({ sigs, sig_images, hide_link }) => {
    let img_hash = generateSIGHash(sig_images)
    return (
      <>
        <div className="row justify-content-center">
          {sigs.map((s, i) => (
            <div
              key={i}
              className="col-md-5 col-lg-4"
              style={{ marginBottom: "1em" }}
            >
              <div className="clean-pricing-item" style={{ height: "100%" }}>
                <div style={{ width: "100%" }}>
                  <img
                    alt=""
                    src={img_hash[`${s.name}`]}
                    style={{
                      width: "150px",
                      height: "auto!important",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </div>
                <p>{s.description}</p>
                {s.no_link === false && hide_link !== false ? (
                  <>
                    <Link
                      to={`sigs/${s.name.toLowerCase()}`}
                      className="btn btn-outline-primary btn-block"
                    >
                      Read More
                    </Link>
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }