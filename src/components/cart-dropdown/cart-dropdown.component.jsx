import React from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartContainer>
        <CartItemsContainer>
            {cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}
        >CHECKOUT</CartDropdownButton>
    </CartContainer>
)

export default CartDropdown;

