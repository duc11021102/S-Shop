import CartContext from "@/store/cart-context";
import { useContext } from "react";
import FormBid from "@/components/CartComponents/FormBid";
import FormCheckout from "@/components/CheckoutComponents/FormCheckout";
import { useRouter } from "next/router";

const Checkout = () => {
    const router = useRouter();
    const cartCtx = useContext(CartContext);
    // const informationFormHandler = (fullName, address, phoneNumber) => {
    //     router.push('/orders');
    // }1
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
