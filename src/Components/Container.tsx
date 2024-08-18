import { ReactNode } from 'react';

const Container = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
	px?:string
}) => {
	return <section className={`px-16 py-2 ${className}`}>{children}</section>;
};

export default Container;
