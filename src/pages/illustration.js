import React from "react"
import { Link } from "gatsby"


import "../components/layout.css"
import Header from '../components/header'

import Bild1 from '../images/illustrations/first.jpg'
import Bild2 from '../images/illustrations/second.jpg'
import Bild3 from '../images/illustrations/food.jpg'

const PageOne = () => (
    <div className='illustrations'>
        <Header/>

        <div className='illustrations-text'>
            <div >
                <h3>Project Desctiption</h3>
                <br></br>
                <p>Just some of the paintings I've made</p>
            </div>

            <div>
                <h3>What was used?</h3>
                <br></br>
                <p> Acrylic paint
                </p>
            </div>
        </div>

        <div className='illustrations-images '>
            <img className='' src={Bild1}/>
            <img className='' src={Bild2}/>
        </div>
     
        <div className='illustrations-last'>
            <img  src={Bild3}/>
        </div>

        <div className='header-center'>

            <div className='last-about'> 
            <Link to='/news' >About/Contact</Link>
            </div>

            <div className='next'>
            <nav>
            <Link to='/clock'>Next</Link>
            </nav>
            </div>

        </div>

       
    </div>
)

export default PageOne