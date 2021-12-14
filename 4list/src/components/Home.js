import { height } from 'dom-helpers';
import React, {useState} from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Navbar from './Navbar';
import Navigation from './navigation/Navigation';

const Home = () => {

    return (
        <><div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto'}}>
            {/* <Navigation/> */}
            {/* <Navbar/> */}
            <br></br><br></br><br></br>
            
            <Card style={{ width: '15rem', height: '15rem', marginLeft: '20rem', marginRight: '5rem'}}>

                <Card.Header style={{ backgroundColor: '#ff8c00', textTransform: 'uppercase'}}><Card.Title><Card.Link className='link-dark ms-2' style={{textUnderlinePosition: 'off'}} href="/forum">For Sale</Card.Link></Card.Title></Card.Header>
                <Card.Body style={{overflow: 'auto' }}>
                    <Card.Text style={{ textColor: '#00000' }}>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Text style={{ textColor: '#00000' }}>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Text style={{ textColor: '#00000' }}>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>



                </Card.Body>
            </Card>
            <br />

            <Card style={{ width: '15rem', height: '15rem', marginLeft: '5rem', marginRight: '5rem'}}>
                <Card.Header style={{ backgroundColor: '#ff8c00', textTransform: 'uppercase' }}><Card.Title><Card.Link className='link-dark ms-2' style={{textUnderlinePosition: 'off'}} href="/forum">Personal</Card.Link></Card.Title></Card.Header>
                <Card.Body style={{overflow: 'auto' }}>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card style={{ width: '15rem', height: '15rem', marginLeft: '5rem', marginRight: '5rem' }}>
                <Card.Header style={{ backgroundColor: '#ff8c00', textTransform: 'uppercase' }}><Card.Title><Card.Link className='link-dark ms-2' style={{textUnderlinePosition: 'off'}} href="/forum">Housing</Card.Link></Card.Title></Card.Header>
                <Card.Body style={{overflow: 'auto' }}>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />


        </div><br></br><br></br><br></br><div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>

                        <Card style={{ width: '15rem', height: '15rem', marginLeft: '20rem', marginRight: '5rem'}}>
                            <Card.Header style={{ backgroundColor: '#ff8c00', textTransform: 'uppercase' }}><Card.Title><Card.Link className='link-dark ms-2' style={{textUnderlinePosition: 'off'}} href="/forum">Jobs</Card.Link></Card.Title></Card.Header>
                            <Card.Body style={{overflow: 'auto' }}>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                                </Card.Text>
                                <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                        <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                    <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                    </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />

                        <Card style={{ width: '15rem', height: '15rem', marginLeft: '5rem', marginRight: '5rem' }}>
                            <Card.Header style={{ backgroundColor: '#ff8c00', textTransform: 'uppercase' }}><Card.Title><Card.Link className='link-dark ms-2' style={{textUnderlinePosition: 'off'}} href="/forum">Community</Card.Link></Card.Title></Card.Header>
                            <Card.Body style={{ overflow: 'auto' }}>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card style={{ width: '15rem', height: '15rem', marginLeft: '5rem', marginRight: '5rem' }}>
                            <Card.Header style={{ backgroundColor: '#ff8c00', textTransform: 'uppercase' }}><Card.Title><Card.Link className='link-dark ms-2' style={{textUnderlinePosition: 'off'}} href="/event">Events</Card.Link></Card.Title></Card.Header>
                            <Card.Body style={{overflow: 'auto' }}>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Furniture</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link className='link-dark ms-2' href="#">Books</Card.Link>
                                </Card.Text>
                                <Card.Text>
                                <Card.Link className='link-dark ms-2' href="#">Cars</Card.Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        

                        <footer style={{marginTop: '20rem', textAlign: 'center'}}>HCI Class SFSU CS Dept. Fall 2021 Team 4</footer>

                  
            </div></>

    );
}

export default Home;