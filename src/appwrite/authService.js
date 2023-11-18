import { ID } from 'appwrite';
import { account } from './config';

const createAccount = async (email, password, name) => {
  await account.create(ID.unique(), email, password, name);
  await loginAccount(email, password);
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

export { createAccount, loginAccount, logoutAccount, getCurrentUser };
