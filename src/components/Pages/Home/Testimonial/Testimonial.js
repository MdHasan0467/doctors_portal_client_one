import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import person1 from '../../../../assets/images/people1.png'
import person2 from '../../../../assets/images/people2.png'
import person3 from '../../../../assets/images/people3.png'
import TestimonialLoader from './TestimonialLoader';

const Testimonial = () => {
    const reviews = [
			{
				id: 1,
				img: person1,
				name: 'Winson Herry',
				address: 'California',
				details:
					'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
			},
			{
				id: 2,
				img: person2,
				name: 'Winson Herry',
				address: 'California',
				details:
					'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
			},
			{
				id: 3,
				img: person3,
				name: 'Winson Herry',
				address: 'California',
				details:
					'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
			},
		];
    return (
			<div className='mt-52'>
				<div className='flex justify-between mx-7 lg:mx-0'>
					<div className='content'>
						<h2 className='text-lg flex items-center text-[#19D3AE] font-bold'>
							Testimonial
						</h2>
						<h1 className='lg:text-3xl flex items-center'>
							What Our Patients Says
						</h1>
					</div>
					<img className='lg:w-[192px] w-20' src={quote} alt='' />
				</div>
				<div className='grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{reviews.map((review) => (
						<TestimonialLoader
							key={review.id}
							review={review}
						></TestimonialLoader>
					))}
				</div>
			</div>
		);
};

export default Testimonial;