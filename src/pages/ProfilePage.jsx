/* eslint-disable no-unsafe-optional-chaining */
import React from 'react';
import { useAuth } from '../context';
import { formattedDate } from '../utils';

export default function UserProfile() {
    const { user, logout } = useAuth();

    return (
        <div className='rounded-lg w-[500px] mt-5 border-2 p-4 mx-auto flex flex-col items-center gap-5'>
            <div className='w-[60px] h-[60px] bg-orange-500 rounded-full text-2xl uppercase text-center flex items-center justify-center'>
                {user?.name?.slice(0, 2)}
            </div>
            <table className='table-auto'>
                <tbody>
                    <tr>
                        <td className='min-w-[100px]'>Name</td>
                        <td className='min-w-[20px]'>:</td>
                        <td>{user?.name}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>:</td>
                        <td>{user?.email.toLowerCase()}</td>
                    </tr>
                    <tr>
                        <td>Last Update</td>
                        <td>:</td>
                        <td>{formattedDate(user?.accessedAt)}</td>
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
