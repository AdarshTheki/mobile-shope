import React from 'react';
import { getAllOrderItem } from '../appwrite/postService';
import { LoadingSpinner } from '../utils';
import OrderTrackBody from '../components/Order/OrderTrackBody';

export default function TrackOrderHistory() {
    const [order, setOrder] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const response = async () => {
            await getAllOrderItem()
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

    return (
        <table className='min-w-full table-auto my-5'>
            <thead>
                <th className='text-gray-700 font-medium'>Order Number</th>
                <th className='text-gray-700 font-medium'>Product</th>
                <th className='text-gray-700 font-medium'>Status</th>
                <th className='text-gray-700 font-medium'>Track</th>
            </thead>
            <tbody className='text-sm'>
                {order && order.length
                    ? order?.map((item, index) => <OrderTrackBody key={index} {...item} />)
                    : null}
            </tbody>
        </table>
    );
}
