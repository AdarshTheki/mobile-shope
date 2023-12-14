import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineVisibility } from 'react-icons/md';
import { getAllProductItems } from '../appwrite/postService';
import { formatePrice, LoadingSpinner, formattedDate } from '../utils';

export default function TrackOrderHistory() {
  const [order, setOrder] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const response = async () => {
      await getAllProductItems()
        .then((data) => {
          setOrder(data.documents);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    };
    response();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  function TrackOrderBody({ body, $id, $updatedAt, payment }) {
    const carts = JSON.parse(body);
    const totals = carts?.reduce((a, c) => a + c.amount * c.price, 0);
    return (
      <tr>
        <td className='border px-4 py-1'>
          <p className='text-xs text-blue-500'>{formattedDate($updatedAt)}</p>
          <p>{$id}</p>
        </td>
        <td className='border px-4 py-1'>
          {carts.map((item) => (
            <p key={item?.id}>{item?.name}</p>
          ))}
        </td>
        <td className='border px-4 py-1'>{formatePrice(totals)}</td>
        <td className='border px-4 py-1'>{payment || 'Not paid'}</td>
        <td className='border px-4 py-1'>pending</td>
        <td className='border px-4 py-1'>
          <NavLink
            className='px-2 py-1 text-blue-600 rounded hover:text-gray-700'
            to={`/order-track/${$id}`}>
            <MdOutlineVisibility fontSize={25} />
          </NavLink>
        </td>
      </tr>
    );
  }

  return (
    <table className='min-w-full table-auto'>
      <thead>
        <th className='px-4 py-2'>Order Number</th>
        <th className='px-4 py-2'>Product</th>
        <th className='px-4 py-2'>Price</th>
        <th className='px-4 py-2'>Payment</th>
        <th className='px-4 py-2'>Status</th>
        <th className='px-4 py-2'>Track</th>
      </thead>
      <tbody>
        {order && order?.map((item, index) => <TrackOrderBody key={index} {...item} />)}
      </tbody>
    </table>
  );
}
