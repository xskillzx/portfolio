// @flow

import React, { Component } from 'react';
import { withRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import './Navbar.css';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Example extends Component {
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
        <Navbar className="top-nav" color="faded" fixed="top" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <LinkContainer to="/foo/bar">
                  <NavLink href="#">Projects</NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem>
                <NavLink href="#">Gaming</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand href="/">Moisés Muñoz</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}