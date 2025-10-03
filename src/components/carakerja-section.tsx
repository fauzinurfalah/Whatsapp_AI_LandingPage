'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

const CaraKerjaSection: React.FC = () => {
  const viewOptions = {
    triggerOnce: false,
    threshold: 0.8,
  };

<<<<<<< HEAD
// Array data dengan tipe yang sudah didefinisikan
const steps: Step[] = [
  {
    title: "Daftarkan Nomor",
    description: "Kelola hingga 50 nomor WhatsApp.",
  },
  {
    title: "Aktifkan AI Persona",
    description: "Setiap nomor punya AI dengan prompt khusus.",
  },
  {
    title: "Trigger Harian",
    description:
      "Sistem jalankan max 5 nomor per hari (interval acak ±60 menit).",
  },
  {
    title: "AI Chat Otomatis",
    description: "Percakapan 2 arah, 8-10 chat, max 10 kata, balasan <1 menit.",
  },
  {
    title: "Pantau di Dashboard",
    description: "Statistik 30 hari terakhir, status nomor sukses/progress.",
  },
];
=======
  const { ref: ref1, inView: inView1 } = useInView(viewOptions);
  const { ref: ref2, inView: inView2 } = useInView(viewOptions);
  const { ref: ref3, inView: inView3 } = useInView(viewOptions);
  const { ref: ref4, inView: inView4 } = useInView(viewOptions);
  const { ref: ref5, inView: inView5 } = useInView(viewOptions);
>>>>>>> main

  return (
<<<<<<< HEAD
    <section id="carakerja" className="bg-gray-50 py-24 md:py-40">
      <div className="@container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Cara Kerja Training <span className="text-blue-500">AI</span>
          </h2>
          <h1 className="text-xl text-medium mt-5">
            Tingkatkan efisiensi pengelolaan nomor WhatsApp dengan{" "}
          </h1>
          <h1 className="text-xl text-medium mt-5">
            proses yang simpel dan terukur.
          </h1>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-row md:flex-col items-center w-full md:w-1/5 px-4"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex-shrink-0 bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Konten Card */}
                <div className="bg-white p-12 rounded-lg shadow-[0_10px_20px_rgba(99,102,241,0.5)] border border-gray-200 w-full text-left md:text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
=======
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
          <div className="flex flex-col items-center space-y-0 relative h-[60rem] md:flex-row md:items-center md:space-y-0 md:-space-x-4 md:h-auto md:relative">
            {/* --- Card 1 --- */}
            <div
              ref={ref1}
              className={`transform transition-all duration-700 ease-in-out hover:z-50 hover:-translate-y-6 hover:scale-105 md:hover:rotate-0 z-0 md:rotate-2 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full sm:w-64 h-52 flex flex-col gap-4 sticky top-0 md:static ${
                inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex justify-between items-start">
                <img src="img/telp.png" alt="Icon Telepon" className="w-12 h-12" />
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-500">
                  Step 1
                </span>
>>>>>>> main
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Daftarkan Nomor</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Kelola hingga 50 nomor WhatsApp.</p>
              </div>
            </div>

            {/* --- Card 2 --- */}
            <div
              ref={ref2}
              className={`transform transition-all duration-700 ease-in-out hover:z-50 hover:-translate-y-6 hover:scale-105 md:hover:rotate-0 z-10 md:-rotate-2 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full sm:w-64 h-52 flex flex-col gap-4 sticky top-12 md:static ${
                inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex justify-between items-start">
                <img src="img/setting.png" alt="Icon Pengaturan" className="w-12 h-12" />
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-500">
                  Step 2
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aktifkan AI Persona</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Setiap nomor punya AI dengan prompt khusus.</p>
              </div>
            </div>

            {/* --- Card 3 --- */}
            <div
              ref={ref3}
              className={`transform transition-all duration-700 ease-in-out hover:z-50 hover:-translate-y-6 hover:scale-105 md:hover:rotate-0 z-20 md:rotate-1 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full sm:w-64 h-52 flex flex-col gap-4 sticky top-24 md:static ${
                inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex justify-between items-start">
                <img src="img/clocks.png" alt="Icon Jam" className="w-12 h-12" />
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-500">
                  Step 3
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trigger Harian</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Sistem jalankan max 5 nomor per hari (interval acak ±60 menit).</p>
              </div>
            </div>

            {/* --- Card 4 --- */}
            <div
              ref={ref4}
              className={`transform transition-all duration-700 ease-in-out hover:z-50 hover:-translate-y-6 hover:scale-105 md:hover:rotate-0 z-30 md:-rotate-1 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full sm:w-64 h-52 flex flex-col gap-4 sticky top-36 md:static ${
                inView4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex justify-between items-start">
                <img src="img/chat.png" alt="Icon Chat" className="w-12 h-12" />
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-500">
                  Step 4
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Chat Otomatis</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Percakapan 2 arah, 8–10 chat, max 10 kata, balasan &lt;1 menit.</p>
              </div>
            </div>

            {/* --- Card 5 --- */}
            <div
              ref={ref5}
              className={`transform transition-all duration-700 ease-in-out hover:z-50 hover:-translate-y-6 hover:scale-105 md:hover:rotate-0 z-40 md:rotate-2 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full sm:w-64 h-52 flex flex-col gap-4 sticky top-48 md:static ${
                inView5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex justify-between items-start">
                <img src="img/chartcarakerja.png" alt="Icon Grafik" className="w-12 h-12" />
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-blue-100 text-blue-500">
                  Step 5
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pantau di Dashboard</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Statistik 30 hari terakhir, status nomor sukses/progress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default CarakerjaSection;
=======
export default CaraKerjaSection;
>>>>>>> main
