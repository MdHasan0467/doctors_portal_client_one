import React from 'react';
import img from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const ApointPage = ({ selectedDate, setselectedDate }) => {
	return (
		<div>
			<section className='hero' style={{ backgroundImage: `url(${bg})` }}>
				<div className='hero-content  grid grid-cols-1 lg:grid-cols-2'>
					<div className='lg:mr-5 flex justify-center'>
						<DayPicker
							mode='single'
							selected={selectedDate}
							onSelect={setselectedDate}
						/>
					</div>
					<img
						src={img}
						className=' lg:w-[594px] lg:h-[355px] lg:ml-5 rounded-lg shadow-2xl'
					/>
				</div>
			</section>
		</div>
	);
};

export default ApointPage;
