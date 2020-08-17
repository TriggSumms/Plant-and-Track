
import React from 'react';
//import { Toast } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
//import { Container, Row, Col} from 'react-bootstrap'



const ImageCard = (props) => {

    const imgStyle = {
        maxHeight: 125,
        maxWidth: 90,
     
      }

  return (

  <>

{/*  <Toast>
    <Toast.Header>
      <strong className="mr-auto" closeButton="false" >{props.imageEntry.imageTitle}</strong>
      <button className="buttonboi" type="button" onClick={() => props.history.push(`/images/${props.imageEntry.id}`)}>
        
      </button>
      
  <small>{props.journalEntry.entryDate}</small>  
    </Toast.Header>
    <Toast.Body>
    <picture> 
     <img src={props.imageEntry.url} alt="plant picture" />
    </picture>
    </Toast.Body>
  </Toast>
 */}
{/* <Container>
  <Row>

<Col xs={6} md={4}> */}

      <Image src={props.imageEntry.url} style={imgStyle} className="plantImg" rounded />

{/* </Col>
  </Row>
</Container> */}


    </>

  )
}

export default ImageCard; 