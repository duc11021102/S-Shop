import { useCallback, useState } from "react";

const FormCheckbox = (props) => {
    const onChangeHandler = useCallback((e) => {
        props.onValue(e.target.checked);
    }, [props]);
    return (
        <div className="flex flex-col items-center">
            <label className="font-normal text-sm text-center">{props.label}</label>
            <input
                checked={props.value}
                onChange={onChangeHandler}
                type="checkbox"
                className="mt-1  h-5 w-5 align-middle rounded-lg "
            ></input>
        </div>
    );
};
export default FormCheckbox;
