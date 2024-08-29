import { Button } from '@nextui-org/react';
import Container from '../Components/Container';

const Carousel = () => {
	return (
		<section className='flex items-center  lg:min-h-[85dvh] sm:min-h-[50svh] max-sm:min-h-[65svh] bg-bg-hero bg-center lg:bg-left bg-cover bg-no-repeat relative before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-black/90 before:via-black/50 before:to-black/20'>
			<Container className='relative w-full py-8 text-white'>
				<h1 className='text-2xl font-semibold md:text-6xl text-balance'>
					Marketing numerique
				</h1>
				<p className='my-6 text-base sm:w-1/2 text-pretty'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
					recusandae ut quod eaque asperiores laudantium ratione ipsam animi,
					repudiandae aut pariatur fuga repellat enim assumenda adipisci neque
					voluptatibus inventore saepe dolorum quos omnis corrupti? Laboriosam,
					possimus est! Architecto repellendus incidunt reiciendis ipsum magni
					culpa facilis tempora, velit cum ex nemo ipsam ducimus quidem quo
					repudiandae quae expedita ab quia quisquam? Consequuntur facere
					dolores ea hic,
				</p>
				<div className='flex gap-5 w-fit'>
					<Button
						color='primary'
						size='md'
						radius='sm'
						className='text-base font-semibold'
					>
						Plus d'informations
					</Button>
					<Button
						color='primary'
						variant='ghost'
						size='md'
						radius='sm'
						className='text-base font-semibold'
					>
						Contactez-nous
					</Button>
				</div>
			</Container>
		</section>
	);
};

export default Carousel;
