import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import star from "../images/star.svg"
import Soon from "../components/subheader"

const PageOne = () => {
  return (
    <Layout>
      <Seo title="Soon" />
      <Soon />
      <div className="illustrations soon">
        <div className="illustrations-text ">
          <div>
            <h3>Comming soon!</h3>
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
