import React from "react";
import {Nav, NavItem, Navbar, Badge} from "react-bootstrap";
import "./style.css";

class Menu extends React.Component {
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navstyle" className="Fter">
                <p className="CopyR">
                    Copyright 2020.
                </p>
               
            </Navbar>
        );
    }
}

export default Menu;