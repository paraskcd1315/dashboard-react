import React from 'react';
import Sidebar from '../layout/Sidebar';

const Dashboard = ({ username }) => {
	const date = new Date();
	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	return (
		<div className='material'>
			<div className='material-title'>
				<div className='material-title material-title-left'>
					<h3>
						{weekday[date.getDay()]},{' '}
						<span className='text-primary'>
							{date.getDate() +
								' ' +
								month[date.getMonth()] +
								' ' +
								date.getFullYear()}
						</span>
					</h3>
				</div>
				<div className='material-title material-title-right'>
					<a href='#' className='btn btn-primary'>
						<i className='fas fa-plus'></i> Add
					</a>
					<div className='searchbar'>
						<i className='fas fa-search'></i>
						<input type='search' placeholder='Search for Application here' />
					</div>
				</div>
			</div>
			<div className='material-content material-content-has-sidebar'>
				<div className='material-content-left'></div>
				<div className='material-content-right'>
					<Sidebar username={username} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
