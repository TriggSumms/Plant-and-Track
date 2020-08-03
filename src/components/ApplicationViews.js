import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import Register from "./auth/Register"
import PlantList from "./plant/PlantList";
import PlantForm from "./plant/PlantForm";
import PlantDetail from "./plant/PlantDetail";
import PlantEditForm from "./plant/PlantEditForm";
import PlantJournalForm from "./plant/PlantJournalForm"
//import PlantJournalList from "./plant/PlantJournalList"
import PlantJournalDetail from "./plant/PlantJournalDetail"
import PlantJournalEditForm from "./plant/PlantJournalEditForm"
//import UserList from "./auth/UserList"
//import UserEditForm from "./auth/UserEditForm"


// Check if credentials are in session storage returns true/false
//Redirects to login if nothing in session storage.
//const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

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


      {/* LOGIN ROUTE */}
      {/* //pass the `setUser` function to Login component. */}
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />
      <Route path="/register" render={props => {
        return <Register setUser={setUser} {...props} />
      }} />

      {/*USER INFO   */}
      {/* <Route path="/home"render={props => {return <UserList {...props} />}} /> */}
      {/* <Route path="/users/:userId(\d+)/edit"render={props => {if (hasUser) {return <UserEditForm {...props} />} else {return <Redirect to="/home" />} }} /> */}
      {/*END USER INFO  */}


      {/*Plant LIST Routes START  */}
      <Route
        exact
        path="/home"
        render={props => {
          if (hasUser) {
            return <PlantList {...props}/>  ;//Home here is a placeholder value. 
            
          } else {
            return <Redirect to="/login" />
          }
        }} />
        


{/*Plant LIST Routes END */}

{/*Plant Routes START  */}
        <Route path="/plants/:plantId(\d+)" render={(props) => {
                if (hasUser) {
                    return <PlantDetail
                        plantId={parseInt(props.match.params.plantId) }          
                        {...props} /> 

                } else {
                    return <Redirect to="/login" />

                }
       }} />
      <Route
        path="/plants/new"
        render={(props) => {
          return <PlantForm {...props} />
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
      {/*Plant Routes End  */}



{/*Journal Routes START  */}
      
      <Route
        path="/journals/new"
        render={(props) => {
          return <PlantJournalForm {...props} />
        }} />

      
       <Route path="/journals/:journalId(\d+)" render={(props) => {
                if (hasUser) {
                    return <PlantJournalDetail
                        journalId={parseInt(props.match.params.journalId) }          
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