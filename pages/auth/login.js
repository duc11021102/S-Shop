import Link from "next/link";
const Login = () => {
    return <section className="h-screen grid place-items-center">
        <form className="bg-white w-96 flex flex-col gap-y-4 p-5 rounded-md shadow-lg">
            <h1 className=" text-slate-800 font-bold text-2xl text-center">Login</h1>
            <div>
                <label for="identifier" className="label">
                    <span className="text-slate-500">Email</span>
                </label>
                <input type="email" name="identifier" className="w-full p-2 rounded-md border-2 text-slate-500"></input>
            </div>

            <div>
                <label for="identifier" className="label">
                    <span className="text-slate-500">Password</span>
                </label>
                <input type="password" name="identifier" className="w-full p-2 rounded-md border-2  text-slate-500"></input>
            </div>
            <div>
                <button className="w-full bg-slate-800  text-neutral-200 px-5 py-3 mt-3 rounded-md hover:bg-slate-600">
                    Login
                </button>
            </div>
            <div className="text-center mt-4">
                <p>Not a member yet? <Link className="text-blue-500 hover:underline" href="/">Register</Link></p>
            </div>
        </form>
    </section >;
};
export default Login;
