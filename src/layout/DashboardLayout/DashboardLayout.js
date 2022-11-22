
import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../components/Shared/Navbar/Navbar';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hook/useAdmin';

const DashboardLayout = () => {
	const { user } = useContext(AuthContext);
	const [isAdmin] = useAdmin(user?.email);
    return (
			<div>
				<Navbar></Navbar>
				<div className='drawer drawer-mobile'>
					<input
						id='dashboard-drawer'
						type='checkbox'
						className='drawer-toggle'
					/>
					<div className='drawer-content'>
						<Outlet></Outlet>
					</div>
					<div className='drawer-side'>
						<label
							htmlFor='dashboard-drawer'
							className='drawer-overlay'
						></label>
						<ul className='menu p-4 w-52 bg-base-100 text-base-content'>
							<li>
								<NavLink to='/dashboard'>My Appointment</NavLink>
							</li>
							{isAdmin && (
								<>
									<li className='my-2'>
										<NavLink to='/dashboard/allUsers'>All Users</NavLink>
									</li>
									<li className='my-2'>
										<NavLink to='/dashboard/addDoctors'>Add Doctor</NavLink>
									</li>
									<li className='my-2'>
										<NavLink to='/dashboard/manageDoctors'>Manage Doctors</NavLink>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		);
};

export default DashboardLayout;