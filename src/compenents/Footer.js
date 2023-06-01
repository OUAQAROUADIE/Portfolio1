import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
        <a href='#' className='footer__logo'>OUADIE</a>
        
        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#education'>Education</a></li>
            <li><a href='#projects'>Project</a></li>
            <li><a href='#contactme'>Contact Me</a></li>
        </ul>

        <div className='footer__socials'>
            <a href='https://facebook.com'><FaFacebookF /></a>
            <a href='https://instagram.com'><FiInstagram /></a>
            <a href='https://twitter.com'><IoLogoTwitter /></a>
        </div>
<div className="footer__copyright">
 <small>&copy; OUADIE Tutorials. All rights reserved</small>
</div>

    </footer>
  )
}

export default Footer