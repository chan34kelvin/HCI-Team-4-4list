import React, {useState} from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Navbar from './Navbar';
import Navigation from './navigation/Navigation';

const Home = () => {

    return (
        <div className='m-4' class="scrollable">
            {/* <Navigation/> */}
            {/* <Navbar/> */}
            <CardGroup>
            <>
  <Card className='m-4' style={{ width: '25rem'}}>
 
   <Card.Header style={{backgroundColor: '#ff8c00'}}>For Sale</Card.Header>
    <Card.Body>
      <Card.Text>
      <Card.Link href="#">Furniture</Card.Link>
      </Card.Text>
      <Card.Text>
      <Card.Link href="#">Books</Card.Link>
      </Card.Text>
      <Card.Link href="#">Cars</Card.Link>
      
    </Card.Body>
  </Card>
  <br />

  <Card className='m-4' style={{ width: '25rem' }}>
    <Card.Header style={{backgroundColor: '#ff8c00'}}>Personal</Card.Header>
    <Card.Body>
    <Card.Text>
      <Card.Link href="#">Furniture</Card.Link>
      </Card.Text>
      <Card.Text>
      <Card.Link href="#">Books</Card.Link>
      </Card.Text>
      <Card.Link href="#">Cars</Card.Link>
    </Card.Body>
  </Card>
  <br />

  <Card className='m-4' style={{ width: '25rem' }}>
    <Card.Header style={{backgroundColor: '#ff8c00'}}>Housing</Card.Header>
    <Card.Body>
    <Card.Text>
      <Card.Link href="#">Furniture</Card.Link>
      </Card.Text>
      <Card.Text>
      <Card.Link href="#">Books</Card.Link>
      </Card.Text>
      <Card.Link href="#">Cars</Card.Link>
    </Card.Body>
  </Card>
  <br />

  
</>
            </CardGroup>

            <br></br><br></br>

            <CardGroup>
            <>
  <Card className='m-4' style={{ width: '25rem' }}>
    <Card.Header style={{backgroundColor: '#ff8c00'}}>Jobs</Card.Header>
    <Card.Body>
    <Card.Text>
      <Card.Link href="#">Furniture</Card.Link>
      </Card.Text>
      <Card.Text>
      <Card.Link href="#">Books</Card.Link>
      </Card.Text>
      <Card.Link href="#">Cars</Card.Link>
    </Card.Body>
  </Card>
  <br />

  <Card className='m-4' style={{ width: '25rem' }}>
    <Card.Header style={{backgroundColor: '#ff8c00'}}>Community</Card.Header>
    <Card.Body style={{overflow:'auto'}}>
    <Card.Text>
      <Card.Link href="#">Furniture</Card.Link>
      </Card.Text>
      <Card.Text>
      <Card.Link href="#">Books</Card.Link>
      </Card.Text>
      <Card.Link href="#">Cars</Card.Link>
    </Card.Body>
  </Card>
  <br />

  <Card className='m-4' style={{ width: '25rem' }}>
    <Card.Header style={{backgroundColor: '#ff8c00'}}>Events</Card.Header>
    <Card.Body>
    <Card.Text>
      <Card.Link href="#">Furniture</Card.Link>
      </Card.Text>
      <Card.Text>
      <Card.Link href="#">Books</Card.Link>
      </Card.Text>
      <Card.Link href="#">Cars</Card.Link>
    </Card.Body>
  </Card>
  <br />

  
</>
            </CardGroup>
        </div>
    );
}

export default Home;