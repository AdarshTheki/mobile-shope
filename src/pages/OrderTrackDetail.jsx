/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatePrice, LoadingSpinner, formattedDate } from '../utils';
import { singleOrderItem } from '../appwrite/postService';

export default function OrderTrack() {
    const { orderId } = useParams();
    const [carts, setCarts] = React.useState(null);
    const [item, setItem] = useState(null);
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        const getOrderDetail = async () => {
            setLoading(true);
            try {
                const result = await singleOrderItem(orderId);
                setCarts(result);
                setLocation(JSON.parse(result?.user_detail));
                setItem(JSON.parse(result?.phone_detail));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getOrderDetail();
    }, [orderId]);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className='mx-auto container px-5'>
            <h2 className='border-b py-2 mb-2'>Order Detail</h2>
            <div className='sm:flex gap-2 text-sm items-start justify-between'>
                <h4 className='font-medium'>
                    Order Id : <span className='text-blue-600'>{orderId}</span>
                </h4>
                <div className='max-w-[30%]'>
                    <h4 className='font-medium'>Shipping Address</h4>
                    <p>{location?.name}</p>
                    <p>{location?.location}</p>
                </div>
                <div>
                    <h4 className='font-medium'>Payment Method</h4>
                    <p>BHIM UPI</p>
                </div>
            </div>
            <div className='border-b py-2 mb-2'>
                <h2 className='text-green-600 '>
                    Deliver At {formattedDate(carts?.$updatedAt?.toString())}
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
        <div key={id} className='py-2 mb-2 flex gap-5'>
            <img src={url} alt='' width={60} className='object-contain' />
            <div className='text-sm text-gray-500 font-medium'>
                <p className='text-gray-600 font-medium'>{name}</p>
                <p>Quantity: {amount}</p>
                <p>Price: {formatePrice(price)}</p>
            </div>
        </div>
    );
}
