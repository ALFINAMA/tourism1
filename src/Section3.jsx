import React from 'react'
import './sec3.css'

function Section3() {
    const things=[{name:'Sree Padmanabhaswamy Temple',i:'https://www.keralatourism.org/images/homecontentimage/desktop/padmanabhaswami-3.jpg'},
    {name:'Veli Tourist Village',i:'https://www.keralatourism.org/images/homecontentimage/desktop/Veli_Tourist_Village-2.jpg'},
    {name:'Munroe Island',i:'https://www.keralatourism.org/images/homecontentimage/desktop/Munroe_Island-05.jpg'},
    {name:'Agasthyakoodam',i:'https://www.keralatourism.org/images/homecontentimage/desktop/agasthyakoodam-01.jpg'},
    {name:'Palaruvi Waterfalls',i:'https://www.keralatourism.org/images/homecontentimage/desktop/palaruvi-04.jpg'},
    {name:'Payyambalam Beach',i:'https://www.keralatourism.org/images/homecontentimage/desktop/Payyambalam_Beach-01.jpg'},
  {name:'Chimmini Wildlife Sanctuary',i:'https://www.keralatourism.org/images/homecontentimage/desktop/Chimmini_Wildlife_Sanctuary.jpg'},
  {name:'Krishnapuram Palace',i:'https://www.keralatourism.org/images/homecontentimage/desktop/Krishnapuram_Palace_2.jpg'}]
  return (
    <div style={{backgroundColor:'#e3e7f1',padding:'12px'}} id='top-destination'>
       <div className='col-md-12 section-head'>
            <h2>Top Destinations</h2>
            
        </div>
        <div className="col-md-12  image-gallery">
      {things.map((image, index) => (
        <div key={index} className="col-md-3 col-sm-4 col-xs-6 image-wrapper">
          <img src={image.i} alt={image.name} className="gallery-image" style={{padding:'0'}} />
          <div className=" col-md-3 col-sm-4 col-xs-6 image-overlay">
            <h3 className="image-title">{image.name}</h3>
          </div>
        </div>
      ))}
    </div>
    <div className='text-center'>
                    <a href='https://www.keralatourism.org/destination/' className='Touch'>EXPLORE OUR DESTINATIONS&nbsp; <span style={{fontSize:'20px'}}>&#8594;</span> </a>
                  </div>
    </div>

  )
}

export default Section3