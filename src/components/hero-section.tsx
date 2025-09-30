import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CirclePlay } from "lucide-react"

export default function HeroSection() {
    return (
        <main>
            <section id='beranda'>
                <div className="pb-5 pt-12 md:pb-10 lg:pb-48 lg:pt-44">
                    <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left mt-10">
                            <h1 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight  ">Chat Otomatis Dua Arah
                                dengan <span className="text-blue-500">AI</span> untuk Nomor <span className="text-green-500">WhatsApp</span> Anda</h1>
                            <p className="mt-8 max-w-2xl text-medium text-lg md:text-2xl">Setiap nomor punya AI sendiri. Simulasi </p>
                            <p className='text-medium text-lg md:text-2xl'>& otomatis, lengkap dengan dashboard</p> <p className='text-medium text-lg md:text-2xl'>real-time selama 30 hari</p>
                            <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    className="px-8 py-6 text-lg text-white bg-gradient-to-r from-green-500 to-blue-600 transition-transform duration-200 hover:scale-105 hover:from-green-400 hover:to-green-400 active:from-green-500 active:to-green-500"
                                >
                                    <Link href="#link">
                                        <span className="text-nowrap text-2xl">Mulai Sekarang</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant={'outline'}
                                    className="px-8 py-6 text-lg border-2 border-blue-500 text-black hover:border-none hover:bg-sky-500 hover:text-white active:bg-blue-500 active:border-blue-500 transition-transform duration-200 hover:scale-105">
                                    <Link href="#link" className="flex items-center gap-2">
                                        <span className="text-nowrap text-2xl">Coba Demo</span>
                                        <CirclePlay className='h-5 w-5' />
                                    </Link>
                                </Button>
                            </div>
                            <div className="mt-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:gap-6 lg:justify-start lg:text-left">
                                <div className="flex items-center gap-2">
                                    <img src="img/chart-square.png"/>
                                    <p className='text-sm'>Dashboard Real-Time</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="img/call-add.png" />
                                    <p className='text-sm'>50 Nomor Max</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="img/calendar-tick.png" />
                                    <p className='text-sm'>30 Hari Gratis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 -z-10 w-1/2 lg:w-[60%] xl:w-1/2 opacity-60">
                    <img
                        src="img/Ellipse 2.png"
                        alt="Background decoration"
                        width={1000}
                        height={1000}
                        className="object-contain"
                    />
                </div>
            </section>
        </main>
    )
}