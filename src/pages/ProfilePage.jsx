/* eslint-disable no-unsafe-optional-chaining */
import React from 'react';
import { useAuth, useCart } from '../context';
import {formattedDate} from '../utils'

export default function UserProfile() {
  const { user, logout } = useAuth();
  const { address } = useCart();

  return (
    <div className='rounded-lg w-[500px] border-2 p-4 mx-auto flex flex-col items-center gap-5'>
      <div className='w-[60px] h-[60px] bg-orange-500 rounded-full text-2xl uppercase text-center flex items-center justify-center'>
        {user?.name?.slice(0, 2)}
      </div>
      <table className='table-auto'>
        <tbody>
          <tr>
            <td className='min-w-[100px]'>user name</td>
            <td className='min-w-[20px]'>:</td>
            <td>{user?.name}</td>
          </tr>
          <tr>
            <td>email:</td>
            <td>:</td>
            <td>{user?.email.toLowerCase()}</td>
          </tr>
          <tr>
            <td>last update</td>
            <td>:</td>
            <td>{formattedDate(user?.accessedAt)}</td>
          </tr>
          <tr>
            <td>name</td>
            <td>:</td>
            <td>{address?.name}</td>
          </tr>
          <tr>
            <td>address</td>
            <td>:</td>
            <td>{(address?.address).toLowerCase()}</td>
          </tr>
          <tr>
            <td>postal code</td>
            <td>:</td>
            <td>{address?.postal_code}</td>
          </tr>
          <tr>
            <td>city</td>
            <td>:</td>
            <td>{address?.city}</td>
          </tr>
          <tr>
            <td>country</td>
            <td>:</td>
            <td>{address?.country}</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>:</td>
            <td>+91 {address?.phone}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={logout}
        className='bg-red-500 text-white px-10 py-2 rounded-2xl hover:opacity-90'>
        Logout
      </button>
    </div>
  );
}
