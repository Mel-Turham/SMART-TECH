import { ReactNode } from 'react';

const Container = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
	px?:string
}) => {
	return <section className={`max-sm:px-5 sm:px-6 lg:px-16 ${className}`}>{children}</section>;
};

export default Container;
