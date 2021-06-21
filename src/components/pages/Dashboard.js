import React from 'react';
import Sidebar from '../layout/Sidebar';
import Widget from '../models/Widget';
import LineChart from '../charts/LineChart';
import CircularProgress from '../charts/CircularProgress';

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
				<div className='material-content-left'>
					<div class='row col-3'>
						<Widget
							widgetHeader={{
								title: 'Total Applications',
								render: () => <i class='fas fa-ellipsis-h hover-extra'></i>
							}}
							widgetContent={() => {
								return (
									<div class='widget-content'>
										<div class='data'>
											7956
											<div class='percent-change text-secondary'>
												<i class='fas fa-long-arrow-alt-up'></i>
												3.59%
											</div>
										</div>
										<div style={{ width: 100, height: 100 }}>
											<CircularProgress percentage={75} color='#6643b3' />
										</div>
									</div>
								);
							}}
						/>
						<Widget
							widgetHeader={{
								title: 'Shortlisted Applications',
								render: () => <i class='fas fa-ellipsis-h hover-extra'></i>
							}}
							widgetContent={() => {
								return (
									<div class='widget-content'>
										<div class='data'>
											7956
											<div class='percent-change'>
												<i class='fas fa-long-arrow-alt-up'></i>
												3.59%
											</div>
										</div>
										<div style={{ width: 100, height: 100 }}>
											<CircularProgress percentage={25} color='#ffffff' />
										</div>
									</div>
								);
							}}
							extraClass='bg-primary'
						/>
						<Widget
							widgetHeader={{
								title: 'Rejected Applications',
								render: () => <i class='fas fa-ellipsis-h hover-extra'></i>
							}}
							widgetContent={() => {
								return (
									<div class='widget-content'>
										<div class='data'>
											7956
											<div class='percent-change text-tertiary'>
												<i class='fas fa-long-arrow-alt-down'></i>
												3.59%
											</div>
										</div>
										<div style={{ width: 100, height: 100 }}>
											<CircularProgress percentage={60} color='#fe5260' />
										</div>
									</div>
								);
							}}
						/>
					</div>
					<div class='row col-2'>
						<Widget
							widgetHeader={{
								title: 'Applications Recieved',
								render: () => {
									return (
										<div class='buttons'>
											<div class='hover-extra active'>This Year</div>
											<div class='hover-extra'>This Week</div>
											<div class='hover-extra'>Today</div>
											<div class='hover-extra'>
												<i class='fas fa-file-download'></i> Download Report
											</div>
											<i class='fas fa-ellipsis-v hover-extra'></i>
										</div>
									);
								}
							}}
							widgetContent={() => {
								return (
									<div class='widget-content'>
										<div class='data'>
											<LineChart />
										</div>
									</div>
								);
							}}
						/>
						<Widget
							widgetHeader={{
								title: 'Total Applications',
								render: () => <div></div>
							}}
							widgetContent={() => {
								return (
									<div class='widget-content'>
										<div
											class='data changeable'
											style={{ width: 80 + '%', marginTop: 3 + 'rem' }}>
											<dl>
												<dd class='percentage percentage-15 color-primary'>
													<span class='text text-primary'>Applications</span>
												</dd>
												<dd class='percentage percentage-30 color-secondary'>
													<span class='text text-secondary'>Shortlisted</span>
												</dd>
												<dd class='percentage percentage-70 color-tertiary'>
													<span class='text text-tertiary'> Rejected </span>
												</dd>
											</dl>
										</div>
									</div>
								);
							}}
						/>
					</div>
					<div class='row col-1'></div>
				</div>
				<div className='material-content-right'>
					<Sidebar username={username} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
