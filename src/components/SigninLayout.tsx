import Image from 'next/image';
import art from '../../public/art.jpeg';

export function SignInLayout(props: { children: React.ReactNode }) {
	return (
		<div className='w-full xl:grid xl:grid-cols-2 h-screen'>
			<div
				className='overflow-hidden relative h-full hidden xl:block'
				style={{
					backgroundImage: 'linear-gradient(#131418, #070708)',
				}}
			>
				<Image className='z-0 absolute inset-0 object-cover w-full h-full' src={art} alt='' />
			</div>
			<div className='flex items-center justify-center pt-12 xl:pt-0'>
				<div className='w-full flex flex-col items-center px-4'>
					<div>
						<h1 className='flex text-center text-3xl font-medium tracking-tighter justify-center text-neutral-300'>
							Sign in to get started
						</h1>
						<div className='h-10' />
						<div className='flex justify-center'></div>
					</div>

					{props.children}
				</div>
			</div>
		</div>
	);
}
