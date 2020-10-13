import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img_IETUpview from "../assets/img/iet-upview.jpg"

const MainPage = props => {
  return (
    <Layout location={props.location.pathname} title={"Main"}>
      <SEO />
      <main class="page landing-page">
        <section class="hero"></section>
        <section
          id="purple-overlay"
          class="clean-block clean-hero hero"
          style={{
            color: "#a046b480",
            position: "absolute",
            zIndex: "0",
            width: "100%",
            height: "90vh",
          }}
        ></section>
        <div id="video" class="video-hero">
          <iframe
            title="Intro Youtube Video"
            class="ytplayer"
            style={{ width: "100%", height: "90vh", zIndex: "1" }}
            src="https://www.youtube.com/embed/TI2rX3Oiku8?modestbranding=1&autoplay=1&rel=0&controls=0&mute=1&loop=1&autohide=10playlist=TI2rX3Oiku8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <section class="clean-block about-us" id="about-us">
          <div class="container">
            <div class="block-heading mobile-marginx2">
              <h2 class="text-info">Who are we?</h2>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  src={Img_IETUpview}
                  style={{width:"100%",height:"auto",paddingBottom:"1em"}}
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                The Institute of Engineering Technology - National Institute of
                Technology Karnataka (IET-NITK) Student Chapter is actively
                involved in inculcating a passion for innovation and
                appreciation temperament in the minds of those who have
                potential to change the future. We conduct workshops and
                seminars throughout the academic calendar striving to impact
                relevant skills to the students. Apart from this, we strive to
                invite eminent personalities to conduct lectures for the benefit
                of the club members and keeping doors opened for others
                interested. We are affiliated to IET London, which is one of the
                world’s leading professional societies for the engineering and
                technology community, with more than 168,000 members in 150
                countries and offices in Europe, North America and Asia-Pacific.
                The IET provides a global knowledge network to facilitate the
                exchange of ideas and promote the positive role of science,
                engineering and technology in the world.
              </div>
            </div>
          </div>
        </section>
        <section class="clean-block about-us">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Our SIGs</h2>
              <p>
                IET NITK consists of three different Special Interest Groups:
              </p>
            </div>
            {/* {% include sig.html %} */}
          </div>
        </section>

        <section class="clean-block about-us">
          <div class="container">
            <div class="article-list">
              <div class="container">
                <div class="intro">
                  <h2
                    class="text-info text-center"
                    style={{ fontWeight: "500" }}
                  >
                    Latest Articles
                  </h2>
                  <p class="text-center">We love to write!</p>
                </div>
                <div class="row articles" style={{ paddingTop: "2em" }}></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default MainPage
