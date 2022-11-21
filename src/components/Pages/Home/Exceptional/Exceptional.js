import React from 'react';
import Button from '../../../../Button/Button';
import img from '../../../../assets/images/treatment.png'

const Exceptional = () => {
    return (
			<div>
				<div className='card mt-20 grid grid-cols-1 lg:grid-cols-2  shadow-xl'>
					<figure>
						<img className='lg:w-[458px]' src={img} alt='Movie' />
					</figure>
					<div className='card-body lg:mt-52 h-[497px]'>
						<h2 className='card-title flex justify-center text-start text-bold text-3xl'>
							Exceptional Dental Care, on Your Terms
						</h2>
						<p className='text-start'>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsumis that it has a more-or-less normal
							distribution of letters,as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop
							publishing packages and web page
						</p>
						<div className='card-actions justify-start'>
							<Button>Started</Button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Exceptional;