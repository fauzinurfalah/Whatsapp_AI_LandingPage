"use client";

import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const LoginPage: NextPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md p-10 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl text-gray-900 dark:text-white">
                        Selamat Datang
                    </h1>
                    <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
                        Kelola nomor WhatsApp kamu dan pantau percakapan AI dalam satu tempat.
                    </p>
                </div>

            <form className="space-y-6">
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
                    placeholder="Masukkan Email Anda"
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

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    </div>
                    <div className="text-sm">
                    <Link href="/forgot" className="font-sm">
                        Lupa password?
                    </Link>
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Masuk
                    </button>
                </div>
            </form>

            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Belum punya akun?{' '}
                <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                    Daftar di sini
                </Link>
            </p>
            </div>
        </main>
    );
};

export default LoginPage;