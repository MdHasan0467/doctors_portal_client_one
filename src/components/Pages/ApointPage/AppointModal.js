import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AppointModal = ({ refetch, treatment, selectedDate, setTreatment }) => {
	const { user } = useContext(AuthContext);
	console.log(user);
	const { name, slots } = treatment;
	console.log('slots', treatment);
	const date = format(selectedDate, 'PP');

	const handleBooking = (e) => {
		e.preventDefault();
		const form = e.target;
		const slot = form.slot.value;
		const name = form.name.value;
		const email = form.email.value;
		const number = form.number.value;

		const booking = {
			appointmentDate: date,
			appointmentTime: slot,
			treatment: treatment.name,
			patientName: name,
			email,
			number,
		};

		console.log(booking);

		fetch('http://localhost:5000/bookings', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(booking),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					setTreatment(null);
					toast.success('Booking successfully confirmed');
					refetch()
				}
				else {
					toast.error(data.message);
					setTreatment(null);
				}
			});
	};
	return (
		<>
			<input type='checkbox' id='appoint-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='appoint-modal'
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<h3 className='text-lg font-bold'>{name}</h3>
					<form onSubmit={handleBooking}>
						<input
							type='text'
							value={date}
							className='input disabled: mt-3 input-bordered w-full '
							readOnly
						/>
						<select name='slot' className='select mt-3 select-bordered w-full'>
							{slots?.map((slot, index) => (
								<option key={index} value={slot}>
									{slot}
								</option>
							))}
						</select>
						<input
							type='text'
							name='name'
							defaultValue={user?.displayName}
							placeholder='Your Name'
							className='input mt-3 input-bordered w-full '
							readOnly
						/>
						<input
							type='text'
							name='email'
							defaultValue={user?.email}
							placeholder='Your Email'
							className='input mt-3 input-bordered w-full '
							readOnly
						/>
						<input
							type='text'
							name='number'
							placeholder='Your Number'
							className='input mt-3 input-bordered w-full '
						/>

						<input
							type='submit'
							value='Submit'
							className='btn w-full  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-0 text-white mt-3 py-2 '
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default AppointModal;
