import { useRouter } from "next/router";
export default function NotFound() {
    const router = useRouter();
    const onClickHandler = () => {
        router.push('/');
    }
    return (
        <div className="align-element mt-40">
            <h2 className="font-bold text-xl">Oops! This Page Cound Not Be Found</h2>
            <p className="text-sm font-semibold mt-2">SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST , HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
            <button onClick={onClickHandler} className="bg-slate-800 px-4 py-2 mt-2 text-neutral-200 font-semibold hover:bg-slate-600 ease-linear duration-300">GO TO HOMEPAGE</button>
        </div>
    )
}