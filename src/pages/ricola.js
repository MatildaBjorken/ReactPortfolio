import React from "react"
import { Link } from "gatsby"


import "../components/layout.css"
import Header from '../components/header'


const PageOne = () => (
    <div className='illustrations'>
        <Header/>

        <div className='illustrations-text'>
            <div >
                <h3>Coming Soon..</h3>
                <br></br>
                <p>This is a client brief that I am currently working on! I am creating something interactive that is connected to sustainability with the purpose of inspiring other companies.</p>
                
            </div>

        </div>

      
        <div className='header-center'>

            <div className='last-about'> 
            <Link to='/news' >About/Contact</Link>
            </div>

            <div className='next'>
            <nav>
            <Link to='/mini'>Next</Link>
            </nav>
            </div>

        </div>

       
    </div>
)

export default PageOne