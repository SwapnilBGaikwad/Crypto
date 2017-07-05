import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";


class HomePage extends React.Component {

    render() {
        let header = (<Navbar.Header>
            <Navbar.Brand>
                <span className="glyphicon glyphicon-home"/>
                <span> Home</span>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>);
        let item = (<NavItem href={'/'}>
            <span className="glyphicon glyphicon-list"/>
            <span> Encryption Algorithms</span>
        </NavItem>);
        return (
            <Navbar>
                {header}
                <Navbar.Collapse>
                    <Nav>
                        {item}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HomePage;