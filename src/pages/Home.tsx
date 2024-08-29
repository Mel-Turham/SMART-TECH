import Container from '../Components/Container';
import Carousel from '../sections/Carousel';
import Description from '../sections/Description';
import NosServices from '../sections/NosServices';
import Partenaires from '../sections/Partenaires';
import Realisations from './../sections/Realisations';

const Home = () => {
	return (
		<main className=''>
			<Carousel />
			<Container className='py-16 lg:py-20 bg-gradient-to-l from-blue-50 via-blue-100 to-blue-50'>
				<Description />
			</Container>
			<Container className='py-16 lg:py-20'>
				<NosServices />
			</Container>
			<Container className='py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-blue-100/25 to-blue-50'>
				<Realisations />
			</Container>
			<Container className='py-16 lg:py-20 '>
				<Partenaires />
			</Container>
		</main>
	);
};

export default Home;
