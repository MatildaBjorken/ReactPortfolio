import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import Arrow from "../components/arrow"
import star from "../images/star.svg"
import Layout from "../components/layout"
import Seo from "../components/seo"
import gsap from "gsap"

const IndexPage = () => {
  let link_1 = useRef(null)
  let link_2 = useRef(null)
  let link_3 = useRef(null)
  let link_4 = useRef(null)
  let textmain = useRef(null)
  let textmain_copy = useRef(null)
  let wrapperloader = useRef(null)
  let container = useRef(null)

  const timeline_home = gsap.timeline()
  const timeline_txt = gsap.timeline()
  const timeline_loader = gsap.timeline()

  useEffect(() => {
    timeline_loader
      .to(wrapperloader, 1, {
        top: "100%",
        ease: "expo.inOut",
        delay: 0.1,
      })
      .fromTo(
        container,
        0.2,
        { opacity: 0, ease: "expo.inOut", delay: 0.3 },
        { opacity: 1 }
      )
  })

  useEffect(() => {
    timeline_home.fromTo(
      [textmain, textmain_copy],
      1.1,
      {
        y: 150,
        ease: "power4.out",
        delay: 0.4,
      },
      { y: 0 }
    )
  })

  useEffect(() => {
    timeline_txt.staggerFromTo(
      [link_1, link_2, link_3, link_4],
      1.1,
      {
        y: 150,
        ease: "power4.out",
        delay: 0.5,
        skewY: 10,
        stagger: {
          amount: 0.3,
        },
      },
      { y: 0, skewY: 0 },
      0.15
    )
  })

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove)
    }

    const mMove = el => {
      const y = el.clientY - 35

      gsap.to(".container", {
        y: y,
      })
      gsap.to(".menu-mask", {
        y: -y,
      })
    }

    addEventListeners()
    return () => removeEventListeners()
  }, [])

  // const targetRef = useRef(null);
  // const { width , height} = useResizeDetector({ targetRef });

  const listRef = useRef(null)
  const [width, setWidth] = useState()

  const getListSize = () => {
    const newWidth = listRef.current.clientWidth
    setWidth(newWidth)
  }

  useEffect(() => {
    getListSize()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", getListSize)
  }, [])

  return (
    <Layout>
      <Seo title="Home" />

      <div className="wrapperloader" ref={el => (wrapperloader = el)}>
        <div className="loader"></div>
      </div>
      <div>
        <section className="landing-wrapper">
          <ul className="menu" ref={el => (textmain = el)}>
            <div ref={listRef}>
              <h2 ref={el => (link_1 = el)}>
                HI, MY NAME IS <span className="emphasized">Matilda</span> AND{" "}
              </h2>
              <h2>
                I AM A <span className="emphasized">Creative Developer</span>{" "}
                WHO
              </h2>
              <h2>
                LOVE TO <span className="emphasized">design</span> AND{" "}
                <span className="emphasized">develop</span>.
              </h2>
              <h2>
                BASICALLY, TO <span className="emphasized">create</span>.
              </h2>
            </div>
          </ul>
          <div
            className="container"
            ref={el => (textmain_copy = el)}
            style={{ width: width + "px" }}
          >
            <ul className="menu-mask" ref={el => (container = el)}>
              <h2>
                HI, MY NAME IS <span className="emphasized">Matilda</span> AND{" "}
              </h2>
              <h2>
                I AM A <span className="emphasized">Creative Developer</span>{" "}
                WHO
              </h2>
              <h2>
                LOVE TO <span className="emphasized">design</span> AND{" "}
                <span className="emphasized">develop</span>.
              </h2>
              <h2>
                BASICALLY, TO <span className="emphasized">create</span>.
              </h2>
            </ul>
          </div>
          <section className="site-nav">
            <p>I love to work with</p>
            <div className="site-nav-grid">
              <div className="grid-item">
                <Link to="/soon" className="grid-item-link">
                  <div ref={el => (link_1 = el)}>
                    <h3 className="link">COMMERCIAL</h3>
                  </div>
                  <div>
                    <Arrow />
                  </div>
                </Link>
              </div>

              <div className="grid-item">
                <div class="line"></div>
                <Link to="/soon" className="grid-item-link">
                  <div ref={el => (link_2 = el)}>
                    <h3 className="link">WEBSITES</h3>
                  </div>
                  <div>
                    <Arrow />
                  </div>
                </Link>
              </div>

              <div className="grid-item">
                <Link to="/soon" className="grid-item-link">
                  <div ref={el => (link_3 = el)}>
                    <h3 className="link">MOTION</h3>
                  </div>
                  <div>
                    <Arrow />
                  </div>
                </Link>
              </div>

              <div className="grid-item">
                <div class="line"></div>
                <Link to="/soon" className="grid-item-link">
                  <div ref={el => (link_4 = el)}>
                    <h3 className="link">ILLUSTRATIONS</h3>
                  </div>
                  <div>
                    <Arrow />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </section>
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
