import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Clock4, TriangleAlert, MessageSquareX } from 'lucide-react'
import { ReactNode } from 'react'
import { Header } from '@/components/header'

export default function Features() {
    return (
        <>
        <section id='solusi' className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-6xl font-semibold lg:text-5xl">Testing & <span className='text-green-500'>Whatsapp</span> Chatbot Itu Tidak Mudah</h2>
                </div>
                <div className="mx-auto mt-8 grid max-w-sm gap-6 *:text-center @min-4xl:max-w-full @min-4xl:grid-cols-3 md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="flex flex-col items-center pb-3">
                            <TriangleAlert color="#e00606" size={48} /> 
                            <h3 className="mt-6 font-medium">Nomor Rawan Diblokir</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-2 text-sm">Aktivitas chat massal terdeteksi sebagai spam oleh WhatsApp, menyebabkan nomor Anda berisiko diblokir permanen.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="flex flex-col items-center pb-3"> 
                            <MessageSquareX color="#0631e0" size={48} /> 
                            <h3 className="mt-6 font-medium">Percakapan Susah Dipantau</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-2 text-sm">Sulit melacak dan menganalisis percakapan dalam jumlah besar secara manual.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="flex flex-col items-center pb-3"> 
                            <Clock4 size={48} color="#ffff00" absoluteStrokeWidth /> 
                            <h3 className="mt-6 font-medium">Proses Makan Waktu</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-2 text-sm">Menyiapkan dan mengelola simulasi chat dalam skala besar secara manual sangat memakan waktu dan sumber daya.</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="text-center">
                <h1 className="text-xl font-semibold lg:text-2xl mt-15">Dengan AI , setiap nomor <span className='text-green-500'>Whatsapp</span> jadi AI persona yang bisa ngobrol otomatis 2 arah. Aman, terukur, dan bisa dipantau lewat dashboard.</h1>
                </div>
            </div>
        </section>
        </>
    )
}