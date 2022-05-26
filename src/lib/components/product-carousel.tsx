import Carousel from 'framer-motion-carousel';

import { LeftArrow, RightArrow } from './carousel-arrow';

const ProductCarousel = () => {
	return (
		<section>
			<Carousel
				autoPlay
				loop
				interval={2000}
				renderArrowLeft={LeftArrow}
				renderArrowRight={RightArrow}
				renderDots={() => <></>}
			>
				<img draggable="false" src="/images/image-product-1.jpg" alt="Product 1" />
				<img draggable="false" src="/images/image-product-2.jpg" alt="Product 2" />
				<img draggable="false" src="/images/image-product-3.jpg" alt="Product 3" />
				<img draggable="false" src="/images/image-product-4.jpg" alt="Product 4" />
			</Carousel>
		</section>
	);
};

export default ProductCarousel;
