/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import { formatePrice, formattedDate } from '../utils';
import { useOrder } from '../context';

export default function OrderTrack() {
    const { orderId } = useParams();
    const { selectedOrder } = useOrder();

    let item = JSON.parse(selectedOrder?.phone_detail);
    let location = JSON.parse(selectedOrder?.user_detail);

    return (
        <div className='mx-auto px-5'>
            <h2 className='border-b py-2 mb-2'>Order Detail</h2>
            <div className='sm:flex space-y-3 gap-2 text-sm items-start justify-between'>
                <h4 className='font-medium'>
                    Order Id : <span className='text-blue-600'>{orderId}</span>
                </h4>
                <div className='max-w-[300px]'>
                    <h4 className='font-medium'>Shipping Address</h4>
                    <p>{location?.name}</p>
                    <p className='whitespace-pre-wrap'>
                        {location?.deliveryAt},{location?.city}, {location?.address},{' '}
                        {location?.state}, {location?.zip},{location?.phone}
                    </p>
                </div>
                <div>
                    <h4 className='font-medium'>Payment Method</h4>
                    <p>BHIM UPI</p>
                </div>
            </div>
            <div>
                <h2 className='text-green-600 '>
                    Deliver At {formattedDate(selectedOrder?.$updatedAt?.toString())}
                </h2>
                <div>
                    {item?.map((item) => (
                        <Items key={item?.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Items({ id, name, url, price, amount }) {
    return (
        <div key={id} className='py-2 mb-2 flex gap-5 border-b'>
            <img src={url} alt='' width={60} className='object-contain' />
            <div className='text-sm text-gray-500 font-medium'>
                <p className='text-gray-600 font-medium'>{name}</p>
                <p>Quantity: {amount}</p>
                <p>{formatePrice(price)}</p>
                <p className='text-gray-700'>Total: {formatePrice(price * amount + 180)}</p>
            </div>
        </div>
    );
}
