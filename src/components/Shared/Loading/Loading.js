import { Spinner } from 'flowbite-react';
import React from 'react';

const Loading = () => {
    return (
			<div className='flex justify-center mt-5'>
				<Spinner aria-label='Default status example' />
			</div>
		);
};

export default Loading;