import cn from 'clsx';
import { FormState, UseFormRegister } from 'react-hook-form';
import { IForm } from './form';

interface IField {
	register: UseFormRegister<IForm>;
	formState: FormState<IForm>;
	label: string;
	id: 'firstName' | 'lastName' | 'count';
}

export function Field({ register, formState, label, id }: IField) {
	return (
		<div className='flex flex-col gap-[.25rem]'>
			<label htmlFor={id} className='text-[14px]'>
				{label}
			</label>
			<input
				type='text'
				id={id}
				{...register(id, {
					required: {
						message: 'Обязательное поле',
						value: true,
					},
				})}
				className={cn(
					'rounded-full bg-[#F5E9E9] border-[2px] border-[#D9BDBD] px-[10px] focus:outline-0 focus:border-[#DFA7A7] transition-all duration-300',
					formState.errors[id]?.message && ''
				)}
			/>
			{formState.errors[id]?.message && (
				<span className='text-red-400 text-[12px]'>
					{formState.errors[id]?.message}
				</span>
			)}
		</div>
	);
}
