import React from 'react';
import { useForm } from 'react-hook-form';
import Inputs from './Inputs';
import { useCart } from '../context';

export default function AddressForm({ setToggle }) {
    const { addAddress } = useCart();
    const { register, handleSubmit, formState } = useForm();

    const submitHandler = async (data) => {
        const { name, address, city, country, postal_code, phone, deliveryAt } = data;
        addAddress({
            id: Date.now(),
            name,
            address,
            city,
            state: country,
            zip: postal_code,
            deliveryAt,
            phone,
        });
        setToggle(true);
    };

    return (
        <form className='grid grid-cols-2 gap-3 items-start' onSubmit={handleSubmit(submitHandler)}>
            <div>
                <Inputs
                    label='Full Name'
                    placeholder='Enter your full name'
                    {...register('name', { required: true, pattern: /^[A-Za-z ]+$/i })}
                />
                {formState?.errors.lastName && (
                    <span className='text-red-600 text-xs capitalize'>Invalid full name</span>
                )}
            </div>
            <div>
                <Inputs
                    label='Address'
                    placeholder='Enter your address'
                    {...register('address', { required: true, pattern: /^[a-zA-Z0-9\s,.'-]+$/i })}
                />
                {formState?.errors.address && (
                    <span className='text-red-600 text-xs capitalize'>Invalid your address</span>
                )}
            </div>
            <Inputs label='City' placeholder='Enter your city' {...register('city')} />
            <Inputs label='Country' placeholder='Enter your country' {...register('country')} />
            <div>
                <Inputs
                    label='Postal Code'
                    placeholder='Enter your postal code'
                    {...register('postal_code', {
                        required: true,
                        pattern: /^[1-9][0-9]{5}$/i,
                    })}
                />
                {formState?.errors.postal_code && (
                    <span className='text-red-600 text-xs capitalize'>
                        Invalid your postal code
                    </span>
                )}
            </div>
            <div>
                <Inputs
                    label='Phone'
                    placeholder='Enter your phone number'
                    {...register('phone', { required: true, pattern: /^\+?[0-9\s.-]+$/i })}
                />
                {formState?.errors.phone_no && (
                    <span className='text-red-600 text-xs capitalize'>Invalid your phone no</span>
                )}
            </div>
            <div className='space-x-2 text-sm font-medium text-gray-800'>
                <label htmlFor='deliveryAt'>Delivery option</label>
                <select
                    {...register('deliveryAt', { required: true })}
                    id='deliveryAt'
                    className='border p-1 border-gray-500 rounded text-sm'>
                    <option value='home'>Home</option>
                    <option value='works'>Work</option>
                </select>
            </div>
            <Inputs
                type='submit'
                value='Submit Address →'
                className='bg-green-600 cursor-pointer hover:opacity-90 text-white font-medium '
            />
        </form>
    );
}
