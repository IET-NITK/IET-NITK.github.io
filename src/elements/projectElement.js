import { Link } from "gatsby";
import React from "react";
import { lcrs, renderAuthors } from "./helper";
import ProjectURL from "./projecturl";

const ProjectElement = ({
  title,
  signame,
  description,
  authors,
  label,
  url,
  projectReport,
}) => {
    return (
      <div className="clean-blog-post">
        <h3 className="text-capitalize">{title}</h3>
        {signame ? (
          <div className="info">
            <span className="text-muted">
              <Link to={`/sig/${signame.toLowerCase()}`}>{signame}</Link>
            </span>
          </div>
        ) : null}
        {label ? (
          <div className="badge badge-primary mr-2 ">{label}</div>
        ) : null}
        {description || ""}
        {authors ? (
          <p>
            Built by
            {renderAuthors(authors, "")}
          </p>
        ) : null}

        <ProjectURL customClass="btn-sm mr-2" url={url} />
        {!projectReport ? (
          <Link
            className="btn btn-outline-secondary btn-sm"
            to={`/project/${lcrs(title)}`}
            type="button"
          >
            <i className="fa fa-info mr-2" />
            Know More
          </Link>
        ) : (
          <Link
            className="btn btn-primary btn-sm"
            to={`/project/${lcrs(title)}`}
            type="button"
          >
            <i className="fa fa-info mr-2" />
            Read in Detail
          </Link>
        )}
      </div>
    );
  };

export default ProjectElement;
