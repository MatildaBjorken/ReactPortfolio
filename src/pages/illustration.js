import React, {  } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import star from "../images/star.svg"
import Tomatoes from "../images/illustrations/tomato.png"
import Masonry from "react-masonry-css"

const PageOne = () => {
  const breakpointColumnsObj = {
    default: 3,
    768: 1,
  }
  return (
    <Layout>
      <Seo title="Illustrations" />
      <div className="illustrations home">
        <div className="illustrations-text">
          <div>
            <h3>Project Description</h3>
            <br></br>

            <p>Just some of the illustrations I've made</p>
          </div>

          <div>
            <h3>What was used?</h3>
            <br></br>
            <p> Illustrator</p>
          </div>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div className=" ">
            <img className="" src={Tomatoes} />
          </div>
        </Masonry>
        <div className="header-center">
          <div className="last-about">
            <Link to="/news">About/Contact</Link>
          </div>
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

export default PageOne
