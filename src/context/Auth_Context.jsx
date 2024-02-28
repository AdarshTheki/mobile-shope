/* eslint-disable react/prop-types */
import React from 'react';
import { ID } from 'appwrite';
import { account } from '../appwrite/config';

export const AuthContext = React.createContext({
    user: null,
    loading: false,
    login: () => {},
    logout: () => {},
    loggedIn: () => {},
    loggedOut: () => {},
    register: () => {},
    getUser: () => {},
    verifyEmail: () => {},
    updateUser: () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const getUser = async () => {
        setLoading(true);
        await account
            .get()
            .then((data) => setUser(data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    };

    const logout = async () => {
        await account
            .deleteSessions()
            .then(() => setUser(null))
            .catch((err) => console.error(err));
    };

    const loggedIn = () => {
        return user !== null ? true : false;
    };

    const loggedOut = () => {
        return user === null ? true : false;
    };

    const register = async (email, password, name) => {
        await account.create(ID.unique(), email, password, name);
        await login(email, password);
        // await verifyEmail();
    };

    const login = async (email, password) => {
        await account.createEmailSession(email, password);
        await getUser();
    };

    const verifyEmail = async () => {
        if (loggedIn()) {
            await account.createVerification(user?.$id, 'http://localhost:5173');
        }
    };

    const updateUser = async (name, password, phone) => {
        if (loggedIn()) {
            if (name) {
                await account.updateName(name);
            }
            if (password) {
                await account.updatePassword(password);
            }
            if (phone) {
                await account.updatePhone(phone);
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                getUser,
                register,
                loggedIn,
                loggedOut,
                updateUser,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
