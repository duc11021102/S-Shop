import React from "react";

const CartContext = React.createContext({
    items: [],
    amount: 0,
    addItem: (item) => { },
    deleteItem: (item) => { },
    clearItem: () => { }
});
export default CartContext;