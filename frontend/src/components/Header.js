import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
    return (
        <header>
            <Navbar variant="dark" bg="primary" expand="lg" collapseOnSelect >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >
                            ProShop
                        </Navbar.Brand>

                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/cart">

                                <Nav.Link >
                                    <i className='fas fa-shopping-cart'>
                                        Cart
                                    </i>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">

                                <Nav.Link>

                                    <i className='fas fa-user'></i>
                                        Login
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
