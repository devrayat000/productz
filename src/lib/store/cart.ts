import { StateCreator } from 'zustand';

import { CartStore } from './state';

export const createCartStore: StateCreator<
	{ cart: CartStore },
	[['zustand/devtools', never], ['zustand/subscribeWithSelector', never]]
> = (set) => ({
	cart: {
		in: false,
		toggle(state) {
			set((prev) => ({
				...prev,
				cart: {
					...prev.cart,
					in: state ?? !prev.cart.in
				}
			}));
		},
		items: [],
		addToCart(item) {
			set((prev) => ({
				...prev,
				cart: {
					...prev.cart,
					items: [...prev.cart.items, item]
				}
			}));
		},
		removeFromCart(id) {
			set((prev) => ({
				...prev,
				cart: {
					...prev.cart,
					items: prev.cart.items.filter((item) => item.id !== id)
				}
			}));
		}
	}
});
