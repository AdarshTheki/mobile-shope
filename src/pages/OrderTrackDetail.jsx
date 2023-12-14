/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

import { formatePrice, LoadingSpinner, AddressDisplay } from '../utils';
import { getItem } from '../appwrite/postService';
import OrderStatus from '../components/order/OrderStatus';
import RemoveOrder from '../components/order/RemoveOrder';

export default function OrderTrack() {
  const { orderId } = useParams();
  const [item, setItems] = React.useState([]);
  const [carts, setCarts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const response = async () => {
      await getItem(orderId)
        .then((data) => {
          setItems(data);
          setCarts(JSON.parse(data.body));
        })
        .catch((error) => console.log(error));
      setLoading(false);
    };
    response();
  }, [orderId]);

  const total = carts.reduce((total, index) => total + index.amount * index.price, 0);
  const dates = new Date(item?.$updatedAt).toDateString();

  if (loading) {
    return <LoadingSpinner />;
  }

  const Items = ({ name, url, price, amount }) => {
    return (
      <div className='py-2 mb-2 flex gap-5'>
        <img src={url} alt='' width={60} className='object-contain' />
        <div className='text-sm text-gray-500 font-medium'>
          <p className='text-gray-600 font-medium'>{name}</p>
          <p>Quantity: {amount}</p>
          <p>Price: {formatePrice(price)}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='container mx-auto py-10 px-5 space-y-5'>
      <div className='sm:flex justify-between font-medium uppercase text-blue-600'>
        <h1>#{orderId}</h1>
        <h1>Order placed:- {dates}</h1>
      </div>
      <div className='grid sm:grid-cols-2 justify-between gap-4'>
        <div>
          <h2 className='font-medium'>Products Purchased:</h2>
          {carts && carts.map((cart) => <Items key={cart.id} {...cart} />)}
        </div>
        <div className='space-y-4'>
          <AddressDisplay />
          <div>
            <h2 className='font-medium mb-2'>Billing Summary:</h2>
            <p>
              Total Price : <span className='text-red-600 font-medium'>{formatePrice(total)}</span>
            </p>
            <p>Payment Method : {item.payment}</p>
          </div>
        </div>
      </div>
      <div className='h-[100px]'>
        <OrderStatus dates={dates} />
      </div>
      <RemoveOrder id={orderId} />
    </div>
  );
}
