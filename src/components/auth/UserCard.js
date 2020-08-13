import React from "react";
import  "./UserCard.css"

const UserCard = props => {

  return (
      <>

{/*      <div className="user-card">
      <div className="user-card-content">
      <h1>User: {props.user.user}</h1>
        <picture>
          <img src={props.user.img} alt="User" />
        </picture>
        <h3>
          <span className="card-petname">
          </span>
      
        </h3>
      </div>
    </div>  */}

<div id="cardz">
	<h1 className="h1z">{props.user.user}</h1>
	<div className="imagez-crop">
		{/* <img id="avatar" src="https://drive.google.com/uc?id=1EVA3KUBLxCXF2EGmTf4LUB8F4yAvBrjl"></img> */}
	</div>
	<div id="bioz">
		<p>Hello, my name is John! Bacon ipsum dolor amet short ribs prosciutto strip steak, pig ham tongue buffalo beef ribs hamburger pork venison. </p>
	</div>
	<div id="statz">
		<div className="colz">
			<p className="statz">108</p>
			<p className="labelz">Live Plants</p>
		</div>
				<div className="colz">
			<p className="statz">457</p>
			<p className="labelz">Dead Plants</p>
		</div>
</div>
<div id="buttonz">
<button onClick={() => props.history.push(`/users/${props.user.id}/edit`)} >Edit your Card</button>
		<button id="msgz" onClick={() => { props.history.push("/plants/new") }}> New Plant? </button>
	</div>
</div>






</>

  );
};

export default UserCard;