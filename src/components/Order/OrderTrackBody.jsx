import { useNavigate } from 'react-router-dom';
import { MdOutlineVisibility } from 'react-icons/md';
import { formattedDate } from '../../utils';
import { useOrder } from '../../context';

export default function TrackOrderBody({ phone_detail, $id, $updatedAt }) {
    const { getSingleOrderItem } = useOrder();
    const Navigate = useNavigate();

    const carts = phone_detail ? JSON?.parse(phone_detail) : [];

    const handleView = (id) => {
        getSingleOrderItem(id);
        Navigate(`/order-track/${id}`);
    };

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
            <td className='border px-2 py-1 text-center'>
                <span className='bg-yellow-200 rounded-lg px-2'>Pending</span>
            </td>
            <td className='border px-4 py-1 text-center'>
                <button
                    onClick={() => handleView($id)}
                    className='px-2 py-1 text-blue-600 rounded hover:text-gray-700'>
                    <MdOutlineVisibility fontSize={20} />
                </button>
            </td>
        </tr>
    );
}
