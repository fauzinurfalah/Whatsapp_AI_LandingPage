import { Check } from "lucide-react";
import Image from "next/image";

export default function Pricing() {
  return (
    <section className="bg-white pt-10 h-screen">
      <div className="text-center">
        <div className="flex justify-center items-center mb-10">
          <h2 className="text-4xl font-semibold text-black max-w-3xl">
            Mulai <span className="text-blue-500">Training </span>Hingga{" "}
            <span className="text-green-500">50 Nomor </span>
            Sekaligus
          </h2>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <div className=""></div>
          </div>
          <div className="w-1/2 pt-18 flex flex-col items-start">
            {/* Item 1 */}
            <div className="inline-flex items-center gap-1 px-1 rounded-lg">
              <div className="w-6 h-6 flex items-center justify-center rounded bg-green-500">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h2 className="font-semibold text-xl text-black leading-tight">
                Scheduler Aman: Interval Acak (60menit) & Limit Harian
              </h2>
            </div>

            {/* Item 2 */}
            <div className="inline-flex items-center gap-1 px-1 rounded-lg">
              <div className="w-6 h-6 flex items-center justify-center rounded bg-green-500">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h2 className="font-semibold text-xl text-black leading-tight">
                AI Chat Kualitas Tinggi: 8-10 tanya jawab, max 10 kata per pesan
              </h2>
            </div>

            {/* Item 3 */}
            <div className="inline-flex items-center gap-1 px-1 py-2 rounded-lg">
              <div className="w-6 h-6 flex items-center justify-center rounded bg-green-500">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h2 className="font-semibold text-xl text-black leading-tight whitespace-nowrap">
                Dashboard Real-time: Pantau status sukses dan grafik 30 hari.
              </h2>
            </div>

            {/* Item 4 */}
            <div className="inline-flex items-center gap-1 px-1 py-2 rounded-lg">
              <div className="w-6 h-6 flex items-center justify-center rounded bg-green-500">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h2 className="font-semibold text-xl text-black leading-tight whitespace-nowrap">
                Riset & pengembangan interaksi pelanggan
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
