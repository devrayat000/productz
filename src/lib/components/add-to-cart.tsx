import { useAppStore } from '$lib/store';
import { useState } from 'react';
import ProductAmount from './product-amount';

interface AddToCartButtonProps {
	count: number;
}

const AddToCartButton = ({ count }: AddToCartButtonProps) => {
	const addToCart = useAppStore((store) => store.cart.addToCart);

	return (
		<button
			type="button"
			onClick={() =>
				addToCart({
					id: 'kgb',
					name: 'Autumn Limited Edition Sneakers',
					price: 125.0,
					amount: count,
					imageUrl: '/images/image-product-1-thumbnail.jpg'
				})
			}
			className="bg-primary py-3 px-6 w-full rounded-lg text-white font-bold flex justify-center items-center shadow-md hover:shadow-lg transition-shadow shadow-primary gap-4"
		>
			<span>
				<svg width="22" height="20" className="scale-75" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
						fill="currentColor"
						fillRule="nonzero"
					/>
				</svg>
			</span>
			<span>Add to cart</span>
		</button>
	);
};

function AddToCart() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount((prev) => prev + 1);
	}

	function decrement() {
		setCount((prev) => (prev <= 0 ? 0 : prev - 1));
	}

	return (
		<div className="flex flex-col md:flex-row items-stretch gap-4">
			<div className="md:flex-grow-[2]">
				<ProductAmount count={count} increment={increment} decrement={decrement} />
			</div>
			<div className="md:flex-grow-[3]">
				<AddToCartButton count={count} />
			</div>
		</div>
	);
}

export default AddToCart;
