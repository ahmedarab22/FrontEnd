import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <section id='footer'>

      <footer>
        <a href='#' className='footer__logo'>Samow Tech</a>
        <ul className='permalinks'>

          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#Portfolio'>Portfolio</a></li>
          <li><a href='#Testimonials'>Tesmonials</a></li>
          <li><a href='#contacts'>Contacts</a></li> 
        </ul>

        <div className="footer__socials">
            <a href='https://facebook.com'><FaFacebookF/></a>
            <a href='https://isntagram.com'><FiInstagram/></a>
            <a href='https://twitter.com'><IoLogoTwitter/></a>

          </div>

          <div className="footer__copyright">
            <small>&copy; Samow Tech All rights reserved.</small>
          </div>

      </footer>
     
    </section>
     
  )
}

export default Footer
