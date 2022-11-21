import React from 'react';

const ServicesLoader = ({ service }) => {
    const { img, name, details } = service;
	return (
		<div>
			<div className='card card-compact w-96 bg-base-100 shadow-xl'>
				<figure>
					<img src={img} alt='Shoes' />
				</figure>
				<div className='card-body '>
					<h2 className='card-title flex justify-center'>{name}</h2>
					<p className='flex justify-center  w-[328px]'>{details}</p>
				</div>
			</div>
		</div>
	);
};

export default ServicesLoader;