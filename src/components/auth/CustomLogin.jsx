import React, { useState, useEffect } from "react";
//import { Link, withRouter } from 'react-router-dom';
import "./CustomLogin.scss";
//import NavBar from './components/nav/NavBar';
//import PlantCard from "./plant/PlantCard"
//import ApplicationViews from "./components/ApplicationViews"
import { Login, Register } from "./Indexz";
/* import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register"; */

//import styled from 'styled-components';


export const CustomLogin = (props) => {
const setUser= props.setUser
  const [hasUser, setHasUser] = useState(1);
  let current = hasUser ? "Register" : "Login";
  let currentActive = hasUser ? "Login" : "Register";

  let rightSide;
  useEffect(() => {
    rightSide.classList.add("right");
  }, []);

  const handleActiveState = () => {
    if (hasUser) {
      rightSide.classList.remove("right");
      rightSide.classList.add("left");
    } else {
      rightSide.classList.remove("left");
      rightSide.classList.add("right");
    }

    setHasUser(!hasUser);
  };

  return (
    <>
    
    <div className="CustomLogin">
      <div className="login">
        <div className="container">
          {hasUser && <Login setUser={setUser} {...props} containerRef={(ref) => (current = ref)} />}
          {!hasUser && (
            <Register setUser={setUser}{...props}  containerRef={(ref) => (current = ref)} />
          )}
        </div>
        <RightSide
          current={current}
          currentActive={currentActive}
          containerRef={(ref) => (rightSide = ref)}
          onClick={handleActiveState.bind(this)}
        />
      </div>
    </div>


 

   </> 
  );
          }
const RightSide = (props) => {
  return (
    <>
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
    
    </>
  );
};
export default CustomLogin;