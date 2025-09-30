"use client";

import { useState } from "react";
import Image from "next/image";

export default function Faq() {
  const [openDropdowns, setOpenDropdowns] = useState({
    chatbot: false,
    whatsapp: false,
    stresstest: false,
    riset: false,
  });

  const toggleDropdown = (itemId: keyof typeof openDropdowns) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <section className="pt-20 bg-white bg-gradient-to-b from-white via-white to-blue-200 h-screen">
      <div className="flex pt-20 px-18">
        {/* Kiri */}
        <div className="w-1/2">
          <div className="pl-20 pt-14 flex flex-col items-start">
            <h2 className="text-[43px] font-semibold mb-5 text-black">
              <span className="text-blue-700">Pertanyaan</span> yang <br />
              Sering Diajukan
            </h2>
            <p className="text-black text-[26px] max-w-[458px]">
              Temukan jawaban cepat atas hal-hal yang paling sering ditanyakan
              oleh calon pengguna kami mengenai durasi, keamanan, dan kemampuan
              kustomisasi AI training.
            </p>
          </div>
        </div>

        {/* Kanan */}
        <div className="w-1/2 pt-14 space-y-8 flex flex-col items-start">
          {/* Item 1 */}
          <div
            className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                       transition-all duration-200 cursor-pointer"
            onClick={() => toggleDropdown("chatbot")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-semibold text-2xl text-black leading-tight hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
                Berapa lama minimal durasi?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`group-hover:bg-blue-900 transition-transform duration-200 ${
                    openDropdowns.chatbot ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openDropdowns.chatbot ? "max-h-40 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-700 text-lg">Minimal 30 hari.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                       transition-all duration-200 cursor-pointer"
            onClick={() => toggleDropdown("whatsapp")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-semibold text-2xl text-black leading-tight hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
                Apakah nomor rawan diblokir?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`transition-transform duration-200 ${
                    openDropdowns.whatsapp ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openDropdowns.whatsapp ? "max-h-40 pb-4" : "max-h-0 pb-0"
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
                       transition-all duration-200 cursor-pointer"
            onClick={() => toggleDropdown("stresstest")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-semibold text-2xl text-black leading-tight hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
                Apakah bisa custom prompt?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`transition-transform duration-200 ${
                    openDropdowns.stresstest ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openDropdowns.stresstest ? "max-h-40 pb-4" : "max-h-0 pb-0"
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
                       transition-all duration-200 cursor-pointer"
            onClick={() => toggleDropdown("riset")}
          >
            <div className="flex items-center gap-3 p-4">
              <h2 className="font-semibold text-2xl text-black leading-tight hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
                Berapa nomor yang bisa dipakai?
              </h2>
              <div className="ml-auto">
                <Image
                  src="/img/dropdown.png"
                  alt="Dropdown Icon"
                  width={30}
                  height={30}
                  className={`transition-transform duration-200 ${
                    openDropdowns.riset ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openDropdowns.riset ? "max-h-40 pb-4" : "max-h-0 pb-0"
              }`}
            >
              <p className="text-gray-700 text-lg">Hingga 50 nomor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
