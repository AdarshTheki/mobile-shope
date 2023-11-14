import React from 'react';

export default function Address({
  firstName = 'Adarsh',
  lastName = 'Verma',
  address = 'Maxime cupidatat tem, Commodo enim quo vol, Praesentium rerum ex, Aut tempor eiusmod n',
  phone_no = '539982345',
  city = 'Bhutan',
  country = 'Indonashia',
  postal_code = '4422100',
}) {
  return (
    <>
      <h5>
        {firstName}, {lastName}
      </h5>
      <p>{address}</p>
      <h5 className='capitalize mt-2'>
        {city}, {country} - {postal_code}
      </h5>
      <p>Phone: +91 {phone_no}</p>
    </>
  );
}
