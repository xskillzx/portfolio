// @flow

import React, { Component } from 'react';
import './Footer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class BottomNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="bottom-nav" fixed="bottom" color="faded" light expand="md">
          <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#"><FontAwesomeIcon icon={faEnvelope} /></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}