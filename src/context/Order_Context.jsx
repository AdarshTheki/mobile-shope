/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from 'react';
import { Query } from 'appwrite';
import { databases } from '../appwrite/config';

const ORDER_DATABASE_ID = '65dc203a459215fe42be';
const ORDER_COLLECTION_ID = '65dc204d9287354a2b6d';

export const OrderContext = createContext({
    orders: [],
    selectedOrder: null,
    getAllOrderItems: () => {},
    getSingleOrderItem: () => {},
    createOrderItem: () => {},
    deleteOrderItem: () => {},
});

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const getAllOrderItems = async (queries = [Query.limit(10)]) => {
        try {
            const orderItems = await databases.listDocuments(
                ORDER_DATABASE_ID,
                ORDER_COLLECTION_ID,
                queries
            );
            setOrders(orderItems.documents);
        } catch (error) {
            console.error('Error fetching order items:', error);
        }
    };

    const getSingleOrderItem = (orderId) => {
        try {
            const orderItem = orders.find((order) => order.$id === orderId);
            setSelectedOrder(orderItem);
        } catch (error) {
            console.error('Error fetching order item:', error);
        }
    };

    const createOrderItem = async ({ user_detail, phone_detail }) => {
        try {
            const order_id = new Date().getTime().toString();
            const newOrderItem = await databases.createDocument(
                ORDER_DATABASE_ID,
                ORDER_COLLECTION_ID,
                order_id,
                {
                    order_id,
                    phone_detail,
                    user_detail,
                }
            );
            setOrders([...orders, newOrderItem]);
        } catch (error) {
            console.error('Error creating order item:', error);
        }
    };

    const deleteOrderItem = async (orderId) => {
        try {
            await databases.deleteDocument(ORDER_DATABASE_ID, ORDER_COLLECTION_ID, orderId);
            setOrders(orders.filter((order) => order.$id !== orderId));
        } catch (error) {
            console.error('Error deleting order item:', error);
        }
    };

    useEffect(() => {
        getAllOrderItems();
    }, []);

    return (
        <OrderContext.Provider
            value={{
                orders,
                selectedOrder,
                getAllOrderItems,
                getSingleOrderItem,
                createOrderItem,
                deleteOrderItem,
            }}>
            {children}
        </OrderContext.Provider>
    );
};
