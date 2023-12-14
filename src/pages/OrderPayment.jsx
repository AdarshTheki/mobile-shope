import React from 'react';
import ShippingAddress from '../components/order/ShippingAddress';
import { AddressForm, AddressDisplay } from '../utils';

export default function OrderPayment() {
  const [toggle, setToggle] = React.useState(false);

  const toggleHandler = () => setToggle(!toggle);
  const style = 'cursor-pointer rounded-xl p-4 shadow-xl border-2';

  return (
    <div className='p-5 max-w-xl mx-auto space-y-4'>
      <div onClick={toggleHandler} className={`${style} ${!toggle && 'border-blue-500'}`}>
        <AddressDisplay />
      </div>
      <div onClick={toggleHandler} className={`${style} ${toggle && 'border-blue-500'}`}>
        <h4>+ Add new Address</h4>
      </div>
      {/* Toggle Form */}
      {toggle && <AddressForm setToggle={setToggle} />}
      <ShippingAddress />
    </div>
  );
}
