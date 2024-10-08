import { Button } from '@nextui-org/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div className='flex items-center justify-center w-full h-screen px-16 bg-gray-200 md:px-0'>
			<div className='flex flex-col items-center justify-center px-4 py-8 bg-white border border-gray-200 rounded-lg shadow-2xl md:px-8 lg:px-24'>
				<p className='text-6xl font-bold tracking-wider text-gray-300 md:text-7xl lg:text-9xl'>
					404
				</p>
				<p className='mt-4 text-2xl font-bold tracking-wider text-gray-500 md:text-3xl lg:text-5xl'>
					Page Not Found
				</p>
				<p className='pb-4 mt-4 text-center text-gray-500 border-b-2'>
					Sorry, the page you are looking for could not be found.
				</p>
				<Button
					startContent={<ChevronLeft />}
					color='primary'
					className='mt-8 font-semibold'
					radius='sm'
					size='lg'
				>
					<Link to='/'>Back to home</Link>
				</Button>
			</div>
		</div>
	);
};

export default Error;
