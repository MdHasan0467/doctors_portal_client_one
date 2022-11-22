import { useQuery } from '@tanstack/react-query';
import { Avatar, Table } from 'flowbite-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Shared/Loading/Loading';

const ManageDoctors = () => {
	const [deletingDoctor, setDeletingDoctor] = useState(null);
//! fetch for getting doctor data from mongodb.....
	const { data: doctors, isLoading , refetch} = useQuery({
		queryKey: ['doctors'],
		queryFn: async () => {
			try {
				const res = await fetch('http://localhost:5000/doctors', {
					headers: {
						authorization: `${localStorage.getItem('userAccessToken')}`,
					},
				});
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
	});

//! Cancel Button of modal...
		const closeModal = () => {
			setDeletingDoctor(null);
	};
	
//! Delete button of modal...
	const handleDeleteDoctor = (doctor) => {
		console.log(doctor);
		fetch(`http://localhost:5000/doctors/${doctor?._id}`, {
			method: 'DELETE',
			headers: {
				authorization: `${localStorage.getItem('userAccessToken')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					toast.success(`Dr. ${doctor.name} delete successfully!!`);
				} refetch();					
			});
	};

//! Loader.....
	if (isLoading) {
		return <Loading></Loading>;
	}
	return (
		<div>
			<h1>Manage Doctors {doctors?.length}</h1>

			<Table hoverable={true}>
				<Table.Head>
					<Table.HeadCell className='!p-4 sr-only'>S/N</Table.HeadCell>
					<Table.HeadCell>Avatar</Table.HeadCell>
					<Table.HeadCell>Name</Table.HeadCell>
					<Table.HeadCell>Email</Table.HeadCell>
					<Table.HeadCell>Specialty</Table.HeadCell>
					<Table.HeadCell>
						<span className='sr-only'>Edit</span>
					</Table.HeadCell>
				</Table.Head>
				{doctors?.map((doctor, index) => (
					<Table.Body className='divide-y '>
						<Table.Row className='bg-white border-2 shadow-2xl dark:border-gray-700 dark:bg-gray-800 '>
							<Table.Cell className='!p-4'>0{index + 1}</Table.Cell>
							<Table.Cell>
								<Avatar
									className=''
									img={doctor?.image}
									rounded={true}
									bordered={true}
								/>
							</Table.Cell>
							<Table.Cell>{doctor?.name}</Table.Cell>
							<Table.Cell>{doctor?.email}</Table.Cell>
							<Table.Cell>{doctor?.specialty}</Table.Cell>
							<Table.Cell>
								<label
									onClick={() => setDeletingDoctor(doctor)}
									htmlFor='confirmation-modal'
									className='btn btn-sm text-white border-0 bg-red-500 hover:bg-red-700'
								>
									Delete
								</label>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				))}
			</Table>
			{deletingDoctor && (
				<ConfirmationModal
					heading='Are you sure to delete this doctor ?'
					successBtnName='Delete'
					cancelBtnName='Cancel'
					img={deletingDoctor.image}
					title={deletingDoctor.name}
					description={deletingDoctor.specialty}
					closeModal={closeModal}
					successAction={handleDeleteDoctor}
					modalData={deletingDoctor}
				></ConfirmationModal>
			)}
		</div>
	);
};

export default ManageDoctors;
