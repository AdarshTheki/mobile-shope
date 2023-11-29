import { Query } from 'appwrite';
import { databases, DATABASE_ID } from './config';

// This is collection ids
const ADDRESS_COLLECTION_ID = '6559843356c5e2ddca69';
const ITEM_COLLECTION_ID = '655995f4e5ed82239663';

const createShippingAddress = async ({
  userId,
  name,
  address,
  city,
  country,
  postal_code,
  phone,
}) => {
  return await databases.createDocument(DATABASE_ID, ADDRESS_COLLECTION_ID, userId, {
    name,
    address,
    city,
    country,
    postal_code,
    phone,
  });
};

const getShippingAddress = async (userId) => {
  return await databases.getDocument(DATABASE_ID, ADDRESS_COLLECTION_ID, userId);
};

const createProductItem = async ({ userId, body, payment }) => {
  return await databases.createDocument(DATABASE_ID, ITEM_COLLECTION_ID, userId, {
    body,
    payment,
  });
};

const getAllProductItems = async (queries = [Query.limit(10)]) => {
  return await databases.listDocuments(DATABASE_ID, ITEM_COLLECTION_ID, queries);
};

const getItem = async (userId) => {
  return await databases.getDocument(DATABASE_ID, ITEM_COLLECTION_ID, userId);
};

const updateItem = async (userId) => {
  return await databases.updateDocument(DATABASE_ID, ITEM_COLLECTION_ID, userId);
};

const deleteItem = async (userId) => {
  return await databases.deleteDocument(DATABASE_ID, ITEM_COLLECTION_ID, userId);
};

export {
  getItem,
  updateItem,
  deleteItem,
  createProductItem,
  createShippingAddress,
  getAllProductItems,
  getShippingAddress,
};
