import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { lcrs } from "./helper/helper";

export const MemberDetails = ({ author }) => {
  const bgColor =
    author.position !== "Executive Member" && author.alumni !== true
      ? "bg-gradient-primary"
      : author.alumni !== true
      ? ""
      : "bg-gradient-alumni";
  const colorText =
    author.position !== "Executive Member" || author.alumni === true
      ? "text-light"
      : "";
  return (

      <div
        className={`h-100 card clean-card text-center  ${bgColor}`}
        id={author.name}
        style={{ boxShadow: "0px 0px 32px 0px rgba(221, 230, 237, 0.4)" }}
      >
        <div className="card-body info">
          <Link
            to={`/members/${lcrs(author.name)}`}
          >
            <h5 className={`card-title text-capitalize ${colorText}`}>
              {author.name}
            </h5>
          </Link>
          <p className={`card-text text-capitalize ${colorText}`}>
            {author.position}
          </p>
          <div className="icon">
            {author.social && author.social.email ? (
              <OverlayTrigger
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => (
                  <Tooltip {...props}>
                    {author.social.email
                      .replace("@", " [at] ")
                      .split(".")
                      .join(" [dot] ")}
                  </Tooltip>
                )}
                placement="bottom"
              >
                <i className={`fa fa-envelope ${colorText}`} />
              </OverlayTrigger>
            ) : null}
            {author.social && author.social.facebook ? (
              <OutboundLink
                className="mr-1 ml-1"
                href={`https://www.facebook.com/${  author.social.facebook}`}
                rel="noreferrer"
                target="_blank"
              >
                &nbsp;
                <i className={`fa fa-facebook ${colorText}`} />
              </OutboundLink>
            ) : null}
            {author.social && author.social.linkedin ? (
              <OutboundLink
                className="mr-1 ml-1"
                href={`https://www.linkedin.com/in/${  author.social.linkedin}`}
                rel="noreferrer"
                target="_blank"
              >
                &nbsp;
                <i className={`fa fa-linkedin ${colorText}`} />
              </OutboundLink>
            ) : null}
            {author.social && author.social.github ? (
              <OutboundLink
                className="mr-1 ml-1"
                href={`https://www.github.com/${  author.social.github}`}
                rel="noreferrer"
                target="_blank"
              >
                &nbsp;
                <i className={`fa fa-github ${colorText}`} />
              </OutboundLink>
            ) : null}
          </div>
        </div>
      </div>

  );
};
