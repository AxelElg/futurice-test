import React from 'react';
import axios from 'axios';
import '../Styles/Profile.css';

export default function profile(props) {
	const { profile } = props;

	function saveProfile() {
		const profileForSave = JSON.stringify(profile);
		axios.post(`/?profile=${profileForSave}`);
	}

	return (
		<div className="profile">
			<h1 className="name">
				{profile.realName} (aka {profile.userName})
			</h1>
			<img src={profile.image} />
			<p className="text">{profile.text}</p>
			<h5>
				you can read more about this persons work{' '}
				<a href={profile.link} target="_blank">
					here
				</a>
			</h5>
			<button className="save-button" onClick={() => saveProfile()}>
				Save Profile
			</button>
		</div>
	);
}
