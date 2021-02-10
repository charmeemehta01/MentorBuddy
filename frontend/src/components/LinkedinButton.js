import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LinkedIn } from 'react-linkedin-login-oauth2';

const LinkedinButton = props => {
	const [errorMessage, setErrorMessage] = useState('');
	const history = useHistory();
	useEffect(() => {
		async function isLoggedIn() {
			/*
			localStorage.removeItem('jwt');
			localStorage.removeItem('name');
			localStorage.removeItem('email');
*/
			await fetch('http://localhost:8000/isLoggedin', {
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
			})
				.then(res => res.json())
				.then(data => {
					renderButton();
				});
		}
		isLoggedIn();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const handleSuccess = async data => {
		await fetch('http://localhost:8000/mentee/signin', {
			method: 'POST',
			headers: { code: data.code },
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				localStorage.setItem('jwt', data.jwt_token);
				localStorage.setItem('name', data.name);
				localStorage.setItem('email', data.email);
				props.onSetInfo(data.email, data.name);
				props.logIn(true);
				history.push('/allMentors');
			});
	};
	const handleFailure = error => {
		setErrorMessage(error.errorMessage);
		console.log(errorMessage);
		alert('Please try again.');
	};

	const renderButton = () => {
		if (localStorage.getItem('name') === ('' || null)) {
			return (
				<LinkedIn
					clientId="78yw3iw4zyi2to"
					redirectUri="http://localhost:3000/linkedin"
					onSuccess={handleSuccess}
					onFailure={handleFailure}
					scope="r_liteprofile+r_emailaddress"
					renderElement={({ onClick, disabled }) => (
						<div onClick={onClick} disabled={disabled}>
							{props.text}
						</div>
					)}
				/>
			);
		}
		return <>Welcome {localStorage.getItem('name')}!</>;
	};
	return renderButton();
};

export default LinkedinButton;
