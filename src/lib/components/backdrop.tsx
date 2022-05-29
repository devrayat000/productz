import { m, type HTMLMotionProps } from 'framer-motion';

const Backdrop = (props: HTMLMotionProps<'div'>) => {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			role="button"
			className="fixed inset-0 h-full w-full bg-black/40 z-40"
			{...props}
		/>
	);
};

export default Backdrop;
