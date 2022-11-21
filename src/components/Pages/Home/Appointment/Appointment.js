import React from 'react';
import Button from '../../../../Button/Button';
import doctor from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'
const Appointment = () => {
    return (
			<div>
				<div
					className='card  grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-xl mt-52'
					style={{ backgroundImage: `url(${appointment})` }}
				>
					<img className='-mt-60 hidden lg:block' src={doctor} alt='' />
					<div className='card-body '>
						<h2 className='card-title text-[#19D3AE] flex items-center'>
							Appointment
						</h2>
						<h1 className='text-4xl text-white flex items-center'>
							Make an appointment Today
						</h1>
						<p className='text-white text-start'>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsumis that it has a more-or-less normal
							distribution of letters,as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop
							publishing packages and web page
						</p>
						<div className=' flex items-center'>
							<Button>Appoint Now</Button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Appointment;