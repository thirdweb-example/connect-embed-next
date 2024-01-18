import { SignedIn } from '@/components/SignedIn';
import { SignInLayout } from '@/components/SigninLayout';
import { SkeletonPage } from '@/components/SkeletonPage';
import {
	ConnectEmbed,
	ConnectWallet,
	ThirdwebProvider,
	coinbaseWallet,
	darkTheme,
	embeddedWallet,
	metamaskWallet,
	rainbowWallet,
	useConnectionStatus,
	useShowConnectEmbed,
	useWalletContext,
	walletConnect,
} from '@thirdweb-dev/react';

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
			<PageContent />
		</ThirdwebProvider>
	);
}

function PageContent() {
	const connectionStatus = useConnectionStatus();
	const showConnectEmbed = useShowConnectEmbed();
	const { isAutoConnecting } = useWalletContext();

	if (connectionStatus === 'unknown' || isAutoConnecting) {
		return <SkeletonPage />;
	}

	return <main>{showConnectEmbed ? <SignIn /> : <SignedIn />}</main>;
}

function SignIn() {
	return (
		<SignInLayout>
			<ConnectEmbed
				theme='dark'
				onConnect={() => {
					console.log('connected');
					// you can also redirect to a different page using Next.js router
				}}
			/>
		</SignInLayout>
	);
}
