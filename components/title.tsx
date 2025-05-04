import cn from 'clsx';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren<unknown> {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
}

export function Title({ children, type, className }: IProps) {
	const Component = type;

	return (
		<Component className={cn('font-kudry text-center text-[20px]', className)}>
			{children}
		</Component>
	);
}
