import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


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

class Header extends Component {
  componentWillMount() {
    this.props.fetchHeader();

  }
  handlePrint() {
    window.print();
  }

  handleEmail() {
    console.log("Inside handleEmail");
  }

  render() {
    const { header } = this.props.header;
    return (
      <Row>
        <Col>
          <h1>{header.title}</h1>
          <h1 class="display-4">{new Date().toLocaleDateString()}</h1>
          <p class="lead">{header.purpose}</p>
            <Button tag="a" color="success" size="large" onClick={this.handleEmail}>
              Email
            </Button>
            <Button tag="a" color="success" size="large" onClick={this.handlePrint}>
              Print
            </Button>
        </Col>
      </Row>
    )
  }


}

function mapStateToProps(state) {
  return {header: state.header};
}

export default connect(mapStateToProps,actions)(Header);
