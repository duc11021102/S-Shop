import OrdersList from "@/components/OrdersComponents/OrdersList";
import { useContext } from "react";
import CartContext from "@/store/cart-context";
const Orders = () => {
    const cartCtx = useContext(CartContext);
    const orders = cartCtx.orders;
    return (
        <section className="align-item py-20 mx-60">
            <div>
                <h1 className="block text-3xl text-slate-800 font-semibold border-b-2 pb-5">
                    Your Orders Is Empty
                </h1>
            </div>
            <OrdersList ordersLists={orders} />
        </section>
    );
};
export default Orders;
