import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form } from 'react-bootstrap';
import './navbar.css';
import Logo from '../images/Logo.png'
 
const NavigationBar = () => {
    return (
        <div>
            <Navbar expand='lg' className='navbar-custom'>
                <Container  className='mb-1'>   
                    {/* <Col xs lg="8"> */}
                        <Navbar.Brand><img src={Logo} alt='Logo' className='logo img-responsive '/>
                        </Navbar.Brand>
                        {/* </Col> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className='mx-auto'>
                            <Col ><Nav.Link>About</Nav.Link></Col>
                            <Col lg={8}><Nav.Link>My Account</Nav.Link></Col>
                            <Col lg={4}><Nav.Link>Post ad</Nav.Link></Col>
                        </Nav>  
                    </Navbar.Collapse>
        
                </Container>
            </Navbar>
            <Navbar fixed='' expand='lg' className='navbar-custom'>
                <Container >
                <form class="row g-2 justify-content-center col-lg-6 offset-lg-3">
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="search" placeholder="Search"/>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control" id="inputCity" placeholder='City'/>
                    </div>
                    <div class="col-md-2">
                        <select id="inputState" class="form-select">
                        <option selected>State</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <input type="text" class="form-control" id="inputZip" placeholder='ZIP'/>
                    </div>
                    </form>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;