import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
const Header = () => {
    const { status } = useSession();
    const router = useRouter();

    const logoutHandler = (event) => {
        event.preventDefault();
        signOut({ redirect: false });
        router.push('/');
    }
    return (
        <div className="bg-slate-800 w-full ">
            {status === "authenticated" ? (
                <div className="text-white flex mx-20 justify-end gap-4 py-2 text-sm">
                    <p>Hello, Guy</p>
                    <button onClick={logoutHandler} className="bg-slate-800 px-2 text-xs text-neutral-200 rounded-lg border hover:bg-neutral-200 hover:text-slate-800 ease-linear duration-300">
                        LOGOUT
                    </button>
                </div>
            ) : (
                <div className="text-white flex mx-20 justify-end gap-4 py-2 text-sm">
                    <Link className="hover:underline" href="/auth/login">
                        Sign in/ Guest
                    </Link>
                    <Link className="hover:underline" href="/auth/login">
                        Create Account
                    </Link>
                </div>
            )}
        </div>
    );
};
export default Header;
