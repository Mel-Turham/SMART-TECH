type Props = {
	text: string;
	title: string;
};

const Heading = ({ title, text }: Props) => {
	return (
		<div className='flex flex-col gap-5 lg:items-center'>
			<h2 className='relative text-2xl lg:text-5xl lg:mb-6 line sm:mb-4 w-fit lg:w-auto'>
				{title}
			</h2>
			<p className='text-sm md:text-base font-normal lg:w-[80%] mt-8 lg:text-center leading-8 '>
				{text}
			</p>
		</div>
	);
};

export default Heading;
