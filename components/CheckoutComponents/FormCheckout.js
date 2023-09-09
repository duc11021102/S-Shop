import Link from "next/link";
import { useCallback, useState } from "react";
import { useContext } from "react";
import CartContext from "@/store/cart-context";
import { toast } from 'react-toastify';
const FormCheckout = (props) => {
    const cartCtx = useContext(CartContext);
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    let numberItems = cartCtx.amountItems;
    let cost = +cartCtx.amount + 23.0;

    const submitHandler = useCallback(() => {
        cartCtx.addOrder({
            fullname: fullName,
            address: address,
            phoneNumber: phoneNumber,
            products: numberItems,
            costs: cost,
        });
        toast("Order placed Successfully")
        cartCtx.clearItem();
    }, [address, cartCtx, fullName, phoneNumber, numberItems, cost])
    return (
        <form className="col-span-6">
            <h1 className="text-slate-800 text-xl font-semibold mb-6">
                Shipping Information
            </h1>

            <div className="mb-6">
                <label className="label text-base">Full Name</label>
                <input
                    value={fullName}
                    onChange={(e) => {
                        setFullName(e.target.value);
                    }}
                    type="text"
                    className="w-full p-1 rounded-md border-2 text-slate-500"
                ></input>
            </div>
            <div className="mb-6">
                <label className="label text-base">Address</label>
                <input
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                    type="text"
                    className="w-full p-1 rounded-md border-2 text-slate-500"
                ></input>
            </div>
            <div className="mb-6">
                <label className="label text-base">Phone Number</label>
                <input
                    value={phoneNumber}
                    onChange={(e) => {
                        setPhoneNumber(e.target.value);
                    }}
                    type="number"
                    className="w-full p-1 rounded-md border-2 text-slate-500"
                ></input>
            </div>

            <Link
                onClick={submitHandler}
                href="/orders"
                className=" w-full text-center bg-slate-800 text-neutral-200 px-5 py-3 rounded-md hover:bg-slate-600 ease-linear duration-300 "
            >
                PLACE YOUR ORDER
            </Link>
        </form>
    );
};
export default FormCheckout;
