import React from 'react'

function Section10() {
    const data=[{i:'https://www.keralatourism.org/images/homecontentimage/desktop/img-13.jpg',name:'Beaches'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/panorama.jpg',name:'Kerala Panorama'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/img-3.jpg',name:'Pilgrim Centres'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/artform-6.jpg',name:'Artforms'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/festivals.jpg',name:'Festivals'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/img-6.jpg',name:'Place of Interest'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/waterfall.jpg',name:'Waterfalls'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/places-of-interest.jpg',name:'Monuments'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/wild-life-2.jpg',name:'Wildlife'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/img-10.jpg',name:'Hills'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/Ayurveda.jpg',name:'Ayurveda'},
    {i:'https://www.keralatourism.org/images/homecontentimage/desktop/Backwater-kasargod_004.jpg',name:'Backwaters'}]
  return (

    <div>
        <div className='col-md-12 section-head'>
            <h2>Explore Photo Gallery</h2>
            <span className='sub-head'></span>
        </div>
            <div className='gallery' style={{width:'100%'}}>
                {data.map((pic)=>
                
                    <img src={pic.i} style={{width:'16.65%'}}>
                        
                    </img>
                    
                
               
)}
            

        </div>
        <div className='text-center'>
                    <a href='https://www.keralatourism.org/photo-gallery/' className='Touch'>BROWSE OUR GALLERY  &nbsp; <span style={{fontSize:'20px'}}>&#8594;</span> </a>
                  </div>
    </div>
  )
}

export default Section10