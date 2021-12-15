import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  Button,
  Grid,
  p,
  Image,
} from 'react-bootstrap'
import './login.css'

import { useHistory } from 'react-router-dom'

import Logo from '../images/Logo.png'

const Login = (props) => {
  const history = useHistory()

  function login(event) {
    props.setLogin(Math.random())
    sessionStorage.setItem('cookie', true)
    event.preventDefault()
    history.goBack()
  }
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8" lg="7" xxl="6" className="d-flex flex-column gap-4">
          <form onSubmit={login}>
            <p className="h4 text-center mb-4">LOGIN</p>
            <label
              style={{ fontWeight: 'bold' }}
              className="black-text text-left "
            >
              Username
            </label>
            <input id="inputs" className="form-control py-3 fs-4" color="grey" />
            <br />
            <label
              htmlFor="defaultFormLoginPasswordEx"
              style={{ fontWeight: 'bold' }}
              className="grey-text"
            >
              Your password
            </label>
            <input type="password" id="inputs" className="form-control py-3 fs-4" />
            <p className="font-small blue-text d-flex py-3">
              <a href="#!" className="blue-text ml-1">
                Forgot Password?
              </a>
            </p>
            <div className="d-flex flex-column text-center mt-4 gap-4">
              <div className="d-flex flex-row align-items-center justify-content-center gap-4">
                <Image src="/apple.png" /> OR <Image src="/Glogo.png" />
              </div>
              <Button className="mx-auto" type="submit" id="Button">
                Login
              </Button>
            </div>
            <div className="text-left mt-4 ">
              Dont have an account?
              <p className="font-small blue-text d-flex pb-3">
                <a href="#!" className="blue-text ml-1">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
