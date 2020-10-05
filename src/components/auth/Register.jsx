import React, { useState } from "react"
import UserManager from "../../modules/UserManager"
import loginImg from "../../login.svg";





export const Register = (props) => {
  const [credentials, setCredentials] = useState({ email: "", user: "", img: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png", bio: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };


  const handleRegister = evt => {
    evt.preventDefault();
    if (credentials.email === "" ||  credentials.user === "") {
      window.alert("Please input a username, email, and bio!");
    } else {


      // Create the credentials and redirect user to credentials list
      UserManager.createUser(credentials)
        .then(() => {

          sessionStorage.setItem("credentials", JSON.stringify(credentials))
          props.history.push("/")
        }
        );
    }
  };


  /* This is representing our sign in and registration forms. 
  We can adjust the visualization and functionality as needed */

  return (

    <div>
      <form onSubmit={handleRegister}>
        <div className="base-container" ref={props.containerRef}>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt="Register" />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="inputUserName"> Create your Username </label>
                <input onChange={handleFieldChange} id="user" type="user" name="user" placeholder="username..." required="" />
              </div>
              <div className="form-group">
                <label htmlFor="inputUserName">Email</label>
                <input onChange={handleFieldChange} id="email" type="email" name="email" placeholder="email@....com" required="" />
              </div>
{/*               <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input onChange={handleFieldChange} id="password" type="password" name="password" placeholder="password" required="" />
              </div> */}

              <div className="form-group">
                <label htmlFor="inputBio">Bio</label>
                <input onChange={handleFieldChange} id="bio" type="bio" name="bio" placeholder="Who are you?" required="" />
              </div>
            </div>
          </div>
          <button type="submit" className="btn">
            Register
        </button>
        </div>
      </form>
    </div>

  );
};