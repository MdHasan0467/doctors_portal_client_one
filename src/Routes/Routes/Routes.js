import { createBrowserRouter } from "react-router-dom";
import About from "../../components/Pages/About/About";
import Appoint from "../../components/Pages/ApointPage/Appoint";
import AddDoctors from "../../components/Pages/Dashboard/AddDoctors/AddDoctors";
import AllUsers from "../../components/Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../components/Pages/Dashboard/Dashboard";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Reviews from "../../components/Pages/Reviews/Reviews";
import SignUp from "../../components/Pages/SignUp/SignUp";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import MyAppointment from "../../layout/DashboardLayout/MyAppointment/MyAppointment";

import Main from "../../layout/Main";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
			{
				path: '/appointment',
				element: <Appoint></Appoint>,
			},
			{
				path: '/reviews',
				element: <Reviews></Reviews>,
			},
			{
				path: '/about',
				element: <About></About>,
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<DashboardLayout></DashboardLayout>
			</PrivateRoute>
		),
		children: [
			{
				path: '/dashboard',
				element: (
					<PrivateRoute>
						<MyAppointment></MyAppointment>
					</PrivateRoute>
				),
			},
			{
				path: '/dashboard/allUsers',
				element: (
					<AdminRoutes>
						<AllUsers></AllUsers>
					</AdminRoutes>
				),
			},
			{
				path: '/dashboard/addDoctors',
				element: (
					<AdminRoutes>
						<AddDoctors></AddDoctors>
					</AdminRoutes>
				),
			},
		],
	},
]);

export default router;