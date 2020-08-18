import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Jumbotron from "./Jumbotron";



const Styles = styled.div`
  .navbar {
    background-color: #CAD2C5  ;
    font-family: 'Crimson Text', serif;
    font-size:20px;
    padding-left: 25px;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #2F3E46;
    font-family: 'Crimson Text', serif;
    padding-left: 20px;
    &:hover {
      color: #84A98C;
    }
    .PLANTCOLLECTION {
        color: inherit;
        text-shadow: 0 0 1px  whitesmoke;
          /* Control the  timing of frames */
        animation: glow 7.0s ease infinite;
        -moz-animation: glow 5.0s ease infinite;
        -webkit-animation: glow 5.0s ease infinite;
      }
      @keyframes glow {
        0%,
        100% {
        /* text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px  #e62300, 0 0 40px  #e62300, 0 0 50px  #e62300, 0 0 60px #e62300, 0 0 70px #e62300; */
           text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5 vw .5 vw .1vw #806914;
          color: #FED128; 
        }
        50% {
        /* text-shadow: 0 0 20px #fff, 0 0 30px #37dbc0, 0 0 40px  #37dbc0, 0 0 50px  #37dbc0, 0 0 60px  #37dbc0, 0 0 70px  #37dbc0, 0 0 80px #37dbc0; */
             text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5 vw .5 vw .1vw #40340A;
          color: #806914; 
        }
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
                <Navbar.Brand href="">   
             PLANT & TRACK
                </Navbar.Brand>
                {/*LOGIN LOGOUT METHODS  */}
                {props.hasUser ? <span className="h" onClick={handleLogout}> Logout </span> :
                    <Link className="h" to="/login">Login</Link>}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link ><div className="PLANTCOLLECTION">
                                {props.hasUser ? <Link to="/home">PLANT COLLECTION</Link> : null}
                            </div></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                {props.hasUser ? <Link to="/DeadPlants">OLE PLANT GRAVEYARD</Link> : null}
                            </Nav.Link>
                        </Nav.Item>
{/*                         {props.hasUser ? <NavDropdown title="Additional Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item></NavDropdown.Item>
                            <NavDropdown.Item><Link to = 'https://plants.sc.egov.usda.gov/java/'><button>USDA PLANT DATABASE</button></Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to = 'https://www.bing.com/visualsearch/Microsoft/FlowerIdentification'><button>SEARCH BY PICTURE UPLOAD</button></Link></NavDropdown.Item>
                        </NavDropdown> : null} */}
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