import { store } from '$lib/store';
import { StoreProvider } from 'easy-peasy';
import { LazyMotion } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<LazyMotion strict features={() => import('framer-motion').then((r) => r.domAnimation)}>
		{/* @ts-ignore */}
		<StoreProvider store={store}>
			<App />
		</StoreProvider>
	</LazyMotion>
	// </React.StrictMode>
);
