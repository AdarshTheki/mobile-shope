import React from 'react';
import Cart from './Cart';
import MissingCartItems from './MissingCartItems';
import { useCart } from '../../context';

export default function CartItem() {
    const { cart } = useCart();

    return (
        <div className='mx-auto max-w-2xl'>
            <h2 className='pb-2 mb-2 font-medium text-lg border-b'>My Shopping Card</h2>
            {cart && cart.length ? (
                cart?.map((item) => <Cart key={item?.id} {...item} />)
            ) : (
                <MissingCartItems />
            )}
        </div>
    );
}
