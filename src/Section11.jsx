import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import './sec11.css';
import { Container } from 'react-bootstrap';

function Section11() {
    const data=[
        {name:'Palayur Church Festival',i:'https://www.keralatourism.org/images/festivals/home-thumb/20181116112618_260_1.jpg'},
        {name:'Champakkulam Boat Race',i:'https://www.keralatourism.org/images/festivals/home-thumb/20181023063928_139_1.jpg'},
        {name:'Aanayoottu at Vadakkumnathan Temple',i:'https://www.keralatourism.org/images/festivals/home-thumb/20160628064542_365_1.jpg'},
        {name:'Njangattiri Aanayoottu',i:'https://www.keralatourism.org/images/festivals/home-thumb/20181108075932_170_1.jpg'},
        {name:'Athachamayam',i:'https://www.keralatourism.org/images/festivals/home-thumb/20170710102310_123_1.jpg'},
        {name:'Thiruvonam',i:'https://www.keralatourism.org/images/festivals/home-thumb/20171222121145_317_1.jpg'},
        
    
     ]
    const responsive = {
       
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div id='experience-kerala'>
    <div className='col-md-12 section-head' >
          <h2>What's happening</h2>
          
      </div>
  <Container fluid>
  <Carousel responsive={responsive} 
    infinite={true} 
   
    autoPlaySpeed={1000}>
      {data.map((image)=><div className='img-div1'>
      <img src={image.i} className='exp-img1'  >
      </img>
      <div className='exp-img-sps1'>{image.name}</div>
      </div>)}


</Carousel>
</Container>
<div className='text-center'>
                  <a href='https://www.keralatourism.org/event/' className='Touch'>MORE FESTIVALS & EVENTS&nbsp; <span style={{fontSize:'20px'}}>&#8594;</span> </a>
                </div>
</div>
  )
}

export default Section11