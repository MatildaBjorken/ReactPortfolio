import React from "react"
import { Link } from "gatsby"


import "../components/layout.css"
import Header from '../components/header'

import Bild1 from '../images/illustrations/bildform1.jpg'
import Bild2 from '../images/illustrations/bildform2.jpg'
import Bild3 from '../images/illustrations/bildform3.jpg'
import Bild4 from '../images/illustrations/bildform4.jpg'

import Bild6 from '../images/illustrations/purple.png'


const PageOne = () => (
    <div className='illustrations'>
        <Header/>

        <div className='illustrations-text'>
            <div >
                <h3>Project Desctiption</h3>
                <br></br>
                <p>Just some of the illustrations I've made</p>
            </div>

            <div>
                <h3>What was used?</h3>
                <br></br>
                <p> Illustrator
                </p>
            </div>
        </div>

        <div className='illustrations-images '>
            <img className='' src={Bild1}/>
            <img className='' src={Bild2}/>
        </div>
        <div className='illustrations-images '>
            <img className='' src={Bild3}/>
            <img className='' src={Bild4}/>
        </div>
        <div className='illustrations-last'>
            <img  src={Bild6}/>
        </div>

      
        <div className='header-center'>

            <div className='last-about'> 
            <Link to='/news' >About/Contact</Link>
            </div>

            <div className='next'>
            <nav>
            <Link to='/project'>Next</Link>
            </nav>
            </div>

        </div>

       
    </div>
)

export default PageOne