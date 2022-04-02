import React from "react";

const ProjectURL = ({ url, customClass }) => {
  if (!url) return null;
  return url && new URL(url).hostname === "github.com" ? (
    <a
      className={`btn btn-outline-dark ${customClass}`}
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <i className="fa fa-github" /> Repository URL
    </a>
  ) : (
    <a className={`btn btn-outline-dark ${customClass}`} href={url} rel="noreferrer" target="_blank">
      <i className="fa fa-link" /> Project Link
    </a>
  );
};

export default ProjectURL;
