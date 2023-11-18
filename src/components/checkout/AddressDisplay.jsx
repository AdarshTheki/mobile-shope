import React from 'react';

export default function AddressDisplay({
  full_name = 'Adarsh Verma',
  address = 'Maxime cupidatat tem, Commodo enim quo vol, Praesentium rerum ex, Aut tempor eiusmod n',
  phone = '539982345',
  city = 'Bhutan',
  country = 'Indonashia',
  postal_code = '4422100',
}) {
  return (
    <>
      <h5>{full_name}</h5>
      <p className='capitalize'>{address.toLowerCase()}</p>
      <h5 className='capitalize mt-2'>
        {city}, {country} - {postal_code}
      </h5>
      <p>Phone: +91 {phone}</p>
    </>
  );
}
