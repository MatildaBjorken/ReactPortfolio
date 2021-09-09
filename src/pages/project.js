import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TwoCool from "../images/projects/twocool.png"
import Cowman from "../images/projects/cowman.png"
import Mrcool from "../images/main/nunu.png"
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
            <p>
              Working with creativity is something that motivates me. I really
              like to experiment with different styles and technologies and here
              is one of many examples!
            </p>
          </div>

          <div data-aos="fade-up">
            <h3>What was used?</h3>
            <br></br>
            <p>
              Illustrator
              <br></br>A bunch of podcasts :-)
            </p>
          </div>
        </div>

        <div className="illustrations-images ">
          <img
            className=""
            src={Mrcool}
            alt="illustration"
            data-aos="fade-up"
          />
          <img
            className=""
            src={TwoCool}
            alt="illustration"
            data-aos="fade-up"
          />
        </div>

        <div className="illustrations-last">
          <img src={Cowman} alt="illustration" data-aos="fade-up" />
        </div>

        <div className="header-center">
          <div className="last-about">
            <Link to="/about">About/Contact</Link>
          </div>

          <div className="next">
            <nav>
              <Link to="/news">Next</Link>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne
