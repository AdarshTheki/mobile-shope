import { ID, Query } from 'appwrite';
import { databases, DATABASE_ID, COLLECTION_ID } from './config';

const createPost = async ({
  userId,
  full_name,
  address,
  city,
  country,
  postal_code,
  phone,
  payment,
  carts,
}) => {
  return await databases.createDocument(DATABASE_ID, COLLECTION_ID, userId, {
    full_name,
    address,
    city,
    country,
    postal_code,
    phone,
    payment,
    carts,
  });
};

const getPost = async (userId) => {
  return await databases.getDocument(userId);
};

const getAllPosts = async (queries = [Query.limit(10)]) => {
  return await databases.listDocuments(DATABASE_ID, COLLECTION_ID, queries);
};

export { createPost, getAllPosts, getPost };
