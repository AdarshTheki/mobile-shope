import React from 'react';
import { useCart } from '../../context';
import { formatePrice } from '../../utils';

export default function Cart({ id, name, amount, price, url }) {
    const { increaseQty, decreaseQty, removeItem } = useCart();

    return (
        <div className='flex text-sm p-2'>
            <img src={url} alt={name} className='object-contain mr-5 max-w-[100px]' />
            <div className='space-y-2'>
                <p className='text-gray-800 font-medium text-base'>{name}</p>
                <p>Price: {formatePrice(price)}</p>
                <div className='flex items-center capitalize flex-wrap gap-2'>
                    <button
                        className='bg-slate-600 px-2 rounded text-white font-bold hover:opacity-90'
                        onClick={() => increaseQty(id)}>
                        +
                    </button>
                    <span className='border px-2 m-1 border-slate-300 rounded'>{amount}</span>
                    <button
                        className='bg-slate-600 px-2 rounded text-white font-bold hover:opacity-90'
                        onClick={() => decreaseQty(id)}>
                        -
                    </button>
                    <span>save for later</span>
                    <button
                        onClick={() => removeItem(id)}
                        className='text-red-500 font-medium hover:text-red-800'>
                        Remove
                    </button>
                </div>
                <p className='font-medium'>Total: {formatePrice(amount * price)}</p>
            </div>
        </div>
    );
}
