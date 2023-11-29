import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  INCREASE_CART_QUANTITY,
  DECREASE_CART_QUANTITY,
} from '../action';

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, name, amount, ram, rom, image, price } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id + color + ram + rom);
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color + ram + rom) {
            return { ...cartItem, amount: cartItem.amount + amount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color + ram + rom,
          name,
          color,
          amount,
          image,
          price,
          ram,
          rom,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case REMOVE_CART_ITEM: {
      const tempCart = state.cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart: tempCart };
    }

    case CLEAR_CART: {
      return { ...state, cart: [] };
    }

    case COUNT_CART_TOTALS: {
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        { total_items: 0, total_amount: 0 }
      );
      return { ...state, total_items, total_amount };
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
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 } : item
        ),
      };
    }
  }

  // check to console what to action trigger
  throw new Error(`"${action.type}" - action type`);
};
export default cart_reducer;
