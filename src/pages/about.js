import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import "../components/about.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Experiencenses from '../components/aboutItem'

const SecondPage = () => {
  let link_1 = useRef(null)
  let link_2 = useRef(null)
  let link_3 = useRef(null)
  let wrapperloader = useRef(null)

  const timeline_loader = gsap.timeline()
  const timeline_txt = gsap.timeline()

  useEffect(() => {
    timeline_loader.to(wrapperloader, 1, {
      top: "-100%",
      ease: "expo.inOut",
      delay: 0.1,
    })
    .to(wrapperloader, 0, {
      css: { display: "none" }
    })
  })

  useEffect(() => {
    timeline_txt.staggerFrom(
      [link_3, link_2, link_1],
      1.1,
      {
        y: 200,
        ease: "power4.out",
        delay: 0.3,
        skewY: 10,
        stagger: {
          amount: 0.2,
        },
      },
      0.15
    )
  })

  return (
    <Layout>
      <Seo title="About" />
      <div className="bg">
      <div class="wrapperloader" ref={el => (wrapperloader = el)}>
        <div class="loader"></div>
      </div>
      <div className="about home container">
      <div className="row-about">
        <div className="about-flex">

          <div className="about-flex-child">
            <div className="about-header">
              <h2 ref={el => (link_2 = el)}>About</h2>
            </div>
            <p className="about-contact">
            HI, my name is Matilda and I'm a Creative Developer who love to design and
            develop. Basically, to create.
            </p>
          </div>
          <div className="about-flex-child">
            <div className="about-header">
              <h2 ref={el => (link_1 = el)}>Skills</h2>
            </div>
            <p>
              JavaScript, React, Node, Git
              <br></br>
              Photoshop, Illustrator, After effects
              <br></br>
              Figma
              <br></br>
              Creative thinking
              <br></br>
              Teamwork and Collaboration
              <br></br>
              Happy and optimistic ;-)
            </p>
          </div>
        
        </div>
     
        <div className="about-cv">
            <div className="about-header">
              <h2 ref={el => (link_3 = el)}>Experience</h2>
            </div>
            <Experiencenses/>
        </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default SecondPage
