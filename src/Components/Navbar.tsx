import Container from './Container';
import { Logo } from '../assets';
import { Link, NavLink } from 'react-router-dom';
import { Button, Image } from '@nextui-org/react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
// import { Facebook, Linkedin, Locate, Mail, Phone,  Twitter } from 'lucide-react';F

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
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const handlerCloseNav = (e: MouseEvent) => {
			if (isOpen && e.target !== ref.current) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handlerCloseNav);
		return () => document.removeEventListener('click', handlerCloseNav);
	}, [isOpen]);

	const variant = {
		hidden: {
			x: '100%',
		},
		show: {
			x: '0',
		},
	};
	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed z-20 w-full h-screen bg-black/50'
					></motion.div>
				)}
			</AnimatePresence>
			<Container className='sticky top-0 z-20 flex items-center justify-between bg-white shadow-lg ps-8 pe-16 max-md:hidden sm:hidden lg:flex'>
				{/* Logo */}
				<Link
					to='/'
					className='w-[110px] bg-lightGray flex items-center justify-start'
				>
					{/* <img
						src={Logo}
						alt='Logo smart tech'
						title='Smart-Tech'
						loading='lazy'
						className='w-full mix-blend-multiply'
					/> */}

					<Image
						src={Logo}
						alt='SMART-TECH'
						loading='lazy'
						title='SMART_TECH'
						radius='none'
						className='overflow-hidden'
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
											? 'duration-300 ease-in-out hover:text-blue trasition-all text-blue-600'
											: 'duration-300 ease-in-out hover:text-blue-600 trasition-all '
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
			{/* mobile nav-bar */}
			<header className='sticky top-0 z-20 flex items-center justify-between w-full py-4 bg-white shadow-lg pe-6 lg:hidden'>
				{/* Logo */}
				<Link to='/' className='z-20 overflow-hidden'>
					{/* <img
						src={Logo}
						alt='Logo smart tech'
						title='Smart-Tech'
						loading='lazy'
						className='w-28 mix-blend-multiply'
					/> */}

					<Image
						src={Logo}
						alt='SMART-TECH'
						loading='lazy'
						title='SMART-TECH'
						className='w-20 h-20 '
					/>
				</Link>
				{/* Navigations menu */}
				<motion.menu
					ref={ref}
					variants={variant}
					animate={isOpen ? 'show' : 'hidden'}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
					className='fixed top-0 right-0 flex flex-col justify-center h-screen gap-8 px-8 py-10 bg-white shadow-md md:pt-24 md:ps-4 md:justify-start sm:w-1/2 w-[65%]'
				>
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
				</motion.menu>

				{/* button */}
				<Button
					isIconOnly={true}
					color='primary'
					radius='sm'
					onClick={() => setIsOpen((prevState) => !prevState)}
					className='mb-4 lg:hidden'
				>
					{isOpen ? (
						<X className='w-6 h-6 stroke-2' />
					) : (
						<Menu className='w-6 h-6 stroke-2' />
					)}
				</Button>
			</header>
		</>
	);
};

export default Navbar;
