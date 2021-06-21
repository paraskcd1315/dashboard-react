import React from 'react';

const Header = ({ avatar, username }) => {
	return (
		<div className='header'>
			<i class='fas fa-bell'></i>
			<div class='user'>
				<span> {username} </span>
				<img src={avatar} alt='avatar' class='avatar' />
			</div>
		</div>
	);
};

export default Header;
