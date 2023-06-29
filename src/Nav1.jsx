import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Navv.css'
import './top.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faPinterest, faLinkedin, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Nav1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);}
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      const navbarStyle = {
        backgroundColor: isScrolled ? 'rgba(0, 57, 115, 1)' : '',
        
      };
    
  return (
    <div>
   <div >
   <div className={isOpen?'navbar1':'navbar'} style={navbarStyle}>
     
     <div className="navbar-logo" >
       <a className="navbar-brand" href="#">
         <img src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017" height="40" alt="Logo" />
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
           <a href="#experience-kerala">EXPERIENCE KERALA</a>
         </li>
         <li>
           <a href="#top-destination">WHERE TO GO</a>
         </li>
         <li>
           <a href="https://www.keralatourism.org/where-to-stay">WHERE TO STAY</a>
         </li>
         <li>
           <a href="#things-to-do">THINGS TO DO</a>
         </li>
         <li>
           <a href="#plan-trip">PLAN YOUR TRIP</a>
         </li>
         <li>
           <a href="https://www.keralatourism.org/travelcare/">TRAVEL CARE</a>
         </li>
         <li>
           <a href="https://www.keralatourism.org/ebrochures">E BROCHURES</a>
         </li>
         <li>
           <a href="https://www.keralatourism.org/newsletter">E NEWSLETTERS</a>
         </li>
         {/* <li>
           <a href="/portfolio">
             <FontAwesomeIcon icon={faSearch} />
           </a>
         </li> */}
       </ul>
     </div>
  
   <div className="navbar-menu" onClick={toggleMenu}>
     {isOpen ? <FaTimes  style={{color:'white'}} /> : <FaBars style={{color:'white'}} />}
   </div>
 </div>
 </div>
    
    
     <Carousel activeIndex={index} onSelect={handleSelect}>

     <Carousel.Item>
       <img
         className="d-block w-100  cau-img"
         src="https://media.gettyimages.com/id/186139151/photo/breakers-at-sunset-on-varkala-beach.jpg?s=612x612&w=0&k=20&c=9Ch8Hyy9ytu97e_q6Yie80BUUX1nGmdnVUkZGp5XYBM="
         alt="Second slide"
       />
 
       <Carousel.Caption>
         <h3>Varkala Beach</h3>
         <p>Where dreams come true.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100 cau-img"
         src="https://shaadhiweddings.com/wp-content/uploads/2022/05/AP-MRRG_img6-1144x644.jpg"
         alt="First slide"
       />
      <Carousel.Caption>
         <h3>Destination Wedding</h3>
         <p>Where dreams come true.</p>
       </Carousel.Caption>
     </Carousel.Item>
    
     <Carousel.Item>
       <img
         className="d-block w-100  cau-img"
         src="https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2022/8/3/ilaveezhapoonchira-full-width.jpg"
         alt="Third slide"
       />
 
       <Carousel.Caption>
         <h3>Ilaveezhapoonchira</h3>
         <p>
          The  tranquil hillocks of ilaveezhapoonchira
         </p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100  cau-img"
         src="https://oldtownwatercraft.johnsonoutdoors.com/sites/default/files/2022-09/loon120_0.jpg"
         alt="Third slide"
       />
 
       <Carousel.Caption>
         <h3>Kayaking Competition</h3>
         <p>
          On August
         </p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100  cau-img"
         src="https://www.hiddenplaces.net/wp-content/uploads/bfi_thumb/hidden-places-travel-kerala-kayaking-1-no7uh9zj4wd833y8d1czusg6f0r11ug5vm0l8yf9sc.jpg"
         alt="Third slide"
       />
 
       <Carousel.Caption>
         <h3>Kutanad</h3>
         <p>
         A spectacular view of Karala's agriculture
         </p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
   </div>
  )
}

export default Nav1