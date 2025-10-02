import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Phone } from 'lucide-react'


export default function Features() {
    return (
        <>
        <section id='solusi' className="relative py-24 md:py-40">
            <div className="@container relative mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-6xl font-semibold lg:text-5xl"><span className='text-blue-500'>Upgrade</span> Training Anda - Aktifkan <span className='bg-gradient-to-r from-blue-500 to-green-600 text-transparent bg-clip-text'>AI </span>Chat Ecosystem Hari Ini</h2>
                    <p className="font-sans text-3xl mt-10">Mulai dari simulasi kecil hingga 50 nomor sekaligus, semua bisa diatur otomatis.</p>
                </div>

                <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4">
                    <Button asChild size="lg" className="w-auto bg-gradient-to-r from-green-500 to-blue-600 px-8 py-6 text-lg text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <Link href="#link">Mulai Sekarang</Link>
                    </Button>
                </div>
            </div>
        </section>
        </>
    )
}