/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useAuth } from './context';
import { LoadingSpinner } from './utils';
import Layout from './Layout';
import { Outlet } from 'react-router-dom';

const App = () => {
    const { loading, getUser } = useAuth();

    React.useEffect(() => {
        getUser();
    }, []);

    return <Outlet>{loading ? <LoadingSpinner /> : <Layout />}</Outlet>;
};
export default App;
