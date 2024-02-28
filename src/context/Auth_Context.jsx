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
    register: () => {},
    getUser: () => {},
    updateUser: () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const getUser = async () => {
        setLoading(true);
        try {
            const data = await account.get();
            setUser(data);
        } catch (err) {
            setUser(null);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await account.deleteSessions();
            setUser(null);
        } catch (err) {
            console.error(err);
        }
    };

    const loggedIn = () => user !== null;

    const register = async (email, password, name) => {
        try {
            await account.create(ID.unique(), email, password, name);
            await login(email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const login = async (email, password) => {
        try {
            await account.createEmailSession(email, password);
            await getUser();
        } catch (err) {
            console.error(err);
        }
    };

    const updateUser = async (name, password, phone) => {
        if (loggedIn()) {
            try {
                if (name) await account.updateName(name);
                if (password) await account.updatePassword(password);
                if (phone) await account.updatePhone(phone);
            } catch (err) {
                console.error(err);
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
                updateUser,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
