import cn from 'clsx';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren<unknown> {
	className?: string;
}

export function Text({ children, className }: IProps) {
	return (
		<p className={cn('text-[14px] font-normal text-center', className)}>
			{children}
		</p>
	);
}
