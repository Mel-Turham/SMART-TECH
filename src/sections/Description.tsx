import { Button, Image } from '@nextui-org/react';
import { Check } from 'lucide-react';
import { img } from '../assets';

const Description = () => {
	return (
		<div className='flex justify-between gap-8 max-sm:flex-col-reverse'>
			<div className='flex flex-col gap-8 lg:w-1/2 sm:w-full '>
				<div className='flex flex-col gap-4'>
					<h2 className='text-4xl font-semibold text-blue'>
						Qui sommes-nous ?
					</h2>
					<p className='leading-8'>
						<strong>SMART-TECH, </strong>Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Adipisci, incidunt. Minima ea inventore
						perspiciatis praesentium ullam veniam ex, neque tempora labore
						maxime, velit at aliquam laborum incidunt similique animi hic.
					</p>
				</div>
				<div className='space-y-5'>
					<div className='flex items-center gap-3'>
						<span className='flex items-center justify-center w-6 h-6 p-1 text-white rounded-full bg-blue'>
							<Check strokeWidth={3} />
						</span>
						<p>Vision, passion et excellence dans tout ce que nous faisons</p>
					</div>
					<div className='flex items-center gap-3'>
						<span className='flex items-center justify-center w-6 h-6 p-1 text-white rounded-full bg-blue'>
							<Check strokeWidth={3} />
						</span>
						<p>Obtenez des conseils et stratégies de nos professionnels</p>
					</div>
					<div className='flex items-center gap-3'>
						<span className='flex items-center justify-center w-6 h-6 p-1 text-white rounded-full bg-blue'>
							<Check strokeWidth={3} />
						</span>
						<p>Assistante technique</p>
					</div>
				</div>
				<Button
					color='primary'
					className='font-semibold w-fit'
					size='lg'
					radius='sm'
				>
					En savoir plus
				</Button>
			</div>
			{/* Image description there!!!!! */}
			<div className='items-center justify-center hidden sm:flex lg:w-1/2'>
				<Image
					src={img}
					className='object-cover w-full h-full mix-blend-multiply'
					radius='none'
				/>
			</div>
		</div>
	);
};

export default Description;
