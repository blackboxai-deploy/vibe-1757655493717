"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#kontak");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: "💎",
      title: "Desain Eksklusif",
      description: "100% custom, tidak ada yang sama"
    },
    {
      icon: "🚀",
      title: "Performance Optimal",
      description: "Loading speed < 2 detik guaranteed"
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Perfect di semua device dan browser"
    },
    {
      icon: "🔒",
      title: "Security Premium",
      description: "SSL, firewall, dan backup otomatis"
    },
    {
      icon: "📈",
      title: "SEO Optimized",
      description: "Ranking Google page #1 guarantee"
    },
    {
      icon: "💬",
      title: "Support 24/7",
      description: "Dedicated team siap membantu Anda"
    }
  ];

  return (
    <section className="py-20 bg-brand-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-blue-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-blue-900 mb-6 font-poppins leading-tight">
            Tertarik dengan{" "}
            <span className="text-brand-yellow-500 relative">
              Website Eksklusif?
              <div className="absolute bottom-0 left-0 w-full h-3 bg-brand-yellow-300 opacity-30 -skew-x-12"></div>
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-brand-gray-500 max-w-4xl mx-auto leading-relaxed mb-8 font-inter">
            Jangan biarkan kompetitor Anda unggul lebih dulu. Saatnya{" "}
            <span className="text-brand-blue-800 font-semibold">
              mengambil langkah strategis
            </span>{" "}
            untuk masa depan bisnis yang lebih cerah.
          </p>

          {/* Urgency Message */}
          <div className="bg-brand-yellow-300 text-brand-blue-900 px-6 py-3 rounded-full inline-block mb-12 font-semibold font-poppins">
            🔥 Hanya 3 Slot Tersisa Bulan Ini - Limited Exclusive Offer!
          </div>

          {/* Main CTA Button */}
          <div className="mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="btn-premium text-xl px-12 py-6 font-poppins shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Mulai Proyek Anda Sekarang
            </Button>
            <p className="text-brand-gray-500 mt-4 font-inter">
              ⭐ Konsultasi Gratis • 💰 Garansi 100% • 🚀 Express Delivery Available
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-brand-blue-900 mb-2 font-poppins">
                  {benefit.title}
                </h3>
                <p className="text-brand-gray-500 text-sm font-inter">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Preview */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-4 font-poppins">
              Proses Pembuatan Website Eksklusif
            </h3>
            <p className="text-lg text-brand-gray-500 font-inter">
              Metodologi proven yang menghasilkan website premium berkualitas tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl font-poppins">1</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Konsultasi & Strategi
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Deep analysis bisnis, target audience, dan competitive landscape
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl font-poppins">2</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Design & Prototyping
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                UI/UX design, wireframing, dan interactive prototype
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl font-poppins">3</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Development & Testing
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Coding, integration, performance optimization, dan quality assurance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl font-poppins">4</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Launch & Support
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Deployment, monitoring, maintenance, dan ongoing support
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA with Pricing Hint */}
        <div className="bg-brand-gradient rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-poppins">
            Investasi Terbaik untuk Masa Depan Bisnis Anda
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto font-inter">
            Website eksklusif premium mulai dari <span className="text-brand-yellow-300 font-bold text-2xl">Rp 25 juta</span> - 
            investasi yang akan menghasilkan ROI hingga 500% dalam 12 bulan pertama.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-brand-blue-900 hover:bg-brand-yellow-300 px-8 py-4 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Dapatkan Quote Personal Sekarang
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector("#portofolio");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 px-8 py-4 font-bold text-lg transition-all duration-300 font-poppins"
            >
              Lihat Portfolio Lengkap
            </Button>
          </div>

          <p className="text-white/80 mt-6 font-inter">
            💝 Bonus: Free maintenance 6 bulan + SSL certificate + Google Analytics setup
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;