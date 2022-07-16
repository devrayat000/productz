import type CartItem from '$lib/interfaces/cart-item';

export interface DrawerStore {
	in: boolean;
	toggle(state?: boolean): void;
}

export interface CartStore {
	in: boolean;
	toggle(state?: boolean): void;
	// Products
	items: CartItem[];
	addToCart(item: CartItem): void;
	removeFromCart(id: string): void;
}

export interface StoreModel {
	drawer: DrawerStore;
	cart: CartStore;
}
