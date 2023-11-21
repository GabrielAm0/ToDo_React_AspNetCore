import React from 'react'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap/'
import {NavLink} from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={NavLink} to='/'>ProAtividade</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                as={NavLink}
                                to='/clientes/lista'
                                className={(navData) => navData.isActive ? 'Active' : ''}>Clientes</Nav.Link>
                            <Nav.Link 
                                as={NavLink} 
                                to='/atividades/lista'
                                className={(navData) => navData.isActive ? 'Active' : ''}>Atividades</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown align="end" title="Gabriel" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Perfil
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Configurações
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Sair
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
