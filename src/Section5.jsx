import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './sec5.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Section5() {
  return (
    <div>
        <div className='col-md-12 section-head'>
            <h2>What's New</h2>
          
        </div>
        <Container>
            <Row>
                <Col >
                    <ul style={{listStyle:'none'}}>
                    
                        <li>
                            <a href='https://www.keralatourism.org/international-fairs-meets-may-2023 ' target='blank' style={{textDecoration:'none',color:'#337ab7'}}>International Trade Fair | May 2023</a>
                        </li>
                        
                    </ul>
                </Col>
                <Col>
                <ul style={{listStyle:'none'}}>
                <li>
                            <a target='blank'  style={{textDecoration:'none',color:'#337ab7'}} href='https://www.keralatourism.org/articlesonkerala/07_10_202220221007122436_1.pdf'> Kerala Tourism bags PATA Gold Award for its marketing campaign</a>
                        </li></ul></Col>
            </Row>
            <div className='text-center'>
                    <a href='https://www.keralatourism.org/latestnews/' className='Touch'>MORE NEWS&nbsp; <span style={{fontSize:'20px'}}>&#8594;</span> </a>
                  </div>
        </Container>
    </div>
  )
}

export default Section5