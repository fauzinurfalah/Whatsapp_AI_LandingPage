"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const RegisterPage: NextPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="text-center">
                    <h1 className="text-xl font-bold sm:text-3xl text-gray-900 dark:text-white">
                        Cek WA
                    </h1>
                </div>

            <form className="space-y-6">
                <div>
                    <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                    Username
                    </label>
                    <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder=""
                    />
                </div>
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
                    placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                    Password
                    </label>
                    <div className="relative">
                        <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Masukkan Password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                <div>
                    <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                    Konfirmasi Password
                    </label>
                    <div className="relative">
                        <input
                        id="confirm-password"
                        name="confirm-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="confirm-password"
                        required
                        className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Masukkan ulang password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                    Daftar
                    </button>
                </div>
            </form>

            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Sudah punya akun?{' '}
                <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    Masuk di sini
                </Link>
            </p>
            </div>
        </main>
    );
};

export default RegisterPage;