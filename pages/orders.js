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
                    {cartCtx.amountOrders > 0 ? "Your Orders" : "Your Orders Is Empty"}
                </h1>
            </div>
            {cartCtx.amountOrders > 0 && (
                <div className="mt-10">
                    <h1 className="text-lg font-semibold text-slate-800">
                        Total Orders: {cartCtx.amountOrders}
                    </h1>
                </div>
            )}
            {cartCtx.amountOrders > 0 && <OrdersList ordersLists={orders} />}
        </section>
    );
};
export default Orders;
