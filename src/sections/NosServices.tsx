import CardService from '../Components/Card';
import Heading from '../Components/Heading';
import Services from '../db';

const NosServices = () => {
	return (
		<div>
			<Heading
				title='Nos services'
				text='SMART TECH offre une gamme de solutions prêtes à type de business sur plusieurs plateformes'
			/>
			<div className='grid grid-cols-1 gap-5 mt-8 lg:mt-20 sm:mt-10 md:grid-cols-2 lg:grid-cols-3'>
				{Services.map((service) => {
					return <CardService key={service.id} service={service} />;
				})}
			</div>
		</div>
	);
};

export default NosServices;
