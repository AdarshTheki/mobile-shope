/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function UserProfile({ userData, address }) {
  return (
    <div className='rounded-lg w-[500px] border-2 p-4 mx-auto flex flex-col items-center gap-5'>
      <div className='w-[60px] h-[60px] bg-orange-500 rounded-full text-2xl uppercase text-center flex items-center justify-center'>
        {userData?.name?.slice(0, 2)}
      </div>
      <table className='capitalize w-full'>
        <tbody>
          <tr className=' font-semibold text-blue-600'>User Detail</tr>
          <tr>
            <td>Name</td>
            <td className='w-6 text-center'>:</td>
            <td>{userData?.name}</td>
          </tr>
          <tr>
            <td>email:</td>
            <td className='w-6 text-center'>:</td>
            <td>{userData?.email}</td>
          </tr>
          <tr>
            <td>createdAt</td>
            <td className='w-6 text-center'>:</td>
            <td>{userData?.$createdAt}</td>
          </tr>
          <tr>
            <td>status</td>
            <td className='w-6 text-center'>:</td>
            <td className={`font-semibold ${userData?.status ? 'text-green-600' : 'text-red-600'}`}>
              active
            </td>
          </tr>
          <tr>
            <td>user_Id</td>
            <td className='w-6 text-center'>:</td>
            <td>{userData?.$id}</td>
          </tr>
          <tr className=' border border-gray-600'></tr>
          <tr className=' font-semibold text-blue-600'>shipping Detail</tr>
          <tr>
            <td>name</td>
            <td className='w-6 text-center'>:</td>
            <td>{(address?.name).toLowerCase()}</td>
          </tr>
          <tr>
            <td>address</td>
            <td className='w-6 text-center'>:</td>
            <td>{(address?.address).toLowerCase()}</td>
          </tr>
          <tr>
            <td>postal code</td>
            <td className='w-6 text-center'>:</td>
            <td>{address?.postal_code}</td>
          </tr>
          <tr>
            <td>city</td>
            <td className='w-6 text-center'>:</td>
            <td>{address?.city}</td>
          </tr>
          <tr>
            <td>country</td>
            <td className='w-6 text-center'>:</td>
            <td>{address?.country}</td>
          </tr>
          <tr>
            <td>phone</td>
            <td className='w-6 text-center'>:</td>
            <td>+91 {address?.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
