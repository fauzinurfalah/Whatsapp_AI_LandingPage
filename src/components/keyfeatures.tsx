"use client";

import Image from "next/image";
import Link from "next/link";
import { CirclePlay } from "lucide-react";
import { useState } from "react";

export default function KeyFeatures() {
  const [hover, setHover] = useState(false);
  return (
    <section className="pt-20 bg-white/90 h-screen">
      <div className="px-35 text-center">
        <h2 className="text-5xl font-semibold mb-10 text-black whitespace-pre-wrap">
          Semua yang Kamu Butuhkan dalam
          <span className="text-blue-400"> Satu Platform</span>
        </h2>
        <div className="flex">
          <div className="w-1/2 grid grid-cols-1 gap-6 pt-8">
            <div className="flex items-start gap-3 text-left pl-20">
              <div className="">
                <Image
                  src="/img/wa.png"
                  alt="Chat Icon"
                  width={50}
                  height={50}
                  className="-mt-2.5"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold text-2xl mb-1 text-black">
                  AI to AI Conversations
                </h3>
                <p className="text-gray-600 text-1sm">
                  Dua nomor ngobrol otomatis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-left pl-20">
              <div className="">
                <Image
                  src="/img/bar.png"
                  alt="Chat Icon"
                  width={50}
                  height={50}
                  className="-mt-2.5"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold text-2xl mb-1 text-black">
                  Dashboard Real-time
                </h3>
                <p className="text-gray-600 text-1sm">
                  Grafik harian & status nomor.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left pl-20">
              <div className="">
                <Image
                  src="/img/watch.png"
                  alt="Chat Icon"
                  width={50}
                  height={50}
                  className="-mt-2.5"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold text-2xl mb-1 text-black">
                  Smart Scheduler
                </h3>
                <p className="text-gray-600 text-1sm">
                  Interval acak biar aman dari blokir.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left pl-20">
              <div className="">
                <Image
                  src="/img/data.png"
                  alt="Chat Icon"
                  width={50}
                  height={50}
                  className="-mt-2.5"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold text-2xl mb-1 text-black">
                  Room System
                </h3>
                <p className="text-gray-600 text-1sm">
                  1 chat = 1 room, mudah dipantau.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left pl-20">
              <div className="">
                <Image
                  src="/img/shield.png"
                  alt="Chat Icon"
                  width={50}
                  height={50}
                  className="-mt-2.5"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold text-2xl mb-1 text-black">
                  Aman & Scalable
                </h3>
                <p className="text-gray-600 text-1sm">
                  Hingga 50 nomor, durasi minimal 30 hari.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-end justify-end pr-12">
            <div className="border-2 w-100 h-100 border-black [border-style:dashed] [stroke-dasharray:20_10] rounded-xl">
              <div className="text-center pt-30 px-10">
                <h2
                  className={`font-bold text-2xl mb-6 text-black transition-transform duration-300 ${
                    hover ? "-translate-y-2" : ""
                  }`}
                >
                  Demo interaktif <br /> berupa video
                </h2>

                <p
                  className={`font-semibold text-black text-xl transition-transform duration-300 ${
                    hover ? "-translate-y-1" : ""
                  }`}
                >
                  Lihat bagaimana AI <br /> bekerja secara real-time
                </p>

                <div className="mt-7">
                  <Link
                    href="/"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="px-10 py-4 border-blue-400 hover:bg-blue-400 hover:text-white border-3  rounded-lg text-gray-900 text-xl inline-flex items-center font-semibold transition-colors duration-100"
                  >
                    Mulai Sekarang
                    <CirclePlay className="ml-2 w-7 h-7" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
