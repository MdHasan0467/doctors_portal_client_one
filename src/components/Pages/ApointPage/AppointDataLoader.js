import React from 'react';


const AppointDataLoader = ({ AppointOption, setTreatment }) => {
	const { name, slots } = AppointOption;
	return (
		<div className='card w-96  shadow-xl'>
			<div className='card-body '>
				<h2 className='text-3xl font-semibold text-center text-[#19D3AE]'>
					{name}
				</h2>
				<p className='text-center text-lg text-blue-700 font-semibold'>
					{slots.length > 0 ? slots[0] : ' Try Another Day'}
				</p>
				<p className='text-center'>
					{slots.length} {slots.length > 1 ? 'spaces' : ' space'} available
				</p>
				<div className='card-actions justify-center'>
					<label
						disabled={slots.length === 0}
						onClick={() => setTreatment(AppointOption)}
						htmlFor='appoint-modal'
						className='btn flex justify-start  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-0 text-white'
					>
						Book Appointment
					</label>
				</div>
			</div>
		</div>
	);
};

export default AppointDataLoader;