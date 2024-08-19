import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from '@nextui-org/react';
import { LucideProps } from 'lucide-react';

import { ForwardRefExoticComponent, RefAttributes } from 'react';

type ServicesTypes = {
	id: number;
	icon?: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>;
	title: string;
	desc: string;
};

interface Props {
	service: ServicesTypes;
}

const CardService = ({ service }: Props) => {
	return (
		<Card radius='sm' className='px-5 py-7'>
			<CardHeader>
				{/* <span>{</service.icon>}</span> */}
				<h3 className='text-2xl font-semibold'>{service.title}</h3>
			</CardHeader>
			<CardBody>
				<p className='text-base'>{service.desc}</p>
			</CardBody>
			<CardFooter>
				<Button
					color='primary'
					variant='bordered'
					radius='sm'
					className='font-semibold'
				>
					En savoir plus
				</Button>
			</CardFooter>
		</Card>
	);
};

export default CardService;
