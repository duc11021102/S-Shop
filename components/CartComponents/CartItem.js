import Image from "next/image";

const CartItem = (props) => {
    return <li className="flex flex-row mb-5">
        <div>
            <Image src={props.image} width={1000} height={1000} alt="prod" className="w-32 h-32 object-cover rounded-lg">
            </Image>
        </div>
        <div className="ml-8 w-60 ">
            <h1 className="font-bold text-slate-800">{props.title}</h1>
            <p className="text-neutral-300">{props.category}</p>
            {props.color === 'green' ? <div className="w-5 h-5 mt-4 rounded-full bg-green-500"></div> : <div className="w-5 h-5 mt-4 rounded-full bg-blue-500"></div>}
        </div>
        <div className="ml-8 flex flex-col">
            <button onClick={props.onAdd} className="text-blue-500 hover:underline">Add</button>
            <div className="font-bold text-center border-2 w-10 h-8 ml-2 rounded-md ">
                {props.amount}
            </div>
            <button onClick={props.onRemove} className="text-blue-500 hover:underline">Remove</button>
        </div>
        <div className="ml-auto ">
            <p className="font-bold">${props.price}</p>
        </div>
    </li>
}
export default CartItem;