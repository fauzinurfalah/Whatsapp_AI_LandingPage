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

  // component item biar reusable
  const FaqItem = ({
    open,
    toggle,
    id,
    question,
    answer,
  }: {
    open: boolean;
    toggle: () => void;
    id: string;
    question: string;
    answer: string;
  }) => (
    <div
      className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                 transition-all duration-200 group cursor-pointer"
      onClick={toggle}
    >
      <div className="flex items-center gap-3 p-4">
        <h2
          className="font-medium text-[18px] md:text-2xl lg:text-2xl text-black leading-tight 
                       group-hover:underline group-hover:decoration-2 group-hover:decoration-blue-500 
                       group-hover:text-blue-500"
        >
          {question}
        </h2>
        <div className="ml-auto">
          <Image
            src={open ? "/img/dropdown.png" : "/img/down.png"}
            alt="Dropdown Icon"
            width={35}
            height={35}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            } ${
              !open
                ? "group-hover:brightness-0 group-hover:invert group-hover:hue-rotate-[200deg] group-hover:saturate-[500%]"
                : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`px-4 overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-4" : "max-h-0 pb-0"
        }`}
      >
        <p className="text-gray-700 text-lg">{answer}</p>
      </div>
    </div>
  );

  return (
    <section className="pt-50 bg-white bg-gradient-to-b from-white via-blue-100 to-blue-300 lg:from-white lg:via-white lg:to-blue-200">
      <div className="flex flex-col justify-center items-center px-6 md:px-20 lg:px-20">
        <h2 className="lg:text-[43px] md:text-[40px] text-[34px] text-center font-semibold mb-5 text-black">
          <span className="text-blue-700">Pertanyaan</span> yang Sering Diajukan
        </h2>
        <p className="text-black text-[22px] md:text-[26px] lg:text-[26px] font-normal text-justify md:text-center lg:text-center max-w-4xl">
          Temukan jawaban cepat atas hal-hal yang paling sering ditanyakan oleh
          calon pengguna kami mengenai durasi, keamanan, dan kemampuan
          kustomisasi AI training.
        </p>
      </div>

      <div className="flex pt-10 px-4 md:px-22 lg:px-22 pb-20 space-x-8 flex-col lg:flex-row">
        {/* Kiri */}
        <div className="w-full lg:w-1/2 pt-12 space-y-8 flex flex-col items-start">
          <FaqItem
            open={openLeft.chatbot}
            toggle={() => toggleLeft("chatbot")}
            id="chatbot"
            question="Berapa lama minimal durasi?"
            answer="Minimal 30 hari."
          />
          <FaqItem
            open={openLeft.whatsapp}
            toggle={() => toggleLeft("whatsapp")}
            id="whatsapp"
            question="Apakah nomor rawan diblokir?"
            answer="Risiko diminimalisir dengan interval random & limit harian."
          />
          <FaqItem
            open={openLeft.stresstest}
            toggle={() => toggleLeft("stresstest")}
            id="stresstest"
            question="Apakah bisa custom prompt?"
            answer="Bisa, selesai dalam 1 hari."
          />
          <FaqItem
            open={openLeft.riset}
            toggle={() => toggleLeft("riset")}
            id="riset"
            question="Berapa nomor yang bisa dipakai?"
            answer="Hingga 50 nomor."
          />
        </div>

        {/* Kanan */}
        <div className="w-full lg:w-1/2 pt-12 space-y-8 flex flex-col items-start">
          <FaqItem
            open={openRight.chatbot}
            toggle={() => toggleRight("chatbot")}
            id="chatbot"
            question="Bagaimana jika melebihi batas maksimal?"
            answer="Jika sudah melebihi 50 nomor dalam 1 Ekosistem. Anda harus move ke Ekosistem baru."
          />
          <FaqItem
            open={openRight.whatsapp}
            toggle={() => toggleRight("whatsapp")}
            id="whatsapp"
            question="Kapan chat dilakukan?"
            answer="Percakapan AI terjadi pada jam 8 pagi s.d 9 malam. Kami memastikan balasan sekitar 1 menit."
          />
          <FaqItem
            open={openRight.stresstest}
            toggle={() => toggleRight("stresstest")}
            id="stresstest"
            question="Bagaimana siklus training nomor?"
            answer="Setiap nomor chat dengan maksimal 5 nomor lain per hari. Siklus ini berganti untuk memastikan semua nomor ter-training."
          />
          <FaqItem
            open={openRight.riset}
            toggle={() => toggleRight("riset")}
            id="riset"
            question="Mengapa minimal 30 hari?"
            answer="Durasi minimal 30 hari diperlukan untuk menjamin stress test dan validasi nomor yang efektif dan maksimal."
          />
        </div>
      </div>
    </section>
  );
}
