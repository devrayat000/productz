import AddToCart from '$lib/components/add-to-cart';
import Drawer from '$lib/components/drawer';
import Header from '$lib/components/header';
import ProductAmount from '$lib/components/product-amount';
import ProductCarousel from '$lib/components/product-carousel';

function App() {
	return (
		<div className="prose max-w-none prose-img:m-0">
			<Header />
			<Drawer />
			<main className="flex flex-col md:gap-24 md:flex-row md:py-20 md:px-16 md:items-center">
				<div className="md:flex-1 md:rounded-2xl overflow-hidden">
					<ProductCarousel />
				</div>
				<div className="p-6 mb-10 md:flex-1">
					<article className="md:max-w-[28rem]">
						<h4 className="my-0 text-primary uppercase">Sheaker Company</h4>
						<h1 className="mt-2 md:mt-3 mb-4 md:mb-6 text-3xl md:text-4xl font-bold">
							Fall Limited Edition Sneakers
						</h1>
						<p className="my-0 text-neutral-dark-grayish-blue">
							These low-profile sneakers are your perfect casual wear companion. Featuring a durable
							rubber outer sole, they'll withstand everything the weather can offer.
						</p>
						<br className="h-7" />
						<section className="flex flex-col gap-5">
							<div className="flex md:flex-col justify-between gap-1">
								<div className="flex gap-6 items-center">
									<span className="text-3xl font-bold">$125.00</span>
									<span className="text-primary font-bold bg-primary/10 px-1.5 rounded">50%</span>
								</div>
								<span className="text-neutral-grayish-blue font-bold line-through">$250.00</span>
							</div>
							<div className="flex flex-col md:flex-row items-stretch gap-4">
								<div className="md:flex-grow-[2]">
									<ProductAmount />
								</div>
								<div className="md:flex-grow-[3]">
									<AddToCart />
								</div>
							</div>
						</section>
					</article>
				</div>
			</main>
		</div>
	);
}

export default App;
