import Link from "next/link";
import Image from "next/image";
import imgProduct from "../assets/prod1.jpeg";
const ProductsList = (props) => {
    return (
        <div className="mt-14">
            <div className="grid gap-y-8">
                {props.products.map((prod) => (
                    <Link
                        key={prod.id}
                        href={'products/' + prod.id}
                        className="flex p-8 shadow-xl hover:shadow-2xl rounded-2xl"
                    >
                        <Image
                            className="w-32 h-32 object-cover max-h-48 rounded-xl"
                            width={400}
                            height={400}
                            src={prod.image}
                            alt="prod0"
                        />
                        <h3 className="text-xl font-semibold w-full ml-6"> {prod.title}</h3>
                        <p className="text-xl font-medium mr-3 text-purple-800">${prod.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default ProductsList;
