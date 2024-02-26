/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useAuth } from './context';
import { LoadingSpinner } from './utils';
import Routes from './Routes';

const App = () => {
    const { login, loading } = useAuth();

    React.useEffect(() => {
        login();
    }, []);

    return <>{loading ? <LoadingSpinner /> : <Routes />}</>;
};
export default App;
