import React from 'react'
import './sec8.css'
function Section8() {
  return (
    <div style={{marginBottom:'60px'}} >
         <div className='col-md-12 section-head'>
            <h2>Plan Your Trip</h2>
            <span className='sub-head'></span>
        </div>
        <div className='container travel-icons'>
            <ul id='plan-trip'>
             
        <li><a href='https://www.keralatourism.org/where-to-stay/'><i className='hotel'>
                        <img className='' src='https://www.keralatourism.org/images/kt/tr-icon-hotel.png'>
                        </img></i> <span className='caption' >Where to Stay </span></a>
        </li>  
        <li><a href='https://www.keralatourism.org/ebrochures/'><i className='hotel'>
                        <img className='' src='https://www.keralatourism.org/images/kt/tr-icon-brochure.png'>
                        </img></i> <span className='caption' >E Brochures</span></a>
        </li>  
        <li><a href='https://www.keralatourism.org/visa-requirement/'><i className='hotel'>
                        <img className='' src='https://www.keralatourism.org/images/kt/tr-icon-visa.png'>
                        </img></i> <span className='caption' >Visa on Arrival </span></a>
        </li>  
        <li><a href='https://www.keralatourism.org/traveller/'><i className='hotel'>
                        <img className='' src="https://www.keralatourism.org/images/kt/tr-icon-info.png">
                        </img></i> <span className='caption' >Travel Info </span></a>
        </li>  
        <li><a href='https://www.keralatourism.org/travelcare'><i className='hotel'>
                        <img className='' src='https://www.keralatourism.org/images/kt/tr-icon-messageboard.png'>
                        </img></i> <span className='caption' >Travel Care</span></a>
        </li>  
        <li><a href='https://www.keralatourism.org/toiletsurvey'><i className='hotel'>
                        <img className='' src='https://www.keralatourism.org/images/kt/tr-icon-toilets.png'>
                        </img></i> <span className='caption' >Toilets</span></a>
        </li>  
        <li><a href='https://www.keralatourism.org/newsletter'><i className='hotel'>
                        <img className='' src="https://www.keralatourism.org/images/kt/tr-icon-newsletter.png">
                        </img></i> <span className='caption'> E Newsletter </span></a>
        </li>  
               <li><a href='https://www.keralatourism.org/yatrinivas/'><i className='hotel'>
                        <img className='' src="https://www.keralatourism.org/images/yatri-logo.png">
                        </img></i> <span className='caption' >Yathri Nivas </span></a>
        </li>  
             
            </ul>
        </div>
    </div>
  )
}

export default Section8
