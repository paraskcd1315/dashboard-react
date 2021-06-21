import React from 'react';
import WidgetHeader from '../layout/WidgetHeader';
import WidgetContent from '../layout/WidgetContent';

const Widget = ({
	widgetHeader: { title, render },
	widgetContent,
	extraClass
}) => {
	let eClasses;
	if (extraClass) {
		eClasses = extraClass;
	} else {
		eClasses = '';
	}
	return (
		<div className={`widget ${eClasses}`}>
			<WidgetHeader widgetTitle={title} render={render} />
			<WidgetContent data={widgetContent} />
		</div>
	);
};

export default Widget;
