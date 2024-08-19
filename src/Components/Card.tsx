import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
} from '@nextui-org/react';

type ServicesTypes = {
	id: number;
	icon?: string;
	title: string;
	desc: string;
};

interface Props {
	service: ServicesTypes;
}

const CardService = ({ service }: Props) => {
	return (
		<>
			<Card radius='sm' className='px-5 py-7'>
				<CardHeader className='flex items-center gap-3'>
					<div className='flex items-center justify-center w-20 h-20 '>
						<Image src={service.icon} width={60} />
					</div>
					<h3 className='text-lg font-bold text-black/70'>{service.title}</h3>
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
		</>
	);
};

export default CardService;
