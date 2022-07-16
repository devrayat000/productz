import create from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';

import { createCartStore } from './cart';
import { createDrawerStore } from './drawer';
import { StoreModel } from './state';

export const useAppStore = create<StoreModel>()(
	devtools(
		subscribeWithSelector((set, get, store, mutator) => ({
			...createDrawerStore(set, get, store, mutator),
			...createCartStore(set, get, store, mutator)
		})),
		{
			enabled: import.meta.env.DEV,
			name: 'productz',
			anonymousActionType: '@action/protuctz'
		}
	)
);
