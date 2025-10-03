import { Check } from "lucide-react";
import Image from "next/image";

type FeatureItemProps = { title: string; desc: string };
// Komponen reusable untuk fitur list
function FeatureItem({ title, desc }: FeatureItemProps) {
  return (
    <div className="inline-flex items-start gap-3 px-3 py-3 rounded-lg hover:shadow-[-7px_2px_4px_0px_rgb(34,197,94)] transition-all duration-400 group">
      <div className="w-6 h-6 md:lg:w-8 md:h-8 lg:w-8 lg:h-8 flex items-center justify-center rounded-lg border-2 border-green-500 group-hover:bg-green-500 transition-all duration-400">
        <Check
          className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-green-500 group-hover:text-white"
          strokeWidth={4}
        />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="font-semibold text-[24px] text-black leading-tight">
          {title}
        </h2>
        <p className="text-black text-[16px] md:text-2xl lg:text-[26px] font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Pricing() {
  // Data array untuk fitur
  const features = [
    {
      title: "Scheduler Aman:",
      desc: "Interval Acak (±60 menit) & Limit Harian.",
    },
    {
      title: "AI Chat Kualitas Tinggi:",
      desc: "8-10 tanya jawab, max 10 kata per pesan.",
    },
    {
      title: "Dashboard Real-time:",
      desc: "Pantau status sukses dan grafik 30 hari.",
    },
    {
      title: "Custom Prompt AI:",
      desc: "Termasuk Kustomisasi Skrip (Selesai 1 hari).",
    },
  ];

  return (
    <section className="bg-white pt-8 h-screen">
      <div className="">
        <div className="flex justify-center text-center items-center mb-6 lg:mb-10 md:px-12 px-0 whitespace-normal">
          <h2 className="text-[36px] md:text-[42px] lg:text-[40px] font-semibold text-black max-w-[777px]">
            Akses Penuh Ekosistem:
            <br className="hidden md:block lg:hidden" />
            Mulai <span className="text-blue-500">Training </span>
            Hingga <span className="text-green-500">50 Nomor </span>
            Lainnya
          </h2>
        </div>

        <div className="flex flex-col whitespace-pre lg:flex-row ">
          {/* left: fitur list */}
          <div className="basis-[60%] px-0 md:px-10 lg:px-10 lg:pl-28 lg:pr-10 pt-20 flex flex-col space-y-4">
            {features.map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </div>

          {/* right: pricing card */}
          <div className="basis-[40%] lg:pl-0 pt-20 flex justify-center lg:justify-start">
            <div className="border-2 max-w-[417px] w-full h-[524px] bg-gradient-to-b from-[#B5C3FF] to-[#CFD8FF] rounded-3xl flex flex-col items-center">
              <div className="pt-10 flex flex-col items-center">
                <div className="flex font-semibold py-3 px-3 text-[12px] text-white bg-gradient-to-r from-[#3D5DED] to-[#C800FF] border rounded-3xl gap-x-2">
                  <Image
                    src="/img/user2.png"
                    alt="phone"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <h1>KAPASITAS PENUH (50 NOMOR)</h1>
                </div>

                <div className="flex flex-col items-center font-semibold text-3xl mt-6">
                  <h2>EKOSISTEM 50 NOMOR</h2>
                  <p>
                    <span className="text-green-500 text-[40px]">
                      Rp XX.XXX
                    </span>
                  </p>
                  <p className="text-[16px] mt-6 font-light">
                    Durasi Training Minimal 30 Hari
                  </p>
                </div>

                <div className=" w-6/6 mt-5 space-y-3 justify-start">
                  {/* 1 */}
                  <div className="flex items-center">
                    <div className="flex items-center text-xl gap-2">
                      <Image
                        src="/img/check-blue.png"
                        alt="check"
                        width={10}
                        height={10}
                        className="w-8 h-8"
                      />
                      <span className="text-lg">Scheduler Aman</span>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xl gap-2">
                      <Image
                        src="/img/check-blue.png"
                        alt="check"
                        width={10}
                        height={10}
                        className="w-8 h-8"
                      />
                      <span className="text-lg">AI Chat Kualitas Tinggi</span>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xl gap-2">
                      <Image
                        src="/img/check-blue.png"
                        alt="check"
                        width={10}
                        height={10}
                        className="w-8 h-8"
                      />
                      <span className="text-lg">Dashboard Real-time</span>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xl gap-2">
                      <Image
                        src="/img/check-blue.png"
                        alt="check"
                        width={10}
                        height={10}
                        className="w-8 h-8"
                      />
                      <span className="text-lg">Dapat custom Prompt AI</span>
                    </div>
                  </div>
                </div>

                {/* tombol */}
                <div className="mt-4 flex items-center">
                  <button
                    className="border-2 text-[25px] bg-blue-600 text-white font-semibold py-3 px-18 rounded-xl hover:bg-blue-800 transition-all duration-200 
             pb-3 hover:pb-2"
                  >
                    Mulai Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
