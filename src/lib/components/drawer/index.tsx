import { AnimatePresence } from 'framer-motion';
import loadable from '@loadable/component';

import { useAppStore } from '$lib/store';

const DrawerEl = loadable(() => import('./el'));

const Drawer = () => {
	const isDrawerOpen = useAppStore((store) => store.drawer.in);

	return <AnimatePresence>{isDrawerOpen && <DrawerEl />}</AnimatePresence>;
};

export default Drawer;
