import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../config/authConfig';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const handleLogin = (instance) => {
	instance.loginPopup(loginRequest).catch((e) => {
		console.error(e);
	});
};

const handleSignOut = (instance) => {
	instance.logoutPopup().catch((e) => {
		console.error(e);
	});
};
export const LoginButton = () => {
	const { instance } = useMsal();
	return (
		<Button
			variant="contained"
			startIcon={<AddCircleOutlineIcon />}
			onClick={() => handleLogin(instance)}
		>
			Login with Microsoft
		</Button>
	);
};

export const SignOutButton = () => {
	const { instance } = useMsal();
	return (
		<Button
			variant="contained"
			endIcon={<AddCircleOutlineIcon />}
			onClick={() => handleSignOut(instance)}
		>
			Log out
		</Button>
	);
};
