import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Link } from "gatsby"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

export const MemberDetails = ({ author }) => {
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
        className={`h-100 card clean-card text-center  ${color_bg}`}
        style={{ boxShadow: "0px 0px 32px 0px rgba(221, 230, 237, 0.4)" }}
        id={author.name}
      >
        <div className="card-body info">
          <Link
            to={`/members/${author.name.toLowerCase().split(" ").join("")}`}
          >
            <h5 className={`card-title text-capitalize ${color_text}`}>
              {author.name}
            </h5>
          </Link>
          <p className={`card-text text-capitalize ${color_text}`}>
            {author.position}
          </p>
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

  )
}
