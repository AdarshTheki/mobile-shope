import React from 'react';
import { useCart } from '../../context';

export default function CartPriceDetail() {
    const { total_amount, total_items, shipping_fee } = useCart();

    return (
        <div className='min-w-[250px] text-sm space-y-3'>
            <h2 className='pb-2 mb-2 font-medium text-lg border-b'>Price Details</h2>
            <div className='flex justify-between'>
                <p className='text-gray-500'>Price ({total_items} items)</p>
                <p>{total_amount?.toLocaleString('en-in', Number)}</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-500'>Discount</p>
                <p className='text-green-600'>-120.45</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-500'>Delivery charges</p>
                <p>{shipping_fee}</p>
            </div>
            <div className=' border-y py-3 flex justify-between text-gray-800 text-base font-medium'>
                <p>Total Amount</p>
                <p>
                    &#8377; {(total_amount - 120.45 + shipping_fee)?.toLocaleString('en-IN', Number)}
                </p>
            </div>
        </div>
    );
}
