import loadable from '@loadable/component';

import { useAppStore } from '$lib/store';
import CartButton from './cart';
import NavLinks from './nav-links';

const DrawerEl = loadable(() => import('./drawer/el'));

const Header = () => {
	const openDrawer = useAppStore((store) => store.drawer.toggle);

	return (
		<header className="bg-white px-6 py-6 md:py-7 sticky top-0 z-30 flex items-center justify-between shadow-md">
			<section className="flex items-center gap-5">
				<button
					type="button"
					onMouseOver={() => DrawerEl.preload()}
					onClick={() => openDrawer()}
					className="md:hidden"
				>
					<img src="/images/icon-menu.svg" alt="Menu" className="h-4 w-auto" />
				</button>
				<img src="/images/logo.svg" alt="Logo" className="h-5 w-auto" />
				<nav className="hidden md:flex ml-12 gap-6 items-center prose-a:no-underline prose-a:font-bold prose-a:text-neutral-dark-grayish-blue">
					{NavLinks()}
				</nav>
			</section>
			<section className="flex items-center gap-6 md:gap-8 prose-img:w-auto">
				<CartButton />
				<img src="/images/image-avatar.png" alt="Avatar" className="h-5 md:h-9" />
			</section>
		</header>
	);
};

export default Header;
