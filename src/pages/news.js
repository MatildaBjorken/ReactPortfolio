import React from "react"
import { Link } from "gatsby"


import "../components/layout.css"
import Header from '../components/header'
import TwoCool from '../images/projects/twocool.png'
import First from '../images/news/first.png'
import Add from '../images/news/add.png'
import Edit from '../images/news/edit.png'
import Loadmore from '../images/news/loadmore.png'
import Bottom from '../images/news/bottom.png'



const PageOne = () => (
    <div className='illustrations'>
        <Header/>

        <div className='illustrations-text'>
            <div >
                <h3>Project Desctiption</h3>
                <br></br>
                <p>I worked with both the frontend and the backend where I created my own REST API that I used to connect the frontend and the backend. For the frontend, I created this website where users dynamically can add, edit and delete posts!</p>
            </div>

            <div>
                <h3>What was used?</h3>
                <br></br>
                <p>PHP
                    <br></br>
                    React
                    <br></br>
                    Datagrip
                </p>
            </div>
        </div>

        <div className='link-git'>
            <a className='link-a' href="https://github.com/MatildaBjorken/finalFrontend">link to the source code (frontend)</a>
            <br></br> <br></br>
            <a className='link-a' href="https://github.com/MatildaBjorken/CMSbackend">link to the source code (backend)</a>
        </div>

        <div className='internago'>
            <img className='' src={First}/>
        </div>


        <div className='illustrations-images '>
            <img className='' src={Edit}/>
            <img className='' src={Loadmore}/>
        </div>

        <div className='illustrations-last'>
            <img  src={Bottom}/>
        </div>
       
        <div className='header-center'>

        <div className='last-about'> 
            <Link to='/news' >About/Contact</Link>
        </div>

        <div className='next'>
            <nav>
                <Link to='/quiz'>Next</Link>
            </nav>
        </div>

    </div>
        </div>
)

export default PageOne