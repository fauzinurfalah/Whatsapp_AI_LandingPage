import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CirclePlay } from "lucide-react"

export default function HeroSection() {
    return (
        <main className="overflow-x-hidden">
            <section id='beranda' className="relative">
                <div className="pb-80 pt-40 md:pb-48 lg:pb-56 lg:pt-44">
                    <div className="relative mx-auto flex max-w-7xl flex-col px-6">

                        <div className="mx-auto max-w-lg lg:ml-0 lg:w-1/2">
                            <h1 className="text-4xl font-bold text-gray-800 leading-tight md:text-4xl">
                                Nomor <span className='text-green-500'>WhatsApp </span>Sering KENA <span className='text-red-500'>BLOKIR? </span>Hentikan Risiko Itu Sekarang!
                            </h1>
                            <p className="mt-8 max-w-xl text-lg text-gray-600 md:text-xl">
                                Validasi & Panaskan nomor Anda dengan AI Training Otomatis Skala Besar. Dapatkan simulasi chat terukur dan pantau Keamanan Nomor Real-time.
                            </p>
                            
                            <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4 lg:justify-start">
                                <Button asChild size="lg" className="w-auto bg-gradient-to-r from-green-500 to-blue-600 px-8 py-6 text-lg text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                    <Link href="#link">Mulai Sekarang</Link>
                                </Button>
                                <Button asChild size="lg" variant={'outline'} className="w-auto border-2 border-blue-400 px-8 py-6 text-lg text-gray-800 transition-transform duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-lg">
                                    <Link href="#link" className="flex items-center gap-2">
                                        <span>Coba Demo</span>
                                        <CirclePlay className='h-5 w-5' />
                                    </Link>
                                </Button>
                            </div>

                            <div className="mt-8 flex flex-row flex-nowrap items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <img src="img/chart-square.png" alt="Dashboard Icon" className="h-5  w-5" />
                                    <p className='text-xs font-medium text-gray-700'>Dashboard Real-time</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="img/call-add.png" alt="Nomor Max Icon" className="h-5 w-5" />
                                    <p className='text-xs font-medium text-gray-700'>50 Nomor Max</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="img/calendar-tick.png" alt="Durasi Icon" className="h-5 w-5" />
                                    <p className='text-xs font-medium text-gray-700'>Minimal Durasi 30 Hari</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute -bottom-20 left-1/2 -z-10 w-full -translate-x-1/2 lg:left-auto lg:right-0 lg:bottom-0 lg:w-[80%] lg:translate-x-0 xl:w-1/2">
                    <img
                        src="img/Ellipse 2.png"
                        alt="Background decoration"
                        width={1200}
                        height={800}
                        className="object-cover w-full h-auto opacity-40 lg:opacity-60"
                    />
                </div>
            </section>
        </main>
    )
}