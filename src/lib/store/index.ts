import {
	createStore,
	createTypedHooks,
	unstable_effectOn,
	type Unstable_EffectOn
} from 'easy-peasy';
import { type CartStore, cartStore } from './cart';
import { drawerStore, type DrawerStore } from './drawer';

export interface StoreModel {
	drawer: DrawerStore;
	cart: CartStore;
	onOverlay: Unstable_EffectOn<this, this>;
}

export const store = createStore<StoreModel>({
	drawer: drawerStore,
	cart: cartStore,
	onOverlay: unstable_effectOn(
		[(state) => state.drawer.in, (state) => state.cart.in],
		(action, change, helpers) => {
			const open = change.current[0] || change.current[1];
			if (open) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.removeAttribute('style');
			}
			return undefined;
		}
	)
});

export const { useStore, useStoreActions, useStoreState } = createTypedHooks<StoreModel>();
