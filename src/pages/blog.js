import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const About = props => {
  return (
    <Layout location={props.location.pathname} title={"Main"}>
      <SEO title="Blog" />
      <main class="page blog-post-list">
        <section class="clean-block clean-blog-list dark">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Official Blog</h2>
              <p>
                We post cool stuff. Subscribe to our Newsletter to stay updated!
              </p>
            </div>
            <div class="block-content">
              {/* {% for post in site.posts %}
        {% assign author = site.data.authors | where: 'short_name', post.short_name | first %} */}
              <div class="clean-blog-post">
                <div class="row">
                  <div class="col-lg-5">
                    <img
                      class="rounded img-fluid"
                      src="/assets/img/blog/{{post.image}}"
                      style={{width:'100%',height:'auto'}}
                    />
                  </div>
                  <div class="col-lg-7">
                    <h3>post.title</h3>
                    <div class="info">
                      {/* <span class="text-muted">
                  {{ post.date | date_to_long_string }} by&nbsp;
                  <a href="/about#{{ author.short_name }}">{{author.name}}</a>
                  <br>
                  {% assign words = content | number_of_words %}
                </span> */}
                    </div>
                    <p>"EXCERPT"</p>
                    <a href="{{post.url | relative_url}}" class="no-underline">
                      <button
                        class="btn btn-outline-primary btn-sm"
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
