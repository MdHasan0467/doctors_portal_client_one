import React from 'react';

const Button = ({children}) => {
	return (
		<button className='btn flex justify-start  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-0 text-white'>
			{children}
		</button>
	);
};

export default Button;
