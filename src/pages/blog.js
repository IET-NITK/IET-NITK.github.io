import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const About = props => {
  return (
    <Layout location={props.location.pathname} title={"Main"}>
      <SEO title="Blog" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Official Blog</h2>
              <p>
                We post cool stuff. Subscribe to our Newsletter to stay updated!
              </p>
            </div>
            <div className="block-content">
              {/* {% for post in site.posts %}
        {% assign author = site.data.authors | where: 'short_name', post.short_name | first %} */}
              <div className="clean-blog-post">
                <div className="row">
                  <div className="col-lg-5">
                    <img
                      className="rounded img-fluid"
                      src="/assets/img/blog/{{post.image}}"
                      style={{width:'100%',height:'auto'}}
                    />
                  </div>
                  <div className="col-lg-7">
                    <h3>post.title</h3>
                    <div className="info">
                      {/* <span className="text-muted">
                  {{ post.date | date_to_long_string }} by&nbsp;
                  <a href="/about#{{ author.short_name }}">{{author.name}}</a>
                  <br>
                  {% assign words = content | number_of_words %}
                </span> */}
                    </div>
                    <p>"EXCERPT"</p>
                    <a href="{{post.url | relative_url}}" className="no-underline">
                      <button
                        className="btn btn-outline-primary btn-sm"
                        type="button"
                      >
                        Read More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* {% endfor %} */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default About
