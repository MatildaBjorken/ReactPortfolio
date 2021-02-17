import { Link } from "gatsby"

import React from "react"

const Header = () => (
  <header>
    <div className='header-container'>
      <div className='header-center'>

        <div className='header-name'> 
          <Link to='https://romantic-keller-760dd7.netlify.app'>Matilda Björk</Link>
        </div>

        <div className='header-nav'>
          <nav>
          <Link to='/about'>About/Contact</Link>
          </nav>
        </div>

      </div>
    </div>
  </header>
)


export default Header

