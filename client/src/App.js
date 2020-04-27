import React, { useState } from 'react';
import Profile from './Components/profile';
import SearchForm from './Components/SearchForm';
import PlaceHolder from './Components/PlaceHolder';
import ProfileList from './Components/ProfileList';
import './Styles/App.css';

export default function App() {
	const [profile, setProfile] = useState(null);
	const [userName, setUserName] = useState(null);
	const [searching, setSearching] = useState('searching');

	return (
		<div className="App">
			<div className="header">
				<h5 onClick={() => setSearching(true)}>search users</h5>
				<h5 onClick={() => setSearching(false)}>saved users</h5>
			</div>
			<div className="body">
				{searching ? (
					<>
						<SearchForm
							userName={userName}
							setUserName={setUserName}
							setProfile={setProfile}
						/>
						<div className="profile-element">
							{profile ? <Profile profile={profile} /> : <PlaceHolder />}
						</div>
					</>
				) : (
					<ProfileList />
				)}
			</div>
		</div>
	);
}
