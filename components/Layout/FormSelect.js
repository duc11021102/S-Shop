import { useState } from "react";
const FormSelect = (props) => {
    const onChangeHandler = (e) => {
        props.onValue(e.target.value);
    };
    return (
        <div className="flex flex-col">
            <label className="font-normal text-sm ">{props.label}</label>
            <select
                value={props.value}
                onChange={onChangeHandler}
                className="w-full p-1 rounded-lg border-2 border-neutral-300 font-semibold focus:border-neutral-500 focus:outline-none"
            >
                {props.list.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default FormSelect;
