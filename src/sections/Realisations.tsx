import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
} from '@nextui-org/react';
import Heading from '../Components/Heading';
import { img } from '../assets';
import { ChevronRight } from 'lucide-react';

export default function Realisations() {
	return (
		<div>
			<Heading
				title='Nos realisations'
				text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa quibusdam modi labore quo possimus, assumenda vitae fugiat tempora libero. '
			/>
			<div className='grid grid-cols-3 gap-5 mt-16'>
				{Array.from({ length: 6 }, (_, index) => (
					<Card radius='sm' key={index}>
						<CardHeader>
							<Image src={img} className='w-full h-full' radius='sm' />
						</CardHeader>
						<CardBody className='space-y-5'>
							<h3 className='text-2xl capitalize'>smart e-orientation </h3>
							<p className='leading-7'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
								voluptatem ratione quia nihil, modi totam maiores quos incidunt
								ab illo, blanditiis vero expedita impedit nesciunt, laboriosam
								cumque obcaecati. Consectetur, reiciendis.
							</p>
						</CardBody>
						<CardFooter>
							<Button
								color='primary'
								variant='light'
								radius='sm'
								className='font-semibold'
							>
								<span>Savoir plus</span>
								<ChevronRight />
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
