'use server';

import { IForm } from '@/components/form';
import nodemailer from 'nodemailer';

export const action = async (data: IForm) => {
	const transporter = nodemailer.createTransport({
		service: 'yandex',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const html = `
    <p><b>Имя:</b> ${data.firstName}</p>
    <p><b>Фамилия:</b> ${data.lastName}</p>
    <p><b>Количество персон:</b> ${data.count}</p>
  `;

	// Настройки письма
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: 'sverep529@mail.ru',
		subject: 'Новая анкета из свадебного приглашения',
		html: html,
	};

	try {
		await transporter.sendMail(mailOptions);
		console.log('Уведомление отправлено на email:', 'sverep529@mail.ru');
		return true;
	} catch (error) {
		console.error('Ошибка при отправке уведомления:', error);
		return false;
	}
};
