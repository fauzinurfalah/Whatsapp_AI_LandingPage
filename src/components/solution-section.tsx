import { Card, CardHeader } from '@/components/ui/card'

export default function Features() {
    return (
        <>
        <section id='solusi' className="bg-gray-50 py-24 md:py-40">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold leading-tight lg:text-5xl">Testing & <span className='text-green-500'>Whatsapp</span> Chatbot Itu Tidak Mudah</h2>
                </div>

                <div className="mx-auto mt-12 grid max-w-sm gap-6 md:mt-16 md:max-w-full md:grid-cols-3">
                    
                    <Card className="group shadow-zinc-950/5 transition-transform duration-300 hover:shadow-red-100 shadow-blur hover:scale-105 hover:-translate-y-2">
                        <CardHeader className="flex flex-col items-center gap-4 p-6 text-center">
                            <img src={"/img/Frame 39.png"} alt="Nomor Rawan Diblokir Icon" className="w-12" /> 
                            <h3 className="font-medium">Nomor Rawan Diblokir</h3>
                            <p className="text-sm text-gray-600">Aktivitas chat massal terdeteksi sebagai spam oleh WhatsApp, menyebabkan nomor Anda berisiko diblokir permanen.</p>
                        </CardHeader>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-transform duration-300 hover:shadow-blue-100 shadow-blur hover:scale-105 hover:-translate-y-2">
                        <CardHeader className="flex flex-col items-center gap-4 p-6 text-center"> 
                            <img src={"/img/Frame 39-1.png"} alt="Percakapan Susah Dipantau Icon" className="w-12" />
                            <h3 className="font-medium">Percakapan Susah Dipantau</h3>
                            <p className="text-sm text-gray-600">Sulit melacak dan menganalisis percakapan dalam jumlah besar secara manual.</p>
                        </CardHeader>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-transform duration-300 hover:shadow-yellow-100 shadow-blur hover:scale-105 hover:-translate-y-2">
                        <CardHeader className="flex flex-col items-center gap-4 p-6 text-center"> 
                            <img src={"/img/Frame 39-2.png"} alt="Proses Makan Waktu Icon" className="w-12" />
                            <h3 className="font-medium">Proses Makan Waktu</h3>
                            <p className="text-sm text-gray-600">Menyiapkan dan mengelola simulasi chat dalam skala besar secara manual sangat memakan waktu dan sumber daya.</p>
                        </CardHeader>
                    </Card>
                </div>

                {/* --- Section Solusi --- */}
                <div className="mt-20 rounded-2xl bg-gradient-to-r from-[#C1CCFF] to-[#99ABFC] p-8 text-center md:p-12">
                    <h3 className="text-2xl font-bold text-gray-800 md:text-3xl">
                        Solusi: AI Training Ecosystem
                    </h3>
                    <p className="mx-auto mt-4 max-w-3xl text-base text-gray-700 md:text-lg">
                        Dengan AI, setiap nomor <span className="font-medium text-green-500">WhatsApp</span> jadi AI persona yang bisa ngobrol otomatis 2 arah.
                        Aman, terukur, dan bisa dipantau lewat dashboard.
                    </p>
                
                    <div className="mt-8 flex flex-row flex-nowrap justify-center gap-2">
                        <div className="flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-200 bg-[#C6D0FE] px-4 py-2 md:w-auto">
                            <img src="img/security.png" alt="Security Icon" className="h-5 w-5" />
                            <span className="text-xs font-medium text-gray-700">Aman dari Blokir</span>
                        </div>
                        <div className="flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-200 bg-[#C6D0FE] px-4 py-2 md:w-auto">
                            <img src="img/chart.png" alt="Chart Icon" className="h-5 w-5" />
                            <span className="text-xs font-medium text-gray-700">Dashboard Real-time</span>
                        </div>
                        <div className="flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-200 bg-[#C6D0FE] px-4 py-2 md:w-auto">
                            <img src="img/clock.png" alt="Clock Icon" className="h-5 w-5" />
                            <span className="text-xs font-medium text-gray-700">Otomatis 24 jam</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}