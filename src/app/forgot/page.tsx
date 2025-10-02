import type { NextPage } from "next";
import Link from "next/link";

const ForgotPage: NextPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md p-10 space-y-10 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl text-gray-900 dark:text-white">
                        Lupa Password?
                    </h1>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        Masukkan email yang terdaftar untuk menerima tautan reset kata sandi.
                    </p>
                </div>

            <form className="space-y-3">
                <div>
                    <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                    Email
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Masukkan email anda"
                    />
                </div>
                <div className="space-y-4">
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                        Ayoo! kembali{' '}
                        <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                            Masuk
                        </Link>
                    </p>
                    <div>
                        <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        Kirim
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </main>
    );
};

export default ForgotPage;