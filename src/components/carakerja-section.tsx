import React from 'react';


const CaraKerjaSectionManual: React.FC = () => {
  return (
    <section id="cara-kerja" className="bg-white py-20 md:py-28 overflow-x-hidden relative z-10">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Judul dan Subjudul */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Cara Kerja Training <span className="text-blue-600">AI</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Tingkatkan efisiensi pengelolaan nomor WhatsApp dengan proses yang simpel dan terukur.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex items-center -space-x-5 sm:-space-x-5 md:-space-x-5">
            
            {/* --- Card 1: Daftarkan Nomor --- */}
            <div className="transform transition-all duration-300 ease-in-out hover:z-50 hover:-translate-y-6 hover:scale-105 hover:rotate-0 z-0 rotate-2 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-30 sm:w-65 h-55 flex flex-col gap-4">
              <div className="flex justify-between items-start ">
                  <img src="img/telp.png" className="w-12 h-12" />
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-500">
                  Step 1
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Daftarkan Nomor</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Kelola hingga 50 nomor WhatsApp.</p>
              </div>
            </div>

            {/* --- Card 2: Aktifkan AI Persona --- */}
            <div className="transform transition-all duration-300 ease-in-out hover:z-50 hover:-translate-y-6 hover:scale-105 hover:rotate-0 z-10 -rotate-2 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-30 sm:w-65 h-55 flex flex-col gap-4">
              <div className="flex justify-between items-start ">
                <img src="img/setting.png" className="w-12 h-12" />
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-500">
                  Step 2
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aktifkan AI Persona</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Setiap nomor punya AI dengan prompt khusus.</p>
              </div>
            </div>

            {/* --- Card 3: Trigger Harian --- */}
            <div className="transform transition-all duration-300 ease-in-out hover:z-50 hover:-translate-y-6 hover:scale-105 hover:rotate-0 z-20 rotate-1 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-30 sm:w-65 h-55 flex flex-col gap-4">
              <div className="flex justify-between items-start ">
                <img src="img/clocks.png" className="w-12 h-12" />
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-500">
                  Step 3
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trigger Harian</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Sistem jalankan max 5 nomor per hari (interval acak ±60 menit).</p>
              </div>
            </div>
            
            {/* --- Card 4: AI Chat Otomatis --- */}
            <div className="transform transition-all duration-300 ease-in-out hover:z-50 hover:-translate-y-6 hover:scale-105 hover:rotate-0 z-30 -rotate-1 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-30 sm:w-65 h-55 flex flex-col gap-4">
              <div className="flex justify-between items-start ">
               <img src="img/chat.png" className="w-12 h-12" />
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-500">
                  Step 4
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Chat Otomatis</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Percakapan 2 arah, 8–10 chat, max 10 kata, balasan &lt;1 menit.</p>
              </div>
            </div>

            {/* --- Card 5: Pantau di Dashboard --- */}
            <div className="transform transition-all duration-300 ease-in-out hover:z-50 hover:-translate-y-6 hover:scale-105 hover:rotate-0 z-40 rotate-2 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-30 sm:w-65 h-55 flex flex-col gap-4">
              <div className="flex justify-between items-start ">
                <img src="img/chartcarakerja.png" className="w-12 h-12" />
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-500">
                  Step 5
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pantau di Dashboard</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Statistik 30 hari terakhir, status nomor sukses/progress.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CaraKerjaSectionManual;