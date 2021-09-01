import React, { useEffect } from "react"
import { Link } from "gatsby"
import Magic from "../images/mini/rhytm.png"
import Cubes from "../images/mini/cube-device.png"
import Font from "../images/mini/font-device.png"
import Egg from "../images/mini/egg.png"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Aos from "aos"
import "aos/dist/aos.css"

const PageOne = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="Mini Projects" />
      <div className="illustrations">
        <div className="illustrations-text">
          <div data-aos="fade-up">
            <h3>Project Desctiption</h3>
            <br></br>
            <p>
              Be creative with code! Some small projects I have done with the
              desired outcome to make them look like graphic posters! I have
              explored multiple libraries and tools.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3>What was used?</h3>
            <br></br>
            <p>
              HTML
              <br></br>
              CSS
              <br></br>
              JavaScript
              <br></br>
              React
              <br></br>
              Three js
              <br></br>
              p5 js
              <br></br>
              anime js
              <br></br>
              gsap
            </p>
          </div>
        </div>

        <div className="link-git" data-aos="fade-up">
          <a className="link-a" href="https://matildabjorken.github.io/blob/">
            link to the egg site
          </a>
          <br></br> <br></br>
          <a
            className="link-a"
            href="https://matildabjorken.github.io/business-card/"
          >
            link to the cubes
          </a>
          <br></br> <br></br>
          <a className="link-a" href="https://matildabjorken.github.io/rhythm/">
            link to the rhythm site
          </a>
          <br></br> <br></br>
          <a className="link-a" href="https://matildabjorken.github.io/fonts/">
            link to the font site
          </a>
        </div>

        <div className="illustrations-images ">
          <img src={Font} data-aos="fade-up" />
          <img src={Cubes} data-aos="fade-up" />
        </div>

        <div className="illustrations-images illustrations-last-two">
          <img src={Magic} data-aos="fade-up" />
          <img src={Egg} data-aos="fade-up" />
        </div>

        <div className="header-center">
          <div className="last-about">
            <Link to="/about">About/Contact</Link>
          </div>

          <div className="next">
            <nav>
              <Link to="/illustration">Next</Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne
