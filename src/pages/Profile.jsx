import React from 'react';
import GlobalContext from '../context/GlobalContext';
import Button from '../utils/Button';
import { NavLink } from 'react-router-dom';

export default function Profile() {
  const { auth } = GlobalContext();
  const { userData } = auth;
  console.log(userData);
  return (
    <div className='container mx-auto py-10 px-5'>
      <h2 className='text-center'>Profile Page</h2>
      <div className='space-y-4 w-96 mx-auto p-4 shadow-xl rounded-xl bg-slate-200 flex flex-col items-center'>
        <div className='w-[60px] h-[60px] bg-orange-500 rounded-full text-2xl uppercase text-center flex items-center justify-center'>
          {userData?.name.slice(0, 2)}
        </div>
        <table className='table'>
          <tr>
            <td>Name:</td>
            <td>{userData?.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{userData?.email}</td>
          </tr>
          <tr>
            <td>Created:</td>
            <td>{userData?.$createdAt}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{userData?.Phone}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{userData?.Address}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{userData?.Gender}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{userData?.Age}</td>
          </tr>
          <tr>
            <td>Joined:</td>
            <td>{userData?.Joined}</td>
          </tr>
          <tr>
            <td>Role:</td>
            <td>{userData?.Role}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>{userData?.Status}</td>
          </tr>
        </table>
        <NavLink
          to='/'
          className='border-blue-600 hover:bg-blue-200 border-2 text-blue-700 px-4 py-1 '>
          Home
        </NavLink>
      </div>
    </div>
  );
}
