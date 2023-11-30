import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineVisibility } from 'react-icons/md';
import { formatePrice } from '../../utils/helpers';
import Visible from '../SVG/Visible';

export default function TrackOrderBody({ body, $id, $updatedAt, payment }) {
  const carts = JSON.parse(body);
  const totals = carts?.reduce((a, c) => a + c.amount * c.price, 0);
  return (
    <tr>
      <td className='border px-4 py-1'>
        <p className='text-xs text-blue-500'>{new Date($updatedAt).toDateString()}</p>
        <p>{$id}</p>
      </td>
      <td className='border px-4 py-1'>
        {carts.map((item) => (
          <p key={item?.id}>{item?.name}</p>
        ))}
      </td>
      <td className='border px-4 py-1'>{formatePrice(totals, 'INR')}</td>
      <td className='border px-4 py-1'>{payment || 'Not paid'}</td>
      <td className='border px-4 py-1'>pending</td>
      <td className='border px-4 py-1'>
        <NavLink
          className='px-2 py-1 text-blue-600 rounded hover:text-gray-700'
          to={`/order-track/${$id}`}>
          <MdOutlineVisibility fontSize={25}/>
        </NavLink>
      </td>
    </tr>
  );
}
