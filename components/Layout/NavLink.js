import Link from "next/link";
import { useRouter } from "next/router";
const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/products", text: "Products" },
  { id: 3, url: "/about", text: "About" },
  { id: 4, url: "/cart", text: "Cart" },
  { id: 5, url: "/checkout", text: "Checkout" },
  { id: 6, url: "/orders", text: "Orders" },
];
const Navlink = () => {
  const router = useRouter();
  const handlerActive = (link) => {
    const isActive = router.pathname === link;
    if (isActive) {
      return "text-neutral-200 bg-slate-800 py-1 px-4 hover:bg-slate-800 hover:text-neutral-200 rounded-md ease-linear duration-300";
    }
    return "text-slate-800 py-1 px-4 hover:bg-slate-800 hover:text-neutral-200 rounded-md ease-linear duration-300";
  }
  return (
    <ul className="flex gap-2">
      {links.map((link) => (
        <Link
          key={link.id}
          className={handlerActive(link.url)}
          href={`${link.url}`}
        >
          {link.text}
        </Link>
      ))}
    </ul>
  );
};
export default Navlink;
