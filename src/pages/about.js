import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { Link } from "gatsby"
import "../components/about.scss"
import MeImg from "../images/me.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

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

  // const vidRef = useRef()

  // useEffect(() => {
  //   vidRef.current.play()
  // }, [])
  return (
    <Layout>
      <Seo title="About" />
      <div class="wrapperloader" ref={el => (wrapperloader = el)}>
        <div class="loader"></div>
      </div>
      <div className="about home">
        <div className="about-img">
          {/* <video src={Me} ref={vidRef} muted autoPlay loop /> */}
        </div>

        <div className="about-flex">
          <div className="about-flex-first">
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
          <div>
            <div className="about-header">
              <h2 ref={el => (link_2 = el)}>Contact</h2>
            </div>
            <p className="about-contact">
              Sweden, Stockholm
              <br></br>
              +46 70 982 98 30
              <br></br>
              <a
                className="about-mail"
                href="mailto:matilda.bjork@bannerboy.se"
              >
                matilda.bjork@bannerboy.se
              </a>
              <br></br>
              LinkedIn
              <br></br>
            </p>
          </div>
          <img src={MeImg} />
        </div>

        <div className="about-cv">
          <div>
            <div className="about-header">
              <h2 ref={el => (link_3 = el)}>Experience</h2>
            </div>
            <div>
              <div className="about-item">
                <p>
                  Creative Developer
                  <br></br>
                  Bannerboy
                </p>
                <p>2022 - Present</p>
              </div>
              <div className="about-item">
                <p>
                  Frontend Developer
                  <br></br> Sphinxly
                </p>
                <br></br>
                <p>2021 - 2022</p>
              </div>
              <div className="about-item">
                <p>
                  Freelance
                  <br></br>
                  Developer and designer
                </p>
                <p>2021 - 2022</p>
              </div>
              <div className="about-item">
                <p>
                  Frontend Developer
                  <br></br>
                  Hyper Island
                </p>
                <p>2020 - 2022</p>
              </div>
              <div className="about-item">
                <p>
                  Assistant designer
                  <br></br>
                  Gunila Axen Design
                </p>
                <p>2020</p>
              </div>
              <div className="about-item">
                <p>
                  Assistant in studios
                  <br></br> Nationalmuseum
                </p>
                <p> 2018 - 2022 </p>
              </div>
              <div className="about-item">
                <p>
                  Art and Design program
                  <br></br> Kulturama
                </p>
                <p> 2017 - 2020 </p>
              </div>
            </div>
            <p></p>
          </div>
        </div>

        <div className="about-link">
          <Link className="about-back" to="/">
            <h3>Go Back :-)</h3>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
