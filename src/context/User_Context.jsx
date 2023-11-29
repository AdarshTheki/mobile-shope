import { Client, Databases, Account, ID } from 'appwrite';
import { createContext, useContext } from 'react';

const PROJECT_ID = '655436d63a9eae53dc46';
const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(PROJECT_ID); // Your project ID
const account = new Account(client);

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const createAccount = async (email, password, name) => {
    await account
      .create(ID.unique(), email, password, name)
      .then((user) => {
        loginAccount(email, password);
        account.createVerification(email);
      })
      .catch((err) => alert(err.message));
  };
  const loginAccount = async (email, password) => {
    return await account.createEmailSession(email, password);
  };
  const logoutAccount = async () => {
    return await account.deleteSessions();
  };
  const getCurrentUser = async () => {
    return await account.get();
  };
  return (
    <UserContext.Provider value={{ getCurrentUser, loginAccount, logoutAccount, createAccount }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
