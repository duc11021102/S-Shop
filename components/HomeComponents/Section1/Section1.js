import Link from "next/link";
import imgTitle from "../../assets/hero1-deae5a1f.webp";
import Image from "next/image";
const Section1 = () => {
  return (
    <section className="flex justify-between gap-12">
      <div className="max-w-1/2">
        <h1 className="text-6xl font-bold">We are changing the way people shop.</h1>
        <p className="mt-5">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className="mt-16">
          <Link href="/products" className="bg-slate-800 px-6 py-4 rounded-md text-neutral-200 font-semibold hover:bg-slate-600 ease-linear duration-300">
            OUR PRODUCTS
          </Link>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-5 object-cover">
        <Image
          width={1000}
          height={1000}
          src={imgTitle}
          alt="title"
          className="w-96 h-96 rounded-lg object-cover"
        ></Image>
      </div>
    </section >
  );
};
export default Section1;
