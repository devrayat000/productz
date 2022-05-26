const ProductAmount = () => {
	return (
		<section className="bg-neutral-light-grayish-blue py-3 px-6 w-full rounded-lg font-bold flex justify-between items-center">
			<button type="button">
				<img src="/images/icon-minus.svg" alt="Remove Product" />
			</button>
			<span>0</span>
			<button type="button">
				<img src="/images/icon-plus.svg" alt="Add Product" />
			</button>
		</section>
	);
};

export default ProductAmount;
