import type ICartItem from '$lib/interfaces/cart-item';
import { useStoreActions, useStoreState } from '$lib/store';
// import { Popover, Transition } from '@headlessui/react';
import { AnimatePresence, m, Variants } from 'framer-motion';
// import { Fragment } from 'react';

type Props = unknown;

// const Cart = (props: Props) => {
// 	return (
// 		<div className="fixed top-16 w-full max-w-sm px-4">
// 			<Popover className="relative">
// 				{({ open }) => (
// 					<>
// 						<Popover.Button
// 							className={`
//                                 ${open ? '' : 'text-opacity-90'}
//                                 group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
// 						>
// 							<img src="/images/icon-menu.svg" alt="Menu" className="h-4 w-auto" />
// 						</Popover.Button>
// 						<Transition
// 							as={Fragment}
// 							enter="transition ease-out duration-200"
// 							enterFrom="opacity-0 translate-y-1"
// 							enterTo="opacity-100 translate-y-0"
// 							leave="transition ease-in duration-150"
// 							leaveFrom="opacity-100 translate-y-0"
// 							leaveTo="opacity-0 translate-y-1"
// 						>
// 							<Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
// 								<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
// 									<div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
// 										{solutions.map((item) => (
// 											<a
// 												key={item.name}
// 												href={item.href}
// 												className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
// 											>
// 												<div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
// 													<item.icon aria-hidden="true" />
// 												</div>
// 												<div className="ml-4">
// 													<p className="text-sm font-medium text-gray-900">{item.name}</p>
// 													<p className="text-sm text-gray-500">{item.description}</p>
// 												</div>
// 											</a>
// 										))}
// 									</div>
// 									<div className="bg-gray-50 p-4">
// 										<a
// 											href="##"
// 											className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
// 										>
// 											<span className="flex items-center">
// 												<span className="text-sm font-medium text-gray-900">Documentation</span>
// 											</span>
// 											<span className="block text-sm text-gray-500">
// 												Start integrating products and tools
// 											</span>
// 										</a>
// 									</div>
// 								</div>
// 							</Popover.Panel>
// 						</Transition>
// 					</>
// 				)}
// 			</Popover>
// 		</div>
// 	);
// };

const cart: Variants = {
	hidden: { opacity: 0, scale: 0 },
	show: {
		opacity: 1,
		scale: 1,
		originX: 0.5,
		originY: 0
	}
};

interface CartItemProps {
	item: ICartItem;
}

function CartItem({ item }: CartItemProps) {
	const removeFromCart = useStoreActions((store) => store.cart.removeFromCart);

	return (
		<article
			key={item.id}
			className="flex justify-between flex-nowrap items-center gap-3 prose-img:h-12"
		>
			<img src={item.imageUrl} alt={item.name} className="my-0 rounded" />
			<div className="flex-grow-0">
				<h6 className="my-0 text-left text-neutral-dark-grayish-blue max-w-[20ch] text-ellipsis">
					{item.name}
				</h6>
				<p className="my-0 text-left text-neutral-dark-grayish-blue">
					${item.price.toFixed(2)} x {item.amount}
					&nbsp;&nbsp;
					<span className="font-bold text-black">${(item.price * item.amount).toFixed(2)}</span>
				</p>
			</div>
			<button type="button" onClick={() => removeFromCart(item.id)} className="prose-img:!h-5">
				<img src="/images/icon-delete.svg" alt="Remove from cart" />
			</button>
		</article>
	);
}

function Cart() {
	const cartItems = useStoreState((store) => store.cart.items);

	if (cartItems.length <= 0) {
		return (
			<div className="min-h-[14rem] grid place-items-center">
				<p className="my-0 text-neutral-dark-grayish-blue font-bold">Your cart is empty.</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-4">
			<section className="flex flex-col gap-3">
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</section>
			<button type="button" className="bg-primary py-3 px-6 w-full text-white font-bold rounded-md">
				Checkout
			</button>
		</div>
	);
}

const CartButton = (props: Props) => {
	const toggleCart = useStoreActions((store) => store.cart.toggle);
	const isCartOpen = useStoreState((store) => store.cart.in);

	return (
		<button type="button" className="relative" onClick={() => toggleCart()}>
			<img src="images/icon-cart.svg" alt="Cart" />
			<AnimatePresence>
				{isCartOpen && (
					<m.section
						variants={cart}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="fixed left-0 right-0 top-16 my-4 mx-2 rounded-md p-5 bg-white flex flex-col gap-4 shadow-xl"
					>
						<h3 className="my-0 text-left">Cart</h3>
						<hr className="my-0" />
						<Cart />
					</m.section>
				)}
			</AnimatePresence>
		</button>
	);
};

export default CartButton;
