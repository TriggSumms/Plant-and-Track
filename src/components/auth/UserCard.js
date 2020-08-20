import React, { useState, useEffect } from 'react';
import "./UserCard.css"
import UserManager from '../../modules/UserManager';
//import Image from 'react-bootstrap/Image'




const UserCard = props => {
	const [liveCountz, setLiveCountz] = useState([])
	const [deadCountz, setDeadCountz] = useState([])
	console.log("TEST5", liveCountz)
	console.log("TEST6", deadCountz)
	const id = sessionStorage.getItem("activeUser")


	const gettheLiveCounts = () => {
		UserManager.getTheCount(id)
			.then(countFromAPI => {
				const LiveCount = countFromAPI.filter(officialCountAPI => {
					if (officialCountAPI.isDead === false) {
						return officialCountAPI
					}
				})
				setLiveCountz(LiveCount)
			})
	}


	const gettheDeadCounts = () => {
		UserManager.getTheCount(id)
			.then(countFromAPI => {
				const DeadCount = countFromAPI.filter(officialCountAPI => {
					if (officialCountAPI.isDead === true) {
						return officialCountAPI
					}
				})
				setDeadCountz(DeadCount)
			})
	}




	useEffect(() => {
		gettheLiveCounts();
		gettheDeadCounts();
	}, []);




	return (
		<>

			<div id="cardz">
				<h1 className="h1z">
				
				{props.user.user}</h1>
				<div className="imagez-crop">
					<img id="avatarz" src="https://images.unsplash.com/photo-1482849297070-f4fae2173efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></img>
				</div>
				<div id="bioz">
				
					<p>{props.user.bio}</p>
				</div>
				<div id="statz">
					<div className="colz">
						<p className="statz">{liveCountz.length}</p>
						<p className="labelz">Live Plants</p>
					</div>
					<div className="colz">
						<p className="statz">{deadCountz.length}</p>
						<p className="labelz">Dead Plants</p>
					</div>
				</div>
				<div ClassName="buttonz">
					<button className="buttonz1" onClick={() => props.history.push(`/users/${props.user.id}/edit`)} >Edit your Card</button>
					<button className="buttonz2" onClick={() => { props.history.push("/plants/new") }}> New Plant? </button>
				</div>
			</div>

		</>

	);
};

export default UserCard;