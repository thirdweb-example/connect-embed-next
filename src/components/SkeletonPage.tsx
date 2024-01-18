import { Spinner } from './Spinner/Spinner';

export function SkeletonPage() {
	return (
		<div className='h-screen w-full flex items-center justify-center'>
			<p className='text-neutral-800 font-semibold'>
				<Spinner />
			</p>
		</div>
	);
}
