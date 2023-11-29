import React from 'react';
import { LoadingSpinner } from '../utils';
import GlobalContext from '../context/useGlobalContext';
import { getShippingAddress } from '../appwrite/postService';
import UserProfile from '../components/profile/UserProfile';
import TrackOrderHistory from '../components/profile/TrackOrderHistory';

export default function Profile() {
  const { auth } = GlobalContext();
  const { userData } = auth;
  const [shippingDetail, setShippingDetail] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const getShipping = async () => {
    await getShippingAddress('655992a7ad369ec2f8ff')
      .then((data) => {
        setShippingDetail(data);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  };

  React.useEffect(() => {
    getShipping();
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <div className='container mx-auto px-5'>
            <UserProfile address={shippingDetail} userData={userData} />
          </div>
          <hr className='my-8 border' />
          <div className='container mx-auto px-5'>
            <TrackOrderHistory />
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
