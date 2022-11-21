import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctors = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const {data: specialties = [], refetch, isLoading} = useQuery({
			queryKey: ['specialty'],
			queryFn: async () => {
				const res = await fetch('http://localhost:5000/appointSpecialOption');
				const data = await res.json();
				return data;
			},
		});
    
    const handleAddDoctor = data => {
        console.log(data);
       
    }
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
								<select className='select w-full max-w-xs'>
									{specialties?.map((specialty) => (
										<option key={specialty._id}>{specialty.name}</option>
									))}
								</select>
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