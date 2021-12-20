import React from 'react';

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = ({ graphData }) => {
	const { givenName, surname, userPrincipalName, id } = graphData;
	return (
		<div id="profile-div">
			<p>
				<strong>First Name: </strong> {givenName}
			</p>
			<p>
				<strong>Last Name: </strong> {surname}
			</p>
			<p>
				<strong>Email: </strong> {userPrincipalName}
			</p>
			<p>
				<strong>Id: </strong> {id}
			</p>
		</div>
	);
};
