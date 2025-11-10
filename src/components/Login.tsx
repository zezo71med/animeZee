import { useState } from "react";
import type { useLoginMutation } from "../state/ApiHandler";

const Login = () => {
    const [email, setEmail] = useState('john@mail.com');
    const [password, setPassword] = useState('changeme');
    const [login, { isLoading, isError, error }] = useLoginMutation()
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const response = await login({ email, password }).unwrap;
            localStorage.setItem('token', "fsaliauroasiaspsdogdgiutesdemesmsusntdnystvwdaRCQJTXUQASYJRCKYBGITBWYTIYBOY8WSYUFIKH")
        } catch (error) {
            console.log("token is filed");

        }
    }
    return (<>

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="mx-auto h-10 w-auto" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
                        <div className="mt-2">
                            <input id="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} type="text" name="email" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} name="password" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-400">
                    Not a member?
                    <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Start a 14 day free trial</a>
                </p>
            </div>
        </div>
    </>)
}
export default Login;
const loginForm = (email: string, password: string) => {
    fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: email,
            password: password,
            expiresInMins: 30, // optional, defaults to 60
        }),
        credentials: 'include' // Include cookies (e.g., accessToken) in the request
    })
        .then(res => res.json())
        .then(console.log);
}