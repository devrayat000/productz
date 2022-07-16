// import { Popover, Transition } from '@headlessui/react';
import { m, Variants } from 'framer-motion';
import { createPortal } from 'react-dom';
// import { Fragment } from 'react';

import type ICartItem from '$lib/interfaces/cart-item';
import { useAppStore } from '$lib/store';

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
	const removeFromCart = useAppStore((store) => store.cart.removeFromCart);

	return (
		<article
			key={item.id}
			className="flex justify-between flex-nowrap items-center gap-3 p-1 hover:bg-slate-50 transition-colors"
		>
			<img src={item.imageUrl} alt={item.name} className="my-0 rounded h-12" />
			<div className="flex-grow-0">
				<h6 className="my-0 text-left text-neutral-dark-grayish-blue line-clamp-1">{item.name}</h6>
				<p className="my-0 text-left text-neutral-dark-grayish-blue">
					${item.price.toFixed(2)} x {item.amount}
					&nbsp;&nbsp;
					<span className="font-bold text-black">${(item.price * item.amount).toFixed(2)}</span>
				</p>
			</div>
			<button type="button" onClick={() => removeFromCart(item.id)}>
				<img src="/images/icon-delete.svg" alt="Remove from cart" className="h-5" />
			</button>
		</article>
	);
}

type Props = object;

function Cart(props: Props) {
	const cartItems = useAppStore((store) => store.cart.items);
	let items: JSX.Element;

	if (cartItems.length <= 0)
		items = (
			<div className="min-h-[14rem] grid place-items-center">
				<p className="my-0 text-neutral-dark-grayish-blue font-bold">Your cart is empty.</p>
			</div>
		);
	else
		items = (
			<div className="flex flex-col gap-4">
				<section className="flex flex-col gap-3">
					{cartItems.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
				</section>
				<button
					type="button"
					className="bg-primary py-3 px-6 w-full text-white font-bold rounded-md"
				>
					Checkout
				</button>
			</div>
		);

	return createPortal(
		<m.section
			variants={cart}
			initial="hidden"
			animate="show"
			exit="hidden"
			id="cart"
			className="fixed right-0 left-0 md:left-auto max-w-sm top-16 my-4 mx-2 rounded-md p-5 bg-white flex flex-col gap-4 shadow-xl"
		>
			<h3 className="my-0 text-left">Cart</h3>
			<hr className="my-0" />
			{items}
		</m.section>,
		document.body
	);
}

export default Cart;
