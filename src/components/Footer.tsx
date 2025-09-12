"use client";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-brand-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl font-poppins">WE</span>
              </div>
              <div>
                <span className="text-white font-bold text-2xl font-poppins">Website</span>
                <br />
                <span className="text-brand-yellow-300 font-semibold text-lg font-poppins leading-none">Eksklusif</span>
              </div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed mb-6 font-inter">
              Spesialis dalam menciptakan website eksklusif premium untuk bisnis yang mengutamakan kualitas, 
              profesionalitas, dan hasil yang luar biasa.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-brand-blue-900 font-bold">📞</span>
                </div>
                <div>
                  <p className="font-semibold font-poppins">Konsultasi Gratis</p>
                  <p className="text-white/80 font-inter">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-brand-blue-900 font-bold">✉️</span>
                </div>
                <div>
                  <p className="font-semibold font-poppins">Email Premium Support</p>
                  <p className="text-white/80 font-inter">hello@websiteeksklusif.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-brand-blue-900 font-bold">📍</span>
                </div>
                <div>
                  <p className="font-semibold font-poppins">Studio Kreatif</p>
                  <p className="text-white/80 font-inter">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-poppins text-brand-yellow-300">
              Navigasi Cepat
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#beranda")}
                  className="text-white/80 hover:text-brand-yellow-300 transition-colors duration-200 font-inter"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#layanan")}
                  className="text-white/80 hover:text-brand-yellow-300 transition-colors duration-200 font-inter"
                >
                  Layanan Premium
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#portofolio")}
                  className="text-white/80 hover:text-brand-yellow-300 transition-colors duration-200 font-inter"
                >
                  Portofolio Eksklusif
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#testimoni")}
                  className="text-white/80 hover:text-brand-yellow-300 transition-colors duration-200 font-inter"
                >
                  Testimoni Klien
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-poppins text-brand-yellow-300">
              Layanan Kami
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 font-inter">Website Corporate Eksklusif</li>
              <li className="text-white/80 font-inter">E-Commerce Premium</li>
              <li className="text-white/80 font-inter">Landing Page Converter</li>
              <li className="text-white/80 font-inter">SaaS Platform Development</li>
              <li className="text-white/80 font-inter">Mobile App Development</li>
              <li className="text-white/80 font-inter">Digital Marketing Integration</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins text-brand-yellow-300 text-center lg:text-left">
                Ikuti Journey Eksklusif Kami
              </h3>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <a
                  href="https://instagram.com/websiteeksklusif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">IG</span>
                </a>
                <a
                  href="https://linkedin.com/company/websiteeksklusif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">LI</span>
                </a>
                <a
                  href="https://facebook.com/websiteeksklusif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">FB</span>
                </a>
                <a
                  href="mailto:hello@websiteeksklusif.com"
                  className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">✉️</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="text-center lg:text-right">
              <h3 className="text-xl font-bold mb-4 font-poppins text-brand-yellow-300">
                Exclusive Newsletter
              </h3>
              <p className="text-white/80 mb-4 font-inter">
                Tips & insights eksklusif untuk meningkatkan bisnis Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email untuk insights premium..."
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow-300 font-inter"
                />
                <button className="bg-brand-yellow-500 text-brand-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-brand-yellow-300 transition-colors duration-300 font-poppins">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 text-white/60 text-sm font-inter">
              <p>&copy; {currentYear} Website Eksklusif. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <button className="hover:text-brand-yellow-300 transition-colors duration-200">
                  Kebijakan Privasi
                </button>
                <span className="hidden lg:inline">|</span>
                <button className="hover:text-brand-yellow-300 transition-colors duration-200">
                  Syarat & Ketentuan
                </button>
                <span className="hidden lg:inline">|</span>
                <button className="hover:text-brand-yellow-300 transition-colors duration-200">
                  FAQ
                </button>
              </div>
            </div>

            <div className="text-white/60 text-sm font-inter text-center lg:text-right">
              <p>Crafted with ❤️ for Premium Businesses</p>
              <p className="text-brand-yellow-300">🏆 Award-Winning Web Development Agency</p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50"
        >
          <span className="text-white font-bold">↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;