import React from 'react';

const Applicant = ({ name, appliedFor }) => {
	return (
		<div className='applicant'>
			<div className='applicant-left'>
				<i className='far fa-user-circle'></i>
				<div className='applicant-info'>
					<h4>{name}</h4>
					<span>
						Applied for
						<span className='text-primary'>{appliedFor}</span>
					</span>
				</div>
			</div>
			<div className='applicant-right'>
				<button className='btn btn-dark-tertiary'>
					<i className='fas fa-envelope'></i>
				</button>
				<button className='btn btn-dark-tertiary'>
					<i className='fas fa-phone-alt'></i>
				</button>
			</div>
		</div>
	);
};

export default Applicant;
