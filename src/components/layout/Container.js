import React from 'react';
import Dashboard from '../pages/Dashboard';

const Container = ({ pageTitle, username }) => {
	return (
		<div className='container p-1'>
			<div className='page-title'>
				<h2>{pageTitle}</h2>
			</div>
			<Dashboard username={username} />
		</div>
	);
};

export default Container;
