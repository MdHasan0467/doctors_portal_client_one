import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import AppointDataLoader from './AppointDataLoader';
import AppointModal from './AppointModal';  

const AvailableAppoint = ({ selectedDate }) => {
	const [treatment, setTreatment] = useState([]);
	
	const date = format(selectedDate, 'PP');

	const { data: appointmentData = [], refetch, isLoading } = useQuery({
		queryKey: ['appointOptions', date],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/appointOptions?date=${date}`);
			const data = await res.json();
			return data;
		}
			
	});

	if (isLoading) {
		return <Loading></Loading>
	}

	return (
		<div>
			<p className='text-center mt-5 text-[#19D3AE] font-bold text-2xl'>
				You have selected :{' '}
				<span className='text-blue-700 text-xl'>
					{format(selectedDate, 'PP')}
				</span>
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{appointmentData.map((service) => (
					<AppointDataLoader
						key={service._id}
						AppointOption={service}
						setTreatment={setTreatment}
					></AppointDataLoader>
				))}
			</div>

			{treatment?.name && (
				<AppointModal
					selectedDate={selectedDate}
					treatment={treatment}
					setTreatment={setTreatment}
					refetch={refetch}
				></AppointModal>
			)}
		</div>
	);
};

export default AvailableAppoint;
