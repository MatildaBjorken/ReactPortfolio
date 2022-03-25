import React, { useEffect } from "react"
import { Link } from "gatsby"
import Mrcool from "../images/main/nunu.png"
import Clouds from "../images/clock/pomodoro-phones.png"
import Cow from "../images/main/rocket.png"
import Internago from "../images/internago/internago-phones.png"
import News from "../images/news/news-desktop.png"
import PlantBud from "../images/budplant.png"
import Magic from "../images/mini/rhytm-screen.png"
import Ricola from "../images/main/filippa.png"
import Trequipment from "../images/trequipment/trequipment-screen-tablet.png"
import Hagern from "../images/hagern/hagern-tablets-phones.png"
import Ruth from "../images/ruth/ruth-desktop-laptop.png"
import Anrecon from "../images/anrecon/anrecon-tablets.png"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Aos from "aos"
import "aos/dist/aos.css"
import Masonry from "react-masonry-css"

const IndexPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const breakpointColumnsObj = {
    default: 2,
    768: 1,
  }
  return (
    <Layout>
      <Seo title="Home" />
      <div className="home">
        <div className="img-grid">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <Link to="/ruth">
              <div className="img-plant img-top img-small">
                <img src={Ruth} alt="" data-aos="fade-up" />
                <Link to="/ruth" className="img-link">
                  HotelRuth
                </Link>
                <p className="year">2022</p>
              </div>
            </Link>

            <Link to="/internago">
              <div className="img-internago img-top img-small">
                <img
                  src={Internago}
                  alt="landing page of internago"
                  data-aos="fade-up"
                />
                <Link to="/internago" className="img-link">
                  Internago
                </Link>
                <p className="year">2022</p>
              </div>
            </Link>

            <Link to="/anrecon">
              <div className="img-internago img-top ">
                <img src={Anrecon} alt="" data-aos="fade-up" />
                <Link to="/anrecon" className="img-link">
                  Anrecon
                </Link>
                <p className="year">2022</p>
              </div>
            </Link>

            <Link to="/mini">
              <div className="img-magic img-top img-small">
                <img src={Magic} alt="" data-aos="fade-up" />
                <Link to="/mini" className="img-link">
                  MiniProjects
                </Link>
                <p className="year">2021</p>
              </div>
            </Link>

            <Link to="/clock">
              <div className="img-cloud img-top img-small">
                <img src={Clouds} alt="pomerado clock" data-aos="fade-up" />
                <Link to="/clock" className="img-link">
                  Pomodoro
                </Link>
                <p className="year">2021</p>
              </div>
            </Link>

            <Link to="/trequipment">
              <div className="img-internago img-top ">
                <img src={Trequipment} alt="" data-aos="fade-up" />
                <Link to="/trequipment" className="img-link">
                  Trequipment
                </Link>
                <p className="year">2022</p>
              </div>
            </Link>

            <Link to="/hagern">
              <div className="img-magic img-top img-small">
                <img src={Hagern} alt="" data-aos="fade-up" />
                <Link to="/hagern" className="img-link">
                  Hägern
                </Link>
                <p className="year">2021</p>
              </div>
            </Link>

            <Link to="/news">
              <div className="img-internago img-top ">
                <img src={News} alt="" data-aos="fade-up" />
                <Link to="/news" className="img-link">
                  NewsPaper
                </Link>
                <p className="year">2021</p>
              </div>
            </Link>
          </Masonry>
        </div>

        <div className="header-nav-small">
          <nav>
            <Link to="/about">About/Contact</Link>
          </nav>
        </div>
      </div>

      <footer>
        <div className="header-center">
          <div className="next">
            <Link to="/about">About/Contact</Link>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage
