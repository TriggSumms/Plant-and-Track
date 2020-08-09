import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Jumbotron from "./Jumbotron";



const Styles = styled.div`
  .navbar {
    background-color: #59A96A  ;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;
    &:hover {
      color: black;
    }
  }
`;

const NavBar = props => {
    const handleLogout = () => {
        props.clearUser();
        props.history.push('/');
    }
    return (

        <Styles>
{/* Bringing in my Jumbotron = Webpage Banner */}
            <Jumbotron />
{/* lg needs adjustment */}
            <Navbar expand="lg">
                <Navbar.Brand href="/">PLANTBaby Tracker</Navbar.Brand>
{/*LOGIN LOGOUT METHODS  */}
                {props.hasUser ? <span className="" onClick={handleLogout}> Logout </span> :
                    <Link className="" to="/login">Login</Link>}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link>
                                {props.hasUser ? <Link to="/home">Plant Keepers HOME</Link> : null}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                {props.hasUser ? <Link to="/DeadPlants">Plant Graveyard</Link> : null}
                            </Nav.Link>
                        </Nav.Item>
                        {props.hasUser ? <NavDropdown title="Additional Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item></NavDropdown.Item>
                            <NavDropdown.Item>Lets see em</NavDropdown.Item>
                            <NavDropdown.Item>Something else</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> : null}
{/* SEARCH BAR FORM PLACEMENT */}
                        {/* {props.hasUser ? <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form> : null} */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}
export default withRouter(NavBar);