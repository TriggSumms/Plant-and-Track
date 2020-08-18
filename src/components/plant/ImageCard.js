
import React from 'react';
//import { Toast } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
//import { Container, Row, Col} from 'react-bootstrap'



const ImageCard = (props) => {



  return (

  <>

{/* <div >
    <picture> 
     <img src={props.imageEntry.url} className="plantImg" alt="plant picture" />
    </picture>
</div> */}
{/* <Container>
  <Row>

<Col xs={6} md={4}> */}

       <Image src={props.imageEntry.url} className="plantImg" rounded /> 

{/* </Col>
  </Row>
</Container> */}


    </>

  )
}

export default ImageCard; 