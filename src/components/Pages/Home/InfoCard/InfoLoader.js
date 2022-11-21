import React from 'react';

const InfoLoader = ({ data }) => {
    const { img, name, details } = data;
    return (
			<div className=' mt-5 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white md:card-side p-4 rounded-lg flex m-2'>
				<img className='w-20 mx-4' src={img} alt='Movie ' />

				<div className='card-body text-center'>
					<h2 className='card-title flex items-center'>{name}</h2>
					<p className='white flex items-center text-start'>{details}</p>
				</div>
			</div>
		);
};

export default InfoLoader;