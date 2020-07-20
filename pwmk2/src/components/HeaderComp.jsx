import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function HeaderComp(props) {
    

    return (
        <>
            <Navbar 
                bg = "light" 
                expand ="lg"
                variang ="light">

                    <Navbar.Brand href="/home">AS</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Item>Home</Nav.Item>
                            <Nav.Item>Projects</Nav.Item>
                            <Nav.Item>Blog</Nav.Item>
                            <Nav.Item><a href="https://github.com/AsisASotelo">Github</a></Nav.Item>

                        </Nav>


                    </Navbar.Collapse>


            </Navbar>

        </>
    );
}

export default HeaderComp;