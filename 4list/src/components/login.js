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

const Login = () => {

  const history= useHistory()

  function login(event){
    event.preventDefault()
    history.go(-1)
  }
    return (
      <Container>
        <Row>
          <Col md="12">
            <form>
              <p className="h4 text-center mb-4">LOGIN</p>
              <label
                style={{ fontWeight: 'bold' }}
                className="black-text text-left "
              >
                Username
              </label>
              <input id="inputs" className="form-control" color="grey" />
              <br />
              <label
                htmlFor="defaultFormLoginPasswordEx"
                style={{ fontWeight: 'bold' }}
                className="grey-text"
              >
                Your password
              </label>
              <input type="password" id="inputs" className="form-control" />
              <p className="font-small blue-text d-flex pb-3">
                <a href="#!" className="blue-text ml-1">
                  Forgot Password?
                </a>
              </p>
              <div className="text-center mt-4 mx-right">
                <Image src="/apple.png" /> OR <Image src="/Glogo.png" />
                <Button type="submit" id="Button" onClick={login}>
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
