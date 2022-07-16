import { AnimatePresence } from 'framer-motion';
import loadable from '@loadable/component';

import { useAppStore } from '$lib/store';

const Cart = loadable(() => import('./el'));

type Props = object;
const CartButton = (props: Props) => {
	const toggleCart = useAppStore((store) => store.cart.toggle);
	const isCartOpen = useAppStore((store) => store.cart.in);

	return (
		<button
			onMouseOver={() => Cart.preload()}
			type="button"
			className="relative"
			onClick={() => toggleCart()}
		>
			<img src="images/icon-cart.svg" alt="Cart" className="h-5" />
			<AnimatePresence>{isCartOpen && <Cart />}</AnimatePresence>
		</button>
	);
};

export default CartButton;
