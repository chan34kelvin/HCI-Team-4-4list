import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form } from 'react-bootstrap';
import './navbar.css';
 
const NavigationBar = () => {
    return (
        <div>
            <Navbar expand='lg' className='navbar-custom'>
                <Container  className='mb-4'>   
                    <Col xs lg="8"><Navbar.Brand>4List</Navbar.Brand></Col>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className='mx-auto'>
                            <Col ><Nav.Link>About</Nav.Link></Col>
                            <Col lg={9}><Nav.Link>My Account</Nav.Link></Col>
                            <Col lg={5}><Nav.Link>Post ad</Nav.Link></Col>
                        </Nav>  
                    </Navbar.Collapse>
        
                </Container>
            </Navbar>
            <Navbar fixed='' expand='lg' className='navbar-custom'>
                <Container >
                <Form className=''>
                    <Row className='justify-content-center d-flex'>
                        <Col sm={7}>
                            {/* <div className='md-6'> */}
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder='Search'></Form.Control>
                            </Form.Group>
                            {/* </div> */}
                        </Col>
                    
                        <Col lg={3}>
                            <Form.Group className="mb-3">
                                <Form.Select aria-label="Select state">
                                    <option>State</option>
                                    <option value="1">...</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group>
                                <Form.Select aria-label="Select City">
                                    <option>City</option>
                                    <option value="1">...</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group>
                                <Form.Control type='text' placeholder='Zip Code'></Form.Control>
                            </Form.Group>
                        </Col>
                        
                    </Row>
                </Form>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;