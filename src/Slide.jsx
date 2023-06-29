import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import './slide.css';
import { Container } from 'react-bootstrap';

function Slide() {
    const data=[
        {name:'Houseboats',clr:'#9c597a',i:'https://www.keralatourism.org/images/homecontentimage/tab/house_boat2.jpg',text:'In Malayalam language Kettu refers to ‘dwelling structures’ ‘Vallam’ means boat. These are boats with a thatched roof cover over wooden hulls. The boat is made of planks of jack-wood joined together with coir. '},
        {name:'Champakkulam Boat Race',clr:'red',i:'https://www.keralatourism.org/images/homecontentimage/desktop/chambakulam_boat_race.jpg',text:'Boat races are synonymous with Kerala identity and Champakkulam is a name that resonates loudly across Gods Own Country'},
        {name:'Monsoon',clr:'orange',i:'https://www.keralatourism.org/images/homecontentimage/desktop/monsoon3.jpg',text:'Kerala has mainly two rainy seasons. The Southwest Monsoon that arrives in the month of June is called Edavappathy, as it comes in the middle of the month of Edavam on the Malayalam Calendar.'},
        {name:'Wildlife',clr:'green',i:'https://www.keralatourism.org/images/homecontentimage/desktop/Wild_life.jpg',text:'There are a number of popular wildlife sanctuaries in Kerala housing exotic and rare species of flora and fauna. '},
        
        
    
     {name:'Puttu and Kadala',clr:'#80CCFF',i:'https://www.keralatourism.org/images/homecontentimage/desktop/cusine4.jpg',text:'Puttu is made by steaming rice flour along with grated coconut in a Puttu Kudam, a cylindrical container. Kadala curry is made by cooking soaked black channa (Bengal gram) with chopped onion, spices and tomatoes.'},
    {name:'Canal Cruise in Alappuzha',clr:'brown',i:'https://www.keralatourism.org/images/homecontentimage/desktop/Canal_Cruise.jpg',text:'In Alappuzha, visitors can take the cruise through the canals on a variety of boats including small country boats, luxury houseboats, speedboats and motorboats'}]
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
            <h2>Experience Kerala</h2>
            
        </div>
    <Container fluid>
    <Carousel responsive={responsive} 
      infinite={true} 
     
      autoPlaySpeed={1000}>
        {data.map((image)=><div className='img-div'>
        <img src={image.i} className='exp-img' style={{borderBottomColor:`${image.clr}`}} >
        </img>
        <div className='exp-img-sps'>{image.name}</div>
        <div className="overlay" style={{backgroundColor:`${image.clr}`}}><div className='text'>{image.text}</div></div></div>)}
  
  
</Carousel>
</Container>
<div className='text-center'>
                    <a href='https://www.keralatourism.org/specialities/' className='Touch'>FIND MORE EXPERIENCES&nbsp; <span style={{fontSize:'20px'}}>&#8594;</span> </a>
                  </div>
</div>
  )
}

export default Slide