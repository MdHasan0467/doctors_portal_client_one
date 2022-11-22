import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../Loading/Loading';

const ConfirmationModal = ({
	heading,
	img,
	title,
	description,
	closeModal,
	successAction,
	modalData,
	successBtnName,
	cancelBtnName,
}) => {
	const { loading } = useContext(AuthContext);
	if (loading) {
		return <Loading></Loading>;
	}
	return (
		<div>
			<input type='checkbox' id='confirmation-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg my-5 flex justify-center'>
						{heading}
					</h3>

					<div className='flex flex-col items-center pb-10'>
						<img
							className='mb-3 h-24 w-24 rounded-full shadow-lg'
							src={img}
							alt='doctor img'
						/>
						<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
							{title}
						</h5>
						<span className='text-sm text-gray-500 dark:text-gray-400'>
							{description}
						</span>
						<div className='mt-4 flex space-x-3 lg:mt-6'>
							<label
								onClick={() => successAction(modalData)}
								htmlFor='confirmation-modal'
								className='btn border-0 bg-red-600 text-white hover:bg-red-700'
							>
								{successBtnName}
							</label>
							<label
								onClick={closeModal}
								htmlFor='confirmation-modal'
								className='btn border-0 bg-gray-800 text-white'
							>
								{cancelBtnName}
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;



