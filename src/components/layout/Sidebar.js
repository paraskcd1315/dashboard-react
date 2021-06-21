import React, { Fragment } from 'react';
import Applicant from '../models/Applicant';
import graphics from '../../resources/images/graphics-1.svg';

const Sidebar = ({ username }) => {
	return (
		<Fragment>
			<div className='title p-1'>
				<h3>
					Hello {username},
					<br />
					You have 8 New Applications Today
				</h3>
			</div>
			<div className='graphic p-1'>
				<img src={graphics} />
			</div>
			<div className='application-lists p-2'>
				<div className='title p-1'>
					<h3>New Applicants</h3>
					<i className='fas fa-chevron-right'></i>
				</div>
				<div className='applicant-lists'>
					<Applicant name='Rosie Metts' appliedFor='iOS Developer' />
					<Applicant name='Jamie Scott' appliedFor='Nodejs Developer' />
					<Applicant name='Jamie Laurenson' appliedFor='Marketing Manager' />
					<Applicant name='Elizabeth Hurton' appliedFor='Junior UX Designer' />
				</div>
			</div>
		</Fragment>
	);
};

export default Sidebar;
