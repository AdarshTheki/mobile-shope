/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from 'react';
import { useAuth } from '../context';
import { Button, formattedDate } from '../utils';

export default function UserProfile() {
    const { user, logout, updateUser } = useAuth();
    const [name, setName] = useState(user?.name);
    const [show, setShow] = useState(true);

    const handleUpdateUser = (e) => {
        try {
            e.preventDefault();
            updateUser(name);
            setShow(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='rounded-lg w-[500px] mt-5 border-2 p-4 mx-auto flex flex-col items-center gap-5'>
            <div className='w-[60px] h-[60px] bg-orange-500 rounded-full text-2xl uppercase text-center flex items-center justify-center'>
                {user?.name?.slice(0, 2)}
            </div>
            <table className='table-auto'>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td className='min-w-[20px]'>:</td>
                        <td>{user?.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>{user?.email.toLowerCase()}</td>
                    </tr>
                    <tr>
                        <td>Access</td>
                        <td>:</td>
                        <td>{formattedDate(user?.registration)}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>:</td>
                        <td>{user?.phone || '#NA'}</td>
                    </tr>
                    <tr>
                        <td>Update</td>
                        <td>:</td>
                        <td>{formattedDate(user?.$updatedAt)}</td>
                    </tr>
                </tbody>
            </table>
            {!show && (
                <form onSubmit={handleUpdateUser} className='space-y-3 w-full px-5 capitalize'>
                    <div className='flex justify-between gap-4 items-center'>
                        <label htmlFor='userNames' className='w-1/3'>
                            Name
                        </label>
                        <input
                            id='userNames'
                            className='w-full py-1.5 text-sm rounded border border-gray-600 px-5'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <Button className='bg-green-600 text-white'>submit</Button>
                </form>
            )}

            <Button
                onClick={() => setShow(!show)}
                className={` text-white ${show ? 'bg-green-600' : 'bg-red-600'}`}>
                {show ? 'Edit' : 'Cancle'}
            </Button>

            <button
                onClick={logout}
                className='bg-red-500 text-white px-10 py-2 rounded-2xl hover:opacity-90'>
                Logout
            </button>
        </div>
    );
}
