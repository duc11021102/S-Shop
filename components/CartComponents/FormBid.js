import CartContext from "@/store/cart-context";
import Link from "next/link";
import { useContext } from "react";
const FormBid = () => {
    const cartCtx = useContext(CartContext);
    let priceFloat = parseFloat(cartCtx.amount);
    let amount = priceFloat.toFixed(2);
    return (
        <div className="max-w-xs flex flex-col gap-6 col-span-4">
            <div className="px-10 py-8  flex flex-col bg-neutral-200 rounded-lg ">
                <div className="text-xm w-full flex justify-between mb-2 border-b border-b-neutral-300 pb-1">
                    <span>Subtotal</span>
                    <span className="font-bold">${amount}</span>
                </div>
                <div className="text-xm w-full flex justify-between mb-2 border-b border-b-neutral-300 pb-1">
                    <span>Shipping</span>
                    <span className="font-bold">$5.0</span>
                </div>
                <div className="text-xm w-full flex justify-between mb-2 border-b border-b-neutral-300 pb-1">
                    <span>Tax</span>
                    <span className="font-bold">$18.0</span>
                </div>
                <div className="text-xm w-full flex justify-between  mt-5">
                    <span>Order Total</span>
                    <span className="font-bold">${`${+amount + 5.0 + 18.0}`}</span>
                </div>
            </div>
            {/* <Link
                href="/checkout"
                className="bg-slate-800 w-full text-center text-white rounded-lg px-5 py-3 hover:bg-slate-600"
            >
                PROCEED TO CHECKOUT
            </Link> */}
        </div>
    );
};
export default FormBid;
