import { ConnectWallet } from '@thirdweb-dev/react';

export function SignedIn() {
	return (
		<div className='p-20'>
			<h1 className='flex text-center text-3xl tracking-tight justify-center'>Welcome</h1>
			<div className='h-10' />
			<div className='flex justify-center'>
				<ConnectWallet
					theme='dark'
					dropdownPosition={{
						align: 'center',
						side: 'bottom',
					}}
				/>
			</div>
		</div>
	);
}
