import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {

    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Exercise Tracker</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Exercise List</Nav.Link>
                        <Nav.Link href="/create">Create Exercise Log</Nav.Link>
                        <Nav.Link href="/user">Create User</Nav.Link>
                    </Nav>
                </Navbar>
            </Fragment>
        );
    } 

}

export default NavBar;