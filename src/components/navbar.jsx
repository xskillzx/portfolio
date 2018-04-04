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

export default class TopNav extends Component {
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
                <LinkContainer to="/">
                  <NavLink href="#">Projects</NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem>
                <LinkContainer to="/gaming">
                  <NavLink href="#">Gaming</NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem>
                <LinkContainer to="/about">
                  <NavLink href="#">About</NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem>
                <LinkContainer to="/contact">
                  <NavLink href="#">Contact</NavLink>
                </LinkContainer>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand href="/">Moisés Muñoz</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}