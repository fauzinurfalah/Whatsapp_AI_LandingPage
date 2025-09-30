import React from "react";

// Interface untuk mendefinisikan tipe data dari setiap step
interface Step {
  title: string;
  description: string;
}

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

const CarakerjaSection: React.FC = () => {
  return (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarakerjaSection;
