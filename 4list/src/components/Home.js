import React, { useState } from 'react'
import Navbar from './Navbar'
import Navigation from './navigation/Navigation'
import { Card, CardGroup } from 'react-bootstrap'

const Home = () => {
  //changes the title of the page
  if (document.getElementById('pageTitle')) {
    document.getElementById('pageTitle').innerHTML = '4List - Home Page'
  }

  return (
    <div className="mt-4" class="scrollable">
      {/* <Navigation/> */}
      {/* <Navbar/> */}
      <div className="container-xxl">
        <div className="row mx-auto">
          <div className="col-12">
            <CardGroup className="d-flex flex-wrap gap-4">
              <>
                <Card className="" style={{ width: '25rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                    For Sale
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Card.Link href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Link href="/listing">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />

                <Card className="" style={{ width: '25rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                    Personal
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Card.Link href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Link href="/personal">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />

                <Card className="" style={{ width: '25rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                    Housing
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Card.Link href="#">Modern Stylish House</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Link href="/listing">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />
              </>
            </CardGroup>

            <br></br>
            <br></br>

            <CardGroup className="d-flex flex-wrap gap-4">
              <>
                <Card className="" style={{ width: '25rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                    Jobs
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Card.Link href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Link href="/jobs">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />

                <Card className="" style={{ width: '25rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                    Community
                  </Card.Header>
                  <Card.Body style={{ overflow: 'auto' }}>
                    <Card.Text>
                      <Card.Link href="#">Furniture</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="#">Books</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="#">Cars</Card.Link>
                    </Card.Text>
                    <Card.Link href="/community">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />

                <Card className="" style={{ width: '25rem' }}>
                  <Card.Header style={{ backgroundColor: '#ff8c00' }}>
                    Events
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Card.Link href="/event/7">Crafting</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="/event/2">Shen Yun</Card.Link>
                    </Card.Text>
                    <Card.Text>
                      <Card.Link href="/event/6">Soccer</Card.Link>
                    </Card.Text>
                    <Card.Link href="/event">More...</Card.Link>
                  </Card.Body>
                </Card>
                <br />
              </>
            </CardGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
