/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useAuth } from './context';
import { LoadingSpinner } from './utils';
import Layout from './Layout';

const App = () => {
    const { loading, getUser } = useAuth();

    React.useEffect(() => {
        getUser();
    }, []);

    return <>{loading ? <LoadingSpinner /> : <Layout />}</>;
};
export default App;
