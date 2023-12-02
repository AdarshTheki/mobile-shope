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

  const item = localStorage.getItem('shippingAddress');
  React.useEffect(() => {
    if (item) {
      setAddress(JSON.parse(localStorage.getItem('shippingAddress').toLowerCase()));
    }
  }, [item]);

  return (
    <div className='capitalize'>
      <h5>{address?.name}</h5>
      <p>{address.address}</p>
      <h5 className='mt-2'>{`${address.city}, ${address.country} - ${address.postal_code}`}</h5>
      <p>Phone: +91 {address.phone}</p>
    </div>
  );
}
