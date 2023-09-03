import { useState } from "react";
import FormCheckbox from "../Layout/FormCheckbox";
import FormInput from "../Layout/FormInput";
import FormSelect from "../Layout/FormSelect";

const ProductFilter = (props) => {
    const [productName, setProductName] = useState('');
    const [categoryValue, setCategoryValue] = useState('all');
    const [sortByValue, setSortByValue] = useState('a-z');
    const [freeShip, setFreeShip] = useState(false);

    const searchHandler = () => {
        props.submitFilter(productName, categoryValue, sortByValue, freeShip);
        console.log(productName, categoryValue, sortByValue, freeShip);
    }
    const resetHandler = () => {
        setProductName('');
        setCategoryValue('all');
        setSortByValue('a-z');
        setFreeShip(false);
    }


    const onCategoryHandler = (value) => {
        setCategoryValue(value);
    }
    const onSortByHandler = (value) => {
        setSortByValue(value);
    }
    const onFreeShipHandler = (value) => {
        setFreeShip(value)
    }
    const onProductNameHandler = (value) => {
        setProductName(value)
    }


    return (
        <div className="bg-neutral-200 grid grid-cols-4 gap-x-4 gap-y-8 px-4 pt-8 pb-10 rounded-lg">
            <FormInput value={productName} onValue={onProductNameHandler} name="Search Product"></FormInput>
            <FormSelect onValue={onCategoryHandler}
                label="Select Category"
                value={categoryValue}
                list={[
                    "all",
                    "electronics",
                    "jewelery",
                    `men\'s clothing`,
                    `women\'s clothing`,
                ]}
            ></FormSelect>
            <FormSelect
                value={sortByValue}
                label="Sort By"
                list={["a-z", "z-a", "high", "low"]}
                onValue={onSortByHandler}
            ></FormSelect>
            <FormCheckbox value={freeShip} onValue={onFreeShipHandler} label="Free Ship" />
            <button onClick={searchHandler} className="bg-slate-800 text-white p-1 rounded-lg hover:bg-slate-600 ease-linear duration-300 ">
                Search
            </button>
            <button onClick={resetHandler} className="bg-neutral-200 text-slate-800 p-1 rounded-lg border-2 border-neutral-500 hover:bg-neutral-300 ease-linear duration-300">
                Reset
            </button>
        </div>
    );
};
export default ProductFilter;
