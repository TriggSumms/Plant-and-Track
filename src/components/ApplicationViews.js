import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import GraveYard from "./home/GraveYard"
import { CustomLogin } from "./auth/CustomLogin.jsx"
import UserList from "./auth/UserList"
import UserEditForm from "./auth/UserEditForm"
import PlantList from "./plant/PlantList";
import PlantForm from "./plant/PlantForm";
import PlantDetail from "./plant/PlantDetail";
import PlantEditForm from "./plant/PlantEditForm";
import PlantJournalForm from "./plant/PlantJournalForm"
import PlantJournalDetail from "./plant/PlantJournalDetail"
import PlantGraveYardList from "./plant/PlantGraveYardList"
import PlantJournalEditForm from "./plant/PlantJournalEditForm"
import ImageForm from "./plant/ImageForm"




const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (


    <React.Fragment>
      <Route
        exact
        path="/home"
        render={(props) => {
          return <Home {...props} />;
        }} />

      {/*LOGIN Routes START  ************************************************************************************************************************/}
      {/* //pass the `setUser` function to Login component. */}
      <Route path="/login" render={props => {
        return <CustomLogin setUser={setUser} {...props} />
      }} />




      {/* USER Routes START  ************************************************************************************************************************/}
      <Route
        path="/userListz"
        render={props => {
          return <UserList {...props} />
        }} />

      <Route
        path="/users/:userId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <UserEditForm {...props} />
          } else {
            return <Redirect to="/home" />
          }
        }} />

      {/*END USER INFO  */}




      {/*DEADPlant Routes START  ************************************************************************************************************************/}
      <Route
        exact
        path="/DeadPlants"
        render={(props) => {
          return <GraveYard {...props} />;
        }} />

      <Route

        path="/DeadPlantListz"
        render={props => {
          if (hasUser) {
            return <PlantGraveYardList
              plantId={parseInt(props.match.params.plantId)}
              {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />







      <Route path="/plants/:plantId(\d+)/newimage"

        render={(props) => {
          return <ImageForm
            plantId={parseInt(props.match.params.plantId)}
            {...props} />
        }} />









      {/*Plant Routes START  ************************************************************************************************************************/}
      <Route
        path="/plants/new"
        render={(props) => {
          return <PlantForm {...props} />
        }} />

      <Route path="/plants/:plantId(\d+)" render={(props) => {
        if (hasUser) {
          return <PlantDetail
            plantId={parseInt(props.match.params.plantId)}
            {...props} />

        } else {
          return <Redirect to="/login" />

        }
      }} />

      <Route
        exact
        path="/plants/:plantId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <PlantEditForm {...props}
            />
          }
          else {
            return <Redirect to="/home" />
          }
        }} />

      <Route
        exact
        path="/plantListz"
        render={props => {
          if (hasUser) {
            return <PlantList {...props} />;//Home here is a placeholder value. 

          } else {
            return <Redirect to="/login" />
          }
        }} />


      {/*Plant Routes End  */}



      {/*Journal Routes START  *********************************************************************************************************************/}
      <Route path="/plants/:plantId(\d+)/newjournal"

        render={(props) => {
          return <PlantJournalForm
            plantId={parseInt(props.match.params.plantId)}
            {...props} />
        }} />


      <Route path="/journals/:journalId(\d+)" render={(props) => {
        if (hasUser) {
          return <PlantJournalDetail
            journalId={parseInt(props.match.params.journalId)}
            {...props} />

        } else {
          return <Redirect to="/login" />

        }
      }} />
      <Route
        exact
        path="/journals/:journalId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <PlantJournalEditForm {...props}
            />
          }
          else {
            return <Redirect to="/home" />
          }
        }} />
    </React.Fragment>
  );
}
export default ApplicationViews;