import { Image } from '@nextui-org/react';
import Heading from '../Components/Heading';
import {
	com_1,
	com_2,
	com_3,
	com_4,
	com_5,
	com_6,
	com_7,
	com_8,
} from '../assets';

const Partenaires = () => {
	return (
		<div>
			<Heading
				title='Nos partenaires'
				text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa quibusdam modi labore quo possimus, assumenda vitae fugiat tempora libero. '
			/>
			<div className='hidden grid-cols-8 gap-6 mt-16 lg:grid'>
				<Image src={com_1} width={200} height={120} className='object-cover ' />
				<Image src={com_2} width={200} height={120} className='object-cover' />
				<Image src={com_3} width={200} height={120} className='object-cover' />
				<Image src={com_4} width={200} height={120} className='object-cover' />
				<Image src={com_5} width={200} height={120} className='object-cover' />
				<Image src={com_6} width={200} height={120} className='object-cover' />
				<Image src={com_7} width={200} height={120} className='object-cover' />
				<Image src={com_8} width={200} height={120} className='object-cover' />
			</div>
		</div>
	);
};

export default Partenaires;
