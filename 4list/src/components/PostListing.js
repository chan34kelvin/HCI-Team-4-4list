import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  FloatingLabel,
} from 'react-bootstrap'
import './Listing.css'
import React from 'react'
import { useHistory } from 'react-router-dom'

const PostListing = (props) => {
  if (document.getElementById('pageTitle')) {
    document.getElementById('pageTitle').innerHTML = '4List - Post an Ad'
  }

  const history = useHistory()

  React.useEffect(() => {
    console.log(sessionStorage.getItem("cookie") !== "true", sessionStorage.getItem("cookie"))
    if (sessionStorage.getItem('cookie') !== "true") {
      history.push('/login')
    }
  }, [props.login, history])

  function postAd(event) {
    event.preventDefault()
    history.push('/listing/1')
  }

  return (
    <Container>
      <Row>
        <Col className="background" sm={8}>
          <Row>
            <Col sm={6}>
              <p className="h4 text-left mb-4">Tittle of Listing</p>
              <Card className=" text-black" style={{ height: '30rem' }}>
                <Card.Body>
                  <img src="/HCI-Team-4/upload.png? slide&bg=282c34" alt="upload-button"/>
                  Click to upload image
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <p id="Details" className="h4">
                Details
              </p>
              <Card className="customcard" style={{ height: '30rem' }}>
                <Card.Body style={{ fontWeight: 'bold' }}>
                  <FloatingLabel controlId="floatingPassword" label="Type">
                    <Form.Control type="text" placeholder="Password" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Year Built"
                  >
                    <Form.Control type="text" placeholder="Password" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Heating">
                    <Form.Control type="text" placeholder="Password" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Cooling">
                    <Form.Control type="text" placeholder="Password" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Parking">
                    <Form.Control type="text" placeholder="Password" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="SQFT">
                    <Form.Control type="text" placeholder="Password" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Kitchen">
                    <Form.Control type="text" placeholder="Password" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Bathrooms">
                    <Form.Control type="text" placeholder="Password" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Bedrooms">
                    <Form.Control type="text" placeholder="Password" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Appliances"
                  >
                    <Form.Control type="text" placeholder="Password" />
                  </FloatingLabel>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col sm={4}>
          <input
            id="prices"
            type="number"
            placeholder="Price"
            size="lg"
            className="form-control text-center"
            color="grey"
          />
          <Button
            className="btns"
            style={{ marginTop: '1rem' }}
            onClick={postAd}
          >
            Post Listing{' '}
          </Button>{' '}
          <Button className="btns2" style={{ marginBottom: '0.3rem' }}>
            Save for later
          </Button>{' '}
          <p
            id="price"
            style={{ fontWeight: 'bold' }}
            className="h1 text-center mb-4"
          >
            Location
          </p>
          <img src="/HCI-Team-4/map.webp" style={{ height: '13rem', marginLeft: '4rem' }} alt="map"/>
        </Col>

        <Col className="background" sm={8}>
          <p id="dets" className="h4 text-left mb-4">
            Description
          </p>
          <Card className="continfo1">
            <Card.Header>Car seller48 Date posted: 24/12/2020</Card.Header>
            <Card.Body className="cbody">
              <Card.Title>Special description</Card.Title>
              <Card.Text>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Enter additional description"
                >
                  <Form.Control type="text" placeholder="Password" />
                </FloatingLabel>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="continfo3">
            <Card.Header>Contact Information</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Enter contact information"
                >
                  <Form.Control type="text" placeholder="Password" />
                </FloatingLabel>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PostListing
