import React from 'react';
import axios from 'axios';
import '../Styles/SearchForm.css';

export default function profile(props) {
	const { userName, setUserName, setProfile } = props;

	async function handleSubmit(event) {
		event.preventDefault();
		if (userName) {
			axios
				.get(`/get-git-info/?name=${userName}`)
				.then(res => res.data)
				.then(data => setProfile(data));
		}
	}

	return (
		<form onSubmit={handleSubmit} className="search-bar">
			<label>
				Github Username:
				<input
					type="text"
					name="name"
					onChange={e => setUserName(e.target.value)}
				/>
			</label>
			<input type="submit" value="Submit" className="sub-button" />
		</form>
	);
}
