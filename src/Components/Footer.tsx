import { Facebook, Instagram, Linkedin, Mail, Send, Twitter } from 'lucide-react';
import Container from './Container';
import { Button, Image, Input } from '@nextui-org/react';
import { Logo } from '../assets';

const Footer = () => {
	return (
		<footer className='text-white divide-y divide-white bg-blue pt-14'>
			<Container className='grid gap-10 lg:grid-cols-4 pb-9 md:grid-cols-2 lg:gap-10'>
				<div className='flex flex-col gap-6'>
					<Image src={Logo} width={100} isLoading={true} />
					<p className='font-normal text-white'>
						Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
						Laborum, vitae?
					</p>
					<div className='flex items-center gap-6'>
						<Facebook />
						<Twitter />
						<Instagram />
						<Linkedin />
					</div>
				</div>
				<div className='flex flex-col gap-10'>
					<h3 className='text-3xl font-light'>Nos services</h3>
					<menu className='flex flex-col gap-3'>
						<li>Developpement des logiciels</li>
						<li>Gestions de la presence en ligne</li>
						<li>Marketing numerique</li>
						<li>Consultation en maitiere de tehnologie</li>
						<li>Maintenace des systemes</li>
						<li>Formation et conseil en informatique..</li>
					</menu>
				</div>
				<div className='flex flex-col gap-10'>
					<h3 className='text-3xl font-light'>Realisations</h3>
					<menu className='flex flex-col gap-3'>
						<li>smart e-orientation </li>
						<li>logiciel d’orientation scolaire</li>
						<li>les logiciels de gestion des établissements scolaire</li>
						<li>logiciel de gestion d’agences de voyage</li>
						<li>conception et déploiement du réseaux de GHF sarl</li>
					</menu>
				</div>
				<div className='flex flex-col gap-10'>
					<h3 className='text-3xl font-light'>Newsletter</h3>
					<form action='#' className='flex bg-[#E4E4E7] shadow-md'>
						<Input
							placeholder='Your email adress'
							startContent={<Mail className='w-6 h-6 text-lightGray' />}
							size='lg'
							radius='none'
							className='caret-black'
						/>

						<Button
							isIconOnly
							color='primary'
							type='submit'
							size='lg'
							radius='none'
							className='h-full'
						>
							<Send />
						</Button>
					</form>
					<p className='font-light text-white'>
						Soyez à l'écoute de nos activités
					</p>
				</div>
			</Container>

			<p className='py-8 text-center text-white'>
				SMART-TECH LTD © 2024. All Rights Reserved.
			</p>
		</footer>
	);
};

export default Footer;
