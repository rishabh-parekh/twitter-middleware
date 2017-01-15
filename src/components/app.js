import React, { Component } from 'react';
import UserList from './user_list';
import Header from './header';
import CommentList from './comments';
import PostList from './posts';
import TweetList from './tweets';

import tether from 'tether';
global.Tether = tether;



import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';



export default class App extends Component {

  componentWillMount() {
    this.state = this.state || {};
    this.state.isPrinting = false;

    // Run a media query through the matchMedia API
    const query = window.matchMedia('print')
    const queryListener = function(m) {
      this.setState({isPrinting: m.matches});
    }.bind(this)

    query.addListener(queryListener);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Header/>
            </Row>
            <Row>
              <div>
                <h2>Tweets # Bananas </h2>
              </div>
              <TweetList/>
            </Row>
            <Row>
              <div>
                <h2>Posts </h2>
              </div>
              <PostList/>
            </Row>
            <Row>
              <div>
                <h2>Comments </h2>
              </div>
              <CommentList/>
            </Row>
          </Container>
        </Jumbotron>
    </div>

    );
  }
}
