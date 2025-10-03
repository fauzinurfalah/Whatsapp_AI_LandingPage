"use client";

import Image from "next/image";
import Link from "next/link";
import { CirclePlay } from "lucide-react";
import { useState } from "react";

export default function KeyFeatures() {
  const [hover, setHover] = useState(false);
  return (
    <section className="pt-20 bg-[#F5F7FF]">
      <div className="px-4 md:px-35 lg:px-35 text-center md:flex-col">
        <h2 className="text-2xl lg:text-5xl md:text-[42px] md:leading-tight font-semibold mb-10 text-black whitespace-pre-wrap">
          Semua yang Kamu Butuhkan dalam
          <span className="text-blue-400"> Satu Platform</span>
        </h2>
        <div className="flex flex-col lg:flex-row md:pt-10 pb-20">
          <div className="w-full lg:w-1/2 lg:pt-16 grid grid-cols-1 lg:pl-20   gap-6 pt-8">
            <div className="flex items-start gap-3 text-left md:whitespace-pre">
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
                <h3 className="font-semibold text-xl md:text-[22px] lg:text-2xl mb-1 text-black">
                  AI to AI Conversations
                </h3>
                <p className="text-gray-600 text-1sm">
                  Dua nomor ngobrol otomatis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-left  md:whitespace-pre">
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
                <h3 className="font-semibold text-xl md:text-[22px] lg:text-2xl mb-1 text-black">
                  Dashboard Real-time
                </h3>
                <p className="text-gray-600 text-1sm">
                  Grafik harian & status nomor.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left  md:whitespace-pre">
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
                <h3 className="font-semibold text-xl md:text-[22px] lg:text-2xl mb-1 text-black">
                  Smart Scheduler
                </h3>
                <p className="text-gray-600 text-1sm">
                  Interval acak biar aman dari blokir.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left  md:whitespace-pre">
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
                <h3 className="font-semibold text-xl md:text-[22px] lg:text-2xl mb-1 text-black">
                  Room System
                </h3>
                <p className="text-gray-600 text-1sm">
                  1 chat = 1 room, mudah dipantau.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3 lg:gap-3 text-left md:whitespace-pre">
              <div className="">
                <Image
                  src="/img/shield.png"
                  alt="Chat Icon"
                  width={50}
                  height={50}
                  className="-mt-2.5 w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px]"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold text-xl md:text-[22px] lg:text-2xl mb-1 text-black">
                  Aman & Scalable
                </h3>
                <p className="text-gray-600 text-1sm">
                  Hingga 50 nomor, durasi minimal 30 hari.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-end justify-end px-10 md:px-15 lg:pr-16 pt-20 lg:pt-16">
            <div className="border-2 max-w-[410px] md:max-w-[700px] h-110 border-black [border-style:dashed] [stroke-dasharray:20_10] rounded-xl">
              <div className="text-center pt-30 px-10">
                <h2
                  className={`font-semibold text-[26px] mb-6 text-black transition-transform duration-300 ${
                    hover ? "-translate-y-2" : ""
                  }`}
                >
                  Demo interaktif <br /> berupa video
                </h2>

                <p
                  className={`font-normal text-black text-xl lg:text-[26px] transition-transform duration-300 ${
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
                    className="px-7 py-3 md:px-10 md:py-4 lg:px-10 lg:py-4 border-[#738BF8] hover:bg-[#738BF8] hover:text-white border-3  rounded-lg text-gray-900 text-lg md:text-xl lg:text-xl inline-flex items-center font-semibold transition-colors duration-100 whitespace-nowrap"
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
