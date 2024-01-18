import Link from 'next/link';

export default function Home() {
	return (
		<main className={`min-h-screen py-12 px-4 xl:p-24 max-w-screen-md mx-auto`}>
			<h1 className='mb-5 text-5xl font-semibold text-neutral-300'> Examples </h1>
			<div className='flex flex-col gap-4'>
				<ExampleLink
					title='Connect'
					description='Connect a wallet using ConnectEmbed'
					href='/connect'
				/>

				<ExampleLink
					title='Connect + Auth'
					description='Connect a wallet + Enforce authentication using ConnectEmbed'
					href='/connect-and-auth'
				/>
			</div>
		</main>
	);
}

function ExampleLink(props: { title: string; description: string; href: string }) {
	return (
		<Link
			href={props.href}
			className='flex border bg-neutral-950 rounded-lg border-neutral-800 p-4 hover:border-blue-500 transition-colors'
		>
			<div>
				<h2 className='text-xl mb-1 text-neutral-300 font-medium'> {props.title} </h2>
				<p className='text-neutral-500'> {props.description} </p>
			</div>
		</Link>
	);
}
