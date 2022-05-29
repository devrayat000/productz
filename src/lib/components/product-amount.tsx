import { useState } from 'react';

const ProductAmount = () => {
	const [count, setCount] = useState(0);

	function increment() {
		setCount((prev) => prev + 1);
	}

	function decrement() {
		setCount((prev) => (prev <= 0 ? 0 : prev - 1));
	}
	return (
		<section className="bg-neutral-light-grayish-blue py-3 px-6 w-full rounded-lg font-bold flex justify-between items-center">
			<button type="button" onClick={decrement}>
				<img src="/images/icon-minus.svg" alt="Remove Product" />
			</button>
			<span>{count}</span>
			<button type="button" onClick={increment}>
				<img src="/images/icon-plus.svg" alt="Add Product" />
			</button>
		</section>
	);
};

export default ProductAmount;
