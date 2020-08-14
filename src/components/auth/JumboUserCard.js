import React from "react";


const JumboUserCard = props => {

    const currentUser = parseInt(sessionStorage.getItem("activeUser"))

    if (props.user.userId === currentUser) {


        return (

            <div>
                <h1> Welcome, {props.user.user} </h1>
                <h2>...To your personal Plant Baby Assistant</h2>
            </div>

        );
    }
    else return null
}

export default JumboUserCard;