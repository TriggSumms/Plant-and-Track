import React, { useState } from "react"
import UserManager from "../../modules/UserManager"

import loginImg from "../../login.svg";





export const Login = (props) => {

  const [credentials, setCredentials] = useState({ password: "", user: "" });


  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };



  const tryLogin = (evt) => {
    //evt.preventDefault();
    let loginAccepted = false
    UserManager.getAllUsers()
      .then(users => {
        users.find(user => {
          if (user.user === credentials.user && user.password === credentials.password) {
            loginAccepted = true
            sessionStorage.setItem("credentials", JSON.stringify(credentials))
            sessionStorage.setItem("activeUser", user.id)
            props.setUser(credentials);
            props.history.push("/home");
            window.location.reload(false)

          }


        })
        if (loginAccepted === false) {
          window.alert("Incorrect username or password")
        }
      })


  }




  /* This is representing our sign in and registration forms. 
  We can adjust the visualization and functionality as needed */

  return (


    <div>
      <form >
        <div className="base-container" ref={props.containerRef}>

          <div className="content">
            <div className="image">
              <img src={loginImg} alt="Login" />
            </div>
            <div className="header">Sign In</div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input onChange={handleFieldChange} id="user" type="text" name="username" placeholder="username" required="" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={handleFieldChange} id="password" type="password" name="password" placeholder="password" required="" />
              </div>
            </div>
          </div>
          <div className="footer">
            {/* onClick={() => { props.history.push(`/home`) }}  */}
            <button type="button" className="btn" onClick={tryLogin}>
              Login
        </button>
          </div>
        </div>
      </form>
    </div>


  );
};