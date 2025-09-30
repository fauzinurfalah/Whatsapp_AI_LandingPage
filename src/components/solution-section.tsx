import { Card, CardHeader } from '@/components/ui/card'


export default function Features() {
    return (
        <>
        <section id='solusi' className="bg-gray-50 py-24 md:py-40">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-6xl font-semibold lg:text-5xl">Testing & <span className='text-green-500'>Whatsapp</span> Chatbot Itu Tidak Mudah</h2>
                </div>

                <div className="mx-auto mt-8 grid max-w-sm gap-6 *:text-center @min-4xl:max-w-full @min-4xl:grid-cols-3 md:mt-16">
                    <Card className="group shadow-zinc-950/5 transition-transform duration-300 hover:shadow-red-100 shadow-blur hover:scale-105 hover:-translate-y-2">
                        <CardHeader className="flex flex-col items-center pb-3">
                            <img src={"/img/Frame 39.png"} /> 
                            <h3 className="mt-6 font-medium">Nomor Rawan Diblokir</h3>
                            <p className="text-sm">Aktivitas chat massal terdeteksi sebagai spam oleh WhatsApp, menyebabkan nomor Anda berisiko diblokir permanen.</p>
                        </CardHeader>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-transform duration-300 hover:shadow-blue-100 shadow-blur hover:scale-105 hover:-translate-y-2">
                        <CardHeader className="flex flex-col items-center pb-3"> 
                            <img src={"/img/Frame 39-1.png"} />
                            <h3 className="mt-6 font-medium">Percakapan Susah Dipantau</h3>
                            <p className="text-sm">Sulit melacak dan menganalisis percakapan dalam jumlah besar secara manual.</p>
                        </CardHeader>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-transform duration-300 hover:shadow-yellow-100 shadow-blur hover:scale-105 hover:-translate-y-2">
                        <CardHeader className="flex flex-col items-center pb-3"> 
                            <img src={"/img/Frame 39-2.png"} />
                            <h3 className="mt-6 font-medium">Proses Makan Waktu</h3>
                            <p className="text-sm">Menyiapkan dan mengelola simulasi chat dalam skala besar secara manual sangat memakan waktu dan sumber daya.</p>
                        </CardHeader>
                    </Card>
                </div>
            <div className="mt-20 bg-gradient-to-r from-[#C1CCFF] to-[#99ABFC] border border-indigo-200 rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Solusi: AI Training Ecosystem
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                    Dengan AI, setiap nomor <span className="text-green-500 font-medium">WhatsApp</span> jadi AI persona yang bisa ngobrol otomatis 2 arah.
                    Aman, terukur, dan bisa dipantau lewat dashboard.
                </p>
          
                {/* Fitur-fitur Solusi */}
                    <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                        <div className="flex items-center gap-2 bg-[#C6D0FE] px-4 py-2 rounded-lg border border-indigo-200">
                        <img src="img/security.png" />
                        <span className="text-sm font-medium text-gray-700">Aman dari Blokir</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#C6D0FE] px-4 py-2 rounded-lg border border-indigo-200">
                        <img src="img/chart.png" />
                        <span className="text-sm font-medium text-gray-700">Dashboard Real-time</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#C6D0FE] px-4 py-2 rounded-lg border border-indigo-200">
                        <img src="img/clock.png" />
                        <span className="text-sm font-medium text-gray-700">Otomatis 24 jam</span>
                        </div>
                    </div>
            </div>
            </div>
        </section>
        </>
    )
}