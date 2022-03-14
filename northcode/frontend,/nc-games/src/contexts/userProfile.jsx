import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './userContext'
import { getUser } from '../utils/api'

function Profile() {
	const [userProfile, setUserProfile] = useState('');
	const { user, setUser } = useContext(UserContext);

	const { username } = useParams();
	useEffect(() => {
		if (username !== undefined) {
			getUser(username).then((res) => {
				setUserProfile(res);
				setUser(res);
			});
		}
	}, [username]);
	return (
		<div >
			<h1 >Your Profile</h1>
			<div ></div>
			<div >
				<h3>Name: </h3>
				<h5>{userProfile['name']}</h5>
				<div >
					<img className='profile-img' src={userProfile['avatar_url']} />
				</div>
				<h3>Username: </h3>
				<h5>{userProfile['username']}</h5>
			</div>
		</div>
	);
}

export default Profile;