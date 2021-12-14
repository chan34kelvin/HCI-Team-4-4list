import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, Card, Button, Carousel } from 'react-bootstrap';
import './Listing.css';
import Logo from '../images/Logo.png'
import ReactDOM from "react-dom";
const Listing = () => {
    return (
        <Container>
            
  <Row>
    <Col className="background" sm={8}>
        <Row>
        <Col 
        sm={6}>
            <p className="h4 text-left mb-4">Tittle of Listing</p>
            <Card className=" text-black" style={{ height: '30rem' }}>
                <Card.Body>
                    <Carousel>
                         <Carousel.Item style={{'height':"350px"}}>
                          <img
                        className="d-block w-10"
                         src="house.jpg?text=First slide&bg=373940"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':"350px"}}>
                        <img
                        className="d-block w-10"
                        src="interior1.jpg?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':"350px"}}>
                        <img
                        className="d-block w-10"
                        src="interior2.jpg?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </Card.Body>
            </Card>
        </Col>
        <Col sm={6}>
            <p id='Details' className="h4">Details</p>
            <Card className="customcard" style={{ height: '30rem' }}>
                <Card.Body style={{ fontWeight:'bold' }}>
                    <Card.Text>
                    Type: Text
                 </Card.Text>
                 <Card.Text>
                    
                 Year Built: Text<br/>
                 </Card.Text>
                 <Card.Text>
                 Heating: Text<br/>
                 </Card.Text>
                 <Card.Text>
                 Cooling: Text<br/>
                 </Card.Text>
                 <Card.Text>
                 Parking: Text<br/>
                 </Card.Text>
                 <Card.Text>
                 Price/sq: Text<br/>
                 </Card.Text>
                 <Card.Text>
                 Kitchen: Text<br/>
                 </Card.Text>
                 <Card.Text>
                 Bathrooms: Text<br/>
                 </Card.Text>
                 <Card.Text>
                 Bedrooms: Text<br/>
                 </Card.Text>
                 <Card.Text>
                 Appliances: Text<br/>
                 </Card.Text>       
                </Card.Body>
            </Card>
        </Col>
        </Row>
        

    </Col>
    <Col sm={4}>
    <p id='price' className="h1 text-center mb-4">$180</p>
    <Button className="btns" >Contact seller</Button>{' '}
    <Button className="btns2" >Save for later</Button>{' '}
    <p id='price'style={{ fontWeight:'bold' }} className="h1 text-center mb-4">Location</p>

    <img src="map.webp" style={{ height: '13rem', marginLeft: '4rem' }}/>

    </Col>


    <Col className="background" sm={8}>
              
            <p id='dets' className="h4 text-left mb-4">Description</p>
           <Card className='continfo1'>
            <Card.Header>Car seller48            Date posted: 24/12/2020</Card.Header>
                <Card.Body className='cbody'>
                 <Card.Title>Special description</Card.Title>
                    <Card.Text>
                    Best house out there. clean Good neighborhood. 
                    </Card.Text>
                 </Card.Body>
            </Card>
        
        
        

    </Col>
    <Col sm={4}>
    <Card className='continfo'>
            <Card.Header>Contact Information</Card.Header>
                <Card.Body >
                 <Card.Title></Card.Title>
                    <Card.Text>
                         carseller@gmail.com
                    </Card.Text>
                 </Card.Body>
            </Card>
    </Col>
  </Row>
</Container>
    );
}

  

export default Listing;