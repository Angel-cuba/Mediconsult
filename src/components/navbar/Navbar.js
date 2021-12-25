import React from 'react';
import { useIsAuthenticated } from '@azure/msal-react';
import { LoginButton, SignOutButton } from '../../utils/button/Button';

const Navbar = () => {
	const isAuthenticated = useIsAuthenticated();
	return (
		<div className="w-4/5 mx-auto bg-slate-600 pb-8 p-3 mb-7 flex justify-between">
			{/* Navbar Component */}
			<p>{isAuthenticated ? <SignOutButton /> : <LoginButton />}</p>
		</div>
	);
};

export default Navbar;
