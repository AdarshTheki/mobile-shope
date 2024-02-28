/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';
import CartPriceDetail from '../components/Cart/CartPriceDetail';
import CartAddress from '../components/Cart/CartAddress';
import { useCart,useOrder } from '../context';
import { Button } from '../utils';

export default function ShoppingCart() {
    const Navigate = useNavigate();
    const { cart, address, clearCart } = useCart();
    const { createOrderItem } = useOrder();
    const [page, setPage] = useState(1);

    const navigateHandle = () => {
        if (address?.name) {
            let payload = {
                phone_detail: JSON.stringify(cart),
                user_detail: JSON.stringify(address),
            };
            createOrderItem(payload);
            clearCart();
            Navigate('/order-success');
        } else {
            alert('Please Select Your Address');
        }
    };

    return (
        <div>
            <div className='sm:flex max-w-4xl mx-auto justify-between p-5'>
                {page === 1 ? <CartItem /> : null}
                {page === 2 ? <CartAddress /> : null}
                {cart.length ? <CartPriceDetail /> : null}
            </div>
            <div className='flex items-center justify-center gap-4'>
                {page !== 1 ? (
                    <Button onClick={() => setPage(1)} className='bg-blue-600 text-white'>
                        Previous
                    </Button>
                ) : null}
                {cart.length && page === 1 ? (
                    <Button onClick={() => setPage(2)} className='bg-blue-600 text-white'>
                        Next
                    </Button>
                ) : null}
                {cart.length && page === 2 ? (
                    <Button onClick={navigateHandle} className='bg-blue-600 text-white'>
                        Place Order
                    </Button>
                ) : null}
            </div>
        </div>
    );
}
