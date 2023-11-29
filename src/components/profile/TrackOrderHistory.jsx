import React from 'react';
import { getAllProductItems } from '../../appwrite/postService';
import TrackOrderBody from './TrackOrderBody';
import Loading from '../../utils/LoadingSpinner';

export default function TrackOrderHistory() {
  const [order, setOrder] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const response = async () => {
      await getAllProductItems()
        .then((data) => {
          setOrder(data.documents);
        })
        .catch((error) => console.log(error));
      setLoading(false);
    };
    response();
  }, []);

  if (loading) {
    return <Loading />;
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
