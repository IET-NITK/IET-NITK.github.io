import React from "react"

export const Footer = props => {
  return (
    <>
      <div
        className="footer-dark"
        style={{backgroundColor: '#2d3e50',color:'white',padding:"1.5em 0em"}}
      >
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Important Links</h3>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="about.html#family">Our Family</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="projects.html">Projects</a>
                  </li>
                  <li>
                    <a href="contact.html">Say Hi!</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Special Interest Groups</h3>
                <ul>
                  <li>
                    <a href="/sig/Cipher.html">Cipher</a>
                  </li>

                  <li>
                    <a href="/sig/Rovisp.html">Rovisp</a>
                  </li>

                  <li>
                    <a href="/sig/Torsion.html">Torsion</a>
                  </li>
                  <li>Inkheart</li>
                  <li>Medium</li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <div className="mobile-center-laptop-right">
                  <h3>IET NITK</h3>
                  <p>
                    To inspire, inform and influence the global engineering
                    community, supporting technology innovation to meet the
                    needs of society. We are IET NITK.
                  </p>
                </div>
              </div>
              <div className="col item social">
                <a href="https://www.facebook.com/ietnitk">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/ietnitk/">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.github.com/IET-NITK">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.instagram.com/ietnitk">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/feed.xml">
                  <i className="fa fa-rss"></i>
                </a>
              </div>
            </div>
            <p className="copyright">
              <i className="fa fa-heart heartbeat" /> &nbsp; IET NITK |
              <a className="text-white" href="/">
                Made by IET NITK Web Team
              </a>
              <br />
              Last updated on: August 31
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
