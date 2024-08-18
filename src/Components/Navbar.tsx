import Container from './Container';
import { Logo } from '../assets';
import { Link, NavLink } from 'react-router-dom';
import { Facebook, Linkedin, Locate, Mail, Phone, Twitch } from 'lucide-react';

const Links = [
	{
		id: 1,
		label: 'A propos de nous',
		path: 'about',
	},
	{
		id: 2,
		label: 'Produits',
		path: 'produits',
	},
	{
		id: 3,
		label: 'Services',
		path: 'services',
	},
	{
		id: 4,
		label: 'Realisations',
		path: 'realisations',
	},
	{
		id: 5,
		label: 'Blog',
		path: 'blog',
	},
	{
		id: 6,
		label: 'Carrieres',
		path: 'carrieres',
	},
	{
		id: 7,
		label: 'Contact',
		path: 'contact',
	},
];

const Navbar = () => {
	return (
		<>
			<Container className='flex items-center justify-between py-3 font-medium border-b border-solid border-lightGray/30 text-black/70'>
				{/* phone */}
				<div className='flex items-center justify-center w-1/4 gap-4 mx-auto'>
					<Phone />
					<div>
						<span>Phone: (237)694898069</span>
						<br />
						<span className='text-center'>(237)682764575</span>
					</div>
				</div>
				{/* localisation */}
				<div className='flex items-center justify-center w-1/4 gap-4 mx-auto'>
					<Locate />
					<div>
						<span>Yaounde-Cameroun</span>
						<br />
						<span>Douala-Cameroun</span>
					</div>
				</div>
				{/* email */}
				<div className='flex items-center justify-center w-1/4 gap-4 mx-auto'>
					<Mail />
					<span>techsmart035@gmail.com</span>
				</div>
				{/* socials */}
				<div className='flex items-center justify-center w-1/4 gap-4 mx-auto'>
					{/* facebook */}
					<span>
						<Facebook />
					</span>
					{/* Twitter */}
					<span>
						<Twitch />
					</span>
					{/* Linkedin */}
					<span>
						<Linkedin />
					</span>
				</div>
			</Container>
			<Container className='sticky top-0 z-20 flex items-center justify-between bg-white shadow-lg ps-8 pe-16'>
				{/* Logo */}
				<Link
					to='/'
					className='w-[110px] h-[100px] flex items-center justify-start'
				>
					<img
						src={Logo}
						alt='Logo smart tech'
						title='Smart-Tech'
						loading='lazy'
						className='w-full mix-blend-multiply'
					/>
				</Link>
				{/* Navigations menu */}
				<menu className='flex gap-8'>
					{Links.map((link) => {
						return (
							<li
								className='p-2 text-base font-semibold uppercase'
								key={link.id}
							>
								<NavLink
									className={({ isActive }) =>
										isActive
											? 'duration-300 ease-in-out hover:text-blue trasition-all text-blue'
											: 'duration-300 ease-in-out hover:text-blue trasition-all '
									}
									to={link.path}
								>
									{link.label}
								</NavLink>
							</li>
						);
					})}
				</menu>
			</Container>
		</>
	);
};

export default Navbar;
