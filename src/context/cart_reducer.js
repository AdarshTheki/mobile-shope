import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    INCREASE_CART_QUANTITY,
    DECREASE_CART_QUANTITY,
    ADD_ADDRESS,
    REMOVE_ADDRESS,
    SELECTED_ADDRESS,
} from '../assets/action';

const cart_reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { id, name, price, url } = action.payload;
            return {
                ...state,
                cart: state.cart.some((cartItem) => cartItem.id === id)
                    ? state.cart.map((item) =>
                          item.id === id ? { ...item, amount: item.amount + 1 } : item
                      )
                    : [...state.cart, { id, name, price, amount: 1, url }],
            };
        }

        case REMOVE_CART_ITEM: {
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };
        }

        case CLEAR_CART: {
            return { ...state, cart: [] };
        }

        case COUNT_CART_TOTALS: {
            const { items, amounts } = state.cart.reduce(
                (total, cartItem) => {
                    total.items += cartItem.amount;
                    total.amounts += cartItem.price * cartItem.amount;
                    return total;
                },
                { items: 0, amounts: 0 }
            );
            return { ...state, total_items: items, total_amount: amounts };
        }

        case INCREASE_CART_QUANTITY: {
            const { id } = action.payload;
            return {
                ...state,
                cart: state.cart.map((cart) =>
                    cart?.id === id ? { ...cart, amount: cart.amount + 1 } : cart
                ),
            };
        }

        case DECREASE_CART_QUANTITY: {
            const { id } = action.payload;
            return {
                ...state,
                cart: state.cart
                    .map((item) => (item.id === id ? { ...item, amount: item.amount - 1 } : item))
                    .filter((item) => item.amount > 0),
            };
        }

        case ADD_ADDRESS:
            return {
                ...state,
                addresses: [...state.addresses, action.payload],
            };

        case REMOVE_ADDRESS:
            return {
                ...state,
                addresses: state.addresses.filter((address) => address.id !== action.payload.id),
            };

        case SELECTED_ADDRESS: {
            return {
                ...state,
                address: action.payload,
            };
        }
    }
};

export default cart_reducer;
