import Image from "next/image";
import Link from "next/link";

const Section2 = (props) => {
    const featuresProducts = props.products.filter((prod) => prod.id < 4);
    return (
        <section className="mt-32">
            <div className="border-b-2">
                <h1 className="text-3xl font-bold mb-2">Features Products</h1>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center mt-12 ">
                {featuresProducts.map((prod) => (
                    <Link
                        key={prod.id}
                        href={`/products/` + prod.id}
                        className="rounded-xl px-6 pt-4 shadow-xl hover:shadow-2xl "
                    >
                        <Image
                            className="w-72 object-cover max-h-48 rounded-xl h-48"
                            width={400}
                            height={400}
                            src={prod.image}
                            alt="prod"
                        />
                        <h3 className="text-xl font-semibold mt-4">
                            {prod.title.substring(0, 20)}
                        </h3>
                        <p className="mt-4 font-medium mb-3 text-purple-800">${prod.price}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};
export default Section2;
