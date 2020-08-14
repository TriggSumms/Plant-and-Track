import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
import { CardDeck, Card } from 'react-bootstrap';
//import {CardDeck, Card} from 'react-bootstrap/CardDeck'
import "./PlantCard.scss"

//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
  timeStyle: "medium",
  dateStyle: "short"
});

//User clicks details button thus rendering the animals info
const PlantDetail = props => {
  const [journal, setJournal] = useState({ plantId: 0, id: 0, entryDate: timeStamp.format(Date.now()), journalEntry: "", journalTitle: "" });
  // const [plants, setPlants] = useState([]);


  const [isLoading, setIsLoading] = useState(true);
  console.log("yeejournals", journal)


  //Important Lesson learned below: if your gonna set the state.....dont pinpoint the property inside the "expandedPlant"
  //...it turns out that React cant pinpoint cause your nesting too deep. Rather pass the object and then set directions in the return.

  const expandedJournal = () => {
    PlantManager.getWithSpecificPlants(props.journalId)
      .then(journal => {
        console.log("yeettttt2", journal)
        setJournal(journal)
      }
      )
  }


  useEffect(() => {
    expandedJournal()
    setIsLoading(false);

  }, [props.journalId]);




  const handleDelete = () => {
    //invoke the delete function  and re-direct to the  list.
    setIsLoading(true);
    PlantManager.deleteJournal(props.journalId).then(() =>
      props.history.push("/home")
    );
  };


  //Currently the CSS lies in plantCard.css...(will need to remove)

  return (

    <>
      <div className="descriptionContainer">
        <CardDeck className="journalDescriptionCard">
          <Card border="primary" style={{ width: '20%' }}>
            {/* <Card.Img variant="top" src="plantboi.jpg" /> */}
            <Card.Body>
              <Card.Title>{journal.journalTitle} </Card.Title>
              <h8>created preciscely... <small>{journal.entryDate}</small></h8>
              <br />
              <Card.Text>
                <br />
                <p>{journal.journalEntry}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"> <p><button className="waves-effect waves-light btn" type="button" disabled={isLoading} onClick={handleDelete}>DELETE</button>
                <button className="waves-effect waves-light btn" type="button" onClick={() => props.history.push(`/journals/${journal.id}/edit`)}>Edit</button></p>
              </small>
            </Card.Footer>
          </Card>
          <br />
        </CardDeck>
      </div>






    </>

  )
}


export default PlantDetail;

