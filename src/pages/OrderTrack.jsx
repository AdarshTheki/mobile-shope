import React from 'react';
import { useParams } from 'react-router-dom';

import { getItem } from '../appwrite/postService';
import Items from '../utils/Items';
import Loading from '../utils/LoadingSpinner';
import { formatePrice } from '../utils/helpers';
import OrderStatus from '../components/order/OrderStatus';
import RemoveOrder from '../components/order/RemoveOrder';
import AddressDisplay from '../utils/AddressDisplay';

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
    return <Loading />;
  }

  return (
    <div className='container mx-auto py-10 px-5 space-y-5'>
      <div className='sm:flex justify-between font-medium uppercase text-blue-600'>
        <h1>#{orderId}</h1>
        <h1>Order placed:- {dates}</h1>
      </div>
      <div className='grid sm:grid-cols-2 justify-between gap-4'>
        <div>
          <h2>Products Purchased</h2>
          {carts.map((cart) => {
            return <Items key={cart.id} {...cart} />;
          })}
        </div>
        <div className='space-y-4'>
          <div>
            <h2>Shipping address</h2>
            <AddressDisplay />
          </div>
          <div>
            <h2>Billing Summary</h2>
            <p>
              Total Price :{' '}
              <span className='text-red-600 font-medium'>{formatePrice(total, 'INR')}</span>
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
