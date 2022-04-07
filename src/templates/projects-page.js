import { Link, graphql } from "gatsby";
import React from "react";
import SearchEngineOps from "../elements/seo";
import { commonMdProps, lcrs } from "../elements/helper";
import InformationLayout from "../layouts/information";
import ReactMarkdown from "react-markdown";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProjectURL from "../elements/projecturl";
import { ShareButtons } from "../elements/social";

const Project = ({ data, pathname, uri, location }) => {
  return (
    <InformationLayout location={pathname && pathname.location} uri={uri}>
      <SearchEngineOps
        title={`${data.projects.title} @${data.projects.sig.name}`}
      />

      <div className="block-heading row">
        <div className="col-lg-9 col-md-9">
          <h2 className="text-primary" style={{ paddingTop: "1em" }}>
            {data.projects.title}
          </h2>
          <p>{data.projects.description}</p>
        </div>

        <div className="col-lg-3 col-md-3 text-right">
          <Link to={`/sig/${data.projects.sig.name.toLowerCase()}`}>
            {data.projects.sig.logo ? (
              <GatsbyImage
                alt={data.projects.sig.name}
                className="sig-logo"
                image={getImage(data.projects.sig.logo.localFile)}
                style={{ maxWidth: "200px" }}
              />
            ) : null}
          </Link>
        </div>
      </div>
      <div className="block-content">
        {data.projects.label ? (
          <div className="mb-2 badge badge-primary">{data.projects.label}</div>
        ) : null}
        <div className="row">
          <div className="col-lg-6">
            <h4>Built by</h4>
            <ul>
              {data.projects.authors &&
                data.projects.authors.map(({ name }) => (
                  <li key={name}>
                    <Link to={`/member/${lcrs(name)}`}>{name}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-lg-6 text-right">
            <ProjectURL url={data.projects.url} />
          </div>
        </div>
        {data.projects.report ? (
          <>
            <hr />
            <h1 className="text-bold text-primary">Detailed Project Report</h1>

            <div className="post-body mt-5">
              <ReactMarkdown components={commonMdProps}>
                {data.projects.report.content}
              </ReactMarkdown>

              <span className="mt-5">
                Written&nbsp;
                <b>on {data.projects.report.date}</b>
              </span>
              <br />
              <ShareButtons
                author={data.projects.authors}
                title={`Detailed report: ${data.projects.title} from ${data.projects.sig.name} IET NITK`}
                url={location.href}
              />
            </div>
          </>
        ) : (
          <ShareButtons
            author={data.projects.authors}
            title={`${data.projects.title}, from ${data.projects.sig.name} IET NITK`}
            url={location.href}
          />
        )}
      </div>
    </InformationLayout>
  );
};

export const postQuery = graphql`
  query ($pathSlug: String!) {
    projects: strapiProjects(title: { eq: $pathSlug }) {
      report: project_report {
        content: body
        date: updated_at(formatString: "MMMM Do, YYYY")
      }
      authors {
        name
      }
      sig {
        name
        logo {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED)
            }
          }
        }
      }
      url
      title
      description
      ongoing
    }
  }
`;

export default Project;
