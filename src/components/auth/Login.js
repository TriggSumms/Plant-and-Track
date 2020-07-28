
import React, { useState } from "react"
import UserManager from "./../../modules/UserManager"
import { Link } from "react-router-dom";

//import "./style.scss";


/* export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
 */


const userName = ""
const password = ""
const Login = props => {
  const [credentials, setCredentials] = useState([]);

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };
  
  const tryLogin = (e) => {
    e.preventDefault();
    let loginAccepted = false
    UserManager.getAllUsers()
      .then(users => {
        users.find(user => {
          if (user.user === credentials.user && user.password === credentials.password) {
            loginAccepted = true
            sessionStorage.setItem("credentials", JSON.stringify(credentials))
            sessionStorage.setItem("activeUser", user.id)
            props.setUser(credentials)
            props.history.push("/home")
          }
          

        })
        if(loginAccepted === false) {
          window.alert("Incorrect username or password")
        }
      })


  }




  /* This is representing our sign in and registration forms. 
  We can adjust the visualization and functionality as needed */

  return (
    <div>
      <form onSubmit={tryLogin}>
        <fieldset>
          <h3>Please sign in</h3>
          <div className="formgrid">
            <input onChange={handleFieldChange} type="userName"
              id="user"
              placeholder="Username"
              required="" autoFocus="" />
            <label htmlFor="userName">Username</label>

            <input onChange={handleFieldChange} type="password"
              id="password"
              placeholder="Password"
              required="" />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <button type="submit">Sign in</button>
          <div className="register">New user? &nbsp;
      <Link to="/register"> Register a new account </Link>
      </div>
        </fieldset>
      </form>

      
    </div>
  );
};

export default Login;