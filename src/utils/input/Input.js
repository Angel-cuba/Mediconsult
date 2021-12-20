import React from 'react';

export const Input = ({ type = ' text', name, className, ...props }) => (
	<>
		<label>
			<p>{name}</p>
			<input {...props}></input>
		</label>
	</>
);
