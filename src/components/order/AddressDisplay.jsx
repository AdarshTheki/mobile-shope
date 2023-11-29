import React from 'react';

export default function AddressDisplay() {
  const [address, setAddress] = React.useState({
    name: 'Adarsh Verma',
    address: 'Maxime cupidatat tem, Praesentium rerum ex, Aut tempor eiusmod n',
    phone: '539982345',
    city: 'Bhutan',
    country: 'Indonashia',
    postal_code: '4422100',
  });
  React.useEffect(() => {
    const item = localStorage.getItem('shippingAddress');
    if (item) {
      setAddress(JSON.parse(localStorage.getItem('shippingAddress')));
    }
  }, []);

  return (
    <>
      <h5>{address?.name}</h5>
      <p className='capitalize'>{address.address.toLowerCase()}</p>
      <h5 className='capitalize mt-2'>
        {address.city}, {address.country} - {address.postal_code}
      </h5>
      <p>Phone: +91 {address.phone}</p>
    </>
  );
}
