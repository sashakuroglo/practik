import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
class Panel extends Component {

    render() {
        return (
            <div>

                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="/panel">Сайт о книгах</Navbar.Brand>
                    <Navbar.Toggle aria-aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="float-right">
                            <Nav.Item><Nav.Link href="/">Главная страница</Nav.Link></Nav.Item>
                            <Nav className="justify-content-end">
                                <Nav.Item><Nav.Link href="/addBook">Добавить</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link href="/storeList">Список</Nav.Link></Nav.Item>

                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="navbar-right">
                        <Link to="/" className="nav-link" >
                            <FontAwesomeIcon icon={faSignOutAlt} /> Выход
                        </Link>
                    </Nav>
                </Navbar>

            </div>
        )
    }
}

export default Panel;