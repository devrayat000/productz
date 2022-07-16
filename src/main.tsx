import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { LazyMotion } from 'framer-motion';

import App from './App';
import './index.css';

if (import.meta.env.PROD) {
	disableReactDevTools();
}

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<LazyMotion strict features={() => import('framer-motion').then((r) => r.domAnimation)}>
			<App />
		</LazyMotion>
	</StrictMode>
);
