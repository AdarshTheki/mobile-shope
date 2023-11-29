import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { deleteItem } from '../../appwrite/postService';

export default function RemoveOrder({ id }) {
  const navigate = useNavigate();

  const deletePost = async () => {
    await deleteItem(id)
      .then(() => {
        toast.success('This order delete successfully');
        navigate('/profile');
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className='border-y space-x-10 py-4 my-2 text-center'>
      <NavLink
        to='/'
        className='hover:bg-slate-600 hover:text-white duration-300 border-2 border-slate-600 rounded-2xl px-4 py-1.5 text-slate-600 font-medium'>
        Go Home
      </NavLink>
      <button
        onClick={() => deletePost()}
        className='hover:bg-red-600 hover:text-white duration-300 border-2 border-red-600 rounded-2xl px-4 py-1.5 text-red-600 font-medium'>
        Remove Order
      </button>
    </div>
  );
}
