import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { status } = useSession();



    const submitHandler = async (e) => {
        e.preventDefault();
        const signInResponse = await signIn("credentials", {
            username: email,
            password: password,
            redirect: false,
        });
        if (signInResponse && !signInResponse.error) {
            console.log("success");
            router.push("/");
            toast.success("Logged in successfully!!!");
        } else {
            console.log(signInResponse);
            toast.error("Invalid username or password")
            setEmail('');
            setPassword('');
        }
    };

    return (
        <section className="mt-20 grid place-items-center">
            <form
                onSubmit={submitHandler}
                className="bg-white w-96 flex flex-col gap-y-4 p-5 rounded-md shadow-lg"
            >
                <h1 className=" text-slate-800 font-bold text-2xl text-center">
                    Login
                </h1>
                <div>
                    <label htmlFor="text" className="label">
                        <span className="text-slate-500">Email</span>
                    </label>
                    <input
                        type="text"
                        value={email}
                        name="identifier"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="w-full p-2 rounded-md border-2 text-slate-800"
                    ></input>
                </div>
                <div>
                    <label htmlFor="password" className="label">
                        <span className="text-slate-500">Password</span>
                    </label>
                    <input
                        type="password"
                        value={password}
                        name="identifier"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className="w-full p-2 rounded-md border-2  text-slate-800"
                    ></input>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-slate-800  text-neutral-200 px-5 py-3 mt-3 rounded-md hover:bg-slate-600"
                    >
                        {status === "loading" ? "SENDING" : "LOGIN"}
                    </button>
                </div>
                <div className="text-center mt-4">
                    <p>
                        Not a member yet?{" "}
                        <Link
                            className="text-blue-500 hover:underline"
                            href="/auth/register"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </form>
        </section>
    );
};
export default Login;
