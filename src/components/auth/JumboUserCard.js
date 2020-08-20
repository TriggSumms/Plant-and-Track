import React from "react";
import Image from 'react-bootstrap/Image'






const JumboUserCard = props => {

    const currentUser = parseInt(sessionStorage.getItem("activeUser"))

    if (props.user.userId = currentUser) {


        return (
<>

 
          
            <div className= "LOGOposition1">
                 <h1> Welcome, {props.user.user} </h1>
                <h2>...To Your Personal Plant & Track Assistant</h2> 
             </div>
             </>
        );
    }
    else {
        return (
            <div className= "LOGOposition2">
                <h2>    
                <picture> 
                  <Image src= "https://res.cloudinary.com/triggsumms/image/upload/v1597683570/CapstoneSumms/xody0zneudiatcdngtcc.png" className="plantLogo" /> 
                </picture>
                </h2>
            </div>
        )
    }
}

export default JumboUserCard;