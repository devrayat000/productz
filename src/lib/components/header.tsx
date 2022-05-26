const Header = () => {
	return (
		<header className="bg-white px-6 py-6 sticky top-0 flex items-center justify-between shadow-md">
			<section className="flex items-center gap-5">
				<button type="button">
					<img src="/images/icon-menu.svg" alt="Menu" className="h-4 w-auto" />
				</button>
				<img src="/images/logo.svg" alt="Logo" className="h-5 w-auto" />
			</section>
			<section className="flex items-center gap-6 prose-img:h-5 prose-img:w-auto">
				<img src="images/icon-cart.svg" alt="Cart" />
				<img src="/images/image-avatar.png" alt="Avatar" />
			</section>
		</header>
	);
};

export default Header;
