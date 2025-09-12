"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-brand-yellow-500 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
            Website{" "}
            <span className="text-brand-yellow-300 relative">
              Eksklusif
              <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-yellow-300 opacity-30 -skew-x-12"></div>
            </span>
            <br />
            untuk Bisnis Anda!
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-inter">
            Dapatkan situs web yang{" "}
            <span className="text-brand-yellow-300 font-semibold">
              dirancang khusus
            </span>{" "}
            untuk menciptakan kesan profesional dan meningkatkan kredibilitas
            bisnis Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("#layanan")}
              size="lg"
              className="btn-premium text-lg px-8 py-4 font-poppins"
            >
              Mulai Proyek Website Eksklusif Anda Sekarang!
            </Button>
            <Button
              onClick={() => scrollToSection("#portofolio")}
              size="lg"
              className="btn-secondary text-lg px-8 py-4 font-poppins bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue-800"
            >
              Lihat Portofolio Kami
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                50+
              </div>
              <div className="text-white/80 font-inter">
                Website Eksklusif Selesai
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                100%
              </div>
              <div className="text-white/80 font-inter">Kepuasan Klien</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                24/7
              </div>
              <div className="text-white/80 font-inter">Support Dedicated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#layanan")}
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;