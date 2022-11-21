import React from 'react';
import phone from '../../../../assets/icons/phone.svg'
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import InfoLoader from './InfoLoader';

const InfoCard = () => {
    const info = [
			{
				id: 1,
				img: clock ,
				name: 'Opening Hours',
				details: 'Lorem Ipsum is simply dummy text of the pri',
			},
			{
				id: 2,
				img:  marker ,
				name: 'Visit our location',
				details: 'Brooklyn, NY 10036, United States',
			},
			{
				id: 3,
				img:  phone ,
				name: 'Contact us now',
				details: '+000 123 456789',
			},
		]
    return (
			<div className='grid gap-6 sm:grid-cols-1 md:grid-cold-2 lg:grid-cols-3'>
            {
                info.map(data => <InfoLoader key={data.id} data={data}></InfoLoader>)
                }
			</div>
		);
};

export default InfoCard;