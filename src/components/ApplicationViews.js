import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import Register from "./auth/Register"
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

    </React.Fragment>
    );
}
export default ApplicationViews;