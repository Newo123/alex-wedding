import { Container } from '@/components/container';
import { Text } from '@/components/text';
import { Title } from '@/components/title';
import cn from 'clsx';
import Image from 'next/image';
import HeroImage from '../public/hero.png';

const timetable = [
	{
		time: '15:30',
		title: 'ФУРШЕТ',
		text: 'Просим взять с собой хорошее настроение!',
	},
	{
		time: '16:00',
		title: 'БАНКЕТ',
		text: 'Время для вкусной еды и зажигательных танцев!',
	},
	{
		time: '15:30',
		title: 'ЗАВЕРШЕНИЕ ВЕЧЕРА',
		text: 'Но это не точно!',
	},
];

const calendar = [
	'26',
	'27',
	'28',
	'29',
	'30',
	'31', // Май
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'20',
	'21',
	'22',
	'23',
	'24',
	'25',
	'26',
	'27',
	'28',
	'29',
	'30', // Июнь
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
];

export default function Page() {
	return (
		<main>
			<section className='h-[440px] w-full relative'>
				<div className='absolute top-0 left-0 w-full h-full'>
					<Image
						src={HeroImage}
						alt='Hero'
						fill
						className='w-full h-full object-cover object-center'
					/>
				</div>
				<div className='absolute top-1/2 left-1/2 -translate-1/2 w-[250px] h-[336px] bg-[#FFEDED] p-[32px]'>
					<p className='text-[10px] text-center uppercase'>МЫ ЖЕНИМСЯ</p>
					<Title type='h1' className=' mt-[2px]'>
						Кристина
						<br />&<br />
						Алексей
					</Title>
					<Image
						src='/hero-heart.svg'
						alt='heart'
						width={137}
						height={123}
						className='mx-auto mt-[9px]'
					/>
				</div>
				<div className='absolute bottom-0 left-0 w-full overflow-hidden translate-y-[27px]'>
					<div className='flex w-[200%] animate-marquee'>
						<div className='w-1/2 flex shrink-0 pr-[20px]'>
							<Image
								src='/love.svg'
								alt='love'
								width={370}
								height={112}
								className='w-full h-full object-cover object-center'
							/>
						</div>
						<div className='w-1/2 flex shrink-0 pr-[20px]'>
							<Image
								src='/love.svg'
								alt='love'
								width={370}
								height={112}
								className='w-full h-full object-cover object-center'
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='mt-[60px]'>
				<Container>
					<Title type='h2'>ДОРОГИЕ ГОСТИ!</Title>
					<Text className='mt-[14px]'>
						В нашей жизни скоро состоится важное событие - наша свадьба!
					</Text>
					<Text className='mt-[10px]'>
						Приглашаем Вас разделить с нами радость этого неповторимого события!
					</Text>
				</Container>
			</section>
			<section className='mt-[16px]'>
				<Container>
					<Title type='h2'>ИЮНЬ</Title>
					<div className='grid grid-cols-7 mt-[10px]'>
						{calendar.map((item, index) => {
							const isFirst6 = index < 6;
							const isLast6 = index >= calendar.length - 6;

							return (
								<div
									key={index}
									className={cn(
										'font-kudry text-[14px] flex items-center justify-center text-center relative',
										isFirst6 && 'text-[#B9B9B9]',
										isLast6 && 'text-[#B9B9B9]'
									)}
								>
									{item === '18' && (
										<Image
											className='w-[28px] h-[25px] object-center object-contain'
											src='/heart-calendar.png'
											alt='heart'
											fill
										/>
									)}
									{item}
								</div>
							);
						})}
					</div>
				</Container>
			</section>
			<section className='mt-[30px]'>
				<Container>
					<div className='pt-[16px] border-t-[2px] border-t-[#B54A4A]'>
						<Title type='h2'>ЛОКАЦИЯ</Title>
						<Image
							src='/location.png'
							alt='img'
							width={214}
							height={161}
							className='mt-[18px]'
						/>
						<Text className='mt-[18px]'>
							Мы будем ждать Вас по адресу: Cronwell Park Ника улица Суворова,
							дом 110
						</Text>
					</div>
					<div className='mt-[20px] pt-[40px] border-t-[2px] border-t-[#B54A4A] flex flex-col gap-[16px]'>
						{timetable.map((item, index) => (
							<div key={index} className='flex items-center gap-[20px]'>
								<div className='text-[12px] relative flex shrink-0 w-[48px] h-[42px] items-center justify-center'>
									<Image
										className='w-full h-full top-0 left-0 object-center object-contain absolute'
										src='/heart-time.png'
										alt='heart'
										width={61}
										height={55}
									/>
									{item.time}
								</div>
								<div>
									<div className='uppercase text-[12px]'>{item.title}</div>
									<Text className='text-left !text-[12px]'>{item.text}</Text>
								</div>
							</div>
						))}
					</div>
					<div className='border-t-[2px] border-t-[#B54A4A] pt-[16px] mt-[26px]'>
						<Title type='h2'>ДРЕСС-КОД</Title>
						<Text>
							Определенных пожеланий касаемо цветовой гаммы и фасона у нас нет!
							Поэтому надевайте все самое красивое и блистайте!
						</Text>
					</div>
					<div className='border-t-[2px] border-t-[#B54A4A] pt-[16px] mt-[26px]'>
						<Title type='h3'>АНКЕТА</Title>
						<Text>
							Просим Вас подтвердить свое присутствие и заполнить анкету до
							25.05.2025
						</Text>
					</div>
				</Container>
			</section>
		</main>
	);
}
