import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './sec1.css'

function Section1() {
  const things=[{name:'Sree Padmanabhaswamy Temple',i:'https://www.keralatourism.org/images/homecontentimage/desktop/padmanabhaswami-3.jpg'},
    {name:'Veli Tourist Village',i:'https://www.keralatourism.org/images/homecontentimage/desktop/Veli_Tourist_Village-2.jpg'},
    {name:'Munroe Island',i:'https://www.keralatourism.org/images/homecontentimage/desktop/Munroe_Island-05.jpg'},
    {name:'Agasthyakoodam',i:'https://www.keralatourism.org/images/homecontentimage/desktop/agasthyakoodam-01.jpg'}]

  return (
    <div>
       <Container fluid>
      <Row className="image-gallery">
        {things.map((image) => (
          <Col xs={6} md={3} style={{paddingLeft:'0',paddingRight:'0'}}>
            <div className="image-container">
              <img src={image.i}  className="image" />
              <div className=" image-overlay">
            <h3 className="image-title">{image.name}</h3>
          </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default Section1