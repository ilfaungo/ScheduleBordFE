import React, { Component } from "react";
import {
  Router,
  Route,
  BrowserRouter,
  Switch,
  Redirect
} from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Col,
} from "react-bootstrap";

import "../assets/css/login.css";
import { createBrowserHistory } from "history";
import Admin from "./Admin.js";
import { connect } from "react-redux";
import { login, logout, requestLog } from "../action/getData";
import { NavLink } from "react-router-dom";
import Can from "../layouts/Can";


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  // login: () => dispatch(login()),
  // logout: () => dispatch(logout()),
  requestLog: (user, psw) => dispatch(requestLog(user, psw))
});

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: ""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  validateForm() {
    return this.state.user.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.requestLog(this.state.user, this.state.password);
  };

  render() {
 
    return (
      <Can
        role={this.props.user}
        perform="login:enter"
        yes={() => (
          <BrowserRouter>
            <Route exactpath="/admin/dashboard" component={Admin} />
          </BrowserRouter>
        )}
        no={() => (
          <div>
          <div
        className="full-page section-image"
        data-color="black"
        data-image={require("assets/img/full-screen-image-2.jpg").default}
      >
        <div className="content d-flex align-items-center p-0">
          <Container>
            <Col className="mx-auto" lg="4" md="8">
              <Form  className="form"onSubmit={this.handleSubmit}>
                <Card className={"card-login "}>
                  <Card.Header>
                    <h3 className="header text-center">Login</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Body>
                      <Form.Group>
                        <label>Email address</label>
                        <Form.Control
                          placeholder="Enter email"
                          type="text"
                          id="user"
                          onChange={this.handleChange}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                          id="password"
                          onChange={this.handleChange}
                        ></Form.Control>
                      </Form.Group>                   
                    </Card.Body>
                  </Card.Body>
                  <Card.Footer className="ml-auto mr-auto">
                    <Button className="btn-wd" type="submit" variant="warning">
                      Login
                    </Button>
                  </Card.Footer>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
        <div
          className="full-page-background"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/full-screen-image-2.jpg").default +
              ")",
          }}
        ></div>
      </div>
          </div>
        )}
      />
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
