import React from 'react';
import Navbar from '../navbar/Navbar';

export const Layout = ({ children }) => {
	return (
		<>
			<div className="flex-col w-screen h-screen justify-center pt-4 bg-sky-800">
				<Navbar />

				{children}
			</div>
		</>
	);
};
