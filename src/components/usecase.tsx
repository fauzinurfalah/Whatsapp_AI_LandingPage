import Image from "next/image";
import { Check } from "lucide-react";

export default function UseCase() {
  return (
    <section className="pt-20 bg-white pb-20">
      <div className=" text-center">
        <div className="flex justify-center items-center">
          <h2 className="text-[43px] font-semibold mb-10 max-w-3xl text-black">
            Apa yang Kamu Bisa Lakukan dengan Training{" "}
            <span className="text-blue-400">AI</span>?
          </h2>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <Image
              src="/img/phone-AI.png"
              alt="Phone Icon"
              width={720}
              height={600}
              className="object-contain"
            />
          </div>
          <div className="w-1/2 pt-18 space-y-6 flex flex-col items-start">
            {/* Item 1 */}
            <div className="inline-flex items-center gap-1 px-1 py-3 rounded-lg hover:shadow-[-1px_2px_4px_0px_rgb(52,211,153)] transition-colors duration-200 cursor-pointer group">
              <div className="w-6 h-6 flex items-center justify-center rounded bg-gray-700 group-hover:bg-emerald-400 transition-colors">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h2 className="font-semibold text-[26px] text-black leading-tight">
                Chatbot sebelum dipakai production
              </h2>
            </div>

            {/* Item 2 */}
            <div className="inline-flex items-center gap-1 px-1 py-3 rounded-lg hover:shadow-[-1px_2px_4px_0px_rgb(52,211,153)] transition-colors duration-200 cursor-pointer group">
              <div className="w-6 h-6 flex items-center justify-center rounded bg-gray-700 group-hover:bg-emerald-400 transition-colors">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h2 className="font-semibold text-[26px] text-black leading-tight">
                Simulasi campaign WhatsApp
              </h2>
            </div>

            {/* Item 3 */}
            <div className="inline-flex items-center gap-1 px-1 py-3 rounded-lg hover:shadow-[-1px_2px_4px_0px_rgb(52,211,153)] transition-colors duration-200 cursor-pointer group">
              <div className="w-6 h-6 flex items-center justify-center rounded bg-gray-700 group-hover:bg-emerald-400 transition-colors">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h2 className="font-semibold text-[26px] text-black leading-tight whitespace-nowrap">
                Stress test nomor untuk minimalisir risiko blokir
              </h2>
            </div>

            {/* Item 4 */}
            <div className="inline-flex items-center gap-1 px-1 py-3 rounded-lg hover:shadow-[-1px_2px_4px_0px_rgb(52,211,153)] transition-colors duration-200 cursor-pointer group">
              <div className="w-6 h-6 flex items-center justify-center rounded bg-gray-700 group-hover:bg-emerald-400 transition-colors">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h2 className="font-semibold text-[26px] text-black leading-tight whitespace-nowrap">
                Riset & pengembangan interaksi pelanggan
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
