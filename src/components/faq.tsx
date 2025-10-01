"use client";

import { useState } from "react";
import Image from "next/image";

export default function Faq() {
  const [openLeft, setOpenLeft] = useState({
    chatbot: false,
    whatsapp: false,
    stresstest: false,
    riset: false,
  });

  // State untuk kolom kanan
  const [openRight, setOpenRight] = useState({
    chatbot: false,
    whatsapp: false,
    stresstest: false,
    riset: false,
  });

  // toggle kiri
  const toggleLeft = (itemId: keyof typeof openLeft) => {
    setOpenLeft((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // toggle kanan
  const toggleRight = (itemId: keyof typeof openRight) => {
    setOpenRight((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <section className="pt-40 pb- bg-white bg-gradient-to-b from-white via-white to-blue-200">
      <div className="flex flex-col justify-center items-center px-20">
        <h2 className="text-[43px] font-semibold mb-5 text-black">
          <span className="text-blue-700">Pertanyaan</span> yang Sering Diajukan
        </h2>
        <p className="text-black text-[26px] font-normal text-center">
          Temukan jawaban cepat atas hal-hal yang paling sering ditanyakan oleh
          calon pengguna kami mengenai durasi, keamanan, dan kemampuan
          kustomisasi AI training.
        </p>
      </div>
      <div className="flex pt-10 px-22 pb-20 space-x-8">
        {/* Kiri */}
        <div className="w-1/2 pt-12 space-y-8 flex flex-col items-start">
          {/* Item 1 */}
          <div
            className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                       transition-all duration-200 group cursor-pointer"
            onClick={() => toggleLeft("chatbot")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-semibold text-2xl text-black leading-tight group-hover:underline group-hover:decoration-2 group-hover:decoration-blue-500 group-hover:text-blue-500">
                Berapa lama minimal durasi?
              </h2>
              <div className="ml-auto">
                <Image
                  src={openLeft ? "/img/dropdown.png" : "/img/drop-blue.png"}
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={` transition-transform duration-200 group-hover:invert group-hover:hue-rotate-180 group-hover:saturate-[200%] group-hover:brigtness-125 ${
                    openLeft.chatbot ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openLeft.chatbot ? "max-h-40 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-700 text-lg">Minimal 30 hari.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                       transition-all duration-200 group cursor-pointer"
            onClick={() => toggleLeft("whatsapp")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-semibold text-2xl text-black leading-tight group-hover:underline group-hover:decoration-2 group-hover:decoration-blue-500 group-hover:text-blue-500">
                Apakah nomor rawan diblokir?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`transition-transform duration-200 ${
                    openLeft.whatsapp ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openLeft.whatsapp ? "max-h-40 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-700 text-lg">
                Risiko diminimalisir dengan interval random & limit harian.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div
            className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                       transition-all duration-200 group cursor-pointer"
            onClick={() => toggleLeft("stresstest")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-semibold text-2xl text-black leading-tight group-hover:underline group-hover:decoration-2 group-hover:decoration-blue-500 group-hover:text-blue-500">
                Apakah bisa custom prompt?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`transition-transform duration-200 ${
                    openLeft.stresstest ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openLeft.stresstest ? "max-h-40 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-700 text-lg">
                Bisa, selesai dalam 1 hari.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div
            className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                       transition-all duration-200 group cursor-pointer"
            onClick={() => toggleLeft("riset")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-semibold text-2xl text-black leading-tight group-hover:underline group-hover:decoration-2 group-hover:decoration-blue-500 group-hover:text-blue-500">
                Berapa nomor yang bisa dipakai?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`transition-transform duration-200 ${
                    openLeft.riset ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openLeft.riset ? "max-h-40 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-700 text-lg">Hingga 50 nomor.</p>
            </div>
          </div>
        </div>

        {/* Kanan */}
        <div className="w-1/2 pt-12 space-y-8 flex flex-col items-start">
          {/* Item 1 */}
          <div
            className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                       transition-all duration-200 group cursor-pointer"
            onClick={() => toggleRight("chatbot")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-medium text-2xl text-black leading-tight group-hover:underline group-hover:decoration-2 group-hover:decoration-blue-500 group-hover:text-blue-500">
                Bagaimana jika melebihi batas maksimal?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`transition-transform duration-200 ${
                    openRight.chatbot ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openRight.chatbot ? "max-h-40 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-700 text-lg">
                Jika sudah melebihi 50 nomor dalam 1 Ekosistem. Anda harus move
                ke Ekosistem baru.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                       transition-all duration-200 group cursor-pointer"
            onClick={() => toggleRight("whatsapp")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-medium text-2xl text-black leading-tight group-hover:underline group-hover:decoration-2 group-hover:decoration-blue-500 group-hover:text-blue-500">
                Kapan chat dilakukan?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`transition-transform duration-200 ${
                    openRight.whatsapp ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openRight.whatsapp ? "max-h-40 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-700 text-lg">
                Percakapan AI terjadi pada jam 8 pagi s.d 9 malam. Kami
                memastikan balasan terjadi sekitar 1 menit.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div
            className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                       transition-all duration-200 group cursor-pointer"
            onClick={() => toggleRight("stresstest")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-semibold text-2xl text-black leading-tight group-hover:underline group-hover:decoration-2 group-hover:decoration-blue-500 group-hover:text-blue-500">
                Bagaimana siklus training nomor?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`transition-transform duration-200 ${
                    openRight.stresstest ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openRight.stresstest ? "max-h-40 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-700 text-lg">
                Setiap nomor chat dengan maksimal 5 nomor lain per hari. Siklus
                ini berganti untuk memastikan semua nomor ter-training.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div
            className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                       transition-all duration-200 group cursor-pointer"
            onClick={() => toggleRight("riset")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-semibold text-2xl text-black leading-tight group-hover:underline group-hover:decoration-2 group-hover:decoration-blue-500 group-hover:text-blue-500">
                Mengapa minimal 30 hari?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`transition-transform duration-200 ${
                    openRight.riset ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openRight.riset ? "max-h-40 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-700 text-lg">
                Durasi minimal 30 hari diperlukan untuk menjamin stress test dan
                validasi nomor yang efektif dan maksimal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
