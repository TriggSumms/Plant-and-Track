import React, { useState, useEffect } from 'react';
import PlantManager from '../../modules/PlantManager';
import { CardDeck, Card, Col } from 'react-bootstrap';


//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
  timeStyle: "medium",
  dateStyle: "short"
});


const PlantDetail = props => {
  const [journal, setJournal] = useState({ plantId: 0, id: 0, entryDate: timeStamp.format(Date.now()), journalEntry: "", journalTitle: "" });
  const [isLoading, setIsLoading] = useState(true);
  //console.log("yeejournals", journal)


  //Important Lesson learned below: if your gonna set the state.....dont pinpoint the property inside the "expandedPlant"
  //...it turns out that React cant pinpoint cause your nesting too deep. Rather pass the object and then set directions in the return.

  const expandedJournal = () => {
    PlantManager.getWithSpecificPlants(props.journalId)
      .then(journal => {
        //console.log("yeettttt2", journal)
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


  //Currently the CSS lies in plantCard.css...

  return (

    <>


      <CardDeck style={{
        float: "center", padding: 0, display: "inline", justifycontent: "center",
        fontFamily: 'sans-serif', display: "center"
      }}>
        <Card border="primary" style={{
          float: "center", width: "50%", margin: 100,
          fontFamily: 'sans-serif', display: "flex"
        }}>

          <Card.Body  >
            <Card.Title style={{ width: '80%', color: "black" }}>
              Journal Recorded on: <small>{journal.entryDate}</small>
              <br />
              <br />
            Entry Title: "{journal.journalTitle}"<br /></Card.Title>

            <br />
            <Card.Text>
              <br />
              <h4>Entry: </h4><p>{journal.journalEntry}</p>
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


    </>


  )
}

export default PlantDetail;

