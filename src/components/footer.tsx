import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        {/* Judul "AI Training" */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800">AI Training</h3>
        </div>

        {/* Grid untuk konten utama footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-10">
          
          {/* Kolom Kiri: Deskripsi & Info Kontak */}
          <div className="md:col-span-6">
            <p className="text-gray-500 leading-relaxed mb-6">
              Platform Training AI terdepan untuk stress test dan validasi nomor WhatsApp. Kami membantu minimalkan risiko blokir dengan simulasi otomatis berskala penuh.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Purbalingga, Jawa Tengah</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+62 895 1446 3758</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>contact@cekwa.id</span>
              </div>
            </div>
          </div>

          {/* Kolom Tengah: Fitur */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Fitur</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Smart Scheduler (Anti-Blokir)</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Dashboard Real-time</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Kualitas Chat AI (Custom Prompt)</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cara Kerja Training AI</a></li>
            </ul>
          </div>

          {/* Kolom Kanan: Bantuan */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Bantuan</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Keamanan Data</a></li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Bagian Bawah Footer */}
      <div className="bg-blue-800 text-white">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex flex-col md:flex-row md:justify-between items-center gap-x-8">
          <p className="text-sm text-center mb-3 md:mb-0">
            Copyright © 2025 Training AI. All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-800 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="X/Twitter" className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-800 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-800 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
