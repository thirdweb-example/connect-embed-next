import {
	ConnectEmbed,
	ConnectWallet,
	ThirdwebProvider,
	coinbaseWallet,
	darkTheme,
	embeddedWallet,
	metamaskWallet,
	rainbowWallet,
	useShowConnectEmbed,
	walletConnect,
} from '@thirdweb-dev/react';

const customTheme = darkTheme({
	colors: {
		modalBg: 'black',
	},
});

export default function Page() {
	return (
		<ThirdwebProvider
			activeChain={'ethereum'}
			clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
			supportedWallets={[
				embeddedWallet(),
				metamaskWallet(),
				coinbaseWallet(),
				walletConnect(),
				rainbowWallet(),
			]}
		>
			<PageContent />=
		</ThirdwebProvider>
	);
}

function PageContent() {
	const showConnectEmbed = useShowConnectEmbed();

	return (
		<main className={`min-h-screen py-12 px-2 xl:p-24`}>
			{showConnectEmbed ? <SignIn /> : <SignedIn />}
		</main>
	);
}

function SignedIn() {
	return (
		<div>
			<h1 className='flex text-center text-3xl tracking-tight justify-center'>Welcome</h1>
			<div className='h-10' />
			<div className='flex justify-center'>
				<ConnectWallet
					dropdownPosition={{
						align: 'center',
						side: 'bottom',
					}}
				/>
			</div>
		</div>
	);
}

function SignIn() {
	return (
		<div>
			<h1 className='flex text-center text-3xl tracking-tight justify-center'>
				Sign in to get started
			</h1>
			<div className='h-10' />
			<div className='flex justify-center'>
				<ConnectEmbed
					theme={customTheme}
					onConnect={() => {
						console.log('connected');
						// you can also redirect to a different page using Next.js router
					}}
					style={{
						border: 'none',
					}}
				/>
			</div>
		</div>
	);
}
