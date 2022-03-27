import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Trequipment from "../images/trequipment/trequipment-screen-tablet.png"
import Phones from "../images/trequipment/trequipment-phones.png"
import Desktop from "../images/trequipment/trequipment-desktop.png"

import Aos from "aos"
import "aos/dist/aos.css"

const PageOne = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="Trequipment" />
      <div className="illustrations">
        <div className="illustrations-text">
          <div data-aos="fade-up">
            <h3>Project Description</h3>
            <br></br>
            <p>
              I got asked to help with the coding for TR Equipment and make
              charges based on the designers input. It was a huge learning since
              I got to read and understand others code and adapt my code after
              it.
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
          <img src={Trequipment} alt="the game" data-aos="fade-up" />
        </div>

        <div className="illustrations-images illustrations-last-two ">
          <img src={Phones} alt="the game starts" data-aos="fade-up" />
          <img src={Desktop} alt="the highscores" data-aos="fade-up" />
        </div>

        <div className="header-center">
          <div className="last-about">
            <Link to="/about">About/Contact</Link>
          </div>

          <div className="next">
            <nav>
              <Link to="/hagern">Next</Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne
