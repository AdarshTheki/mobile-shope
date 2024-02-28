import React from 'react';
import OrderTrackBody from '../components/Order/OrderTrackBody';
import { useOrder } from '../context';

export default function TrackOrderHistory() {
    const { orders } = useOrder();

    return (
        <table className='min-w-full table-auto my-5'>
            <thead>
                <th className='text-gray-700 font-medium'>Order Number</th>
                <th className='text-gray-700 font-medium'>Product</th>
                <th className='text-gray-700 font-medium'>Status</th>
                <th className='text-gray-700 font-medium'>Track</th>
            </thead>
            <tbody className='text-sm'>
                {orders.length > 0
                    ? orders?.map((item, index) => <OrderTrackBody key={index} {...item} />)
                    : null}
            </tbody>
        </table>
    );
}
