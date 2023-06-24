import React from 'react'
import { Card } from 'react-bootstrap'

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
        <div className="row g-3 g-md-5 gy-5">

          <div className="fs-1 fw-bold">
            Welcome to 4List
          </div>
          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none",
              marginBottom: "3.5vw"
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="./listings/cars">
                <Card.Title className="ms-2 fs-3 fw-bold">For Sale</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body className="fs-5 ms-2" style={{ overflowY: 'scroll', height: "250px", minHeight: "10vw" }}>
              <Card.Text>
                <Card.Link className="link-dark" href="./listings/cars/1">
                  White Tesla
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./listings/cars/2">
                  White Porsche
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark" href="./listings/cars">
                More...
              </Card.Link>
            </Card.Body>
          </Card>


          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none",
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="./listings/housing">
                <Card.Title className="ms-2 fs-3 fw-bold">Housing</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body className="fs-5 ms-2" style={{ overflowY: 'scroll', height: "250px", minHeight: "10vw" }}>
              <Card.Text>
                <Card.Link className="link-dark" href="./listings/housing/1">
                  Modern Stylish Home
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./listings/housing/2">
                  Minimal Design Home
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./listings/housing/3">
                  Small Red House
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./listings/housing/6">
                  Suburban Home
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./listings/housing/5">
                  Simple and Clean
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark" href="./listings/housing">
                More...
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none",
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="./listings/jobs">
                <Card.Title className="ms-2 fs-3 fw-bold">Jobs</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body className="fs-5 ms-2" style={{ overflowY: 'scroll', height: "250px", minHeight: "10vw" }}>
              <Card.Text>
                <Card.Link className="link-dark" href="./listings/jobs/1">
                  Security needed for San Francisco Concert Venue
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./listings/jobs/2">
                  Call Center Operator
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark" href="./listings/jobs">
                More...
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none",
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="./event">
                <Card.Title className="ms-2 fs-3 fw-bold">Events</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body className="fs-5 ms-2" style={{ overflowY: 'scroll', height: "250px", minHeight: "10vw" }}>
              <Card.Text>
                <Card.Link className="link-dark" href="./event/7">
                  Crafting
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./event/2">
                  Shen Yun
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./event/6">
                  Soccer
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark" href="/HCI-Team-4/Event">
                More...
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none",
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="./forum">
                <Card.Title className="ms-2 fs-3 fw-bold">Personal</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body className="fs-5 ms-2" style={{ overflowY: 'scroll', height: "250px", minHeight: "10vw" }}>
              <Card.Text>
                <Card.Link className="link-dark" href="./search/forum/john">
                  The John's discussion
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./search/forum/jane">
                  Jane's space
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark" href="./forum">
                More...
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            className="col-12 col-sm-6 col-xl-4"
            style={{
              border: "none",
              marginBottom: "2vw"
            }}
          >
            <Card.Header style={{ backgroundColor: '#ff8c00' }}>
              <Card.Link className="link-dark ms-2" href="./event">
                <Card.Title className="ms-2 fs-3 fw-bold">Community</Card.Title>
              </Card.Link>
            </Card.Header>
            <Card.Body style={{ overflowY: 'scroll', height: "250px", minHeight: "10vw" }} className="fs-5 ms-2">
              <Card.Text>
                <Card.Link className="link-dark" href="./event/1">
                  Christmas Party for East Bay Singles!
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./event/5">
                  Winter Dance Concert
                </Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link className="link-dark" href="./event/3">
                  Kitten Adoption Fair at Pet Food Express
                </Card.Link>
              </Card.Text>
              <Card.Link className="link-dark" href="./event">
                More...
              </Card.Link>
            </Card.Body>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default Home
