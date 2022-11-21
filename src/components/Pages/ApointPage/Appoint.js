import React, { useState } from 'react';
import ApointPage from './ApointPage';
import AvailableAppoint from './AvailableAppoint';

const Appoint = () => {
	const [selectedDate, setselectedDate] = useState(new Date());
	return (
		<div>
			<ApointPage
				selectedDate={selectedDate}
				setselectedDate={setselectedDate}
			></ApointPage>
			<AvailableAppoint selectedDate={selectedDate}></AvailableAppoint>
		</div>
	);
};

export default Appoint;
