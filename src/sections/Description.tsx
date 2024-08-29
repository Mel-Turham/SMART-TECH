import { Button, Image } from '@nextui-org/react';
import { Check } from 'lucide-react';
import { img } from '../assets';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const description: string =
	"est une entreprise informatique, qui propose des services informatiques divers visant à offrir des solutions innovantes,adaptées et personnalisées aux besoins de ses clients, qu'ils soientdes particuliers, des PME ou des grandes entreprises et dispose d'une équipe d'experts qualifiés et expérimentés, capables de réaliser des projets complexes et variés, dans le respect des délais et du budget. se distingue par saréactivité, sa flexibilité et son sens du service. Elle s'engage à garantir la satisfaction de ses clients, en leur fournissant un accompagnement personnalisé tout au long du cycle de vie d’un projet et à les aider à exploiter pleinement le potentiel des technologies numériques pour stimuler leur croissance et leur succès.";

const Description = () => {
	const [show, setShow] = useState<boolean>(false);

	const handleShow = () => {
		setShow((prevState) => !prevState);
	};
	return (
		<div className='flex justify-between gap-8 max-sm:flex-col-reverse'>
			<div className='flex flex-col gap-8 lg:w-1/2 sm:w-full '>
				<div className='flex flex-col gap-4'>
					<h2 className='text-4xl font-semibold text-blue-600'>
						Qui sommes-nous ?
					</h2>
					<p className='leading-8'>
						<strong>SMART-TECH, </strong>
						<AnimatePresence>
							{show ? (
								<motion.span
									initial={{ opacity: 0, y: '-50%' }}
									animate={{ opacity: 1, y: '0%' }}
									exit={{ opacity: 0, y: '-50%' }}
								>
									{description}
								</motion.span>
							) : (
								<span>{description.slice(0, 397)}</span>
							)}
						</AnimatePresence>
						<span
							aria-label='show text and hide texte'
							role='button'
							onClick={handleShow}
							className='ml-2 text-blue-600 transition-all duration-300 ease-in-out hover:text-blue-400'
						>
							{show ? 'Voir moins' : 'Voir plus'}
						</span>
					</p>
				</div>
				<div className='space-y-5'>
					<div className='flex items-center gap-3'>
						<span className='flex items-center justify-center w-6 h-6 p-1 text-white bg-blue-600 rounded-full'>
							<Check strokeWidth={3} />
						</span>
						<p>Vision, passion et excellence dans tout ce que nous faisons</p>
					</div>
					<div className='flex items-center gap-3'>
						<span className='flex items-center justify-center w-6 h-6 p-1 text-white bg-blue-600 rounded-full'>
							<Check strokeWidth={3} />
						</span>
						<p>Obtenez des conseils et stratégies de nos professionnels</p>
					</div>
					<div className='flex items-center gap-3'>
						<span className='flex items-center justify-center w-6 h-6 p-1 text-white bg-blue-600 rounded-full'>
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
