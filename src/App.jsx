/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useAuth } from './context';
import { LoadingSpinner } from './utils';
import Routes from './Routes';

const App = () => {
    const { loading, getUser } = useAuth();

    React.useEffect(() => {
        getUser();
    }, []);

    return <>{loading ? <LoadingSpinner /> : <Routes />}</>;
};
export default App;
