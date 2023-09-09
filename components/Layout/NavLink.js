import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/products", text: "Products" },
  { id: 3, url: "/about", text: "About" },
  { id: 4, url: "/cart", text: "Cart" },
  { id: 5, url: "/checkout", text: "Checkout" },
  { id: 6, url: "/orders", text: "Orders" },
];
const Navlink = () => {
  const { status } = useSession();
  const router = useRouter();
  const handlerActive = (link) => {
    const isActive = router.pathname === link;
    if (isActive) {
      return "text-neutral-200 bg-slate-800 py-1 px-4 hover:bg-slate-800 hover:text-neutral-200 rounded-md ease-linear duration-300";
    }
    return "text-slate-800 py-1 px-4 hover:bg-slate-800 hover:text-neutral-200 rounded-md ease-linear duration-300";
  };
  return (
    <ul className="flex gap-2">
      <Link className={handlerActive(links[0].url)} href="/">
        {links[0].text}
      </Link>
      <Link className={handlerActive(links[1].url)} href="/products">
        {links[1].text}
      </Link>
      <Link className={handlerActive(links[2].url)} href="/about">
        {links[2].text}
      </Link>
      <Link className={handlerActive(links[3].url)} href="/cart">
        {links[3].text}
      </Link>
      {status === "authenticated" && (
        <Link className={handlerActive(links[4].url)} href="/checkout">
          {links[4].text}
        </Link>
      )}
      {status === "authenticated" && (
        <Link className={handlerActive(links[5].url)} href="/orders">
          {links[5].text}
        </Link>
      )}
    </ul>
  );
};
export default Navlink;
