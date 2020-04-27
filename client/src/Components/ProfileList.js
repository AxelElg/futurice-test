import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/ProfileList.css';

export default function ProfileList(props) {
	const [profileArray, setProfileArray] = useState([]);

	useEffect(() => {
		axios
			.get('/all-profiles')
			.then(res => res.data)
			.then(data => setProfileArray(data))
			.catch(err => console.log(err));
	}, []);

	const removeProfile = id => {
		axios
			.put(`/?id=${id}`)
			.then(res => res.data)
			.then(data => setProfileArray(data));
	};

	const listBuilder = profile => (
		<div key={profile.id} className="profiles">
			<img className="left" src={profile.image} />
			<div className="right">
				<h3>{profile.realName}</h3>
				<p>{profile.text}</p>
				<a href={profile.link} target="_blank">
					Github
				</a>
			</div>
			<button className="remove" onClick={() => removeProfile(profile.id)}>
				Remove
			</button>
		</div>
	);

	return (
		<div className="list">
			{profileArray.length > 0 ? (
				profileArray.map(profile => listBuilder(profile))
			) : (
				<p>there are no saved profiles</p>
			)}
		</div>
	);
}
