import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
    totalItems: 0
};

const defaultOrdersState = {
    orders: [],
    totalOrders: 0,
};



const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;
        const updatedTotalItems = state.totalItems + action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id && item.color === action.item.color
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            totalItems: updatedTotalItems,
        };
    }

    if (action.type === "DELETE") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id && item.color === action.item.color
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id && item.color !== action.item.color);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === "CLEAR") {
        return defaultCartState;
    }

    return defaultCartState;
};

const ordersReducer = (state, action) => {
    if (action.type === "ADD") {
        let updateOrders = state.orders.concat(action.order);
        return {
            orders: updateOrders,
            totalOrders: updateOrders.length,
        }
    }
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const deleteItemToCartHandler = (item) => {
        dispatchCartAction({ type: "DELETE", item: item });
    };
    const clearCart = () => {
        dispatchCartAction({ type: "CLEAR" });
    };

    const [ordersState, dispatchOrdersAction] = useReducer(ordersReducer,
        defaultOrdersState);

    const addOrderHandler = (order) => {
        dispatchOrdersAction({ type: "ADD", order: order });
    }

    const cartContext = {
        items: cartState.items,
        amount: cartState.totalAmount,
        orders: ordersState.orders,
        amountOrders: ordersState.totalOrders,
        amountItems: cartState.totalItems,
        addItem: addItemToCartHandler,
        deleteItem: deleteItemToCartHandler,
        clearItem: clearCart,
        addOrder: addOrderHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;