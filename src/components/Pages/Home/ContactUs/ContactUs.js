import React from 'react';
import Button from '../../../../Button/Button';
import appointment from '../../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
			<div className='mt-20' style={{ backgroundImage: `url(${appointment})` }}>
				<h1 className=' text-[#19D3AE] font-bold text-lg mt-10'>Contact Us</h1>
				<h1 className='text-xl lg:text-4xl text-white'>Stay connected with us</h1>
				<div className='flex justify-center mt-5'>
					<form className=''>
						<input
							type='text'
							placeholder='Your Email'
							className='input lg:w-[450px] block   mt-2 input-bordered'
						/>
						<input
							type='text'
							placeholder='Your subject'
							className='input lg:w-[450px] block  mt-2 input-bordered'
						/>
						<textarea
							className='textarea lg:w-[450px] w-full textarea-bordered  mt-2 block'
							placeholder='Your Review'
						></textarea>
						<div className='button mt-5 py-5 flex justify-center'>
							<Button>Submit</Button>
						</div>
					</form>
				</div>
			</div>
		);
};

export default ContactUs;