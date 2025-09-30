import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <section className="bg-transparent border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Social */}
        <div>
          <div className="text-2xl font-bold text-pink-600">bossnet</div>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-500 hover:text-pink-600 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Xidmətlər */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Xidmətlər</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-pink-600">Telefon</a></li>
            <li><a href="#" className="hover:text-pink-600">İnternet</a></li>
            <li><a href="#" className="hover:text-pink-600">IPTV</a></li>
          </ul>
        </div>

        {/* Əlaqə */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Əlaqə</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-pink-600">Sual-Cavab</a></li>
            <li><a href="#" className="hover:text-pink-600">Bizi tapın</a></li>
            <li><a href="#" className="hover:text-pink-600">Bizə yazın</a></li>
            <li><a href="#" className="hover:text-pink-600">Haqqımızda</a></li>
          </ul>
        </div>

        {/* Cihazlar */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Cihazlar</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-pink-600">Ödə</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>Copyright © 2025 Boss Group MMC. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>(+99412) 310 68 68</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>sales@bossnet.az</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
