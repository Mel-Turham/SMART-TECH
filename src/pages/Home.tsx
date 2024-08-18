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
			<Container className='py-20 bg-[#fcfcfc]'>
				<Description />
			</Container>
			<Container className='py-20'>
				<NosServices />
			</Container>
			<Container className='py-20'>
				<Realisations />
			</Container>
			<Container className='py-20 bg-[#FDFDFD]'>
				<Partenaires />
			</Container>
		</main>
	);
};

export default Home;
