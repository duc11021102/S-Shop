import CartContext from "@/store/cart-context";
import { useContext } from "react";
import FormBid from "@/components/CartComponents/FormBid";
import FormCheckout from "@/components/CheckoutComponents/FormCheckout";

const Checkout = () => {
    const cartCtx = useContext(CartContext);
    return (
        <section className="align-item py-20 mx-60">
            <div>
                <h1 className="block text-3xl text-slate-800 font-semibold border-b-2 pb-5">
                    {cartCtx.items.length > 0 ? "Place Your Order" : "Your Cart Is Empty"}
                </h1>
            </div>
            {cartCtx.items.length > 0 && (
                <div className="grid grid-cols-12 gap-12 mt-8">
                    <FormCheckout ></FormCheckout>
                    <div className="col-span-2"></div>
                    <FormBid />
                </div>
            )}
        </section>
    );
};
export default Checkout;
