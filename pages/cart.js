import CartList from "@/components/CartComponents/CartList";
import FormBid from "@/components/CartComponents/FormBid";
import CartContext from "@/store/cart-context";
import { useContext } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
const Cart = () => {
    const cartCtx = useContext(CartContext);
    const { status } = useSession();
    return (
        <section className="align-item py-20 mx-60">
            <div>
                <h1 className="block text-3xl text-slate-800 font-semibold border-b-2 pb-5">
                    {cartCtx.items.length > 0 ? "Shopping Cart" : "Your Cart Is Empty"}
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-12 mt-16">
                <CartList />
                {cartCtx.items.length > 0 && (
                    <div className="flex flex-col gap-4 col-span-4">
                        <FormBid></FormBid>

                        {status === "authenticated" ? (
                            <Link
                                href="/checkout"
                                className="bg-slate-800 w-full text-center text-white rounded-lg px-5 py-3 hover:bg-slate-600 ease-linear duration-300"
                            >
                                PROCEED TO CHECKOUT
                            </Link>
                        ) : (
                            <Link
                                href="/auth/login"
                                className="bg-slate-800 w-full text-center text-white rounded-lg px-5 py-3 hover:bg-slate-600 ease-linear duration-300"
                            >
                                PLEASE LOGIN
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};
export default Cart;
