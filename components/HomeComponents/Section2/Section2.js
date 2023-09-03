import Image from "next/image";
import Link from "next/link";
import imgProduct from "../../assets/prod1.jpeg";

const Section2 = (props) => {
    return (
        <section className="mt-32">
            <div className="border-b-2">
                <h1 className="text-3xl font-bold mb-2">Features Products</h1>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center mt-12 ">
                <Link
                    href="/products/1"
                    className="rounded-xl px-6 pt-4 shadow-xl hover:shadow-2xl "
                >
                    <Image
                        className="w-72 object-cover max-h-48 rounded-xl"
                        width={400}
                        height={400}
                        src={props.products[0].image}
                        alt="prod0"
                    />
                    <h3 className="text-xl font-semibold mt-4">{props.products[0].title}</h3>
                    <p className="mt-4 font-medium mb-3">${props.products[0].price}</p>
                </Link>

                <Link
                    href="/products/2"
                    className="rounded-xl px-6 pt-4 shadow-xl hover:shadow-2xl "
                >
                    <Image
                        className="w-72 object-cover max-h-48 rounded-xl"
                        width={400}
                        height={400}
                        src={props.products[1].image}
                        alt="prod0"
                    />
                    <h3 className="text-xl font-semibold mt-4">{props.products[1].title}</h3>
                    <p className="mt-4 font-medium mb-3">${props.products[1].price}</p>
                </Link>

                <Link
                    href="/products/2"
                    className="rounded-xl px-6 pt-4 shadow-xl hover:shadow-2xl "
                >
                    <Image
                        className="w-72 object-cover max-h-48 rounded-xl"
                        width={400}
                        height={400}
                        src={props.products[1].image}
                        alt="prod0"
                    />
                    <h3 className="text-xl font-semibold mt-4">{props.products[1].title}</h3>
                    <p className="mt-4 font-medium mb-3">${props.products[1].price}</p>
                </Link>
            </div>
        </section>
    );
};
export default Section2;
