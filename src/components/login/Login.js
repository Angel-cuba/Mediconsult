import React from 'react';
import { LoginButton } from '../../utils/button/Button';

const Login = () => {
	return (
		<>
			<div className="flex flex-col text-center bg-sky-700 h-fit w-3/5 py-4 px-10 mx-auto">
				<h1 className="text-5xl pb-5">Login </h1>
				<LoginButton />
			</div>
		</>
	);
};

export default Login;
