'use client';

import { action } from '@/actions/action';
import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Field } from './field';

export interface IForm {
	firstName: string;
	lastName: string;
	count: string;
}

export function Form() {
	const { register, handleSubmit, formState, reset } = useForm<IForm>({
		mode: 'onChange',
	});
	const onSubmit = async (data: IForm) => {
		await toast.promise(action(data), {
			loading: 'Отправляю...',
			success: 'Ваша анкета отправлена!',
			error: 'Возникла ошибка попробуйте позже!',
		});
		reset();
	};

	useEffect(() => {
		console.log(formState.isSubmitting);
	}, [formState.isSubmitting]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-[22px] mt-[38px]'
		>
			<Field
				register={register}
				formState={formState}
				label='Вашe имя *'
				id='firstName'
			/>
			<Field
				register={register}
				formState={formState}
				label='Ваша фамилия *'
				id='lastName'
			/>
			<Field
				register={register}
				formState={formState}
				label='Количество персон *'
				id='count'
			/>

			<button
				className='relative w-[93px] h-[83px] text-[#F5F5F5] text-[13px] flex items-center justify-center mx-auto mt-[23px]'
				disabled={formState.isSubmitting}
			>
				<Image
					src='/form-heart.svg'
					alt='heart'
					width={93}
					height={83}
					className='absolute top-0 left-0 w-full h-full object-contain object-center'
				/>
				<span className='relative mb-[10px]'>Отправить</span>
			</button>
		</form>
	);
}
