import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap';
import './NavBar.css';
import logo from '../Images/img.png'
class NavBar extends Component {

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand >Cайт о книгах</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="float-right">
              <Nav.Item><Nav.Link href="/">Главная страница</Nav.Link></Nav.Item>
              <Nav className="justify-content-end">
                <Nav.Item><Nav.Link href="/login">Вход</Nav.Link></Nav.Item>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;