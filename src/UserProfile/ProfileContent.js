import { useMsal } from '@azure/msal-react';
import { Button } from '@mui/material';
import React, { useState } from 'react';
// import { loginRequest } from '../config/authConfig';
import { loginRequest } from '../config/authConfig';
import { callMsGraph } from '../config/graph';
import { ProfileData } from './ProfileData';

const Profile = () => {
	const { instance, accounts, inProgress } = useMsal();
	const [accessToken, setAccessToken] = useState(null);
	const [graphData, setGraphData] = useState(null);
	console.log(graphData);
	const name = accounts[0] && accounts[0].name;

	// function RequestAccessToken() {
	// 	const request = {
	// 		...loginRequest,
	// 		account: accounts[0],
	// 	};

	function RequestProfileData() {
		const request = {
			...loginRequest,
			//...msalConfig.auth.scopes,
			account: accounts[0],
		};
		console.log('request', request);
		// Silently acquires an access token which is then attached to a request for Microsoft Graph data
		instance
			.acquireTokenSilent(request)
			.then((response) => {
				// callMsGraph(response.accessToken).then((response) => setGraphData(response));
				console.log(response);
			})
			.catch((e) => {
				// instance.acquireTokenPopup(request).then((response) => {
				// 	callMsGraph(response.accessToken).then((response) => setGraphData(response));
				// });
				console.log(e);
			});
	}
	// Silently acquires an access token which is then attached to a request for Microsoft Graph data
	// instance
	// 	.acquireTokenSilent(request)
	// 	.then((response) => {
	// 		setAccessToken(response.accessToken);
	// 	})
	// 	.catch((e) => {
	// 		instance.acquireTokenPopup(request).then((response) => {
	// 			setAccessToken(response.accessToken);
	// 		});
	// 	});
	// }

	return (
		<div>
			<h2>Welcome {name}</h2>
			{graphData ? <ProfileData graphData={graphData} /> : <h3>Request Access Token</h3>}
			<Button variant="primary" onClick={RequestProfileData}>
				Request Access Token
			</Button>
		</div>
	);
};

export default Profile;
