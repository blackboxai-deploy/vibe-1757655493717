"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Desain Premium",
      subtitle: "Desain eksklusif yang memikat, hanya untuk Anda.",
      description: "Setiap pixel dirancang dengan sempurna untuk mencerminkan eksklusivitas brand Anda. Tidak ada template - semuanya custom dan original.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b080797-3343-4080-b223-9e9a61e88920.png",
      icon: "🎨"
    },
    {
      title: "Pengalaman Pengguna Optimal",
      subtitle: "Navigasi yang mudah dan desain yang responsif di segala perangkat.",
      description: "User experience yang intuitif dan engaging, dioptimalkan untuk konversi maksimal di desktop, tablet, dan mobile.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e1a6a6a-44fa-4f77-99f6-e7af97bd2559.png",
      icon: "📱"
    },
    {
      title: "Kustomisasi Penuh",
      subtitle: "Website yang sepenuhnya disesuaikan dengan identitas merek Anda.",
      description: "Setiap elemen dapat dikustomisasi sesuai kebutuhan bisnis Anda. Fleksibilitas penuh untuk pertumbuhan dan perkembangan brand.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a0e26111-b2b9-439e-9304-568bff3a57fc.png",
      icon: "⚙️"
    },
    {
      title: "SEO dan Kecepatan",
      subtitle: "Optimasi SEO dan kecepatan yang memastikan website Anda tampil optimal.",
      description: "Performance tinggi dengan loading time minimal, SEO-optimized untuk ranking Google terbaik dan traffic organic maksimal.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b709612-e225-477b-aafd-1cd6b855bbe5.png",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-brand-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6 font-poppins">
            Fitur Unggulan Website Eksklusif
          </h2>
          <p className="text-xl text-brand-gray-500 max-w-3xl mx-auto leading-relaxed font-inter">
            Empat pilar utama yang membuat website Anda{" "}
            <span className="text-brand-blue-800 font-semibold">
              unggul dan berbeda
            </span>{" "}
            dari kompetitor
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Feature Image */}
              <div className="flex-1">
                <div className="relative group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>
              </div>

              {/* Feature Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-3 font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-brand-blue-600 font-semibold mb-4 font-poppins">
                    {feature.subtitle}
                  </p>
                  <p className="text-lg text-brand-gray-500 leading-relaxed font-inter">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Benefits */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-brand-blue-900 mb-4 font-poppins">
                    Keuntungan untuk Bisnis Anda:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {index === 0 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Brand Recognition Tinggi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Kesan Profesional Premium</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Diferensiasi dari Kompetitor</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Nilai Brand yang Tinggi</span>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Konversi Tinggi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Bounce Rate Rendah</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">User Engagement Tinggi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Multi-Device Compatible</span>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Scalability Tinggi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Future-Proof Technology</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Easy Content Management</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Brand Consistency</span>
                        </div>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Google Ranking Tinggi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Loading Speed &lt; 2 detik</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Organic Traffic Tinggi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-brand-yellow-500 rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Performance Score 95+</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;