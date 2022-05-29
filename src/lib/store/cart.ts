import CartItem from '$lib/interfaces/cart-item';
import { action, unstable_effectOn, type Unstable_EffectOn, type Action } from 'easy-peasy';
import { StoreModel } from '.';

export interface CartStore {
	in: boolean;
	open: Action<this>;
	close: Action<this>;
	toggle: Action<this>;
	// onToggle: Unstable_EffectOn<this, StoreModel>;
	// Products
	items: CartItem[];
	addToCart: Action<this, CartItem>;
	removeFromCart: Action<this, string>;
}

export const cartStore: CartStore = {
	in: false,
	open: action((state) => {
		state.in = true;
	}),
	close: action((state) => {
		state.in = false;
	}),
	toggle: action((state) => {
		state.in = !state.in;
	}),
	// onToggle: unstable_effectOn([(state) => state.in], (action, change, helpers) => {
	// 	const open = change.current[0];
	// 	if (open) {
	// 		document.body.style.overflow = 'hidden';
	// 	} else {
	// 		document.body.removeAttribute('style');
	// 	}
	// 	return undefined;
	// }),
	// Products
	items: [
		{
			id: 'xxx',
			name: 'Autumn Limited Edition Sneakers',
			price: 125.0,
			amount: 3,
			imageUrl: '/images/image-product-1-thumbnail.jpg'
		}
	],
	addToCart: action((state, payload) => {
		state.items.push(payload);
	}),
	removeFromCart: action((state, id) => {
		state.items = state.items.filter((item) => item.id !== id);
	})
};
