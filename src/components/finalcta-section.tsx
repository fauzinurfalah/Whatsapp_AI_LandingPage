import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Phone } from 'lucide-react'


export default function Features() {
    return (
        <>
        <section id='solusi' className="bg-gray-50 py-24 md:py-40">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-6xl font-semibold lg:text-5xl"><span className='text-blue-500'>Upgrade</span> Training Anda - Aktifkan <span className='bg-gradient-to-r from-blue-500 to-green-600 text-transparent bg-clip-text'>AI </span>Chat Ecosystem Hari Ini</h2>
                    <p className="font-sans text-3xl mt-10">Mulai dari simulasi kecil hingga 50 nomor sekaligus, semua bisa diatur otomatis.</p>
                </div>
                <div className="mt-12 flex flex-col items-center justify-center gap-10 sm:flex-row">
                    <Button
                        asChild
                        size="lg"
                        className="px-8 py-6 text-lg text-white bg-gradient-to-r from-green-300 to-blue-600 transition-transform duration-200 hover:scale-105 hover:from-green-400 hover:to-green-400 active:from-green-500 active:to-green-500"
                        >
                            <Link href="#link">
                                <span className="text-nowrap">Mulai Sekarang</span>
                            </Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant={'outline'}
                        className="px-8 py-6 text-lg border-blue-500 text-black hover:border-none hover:bg-sky-500 hover:text-white active:bg-blue-500 active:border-blue-500 transition-transform duration-200 hover:scale-105 border-2">
                            <Link href="#link" className="flex items-center gap-2">
                                <Phone />
                                <span className="text-nowrap">Hubungi Kami</span>
                            </Link>
                    </Button>
                </div>
            </div>
        </section>
        </>
    )
}