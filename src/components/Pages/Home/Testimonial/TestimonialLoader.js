import React from 'react';

const TestimonialLoader = ({ review }) => {
	const { img, name, address, details } = review;
	return (
		<div className='card w-96 bg-teal-50  hover:bg-teal-100 text-gray-600'>
			<div className='card-body items-center text-center'>
				<h2 className='text-start'>{details}</h2>

				<div className='card-actions justify-end mt-5'>
					<img src={img} alt='' />
					<div className='contect m-5'>
						<h1 className=' flex items-center'>{name}</h1>
						<h1 className=' flex items-center'>{address}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialLoader;
