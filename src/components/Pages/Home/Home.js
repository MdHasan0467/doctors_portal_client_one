import React from 'react';
import Appointment from './Appointment/Appointment';
import Bannar from './Bannar';
import ContactUs from './ContactUs/ContactUs';
import Exceptional from './Exceptional/Exceptional';
import InfoCard from './InfoCard/InfoCard';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
	return (
		<div>
            <Bannar></Bannar>
			<InfoCard></InfoCard>
			<Services></Services>
			<Exceptional></Exceptional>
			<Appointment></Appointment>
			<Testimonial></Testimonial>
			<ContactUs></ContactUs>
		</div>
	);
};

export default Home;
