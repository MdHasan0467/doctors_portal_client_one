import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hook/useAdmin';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
	const [isAdmin, isAdminLoading] = useAdmin(user?.email);
	const location = useLocation();

	if (loading || isAdminLoading) {
		return <Spinner color='failure' aria-label='Failure spinner example' />;
	}

	if (user && isAdmin) {
		return children;
	}
	return <Navigate to='/login' state={{ from: location , toast: true}} replace></Navigate>
			
		;

	
};

export default AdminRoutes;
