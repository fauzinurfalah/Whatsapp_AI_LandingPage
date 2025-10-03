"use client";

import { useState } from "react";
import Image from "next/image";

export default function Faq() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Data FAQ
  const faqData = {
    left: [
      {
        id: "chatbot-left",
        question: "Berapa lama minimal durasi?",
        answer: "Minimal 30 hari.",
      },
      {
        id: "whatsapp-left",
        question: "Apakah nomor rawan diblokir?",
        answer: "Risiko diminimalisir dengan interval random & limit harian.",
      },
      {
        id: "stresstest-left",
        question: "Apakah bisa custom prompt?",
        answer: "Bisa, selesai dalam 1 hari.",
      },
      {
        id: "riset-left",
        question: "Berapa nomor yang bisa dipakai?",
        answer: "Hingga 50 nomor.",
      },
    ],
    right: [
      {
        id: "chatbot-right",
        question: "Bagaimana jika melebihi batas maksimal?",
        answer:
          "Jika sudah melebihi 50 nomor dalam 1 Ekosistem. Anda harus move ke Ekosistem baru.",
      },
      {
        id: "whatsapp-right",
        question: "Kapan chat dilakukan?",
        answer:
          "Percakapan AI terjadi pada jam 8 pagi s.d 9 malam. Kami memastikan balasan sekitar 1 menit.",
      },
      {
        id: "stresstest-right",
        question: "Bagaimana siklus training nomor?",
        answer:
          "Setiap nomor chat dengan maksimal 5 nomor lain per hari. Siklus ini berganti untuk memastikan semua nomor ter-training.",
      },
      {
        id: "riset-right",
        question: "Mengapa minimal 30 hari?",
        answer:
          "Durasi minimal 30 hari diperlukan untuk menjamin stress test dan validasi nomor yang efektif dan maksimal.",
      },
    ],
  };

  // Komponen accordion item
  const FaqItem = ({
    id,
    question,
    answer,
  }: {
    id: string;
    question: string;
    answer: string;
  }) => {
    const isOpen = open[id] ?? false;

    return (
      <div
        className="w-full rounded-lg bg-white shadow shadow-gray-300 hover:shadow-md 
                   transition-all duration-200 cursor-pointer group"
        onClick={() => toggle(id)}
      >
        <div className="flex items-center gap-3 p-4">
          <h2
            className="font-medium text-[18px] md:text-2xl lg:text-2xl whitespace-pre text-black leading-tight 
                         group-hover:underline group-hover:decoration-2 group-hover:decoration-blue-500 
                         group-hover:text-blue-500"
          >
            {question}
          </h2>
          <div className="ml-auto">
            <Image
              src={isOpen ? "/img/dropdown.png" : "/img/down.png"}
              alt="Dropdown Icon"
              width={30}
              height={30}
              className={`transition-transform duration-200 
                group-hover:content-[url('/img/dropdown.png')] 
                ${isOpen ? "rotate-180" : "rotate-0"}`}
            />
          </div>
        </div>
        <div
          className={`px-4 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-40 pb-4" : "max-h-0 pb-0"
          }`}
        >
          <p className="text-gray-700 text-lg">{answer}</p>
        </div>
      </div>
    );
  };

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
        {/* Kolom kiri */}
        <div className="w-full lg:w-1/2 pt-12 space-y-8 flex flex-col items-start">
          {faqData.left.map((f) => (
            <FaqItem key={f.id} {...f} />
          ))}
        </div>

        {/* Kolom kanan */}
        <div className="w-full lg:w-1/2 pt-12 space-y-8 flex flex-col items-start">
          {faqData.right.map((f) => (
            <FaqItem key={f.id} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
