import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

import { loginAccount } from '../appwrite/authService';
import { useAuth } from '../context';
import { Inputs } from '../utils';

export default function Login() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { login } = useAuth();
  const navigate = useNavigate();

  const [passwordShow, setPasswordShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const submitForm = async (data) => {
    setLoading(true);
    const { email, password } = data;
    await loginAccount(email, password)
      .then((user) => {
        login(user);
        navigate('/');
      })
      .catch((err) => {
        toast.error(err.message);
      });
    setLoading(false);
  };

  return (
    <div className='max-w-sm mx-auto px-5 pt-20'>
      <h2 className='text-center py-5 text-gray-600'>Sign in to your account</h2>
      <form onSubmit={handleSubmit(submitForm)} className=' space-y-5'>
        <div>
          <Inputs
            label='Email:'
            type='email'
            placeholder='Enter your email...'
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <span className='text-red-500 text-xs'>This field is not required on your email</span>
          )}
        </div>
        <div className='relative'>
          <Inputs
            label='Password:'
            type={passwordShow ? 'text' : 'password'}
            placeholder='Enter your password...'
            {...register('password', {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:'",.<>?/\\|[\]~`]).{8,}$/i,
            })}
          />
          <span
            onClick={() => setPasswordShow(!passwordShow)}
            className='absolute text-xl right-5 rounded cursor-pointer hover:opacity-90 top-7'>
            {passwordShow ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.password && (
            <span className='text-red-500 text-xs'>
              At least one uppercase, lowercase, digit, and one special character. Keep strong
              password !
            </span>
          )}
        </div>
        <Inputs
          type='submit'
          value={loading ? 'Loading...' : 'Sign In'}
          className='bg-gray-800 hover:opacity-90 text-white font-medium cursor-pointer'
        />
        <p
          onClick={() => navigate('/register')}
          className=' text-center text-teal-600 font-medium hover:text-teal-800 underline cursor-pointer'>
          Register page when a user is new ?
        </p>
        <p className='text-center'>Or continue with</p>
      </form>
      <Inputs
        type='submit'
        value='Dashboard Login AutoFill'
        className='bg-orange-600 mt-5 border-white hover:opacity-90 text-white font-medium cursor-pointer'
      />
      <Toaster />
    </div>
  );
}
