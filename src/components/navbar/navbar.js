import React, { Component, useState } from "react";
import {
    ListGroup,
    FormControl,
    Button,
    Card,
    InputGroup,
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    NavLink,
} from "react-bootstrap";
import "./Navbar.module.css";
import Link from "next/link";

function navbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">NFT-GURU</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/nft">Generator </Nav.Link>
                        <Nav.Link href="/blog">Blog </Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/tutorials">Tutorials</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default navbar;
