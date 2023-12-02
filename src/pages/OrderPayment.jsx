import React from 'react';
import ShippingAddress from '../components/order/ShippingAddress';
import AddressDisplay from '../utils/AddressDisplay';
import AddressForm from '../utils/AddressForm';

export default function OrderPayment() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className='py-10 px-5 sm:grid grid-cols-2 gap-5'>
      <div>
        <h2 className='my-3'>Shipping Address</h2>
        <div className='grid gap-2 items-start'>
          <div
            onClick={() => setToggle(!toggle)}
            className={` cursor-pointer rounded-xl p-4 hover:scale-95 shadow-xl duration-500 ${
              !toggle ? 'border-2 border-blue-500' : 'border-2 border-gray-300'
            }`}>
            <AddressDisplay />
          </div>
          <div
            onClick={() => setToggle(!toggle)}
            className={`cursor-pointer rounded-xl p-4 hover:scale-95 shadow-xl duration-500 ${
              toggle ? 'border-2 border-blue-500' : 'border-2 border-gray-300'
            }`}>
            <h4>+ Add new Address</h4>
          </div>
        </div>
        {/* Toggle Form */}
        {toggle && (
          <div>
            <hr className='border-gray-300 my-5' />
            <AddressForm setToggle={setToggle} />
          </div>
        )}
      </div>
      <div>
        <ShippingAddress />
      </div>
    </div>
  );
}
