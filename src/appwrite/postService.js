import { Query } from 'appwrite';
import { databases } from './config';

const ORDER_DATABASE_ID = '65dc203a459215fe42be';
const ORDER_COLLECTION_ID = '65dc204d9287354a2b6d';

const createOrderItem = async ({ user_detail, phone_detail }) => {
    const order_id = Date.now()?.toString();
    try {
        await databases.createDocument(ORDER_DATABASE_ID, ORDER_COLLECTION_ID, order_id, {
            order_id,
            user_detail,
            phone_detail,
        });
    } catch (error) {
        console.error(error);
    }
};

const getAllOrderItem = async (queries = [Query.limit(10)]) => {
    try {
        return await databases.listDocuments(ORDER_DATABASE_ID, ORDER_COLLECTION_ID, queries);
    } catch (error) {
        console.error(error);
    }
};

const singleOrderItem = async (order_id) => {
    try {
        return await databases.getDocument(ORDER_DATABASE_ID, ORDER_COLLECTION_ID, order_id);
    } catch (error) {
        console.error(error);
    }
};

const deleteOrderItem = async (order_id) => {
    try {
        return await databases.deleteDocument(ORDER_DATABASE_ID, ORDER_COLLECTION_ID, order_id);
    } catch (error) {
        console.error(error);
    }
};

export { createOrderItem, getAllOrderItem, deleteOrderItem, singleOrderItem };
