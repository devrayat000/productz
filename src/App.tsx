import AddToCart from '$lib/components/add-to-cart';
import Header from '$lib/components/header';
import ProductAmount from '$lib/components/product-amount';
import ProductCarousel from '$lib/components/product-carousel';

function App() {
	return (
		<div className="prose max-w-none prose-img:m-0">
			<Header />
			<main>
				<ProductCarousel />
				<div className="p-6 mb-10">
					<article>
						<h4 className="my-0 text-primary uppercase">Sheaker Company</h4>
						<h1 className="mt-2 mb-4 text-3xl font-bold">Fall Limited Edition Sneakers</h1>
						<p className="my-0 text-neutral-dark-grayish-blue">
							These low-profile sneakers are your perfect casual wear companion. Featuring a durable
							rubber outer sole, they'll withstand everything the weather can offer.
						</p>
						<br className="h-7" />
						<div className="flex items-center gap-6">
							<span className="text-3xl font-bold">$125.00</span>
							<span className="text-primary font-bold bg-primary/10 px-1.5 rounded">50%</span>
							<span className="flex-1" />
							<span className="text-neutral-grayish-blue font-bold line-through">$250.00</span>
						</div>
						<div className="flex flex-col items-stretch gap-4">
							<ProductAmount />
							<AddToCart />
						</div>
					</article>
				</div>
			</main>
		</div>
	);
}

export default App;
