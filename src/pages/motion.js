import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Aos from "aos"
import "aos/dist/aos.css"
import Masonry from "react-masonry-css"
import star from "../images/star.svg"
import Jelly from "../videos/jelly.mp4"
import Fish from "../videos/fish.mp4"

const IndexPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const vidRef = useRef()

  useEffect(() => {
    vidRef.current.play()
  }, [])
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const breakpointColumnsObj = {
    default: 3,
    768: 1,
  }
  return (
    <Layout>
      <Seo title="Home" />
      <div className="home">
        <div className="illustrations-text">
          <div>
            <h3>Project Description</h3>
            <br></br>

            <p></p>
          </div>

          <div>
            <h3>What was used?</h3>
            <br></br>
            <p> Illustrator, Photoshop, After Effects</p>
          </div>
        </div>
        <div className="img-grid">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <div className="img-plant img-top img-small">
              <video src={Fish} ref={vidRef} muted autoPlay loop />
              <p className="year">2023</p>
            </div>

            {/* <Link to="/internago">
              <div className="img-internago img-top img-small">
                <video src={eye} ref={vidRef} muted autoPlay loop />
                <p className="year">2023</p>
              </div>
            </Link> */}

            <div className="img-plant img-top img-small">
              <video src={Jelly} ref={vidRef} muted autoPlay loop />
              <p className="year">2023</p>
            </div>
          </Masonry>
        </div>
      </div>

      <footer>
        <div className="header-center">
          <div className="next ">
            <img src={star} />
            <Link to="/about">About/Contact</Link>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage
