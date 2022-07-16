import { createPortal } from 'react-dom';
import { type Variants, m } from 'framer-motion';

import { useAppStore } from '$lib/store';
import Backdrop from '../backdrop';
import NavLinks from '../nav-links';

const drawer: Variants = {
	hidden: {
		opacity: 0.7,
		x: '-100%'
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			// type: 'spring',
			duration: 0.3
		}
	}
};

const DrawerEl = () => {
	const closeDrawer = useAppStore((store) => store.drawer.toggle);

	return createPortal(
		<m.aside
			variants={drawer}
			initial="hidden"
			animate="show"
			exit="hidden"
			className="z-50 bg-white fixed top-0 left-0 h-full w-64"
		>
			<Backdrop onClick={() => closeDrawer()} />
			<div className="p-8">
				<div className="mb-7">
					<button type="button" onClick={() => closeDrawer()}>
						<img src="/images/icon-close.svg" alt="Close" />
					</button>
				</div>
				<div className="flex flex-col gap-4 prose-a:no-underline prose-a:font-bold">
					{NavLinks()}
				</div>
			</div>
		</m.aside>,
		document.body
	);
};

export default DrawerEl;
