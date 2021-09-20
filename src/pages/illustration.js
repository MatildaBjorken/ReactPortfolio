import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Bild1 from "../images/illustrations/face-smash.png"
import Bild2 from "../images/illustrations/face-lips.png"
import Bild3 from "../images/illustrations/face2.png"
import Bild4 from "../images/illustrations/frame-first.png"
import Bild5 from "../images/illustrations/frame-second.png"
import Aos from "aos"
import "aos/dist/aos.css"

const PageOne = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="Illustrations" />
      <div className="illustrations">
        <div className="illustrations-text">
          <div data-aos="fade-up">
            <h3>Project Desctiption</h3>
            <br></br>
            <p>Just some of the illustrations I've made</p>
          </div>

          <div data-aos="fade-up">
            <h3>What was used?</h3>
            <br></br>
            <p> Illustrator</p>
          </div>
        </div>

        <div className="illustrations-images ">
          <img className="" src={Bild1} data-aos="fade-up" />
          <img className="" src={Bild2} data-aos="fade-up" />
        </div>

        <div className="illustrations-last">
          <img src={Bild3} data-aos="fade-up" />
        </div>

        <div className="header-center">
          <div className="last-about">
            <Link to="/news">About/Contact</Link>
          </div>

          <div className="next">
            <nav>
              <Link to="/clock">Next</Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne
