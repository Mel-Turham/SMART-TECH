type Props = {
	text: string;
	title: string;
};

const Heading = ({ title, text }: Props) => {
	return (
		<div className="flex flex-col items-center gap-5">
			<h2 className="relative mb-6 text-5xl line">{title}</h2>
			<p className="text-base font-normal w-[80%] text-center leading-8">{text}</p>
		</div>
	);
};

export default Heading;
