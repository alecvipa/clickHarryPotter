import React from "react";
import {Nav, NavItem, Navbar, Badge} from "react-bootstrap";
import "./style.css";

function Menu (props) {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navstyle">
                <Navbar.Brand id="cgame" href="/">Clicky Game!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Click an image to begin</Nav.Link>
                        <Nav.Link>Score: {props.score} | Top score: {props.topScore} </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

}

export default Menu;
