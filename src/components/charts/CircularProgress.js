import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ percentage, color }) => {
	return (
		<CircularProgressbar
			value={percentage}
			text={`${percentage}%`}
			styles={buildStyles({
				textColor: color,
				pathColor: color,
				trailColor: '#3f4150'
			})}
		/>
	);
};

export default CircularProgress;
