import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctors = () => {
	const { register, handleSubmit, formState: { errors }, } = useForm();
	const navigate = useNavigate();
	//! from .env.local file====>
	const imgHostKey = process.env.REACT_APP_Imgbb_key;
    const {data: specialties = [], isLoading} = useQuery({
			queryKey: ['specialty'],
			queryFn: async () => {
				const res = await fetch('http://localhost:5000/appointSpecialOption');
				const data = await res.json();
				return data;
			},
		});
    // console.log(imgHostKey);
    const handleAddDoctor = data => {
		const image = data?.img[0]
		const formData = new FormData();
		 formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
		fetch(url, {
			method: 'POST', 
			body: formData
		})
			.then(res => res.json())
			.then(imgData => {
				// console.log(imgData);
				if (imgData.success) {
					// console.log(imgData.data.url)

					const doctor = {
						name: data.name,
						email: data.email,
						specialty: data.specialty,
						image: imgData.data.url,
					};
					console.log(doctor.image);
					//! Save doctors info to the database....
					fetch('http://localhost:5000/doctors', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
							authorization: `${localStorage.getItem('userAccessToken')}`,
						},
						body: JSON.stringify(doctor),
					})
						.then((res) => res.json())
						.then((doctorData) => {
							// console.log(data)
								toast.success('Successfully created a new doctor!!');
								navigate('/dashboard/manageDoctors');

						});
				}
		})
	}
	
	//! Loader...
    if (isLoading) {
        return <Loading></Loading>
    }
			return (
				<div className='h-[800px] flex justify-center'>
					<Toaster></Toaster>
					<div className='w-96 p-7'>
						<h2 className='text-xl text-center'>Add a doctor</h2>
						<form onSubmit={handleSubmit(handleAddDoctor)}>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									{...register('name', {
										required: 'Name is Required',
									})}
									className='input input-bordered w-full max-w-xs'
								/>
								{errors.name && (
									<p className='text-red-500'>{errors.name.message}</p>
								)}
							</div>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='email'
									{...register('email', {
										required: true,
									})}
									className='input input-bordered w-full max-w-xs'
								/>
								{errors.email && (
									<p className='text-red-500'>{errors.email.message}</p>
								)}
							</div>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Specialty</span>
								</label>
								<select
									{...register('specialty', {
										required: true,
									})}
									className='select w-full max-w-xs'
								>
									{specialties?.map((specialty) => (
										<option key={specialty._id}>{specialty.name}</option>
									))}
								</select>
							</div>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Photo</span>
								</label>
								<input
									type='file'
									{...register('img', {
										required: 'Photo is Required',
									})}
									className='input input-bordered w-full max-w-xs'
								/>
								{errors.img && (
									<p className='text-red-500'>{errors.img.message}</p>
								)}
							</div>
							<input
								className='btn bg-green-500 hover:bg-green-600 border-0 text-white w-full mt-4'
								value='Add doctor'
								type='submit'
							/>
						</form>
					</div>
				</div>
			);
};

export default AddDoctors;