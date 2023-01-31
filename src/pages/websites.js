import React from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { imageData } from "../components/data"
import LocomotiveScroll from "locomotive-scroll"
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss"
import Footer from "../components/sideHeader"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryItem from "../components/gallery"

const PageOne = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref) {
      console.log(ref.current, "current")
      if (typeof window === "undefined" || !window.document) {
        return
      }
      const scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
        multiplier: 0.5,
      })
    }
  }, [])
  const images = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => (
      <GalleryItem
        key={url}
        src={require(`../images/projects/${url}.png`)}
        index={elementIndex}
        columnOffset={index * 10}
      />
    ))
  )
  if (typeof window === "undefined" || !window.document) {
    return null
  }

  return (
    <Layout>
      <Seo title="Websites" />
      <div className="main-container bg">
        <div className="scroll-container" data-scroll-container ref={ref}>
          <div className="content">
            <div className="gallery">
              {images}

              <div />
            </div>
            {/* <Footer /> */}
          </div>
          <div className="gallery-helper">Scroll to discover more</div>
        </div>
      </div>
    </Layout>
  )
}

export default PageOne
