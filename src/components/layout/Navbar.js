import React from 'react';

const Sidebar = ({ avatar }) => {
	return (
		<div className='navbar navbar-vertical'>
			<div className='profile-picture m-1'>
				<img src={avatar} alt='avatar' className='avatar' />
			</div>
			<div className='items'>
				<div className='top'>
					<i className='fa fa-home py-1 active'></i>
					<i className='far fa-chart-bar py-1'></i>
					<i className='fas fa-tasks py-1'></i>
					<i className='fas fa-folder py-1'></i>
					<i className='far fa-calendar-check py-1'></i>
					<i className='fas fa-user-friends py-1'></i>
					<i className='fas fa-comment-alt py-1'></i>
					<i className='fas fa-sign-out-alt py-1'></i>
				</div>
				<div className='bottom'>
					<i className='fas fa-cog py-1 my-2'></i>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
