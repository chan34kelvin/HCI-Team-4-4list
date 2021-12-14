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
    <div className="mt-2">
      {/* <Navigation/> */}
      {/* <Navbar/> */}
      <div className="container-xxl">
        <div className="row mx-auto g-3 g-md-5 gy-5">
          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none"
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="/listings/cars">
                <Card.Title>For Sale</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="/listings/cars/1">
                  White Tesla
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="/listings/cars/2">
                  White Porsche
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark ms-2" href="/listings/cars">
                More...
              </Card.Link>
            </Card.Body>
          </Card>
          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none"
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="#">
                <Card.Title>Personal</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="#">
                  Furniture
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="#">
                  Books
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="#">
                  Cars
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark ms-2" href="/personal">
                More...
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none"
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="/listings/housing">
                <Card.Title>Housing</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="/listings/housing/1">
                  Modern Stylish Home
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="/listings/housing/2">
                  Minimal Design Home
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="/listings/housing/3">
                  Small Red House
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark ms-2" href="/listings/housing">
                More...
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none"
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="/listings/jobs">
                <Card.Title>Jobs</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="/listings/jobs/1">
                  Security needed for San Francisco Concert Venue
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="/listings/jobs/2">
                  Call Center Operator
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark ms-2" href="/listings/jobs">
                More...
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none"
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="#">
                <Card.Title>Community</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body style={{ overflow: 'auto' }}>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="#">
                  Furniture
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="#">
                  Books
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="#">
                  Cars
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark ms-2" href="/community">
                More...
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none"
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="#">
                <Card.Title>Events</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="/event/7">
                  Crafting
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="/event/2">
                  Shen Yun
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark ms-2" href="/event/6">
                  Soccer
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark ms-2" href="/event">
                More...
              </Card.Link>
            </Card.Body>
          </Card>

          <footer style={{ marginTop: '20rem', textAlign: 'center' }}>
            HCI Class SFSU CS Dept. Fall 2021 Team 4
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Home
