import {
	BadgeEuro,
	Building,
	Cctv,
	Code,
	Globe,
	GraduationCap,
	HardHat,
	MonitorCog,
} from '../assets';

type ServicesTypes = {
	id: number;
	icon: string;
	title: string;
	desc: string;
};
const Services: ServicesTypes[] = [
	{
		id: 1,
		icon: Code,
		title: 'Developpement des logiciels',
		desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium facere tempora facilis modi est rerum saepe quaerat optio officiis mollitia quasi, aut vitae, reiciendis libero nam repellendus praesentium fuga. Quis. ',
	},
	{
		id: 2,
		icon: Globe,
		title: 'Gestions de la presence en ligne',
		desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium facere tempora facilis modi est rerum saepe quaerat optio officiis mollitia quasi, aut vitae, reiciendis libero nam repellendus praesentium fuga. Quis. ',
	},
	{
		id: 3,
		icon: BadgeEuro,
		title: 'Marketing numerique',
		desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium facere tempora facilis modi est rerum saepe quaerat optio officiis mollitia quasi, aut vitae, reiciendis libero nam repellendus praesentium fuga. Quis. ',
	},
	{
		id: 4,
		icon: MonitorCog,
		title: 'Consultation en maitiere de tehnologie',
		desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium facere tempora facilis modi est rerum saepe quaerat optio officiis mollitia quasi, aut vitae, reiciendis libero nam repellendus praesentium fuga. Quis. ',
	},
	{
		id: 5,
		icon: HardHat,
		title: 'Maintenace des systemes',
		desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium facere tempora facilis modi est rerum saepe quaerat optio officiis mollitia quasi, aut vitae, reiciendis libero nam repellendus praesentium fuga. Quis. ',
	},
	{
		id: 6,
		icon: GraduationCap,
		title: 'Formation  et conseil en informatique',
		desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium facere tempora facilis modi est rerum saepe quaerat optio officiis mollitia quasi, aut vitae, reiciendis libero nam repellendus praesentium fuga. Quis. ',
	},
	{
		id: 7,
		icon: Building,
		title: "Devis et conception et emplementation des reseaux d'entreprise",
		desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium facere tempora facilis modi est rerum saepe quaerat optio officiis mollitia quasi, aut vitae, reiciendis libero nam repellendus praesentium fuga. Quis. ',
	},
	{
		id: 8,
		icon: Cctv,
		title: 'Installation des cameras de surveillance',
		desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium facere tempora facilis modi est rerum saepe quaerat optio officiis mollitia quasi, aut vitae, reiciendis libero nam repellendus praesentium fuga. Quis. ',
	},
];

export default Services;
