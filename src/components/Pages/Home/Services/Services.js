import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png';
import whitening from '../../../../assets/images/whitening.png'
import ServicesLoader from './ServicesLoader';

const Services = () => {
    const services = [
			{
				id: 1,
				img: fluoride,
				name: 'Fluoride Treatment',
				details:
					'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
			},
			{
				id: 2,
				img: cavity,
				name: 'Cavity Filling',
				details:
					'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
			},
			{
				id: 3,
				img: whitening,
				name: 'Teeth Whitening',
				details:
					'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
			},
		];
    return (
			<div className='mt-16'>
				<div className='content'>
					<h2 className='text-[#19D3AE] font-semibold'>OUR SERVICES</h2>
					<h1 className='text-4xl font-bold'>Services We Provide</h1>
				</div>

				<div className='grid mt-20 grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
					{services.map((service) => (
						<ServicesLoader key={service.id} service={service}></ServicesLoader>
					))}
				</div>
			</div>
		);
};

export default Services;