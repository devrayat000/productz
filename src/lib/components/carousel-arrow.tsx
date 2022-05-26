import clsx from 'clsx';

const CarouselArrow: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	...props
}) => {
	const cls = clsx(
		'shadow top-1/2 -translate-y-1/2 absolute px-4 py-3.5 grid place-items-center bg-white rounded-full',
		className
	);

	return <button type="button" className={cls} {...props} />;
};

export default CarouselArrow;

interface ArrowProps {
	activeIndex: number;
}

interface LeftArrowProps extends ArrowProps {
	handlePrev(): void;
}

export const LeftArrow = ({ handlePrev }: LeftArrowProps) => {
	return (
		<CarouselArrow onClick={handlePrev}>
			<img src="/images/icon-previous.svg" alt="Previous" />
		</CarouselArrow>
	);
};

interface RightArrowProps extends ArrowProps {
	handleNext(): void;
}

export const RightArrow = ({ handleNext }: RightArrowProps) => {
	return (
		<CarouselArrow onClick={handleNext} className="right-0">
			<img src="/images/icon-next.svg" alt="Next" />
		</CarouselArrow>
	);
};
