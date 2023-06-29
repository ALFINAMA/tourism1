import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Sec2.css'
function Section2() {
    const data=[
        {name:'Houseboats',i:'https://www.keralatourism.org/images/homecontentimage/tab/house_boat2.jpg',text:'In Malayalam language Kettu refers to ‘dwelling structures’ ‘Vallam’ means boat. These are boats with a thatched roof cover over wooden hulls. The boat is made of planks of jack-wood joined together with coir. '},
        {name:'Champakkulam Boat Race',i:'https://www.keralatourism.org/images/homecontentimage/desktop/chambakulam_boat_race.jpg',text:'Boat races are synonymous with Kerala identity and Champakkulam is a name that resonates loudly across Gods Own Country'},
        {name:'Monsoon',i:'https://www.keralatourism.org/images/homecontentimage/desktop/monsoon3.jpg',text:'Kerala has mainly two rainy seasons. The Southwest Monsoon that arrives in the month of June is called Edavappathy, as it comes in the middle of the month of Edavam on the Malayalam Calendar.'},
        {name:'Wildlife',i:'https://www.keralatourism.org/images/homecontentimage/desktop/Wild_life.jpg',text:'There are a number of popular wildlife sanctuaries in Kerala housing exotic and rare species of flora and fauna. '},
        
        
    ]
    // {name:'Puttu and Kadala',i:'https://www.keralatourism.org/images/homecontentimage/desktop/cusine4.jpg',text:'Puttu is made by steaming rice flour along with grated coconut in a Puttu Kudam, a cylindrical container. Kadala curry is made by cooking soaked black channa (Bengal gram) with chopped onion, spices and tomatoes.'},
  return (
    <div>
     <div className='col-md-12 section-head'>
            <h2>Experience Kerala</h2>
            
        </div>
        <Container fluid>
      
      <Row className='row'>
        {data.map((image)=>
        <Col className='col'><img src={image.i} className='exp-img'  style={{borderBottom:'10px solid red'}}>
          </img>
          <div className='exp-img-sps'>{image.name}</div></Col>
        )}
        
        
      </Row>
     
                  <div className='text-center'>
                    <a href='' className='Touch'>FIND MORE EXPERIENCES&nbsp; <span style={{fontSize:'20px'}}>&#8594;</span> </a>
                  </div>
    </Container >
    </div>
  )
}

export default Section2