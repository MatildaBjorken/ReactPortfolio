import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tablets from "../images/anrecon/anrecon-tablets.png"
import Phones from "../images/anrecon/anrecon-phones.png"
import Devices from "../images/anrecon/anrecon-desktop-phones.png"

import Aos from "aos"
import "aos/dist/aos.css"

const PageOne = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="News app" />
      <div className="illustrations">
        <div className="illustrations-text">
          <div data-aos="fade-up">
            <h3>Project Description</h3>
            <br></br>
            <p>
              I worked with our designers to create a new design for Anrecon. I
              then coded the invite website while having regular communication
              with the designers, SEO and product owners. The site went through
              several phases to suit the clients needs.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3>What was used?</h3>
            <br></br>
            <p>
              React
              <br></br>
              CSS
              <br></br>
              framer-motion
              <br></br>
              GSAP
              <br></br>
              Axios
              <br></br>
              Material-UI
            </p>
          </div>
        </div>
        <div className="link-git" data-aos="fade-up">
          <a className="link-a" href="https://anrecon.easyweb.site">
            link to the site
          </a>
        </div>

        <div className="internago">
          <img src={Tablets} alt="the game" data-aos="fade-up" />
        </div>

        <div className="illustrations-images illustrations-last-two ">
          <img src={Phones} alt="the game starts" data-aos="fade-up" />
          <img src={Devices} alt="the highscores" data-aos="fade-up" />
        </div>

        <div className="header-center">
          <div className="last-about">
            <Link to="/about">About/Contact</Link>
          </div>

          <div className="next">
            <nav>
              <Link to="/mini">Next</Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne
