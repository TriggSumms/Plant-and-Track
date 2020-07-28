import React, { useState } from "react"
import UserManager from "./../../modules/UserManager"
//import "./style.scss";

/* 
export class Register extends React.Component {
  constructor(props) {
    super(props);
  }
 */


const Register = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "", user: "", img: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };



const handleRegister = evt => {
  evt.preventDefault();
  if (credentials.title === "" || credentials.url === "" || credentials.synopsis === "") {
    window.alert("Please input a username, password, and email");
  } else {
    
    
    // Create the credentials and redirect user to credentials list
    UserManager.createUser(credentials)
    .then(() => {
      sessionStorage.setItem("credentials", JSON.stringify(credentials))
      props.history.push("/login")
}
          );
    }
};


  /* This is representing our sign in and registration forms. 
  We can adjust the visualization and functionality as needed */

  return (
    <div>
      <form onSubmit={handleRegister}>
        <fieldset>
          <h3>New User? Register an Account</h3>
          <div className="formgrid">
            <input onChange={handleFieldChange} type="email"
              id="email"
              placeholder="email@...com"
              required="" autoFocus="" />
            <label htmlFor="inputEmail">Email address</label>

            <input onChange={handleFieldChange} type="password"
              id="password"
              placeholder="Password"
              required="" />
            <label htmlFor="inputPassword">Password</label>

            <input onChange={handleFieldChange} type="userName"
              id="user"
              placeholder="User Name"
              required="" />
            <label htmlFor="inputUserName">Create Your User Name</label>
          </div>
          <button type="submit">Create Account</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;