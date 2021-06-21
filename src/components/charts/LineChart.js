import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
	labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Applications Recieved',
			data: [12, 10, 3, 5, 10, 3, 12],
			fill: true,
			backgroundColor: '#2e9cfd',
			borderColor: 'rgba(255, 99, 132, 0.2)'
		}
	]
};

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true
				}
			}
		]
	}
};

const LineChart = () => <Line data={data} options={options} height={90} />;

export default LineChart;
