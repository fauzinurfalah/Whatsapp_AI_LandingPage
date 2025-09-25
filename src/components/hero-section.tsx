import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Header } from "@/components/header"
import {CirclePlay } from "lucide-react"


export default function HeroSection() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight  ">Chat Otomatis Dua Arah
                                dengan <span className="text-blue-500">AI</span> untuk Nomor <span className="text-green-500">WhatsApp</span> Anda</h1>
                                <p className="mt-8 max-w-2xl text-medium text-lg md:text-2xl">Setiap nomor punya AI sendiri. Simulasi </p>
                                <p className='text-medium text-lg md:text-2xl'>& otomatis, lengkap dengan dashboard</p> <p className='text-medium text-lg md:text-2xl'>real-time selama 30 hari</p>
                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="text-white bg-gradient-to-r from-green-500 to-blue-600 transition-transform duration-200 hover:scale-105 hover:bg-green-500 hover:from-green-500 hover:to-green-500">
                                        <Link href="#link">
                                            <span className="text-nowrap">Mulai Sekarang</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant={'outline'}
                                        className="border-blue-400 text-black hover:bg-blue-500 hover:text-white transition-transform duration-200 hover:scale-105">
                                        <Link href="#link"  className="flex items-center gap-2">
                                            <span className="text-nowrap">Coba Demo</span>
                                            <CirclePlay className='h-5 w-5'/>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </main>
              </>
          )
          
}