import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img_Cipher from "../assets/img/siglogo/Cipher-logo.png"
import Img_Rovisp from "../assets/img/siglogo/Rovisp-logo.png"
import Img_Torsion from "../assets/img/siglogo/Torsion-logo.png"
import Img_Medium from "../assets/img/siglogo/Medium-logo.png"
import Img_Inkheart from "../assets/img/siglogo/Inkheart-logo.png"

export const SIG = props => {
  const { pageContext } = props
  const sig = pageContext.sigDetails
  let image = null
  if (sig.name === "Cipher") image = Img_Cipher
  else if (sig.name === "Torsion") image = Img_Torsion
  else if (sig.name === "Rovisp") image = Img_Rovisp
  else if (sig.name === "Medium") image = Img_Medium
  else if (sig.name === "Inkheart") image = Img_Inkheart

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
              {/* {% assign cipherProjects = site.data.projects | where_exp: "item", "item.sig == signame"%} 
        {% for project in cipherProjects %}
        {% assign projectBuilders= project.builtBy | split: " "%}
        <div className="clean-blog-post">
          <div className="row">
            <div className="col-lg-12">
              <h3>{{ project.title }}</h3>

              <div className="info">
                <span className="text-muted"
                  >By
                  {% for builder in projectBuilders %}
                  {% assign builderFullName = site.data.authors | where: 'short_name', builder | first %}
                  {% unless forloop.first %}
                    {% if forloop.last %}
                      and
                    {% else %}
                      ,
                    {% endif %} 
                  {% endunless %}
                  <a href="/about#{{builder}}">{{ builderFullName.name }}</a>

                  {% endfor %}
                </span>
              </div>
              <p>{{ project.description }}</p>
              {% if project.url %}
              <a href="{{project.url}}"
                ><button className="btn btn-outline-primary btn-sm" type="button">
                  Read More
                </button></a
              >
              {% endif %}
            </div>
          </div>
        </div>
        {% endfor %} */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default SIG
