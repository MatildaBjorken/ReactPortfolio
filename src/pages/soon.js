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
     <div className="bg soon-bg">
      <div className="illustrations soon container">
        <div className="illustrations-text row">
          <div>
            <h3>Comming soon!</h3>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default PageOne
