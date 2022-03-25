import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Ruth from "../images/ruth/ruth-desktop-laptop.png"
import TabletPhone from "../images/ruth/ruth-tablet-phone.png"
import Devices from "../images/ruth/ruth-devices.png"

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
              A simple News App with news fetched from New York Times API, where
              you can search for articles and read about the top rated articles.
              I designed and prototyped the app in Figma and then stared to
              develop it in React. Enjoy!
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
          <a className="link-a" href="https://www.hotelruth.se/">
            link to the site
          </a>
        </div>

        <div className="internago">
          <img src={Ruth} alt="the game" data-aos="fade-up" />
        </div>

        <div className="illustrations-images illustrations-last-two ">
          <img src={TabletPhone} alt="the game starts" data-aos="fade-up" />
          <img src={Devices} alt="the highscores" data-aos="fade-up" />
        </div>

        <div className="header-center">
          <div className="last-about">
            <Link to="/about">About/Contact</Link>
          </div>

          <div className="next">
            <nav>
              <Link to="/internago">Next</Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne