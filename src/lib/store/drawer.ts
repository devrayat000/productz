import { action, unstable_effectOn, type Unstable_EffectOn, type Action } from 'easy-peasy';
import { StoreModel } from '.';

export interface DrawerStore {
	in: boolean;
	open: Action<this>;
	close: Action<this>;
	// onToggle: Unstable_EffectOn<this, StoreModel>;
}

export const drawerStore: DrawerStore = {
	in: false,
	open: action((state) => {
		state.in = true;
	}),
	close: action((state) => {
		state.in = false;
	})
	// onToggle: unstable_effectOn([(state) => state.in], (action, change, helpers) => {
	// 	const open = change.current[0];
	// 	if (open) {
	// 		document.body.style.overflow = 'hidden';
	// 	} else {
	// 		document.body.removeAttribute('style');
	// 	}
	// 	return undefined;
	// })
};
