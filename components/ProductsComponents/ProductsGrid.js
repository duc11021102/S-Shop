import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
const ProductsGrid = (props) => {
    const router = useRouter()
    return (
        <div className="mt-14">
            <div className="grid lg:grid-cols-3 gap-4 text-slate-800">
                {props.products.map((prod) => (
                    <Link
                        key={prod.id}
                        href={'products/' + prod.id}
                        className="rounded-xl px-6 pt-8 shadow-xl hover:shadow-2xl "
                    >
                        <Image
                            className="w-72 object-cover max-h-48 rounded-xl"
                            width={400}
                            height={400}
                            src={prod.image}
                            alt="prod0"
                        />
                        <h3 className="text-xl font-semibold mt-4 text-center">
                            {prod.title}
                        </h3>
                        <p className="mt-4 font-medium mb-3 text-center">${prod.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default ProductsGrid;
