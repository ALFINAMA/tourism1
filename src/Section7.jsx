import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook,faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import './sc6.css'
function Section7() {
  return (
    <div style={{marginBottom:'60px'}}>
        <div className='col-md-12 section-head'>
            <h2>Connect with us</h2>
            <span className='sub-head'></span>
        </div>

        <div style={{
            textAlign:'center'
        }}>
            <a href='https://www.youtube.com/keralatourism' target='_blank'>
                <FontAwesomeIcon className='icon' icon={faYoutube} style={{ color: 'red',scale:'4' }}/></a>
                <a href='https://www.facebook.com/keralatourismofficial' target='_blank'>
                <FontAwesomeIcon className='icon'  icon={faFacebook} style={{ color: '#3b5998',scale:'4' }} /></a>
                <a href='https://twitter.com/keralatourism' target='_blank'>
                <FontAwesomeIcon className='icon'  icon={faTwitter} style={{ color: '#1DA1F2',scale:'4' }} /></a>
                <a href='https://www.instagram.com/keralatourism/?hl=en' target='_blank'>
                <FontAwesomeIcon className='icon' icon={faInstagram} style={{ color: '#E1306C',scale:'4' }}/></a>
                <a href='https://www.keralatourism.org/video-gallery/whatsapp' target='_blank'>
                <FontAwesomeIcon className='icon ' icon={faWhatsapp} style={{ color: '#25D366',scale:'4' }}/></a>
                <a href='https://in.pinterest.com/keralatourism/' target='_blank'>
                <FontAwesomeIcon className='icon' icon={faPinterest} style={{ color: '#BD081C',scale:'4' }}/></a>
                <a href='https://www.linkedin.com/company/keralatourism' target='_blank'>
                <FontAwesomeIcon className='icon' icon={faLinkedin} style={{ color: '#0077B5',scale:'4' }}/></a>
                

    </div>
    <div className='col-md-12 tag-div' style={{textAlign:'center'}}>
        <h3 className='tag-head'>
        <span style={{color:'#3eb7ee'}}>#KeralaTourism  </span>is Live & Trending. Don't forget to follow & share your Kerala experience
            
        </h3>

        </div></div>
  )
}

export default Section7