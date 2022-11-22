import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const AllUsers = () => {
	const {loading} = useContext(AuthContext)
    const {data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
	})
	
	


	const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
					method: 'PUT',
					headers: {
						authorization: `${localStorage.getItem('userAccessToken')}`,
					},
				})
					.then((res) => res.json())
			.then((data) => {
						console.log(data)
						if (data.modifiedCount > 0) {
						    refetch()
						    toast.success('Admin added successfully')
						}
					});
	}
	
	const handleMakeUser = id => {
        fetch(`http://localhost:5000/users/${id}`, {
					method: 'PUT',
					headers: {
						authorization: `${localStorage.getItem('userAccessToken')}`,
					},
				})
					.then((res) => res.json())
					.then((data) => {
						console.log('modiUser',data);
						if (data.modifiedCount > 0) {
							refetch();
							toast.success('User added successfully');
						}
					});
    }


	// const handleDelete = id => {
	// 	// alert(id);
	// 	fetch(`http://localhost:5000/users/${id}`, {
	// 		method: 'DELETE'
	// 	})
	// 		.then(res => res.json())
	// 		.then(data => {
	// 		 refetch();
	// 	})
	// }

    return (
			<div>
				<h1 className='mb-5'>MyAppointment</h1>
				<div className='flex justify-center'>{loading}</div>
				<Table hoverable={true}>
					<Table.Head>
						<Table.HeadCell></Table.HeadCell>
						<Table.HeadCell>Name</Table.HeadCell>
						<Table.HeadCell>email</Table.HeadCell>
						<Table.HeadCell>Admin</Table.HeadCell>
						<Table.HeadCell>
							<span className='sr-only'>Edit</span>
						</Table.HeadCell>
					</Table.Head>
					<Table.Body className='divide-y'>
						{users?.map((user, index) => (
							<Table.Row
								key={user?._id}
								className='bg-white dark:border-gray-700 dark:bg-gray-800'
							>
								<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
									{index + 1}
								</Table.Cell>
								<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
									{user?.name}
								</Table.Cell>
								<Table.Cell>{user?.email}</Table.Cell>
								<Table.Cell>
									<>
										{user?.role === 'admin' && (
											<button
												onClick={() => handleMakeAdmin(user?._id)}
												className='btn-btn-xs bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg'
											>
												Admin
											</button>
										)}
									</>

									<>
										{user?.role === 'user' && (
											<button
												onClick={() => handleMakeAdmin(user?._id)}
												className='btn-btn-xs bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg'
											>
												Make Admin
											</button>
										)}
									</>
									<>
										{(user.role !== 'admin' &&
													<button
														onClick={() => handleMakeAdmin(user?._id)}
														className='btn-btn-xs bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg'
													>
														Make Admin
													</button>
												)}
									</>
								</Table.Cell>
								<Table.Cell>
									<button className='btn-btn-xs  text-white bg-gray-500 hover:bg-gray-600 p-2 rounded-lg'>
										Make Moderator
									</button>
								</Table.Cell>
								<Table.Cell>
									<a
										onClick={() => handleMakeUser(user?._id)}
										className='font-medium cursor-pointer text-red-600 hover:underline dark:text-blue-500'
									>
										Delete
									</a>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</div>
		);
};

export default AllUsers;