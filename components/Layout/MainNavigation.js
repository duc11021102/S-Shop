import Link from "next/link";
import Navlink from "./NavLink";
import CartIcon from "./CartIcon";
import DarkIcon from "./ModeIcon/Dark";
import LightIcon from "./ModeIcon/Light";
import { useCallback, useState } from "react";
const MainNavigation = () => {
  const [mode, setMode] = useState(true);

  const onModeHandler = useCallback(() => {
    setMode(!mode);
  }, [mode]);
  return (
    <nav className="w-full bg-neutral-200">
      <div className="flex justify-between w-7xl mx-5 py-3">
        <div className="px-4 pt-1 text-white text-3xl bg-slate-800 hover:bg-slate-700 rounded-md">
          <Link href="/">S</Link>
        </div>
        <div className="mt-2">
          <Navlink></Navlink>
        </div>
        <div className="flex gap-3 ">
          <div className="text-slate-800 mt-4" onClick={onModeHandler}>
            <div >{mode ? <LightIcon /> : <DarkIcon />}</div>
          </div>

          <div className="text-slate-800 w-11 h-11 mt-1 hover:bg-slate-800 hover:text-white p-2 rounded-full ease-linear duration-300">
            <Link href="/cart">
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNavigation;
