import { PropsWithChildren } from 'react';

export function Container({ children }: PropsWithChildren<unknown>) {
	return <div className='max-w-[214px] w-full mx-auto'>{children}</div>;
}
