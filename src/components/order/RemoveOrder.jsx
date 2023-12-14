import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteItem } from '../../appwrite/postService';

export default function RemoveOrder({ id }) {
  const navigate = useNavigate();

  const deletePost = async () => {
    await deleteItem(id)
      .then(() => {
        navigate('/order-track');
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className='border-y space-x-10 py-4 my-2 text-center'>
      <NavLink to='/' className='bg-gray-600 text-white px-10 py-2 rounded-2xl hover:opacity-90'>
        Go Home
      </NavLink>
      <button
        onClick={() => deletePost()}
        className='bg-red-600 text-white px-10 py-2 rounded-2xl hover:opacity-90'>
        Remove Order
      </button>
    </div>
  );
}
