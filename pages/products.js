import ProductFilter from "@/components/ProductsComponents/ProductFilter";
import { useState, useCallback, useEffect } from "react";
import { FiGrid, FiList } from "react-icons/fi";
import ProductsList from "@/components/ProductsComponents/ProductsList";
import ProductsGrid from "@/components/ProductsComponents/ProductsGrid";
import { FallingLines } from "react-loader-spinner";

const Products = (props) => {
    let products = props.products;
    const [filterProducts, setFilterProducts] = useState(products);
    const [layout, setLayout] = useState("grid");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const submitFilterHandler = useCallback(
        (productName, categoryValue, sortByValue, freeShip) => {
            if (productName !== "") {
                let a = products.filter((product) => product.title === productName);
                setFilterProducts(a);
            } else if (categoryValue === "all") {
                let a = products.filter(
                    (product) => product.category !== categoryValue
                );
                if (sortByValue === "high") {
                    a.sort((a, b) => b.price - a.price);
                } else if (sortByValue === "low") {
                    a.sort((a, b) => a.price - b.price);
                } else if (sortByValue === "a-z") {
                    a.sort();
                } else if (sortByValue === "z-a") {
                    a.reverse();
                }
                setFilterProducts(a);
            } else {
                let a = products.filter(
                    (product) => product.category === categoryValue
                );
                if (sortByValue === "high") {
                    a.sort((a, b) => b.price - a.price);
                } else if (sortByValue === "low") {
                    a.sort((a, b) => a.price - b.price);
                } else if (sortByValue === "a-z") {
                    a.sort();
                } else if (sortByValue === "z-a") {
                    a.reverse();
                }
                setFilterProducts(a);
            }
        },
        [products]
    );

    if (loading) {
        return (
            <div className="flex justify-center">
                <FallingLines
                    color="#4fa94d"
                    width="100"
                    visible={true}
                    ariaLabel="falling-lines-loading"
                />
            </div>
        );
    }
    return (
        <div className="mx-60 mt-20">
            <ProductFilter submitFilter={submitFilterHandler}></ProductFilter>
            <div className="flex justify-between border-b-2 mt-14">
                <h1 className="font-bold mb-6 text-xl text-slate-800">
                    {props.products.length} products
                </h1>
                <div className="flex gap-2">
                    <FiGrid
                        onClick={() => {
                            setLayout("grid");
                        }}
                        className={
                            layout === "grid"
                                ? "w-10 h-8 text-neutral-200 bg-slate-800 p-2 rounded-full ease-linear duration-300"
                                : "w-8 h-6 mt-1 ease-linear duration-300"
                        }
                    />
                    <FiList
                        onClick={() => {
                            setLayout("list");
                        }}
                        className={
                            layout === "list"
                                ? "w-10 h-8 text-neutral-200 bg-slate-800 p-2 rounded-full ease-linear duration-300"
                                : "w-8 h-6 mt-1 ease-linear duration-300"
                        }
                    />
                </div>
            </div>
            {layout === "grid" && (
                <ProductsGrid products={filterProducts}></ProductsGrid>
            )}
            {layout === "list" && <ProductsList products={filterProducts} />}
        </div>
    );
};
export default Products;

export async function getStaticProps() {
    const response = await fetch("https://fakestoreapi.com/products").catch(
        (error) => {
            console.log(error);
        }
    );
    const result = await response.json();

    return {
        props: {
            products: result,
            loading: false,
        },
    };
}
