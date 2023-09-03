import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useContext } from "react";
import CartContext from "@/store/cart-context";
import { toast } from "react-toastify";

const ProductDetail = (props) => {
    const cartCtx = useContext(CartContext);
    const [color, setColor] = useState("green");
    const [amount, setAmount] = useState("1");

    const priceFloat = parseFloat(props.product.price);
    const price = priceFloat.toFixed(2);
    const addToCartHandler = (e) => {
        e.preventDefault();
        cartCtx.addItem({
            id: props.product.id,
            title: props.product.title,
            category: props.product.category,
            price: props.product.price,
            image: props.product.image,
            color: color,
            amount: +amount,
        });
        toast("Item added to cart");
    };
    return (
        <section className="align-element py-20">
            <div className="flex">
                <Link className="text-slate-800 hover:underline" href="/">
                    Home
                </Link>
                <BiChevronRight className="w-6 h-6 p-1 text-gray-400" />
                <Link className="text-slate-800 hover:underline" href="/products">
                    Products
                </Link>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 mt-10 ">
                <div className=" ">
                    <Image
                        alt="imgProduct"
                        src={props.product.image}
                        width={1000}
                        height={1000}
                        className="w-80 rounded-lg align-element object-cover"
                    ></Image>
                </div>
                <div className="">
                    <h1 className="text-3xl font-bold">{props.product.title}</h1>
                    <h4 className="text-base font-bold text-neutral-300 mt-2">
                        {props.product.category}
                    </h4>
                    <div>
                        <p className="text-2xl mt-3">${props.product.price}</p>
                    </div>
                    <div>
                        <p className="mt-5 text-lg">{props.product.description}</p>
                    </div>
                    <div>
                        <h4 className="mt-4 text-base font-bold">Color</h4>
                        <div className="flex gap-1 mt-3">
                            <button
                                onClick={() => {
                                    setColor("green");
                                }}
                                value="green"
                                className={`w-5 h-5 rounded-full bg-green-500 hover:border-2 hover:border-slate-800 ${"green" === color && "border-2 border-slate-800"
                                    }`}
                            ></button>
                            <button
                                onClick={() => {
                                    setColor("blue");
                                }}
                                value="blue"
                                className={`w-5 h-5 rounded-full bg-blue-500 hover:border-2 hover:border-slate-800 ${"blue" === color && "border-2 border-slate-800"
                                    }`}
                            ></button>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2">
                        <label className="mt4 text-base font-bold">Amount</label>
                        <select
                            value={amount}
                            onChange={(e) => {
                                setAmount(e.target.value);
                            }}
                            className="text-slate-800 max-w-1/2 p-1 border-2 border-slate-800 mt-3 rounded-lg "
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="mt-10">
                        <button
                            onClick={addToCartHandler}
                            className="bg-slate-800 px-4 py-3 rounded-md text-neutral-200 font-semibold hover:bg-slate-600"
                        >
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductDetail;

export async function getStaticPaths() {
    const response = await fetch("https://fakestoreapi.com/products").catch(
        (error) => {
            console.log(error);
        }
    );
    const data = await response.json();
    const paths = data.map((product) => {
        return {
            params: { productId: `${product.id}` },
        };
    });

    return {
        paths: paths,
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const productId = context.params.productId;
    // const { params } = context;
    const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
    ).catch((error) => {
        console.log(error);
    });
    const result = await response.json();

    return {
        props: {
            product: {
                id: result.id,
                title: result.title,
                price: result.price,
                image: result.image.toString(),
                description: result.description,
                category: result.category,
            },
        },
    };
}
