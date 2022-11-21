import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppointment = () => {
	const { user } = useContext(AuthContext);

	const url = `http://localhost:5000/bookings?email=${user?.email}`;

	const { data: bookings = [] } = useQuery({
		queryKey: ['bookings', user?.email],
		queryFn: async () => {
			const res = await fetch(url, {
				headers: {
					authorization: `bearer ${localStorage.getItem('userAccessToken')}`,
				},
			});
			const data = await res.json();
			return data;
		},
	});

	console.log('MyAppointment bookings length', bookings.length);
	
	return (
		<div>
			<h1 className='mb-5'>MyAppointment</h1>
			<Table hoverable={true}>
				<Table.Head>
					<Table.HeadCell></Table.HeadCell>
					<Table.HeadCell>Name</Table.HeadCell>
					<Table.HeadCell>email</Table.HeadCell>
					<Table.HeadCell>Treatment</Table.HeadCell>
					<Table.HeadCell>Date</Table.HeadCell>
					<Table.HeadCell>Time</Table.HeadCell>
					<Table.HeadCell>
						<span className='sr-only'>Edit</span>
					</Table.HeadCell>
				</Table.Head>
				<Table.Body className='divide-y'>
					{ bookings.length > 0 &&
						bookings?.map((booking, index) => (
						<Table.Row key={booking?._id}className='bg-white dark:border-gray-700 dark:bg-gray-800'>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								{index + 1}
							</Table.Cell>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								{user?.displayName}
							</Table.Cell>
							<Table.Cell>{user?.email}</Table.Cell>
							<Table.Cell>{booking?.treatment}</Table.Cell>
							<Table.Cell>{booking?.appointmentDate}</Table.Cell>
							<Table.Cell>{booking?.appointmentTime}</Table.Cell>
							<Table.Cell>
								<a
									href='/tables'
									className='font-medium text-blue-600 hover:underline dark:text-blue-500'
								>
									Edit
								</a>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</div>
	);
};

export default MyAppointment;
