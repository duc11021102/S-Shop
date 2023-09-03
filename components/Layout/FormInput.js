import { useState } from "react";

const FormInput = (props) => {

    const onChangeHandler = (event) => {
        props.onValue(event.target.value);
    }
    return (
        <div className="flex flex-col">
            <label className="font-normal text-sm">{props.name}</label>
            <input value={props.value} onChange={onChangeHandler} className="w-full p-1 border-2 border-neutral-300 rounded-lg  focus:border-neutral-500 focus:outline-none"></input>
        </div>
    );
};
export default FormInput;
