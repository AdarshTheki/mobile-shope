import { NavLink } from 'react-router-dom';
import { MdOutlineVisibility } from 'react-icons/md';
import { formattedDate } from '../../utils';

export default function TrackOrderBody({ phone_detail, $id, $updatedAt }) {
    const carts = JSON.parse(phone_detail);
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
            <td className='border px-4 py-1'>pending</td>
            <td className='border px-4 py-1'>
                <NavLink
                    className='px-2 py-1 text-blue-600 rounded hover:text-gray-700'
                    to={`/order-track/${$id}`}>
                    <MdOutlineVisibility fontSize={20} />
                </NavLink>
            </td>
        </tr>
    );
}
