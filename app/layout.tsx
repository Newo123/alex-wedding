import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const kudry = localFont({
	src: '../public/kudry_weird-headline.otf',
	display: 'swap',
	variable: '--font-kudry',
});
const kurale = Montserrat({
	weight: ['500', '600'],
	display: 'swap',
	variable: '--font-kurle',
	subsets: ['cyrillic'],
});

export const metadata: Metadata = {
	title: 'Приглашение на свадьбу Кристины и Алексея',
	description: 'Мы рады пригласить вас на нашу свадьбу 18 июня 2025 года!',
	openGraph: {
		title: 'Приглашение на свадьбу Кристины и Алексея',
		description: 'Мы рады пригласить вас на нашу свадьбу 18 июня 2025 года!',
		url: 'https://alex-wedding.vercel.app',
		siteName: 'Свадьба Кристины и Алексея',
		locale: 'ru_RU',
		type: 'website',
		images: {
			url: '/og.png',
			width: 1200,
			height: 630,
			alt: 'Кристина и Алексей',
		},
	},
	icons: {
		icon: [
			{
				url: '/heart.png',
				sizes: '16x16',
				type: 'image/png',
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={`${kurale.variable} ${kudry.variable} antialiased`}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
