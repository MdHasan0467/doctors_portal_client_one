import React from 'react';
import img from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import Button from '../../../Button/Button';

const Bannar = () => {
	return (
		<div>
			<section className='hero' style={{ backgroundImage: `url(${bg})` }}>
				<div className='hero-content  grid grid-cols-1 lg:grid-cols-2'>
					<div className='lg:mr-5'>
						<h1 className='lg:text-5xl  text-start font-bold'>
							Your New Smile Starts Here
						</h1>

						<p className='py-6 text-start '>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. <br /> Lorem Ipsum has been the industry's standard
							dummy text ever since the
						</p>
						<Button>Get Started</Button>
					</div>
					<img
						src={img}
						className='max-w-sm lg:w-[594px] lg:h-[355px] lg:ml-5 rounded-lg shadow-2xl'
					/>
				</div>
			</section>
		</div>
	);
};

export default Bannar;