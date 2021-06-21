import React from 'react';

const WidgetHeader = ({ widgetTitle, render }) => {
	const Extras = render;
	return (
		<div className='widget-header'>
			<div className='title'>{widgetTitle}</div>
			<Extras />
		</div>
	);
};

export default WidgetHeader;
