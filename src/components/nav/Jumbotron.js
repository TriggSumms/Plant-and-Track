import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import plantBanner from '../../asset/plantBanner.jpg';
import JumboUserList from "../auth//JumboUserList"


const Styles = styled.div`
  .jumbo {
    background: url(${plantBanner}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    z-index: -2;
    margin: 0px;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;



export const Jumbotron = () => (

  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1><JumboUserList /></h1>

      </Container>
    </Jumbo>
  </Styles>
)



export default Jumbotron;