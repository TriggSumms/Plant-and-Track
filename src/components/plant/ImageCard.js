
import React from 'react';
//import { Toast } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
//import { Container, Row, Col} from 'react-bootstrap'



const ImageCard = (props) => {



  return (

  <>


       <Image src={props.imageEntry.url} className="plantImg" rounded /> 


    </>

  )
}

export default ImageCard; 