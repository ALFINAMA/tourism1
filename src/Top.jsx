// import React, { useState } from 'react'
// import './top.css'
// import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook,faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';



// function Top() {
  
//         const [isOpen, setIsOpen] = useState(false);
      
//         const toggleMenu = () => {
//           setIsOpen(!isOpen);
//         }
//   return (
//     <div className="navbar">
//         <div className='row1'>
//         <div className="navbar-logo " md={3}>
//          <a class="navbar-brand" href="#">
//   <img src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017"  height="35"/>
//   </a>
//       </div> 
//       <div  style={{paddingLeft:'200px'}}>
//         <div className="site-visit">
//         <div className='language-block'><a><span className='select-lang'>Languages&nbsp;</span>
//         <span className='current-lang'>ENG</span></a>
//         </div>
//             <div className="visit">
//                 <span className="txt">Visits since 1 Apr 2023 </span>
//                     <span className="count">
//               2,584,902              
//                         </span></div>
//                         <div className="visit visit-total">
//                 <span className="txt">Visits since 1 Jan 2007 </span>
//                     <span className="count">44,446,491
//                         </span></div>            
//                         </div>
                                         
//       <div className='navbar-icons ' md={8} style={{paddingLeft:'500px'}}  >
//         <ul>
//           <li>
//           <a href='https://www.youtube.com/keralatourism' target='_blank'>
//                 <FontAwesomeIcon className='icons' icon={faYoutube} style={{ color: 'red',scale:'1.5' }}/></a>
//           </li>
//           <li>
//           <a href='https://www.facebook.com/keralatourismofficial' target='_blank'>
//                 <FontAwesomeIcon className='icons'  icon={faFacebook} style={{ color: '#3b5998',scale:'1.5' }} /></a>
//           </li>
//           <li>
//           <a href='https://twitter.com/keralatourism' target='_blank'>
//                 <FontAwesomeIcon className='icons'  icon={faTwitter} style={{ color: '#1DA1F2',scale:'1.5' }} /></a>
//           </li>
//           <li>
//           <a href='https://www.instagram.com/keralatourism/?hl=en' target='_blank'>
//                 <FontAwesomeIcon className='icons' icon={faInstagram} style={{ color: '#E1306C',scale:'1.5' }}/></a>
//             </li>
//             <li>
//             <a href='https://www.keralatourism.org/video-gallery/whatsapp' target='_blank'>
//                 <FontAwesomeIcon className='icons ' icon={faWhatsapp} style={{ color: '#25D366',scale:'1.5' }}/></a>
//             </li>
//             <li>
//             <a href='https://in.pinterest.com/keralatourism/' target='_blank'>
//                 <FontAwesomeIcon className='icons' icon={faPinterest} style={{ color: '#BD081C',scale:'1.5' }}/></a>
//             </li>
//             <li>
//             <a href='https://www.linkedin.com/company/keralatourism' target='_blank'>
//                 <FontAwesomeIcon className='icons' icon={faLinkedin} style={{ color: '#0077B5',scale:'1.5' }}/></a>
//             </li>
           
          
//         </ul>
//       </div></div>
//         </div>
//       <div className='row'>
      
     
//       <div className={`navbar-links  ${isOpen ? 'active' : ''}`}  md={9}>
//         <ul >
//         <li >
//             <a href="/">EXPERIENCE KERALA</a>
//           </li>
//           <li>
//             <a href="/about">WHERE TO GO</a>
//           </li >
//           <li >
//             <a href="/services">WHERE TO STAY</a>
//           </li>
//           <li >
//             <a href="/portfolio">THINGS TO DO</a>
//           </li>
//           <li >
//             <a href="/contact">PLAN YOUR TRIP</a>
//           </li>
//           <li >
//             <a href="/">TRAVEL CARE</a>
//           </li>
//           <li >
//             <a href="/about">E BROCHURES</a>
//           </li>
//           <li >
//             <a href="/services">E NEWSLETTERS</a>
//           </li>
//           <li >
//             <a href="/portfolio"><FontAwesomeIcon icon={faSearch} /></a>
//           </li>
         
//         </ul>
//       </div>
//       </div>
//       <div className="navbar-menu" onClick={toggleMenu}>
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </div>
//     </div>
//   )
// }

// export default Top


import React, { useState } from 'react';
import './top.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faPinterest, faLinkedin, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Top() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen?'navbar1':'navbar'}>
     
        <div className="navbar-logo" >
          <a className="navbar-brand" href="#">
            <img src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017" height="35" alt="Logo" />
          </a>
        </div>
        <div className="site-visit"  >
            <div className="language-block">
              <a>
                <span className="select-lang">Languages&nbsp;</span>
                <span className="current-lang">ENG</span>
              </a>
            </div>
            <div className="visit">
              <span className="txt">Visits since 1 Apr 2023 </span>
              <span className="count">2,584,902</span>
            </div>
            <div className="visit visit-total">
              <span className="txt">Visits since 1 Jan 2007 </span>
              <span className="count">44,446,491</span>
            </div>
          </div>
        <div >
         
          <div className="navbar-icons"  >
            <ul className='icon-list'>
              <li>
                <a href="https://www.youtube.com/keralatourism" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="icons" icon={faYoutube} style={{ color: 'red', scale: '1.5' }} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/keralatourismofficial" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="icons" icon={faFacebook} style={{ color: '#3b5998', scale: '1.5' }} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/keralatourism" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="icons" icon={faTwitter} style={{ color: '#1DA1F2', scale: '1.5' }} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/keralatourism/?hl=en" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="icons" icon={faInstagram} style={{ color: '#E1306C', scale: '1.5' }} />
                </a>
              </li>
              <li>
                <a href="https://www.keralatourism.org/video-gallery/whatsapp" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="icons" icon={faWhatsapp} style={{ color: '#25D366', scale: '1.5' }} />
                </a>
              </li>
              <li>
                <a href="https://in.pinterest.com/keralatourism/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="icons" icon={faPinterest} style={{ color: '#BD081C', scale: '1.5' }} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/keralatourism" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="icons" icon={faLinkedin} style={{ color: '#0077B5', scale: '1.5' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      
      
        <div className={ isOpen ? 'navbar-links1' : 'navbar-links'} >
          <ul>
            <li>
              <a href="/">EXPERIENCE KERALA</a>
            </li>
            <li>
              <a href="/about">WHERE TO GO</a>
            </li>
            <li>
              <a href="/services">WHERE TO STAY</a>
            </li>
            <li>
              <a href="/portfolio">THINGS TO DO</a>
            </li>
            <li>
              <a href="/contact">PLAN YOUR TRIP</a>
            </li>
            <li>
              <a href="/">TRAVEL CARE</a>
            </li>
            <li>
              <a href="/about">E BROCHURES</a>
            </li>
            <li>
              <a href="/services">E NEWSLETTERS</a>
            </li>
            <li>
              <a href="/portfolio">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
          </ul>
        </div>
     
      <div className="navbar-menu" onClick={toggleMenu}>
        {isOpen ? <FaTimes  style={{color:'white'}} /> : <FaBars style={{color:'white'}} />}
      </div>
    </div>
  );
}

export default Top;