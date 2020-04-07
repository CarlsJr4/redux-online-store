import React from 'react'
import CartItemQty from './CartItemQty'

export default function CartItem() {
	return (
		<div className="cartItem">
			<img src="https://picsum.photos/100" alt="Video game"/>
			<div className="cartItem__info">
				<p>DOOM Eternal</p>
				<p>$59.99</p>
				<CartItemQty />
			</div>
		</div>
	)
}
