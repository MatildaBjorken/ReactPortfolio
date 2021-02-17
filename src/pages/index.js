import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"

import Header from '../components/header'

import Mrcool from '../images/nunu.png'
import Clouds from '../images/clouds.png'
import Cow from '../images/handen.png'
import Internago from '../images/figma.png'
import News from '../images/news.png'
import PlantBud from '../images/budplant.png'
import Magic from '../images/magic.png'
import Handen from '../images/ricola.png'


const IndexPage = () => (
  <div className='home'>
    <Header/>
    <div className='img-grid'>

      <div className='img-cloud img-top'>
      <img src={Clouds} alt='pomerado clock'  />  
      <Link to="/clock" className='img-link'>Tic Tac</Link>
      </div>

      <div className='img-api img-top'>
      <img  src={Cow}  alt=''/>
      <Link to="/illustration" className='img-link'>Illustrations</Link>
      </div>

      <div className='img-news img-top'>
      <img  src={News}  alt=''/>
      <Link to="/news" className='img-link'>NewsAPI</Link>
      </div>

      <div className='img-magic img-top'>
      <img  src={Magic}  alt=''/>
      <Link to="/mini" className='img-link'>MiniProjects</Link>
      </div>
      
      <div className='img-cool img-top'>
      <img  src={Handen}  alt=''/>
      <Link to="/ricola" className='img-link'>Ricola</Link>
      </div>

      <div className='img-cool img-top'>
      <img  src={Mrcool}  alt='illustration'/>
      <Link to="/project" className='img-link'>Illustrations</Link>
      </div>

      <div className='img-internago img-top'>
      <img  src={Internago}  alt=''/>
      <Link to="/internago" className='img-link'>Internago</Link>
      </div>
      
     
      <div className='img-plant img-top img-last'>
      <img  src={PlantBud}  alt=''/>
      <Link to="/plantbud" className='img-link'>PlantBud</Link>
      </div>

      <div className='header-nav-small'>
          <nav>
          <Link to='/about'>About/Contact</Link>
          </nav>
        </div>

    </div>
  
  </div>
)

export default IndexPage
