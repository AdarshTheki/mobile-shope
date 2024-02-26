import { useEffect, useState } from "react";
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { useCart } from "../../context";
import { AddressForm } from "../../utils";

const CartAddress = () => {
    const [toggle, setToggle] = useState(true);
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem('Address')) || []);

    useEffect(() => {
        localStorage.setItem('Address', JSON.stringify(address));
    }, [address]);

    const {
        changeAddress,
        address: { id },
    } = useCart();

    const deleteAddress = (id) => {
        setAddress((prev) => prev.filter((item) => item?.id !== id));
    };

    return (
        <div>
            <h2 className='pb-2 mb-2 font-medium text-lg border-b'>Delivery Address</h2>
            {!toggle ? (
                <>
                    <div
                        onClick={() => setToggle(true)}
                        className='p-4 border rounded-lg mb-2 w-full flex gap-4 hover:border-blue-400 cursor-pointer'>
                        <MdKeyboardArrowLeft fontSize={20} />
                        <h2>Old Address</h2>
                    </div>
                    <AddressForm setToggle={setToggle} setAddress={setAddress} />
                </>
            ) : (
                <div>
                    <div
                        onClick={() => setToggle(false)}
                        className='p-4 border rounded-lg mb-2 w-full flex gap-4 hover:border-blue-400 cursor-pointer'>
                        <MdAdd fontSize={20} />
                        <h2>Add Address</h2>
                    </div>
                    {address?.map((item) => (
                        <div
                            key={item?.id}
                            className={`p-4 border w-full rounded-lg mb-2 flex gap-4 justify-between hover:border-blue-400 cursor-pointer ${
                                id === item?.id ? 'bg-blue-200' : ''
                            }`}>
                            <div onClick={() => changeAddress(item)}>
                                <h2 className='font-medium'>
                                    {item?.name}{' '}
                                    <span className='text-xs bg-slate-300 px-1 rounded uppercase'>
                                        {item?.deliveryAt}
                                    </span>
                                </h2>
                                <p className='text-sm lowercase'>{item?.location}</p>
                            </div>
                            <RiDeleteBin6Line
                                className='text-lg text-red-600 cursor-pointer'
                                onClick={() => deleteAddress(item?.id)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartAddress