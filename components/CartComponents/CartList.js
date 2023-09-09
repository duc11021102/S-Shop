import CartItem from "./CartItem";
import { useCallback, useContext } from "react";
import CartContext from "@/store/cart-context";
import { toast } from 'react-toastify';
const CartList = () => {
    const cartCtx = useContext(CartContext);
    const onAddHandler = useCallback((item) => {
        cartCtx.addItem({ ...item, amount: 1 })
        toast('Item added to cart');
    }, [cartCtx])
    const onRemoveHandler = useCallback((item) => {
        cartCtx.deleteItem(item);
    }, [cartCtx]);

    return (
        <ul className="h-10 col-span-8">
            {cartCtx.items.map((item) =>
                <CartItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    category={item.category}
                    amount={item.amount}
                    price={item.price}
                    image={item.image}
                    color={item.color}
                    onAdd={onAddHandler.bind(null, item)}
                    onRemove={onRemoveHandler.bind(null, item)}
                ></CartItem>
            )}
        </ul>
    );
};
export default CartList;
