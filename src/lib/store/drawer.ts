import { StateCreator } from 'zustand';

import { DrawerStore } from './state';

export const createDrawerStore: StateCreator<
	{ drawer: DrawerStore },
	[['zustand/devtools', never], ['zustand/subscribeWithSelector', never]]
> = (set) => ({
	drawer: {
		in: false,
		toggle(state) {
			set((prev) => ({
				...prev,
				drawer: {
					...prev.drawer,
					in: state ?? !prev.drawer.in
				}
			}));
		}
	}
});
