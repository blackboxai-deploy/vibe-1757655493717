"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Website Eksklusif Custom",
      description: "Desain website yang sepenuhnya dikustomisasi sesuai dengan identitas unik bisnis Anda. Setiap elemen dirancang khusus untuk mencerminkan profesionalitas dan eksklusivitas brand Anda.",
      features: ["Desain 100% Original", "Branding Konsisten", "UI/UX Premium", "Mobile-First Design"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1f659d66-5244-49c9-91fc-653d64efa9e1.png"
    },
    {
      title: "E-Commerce Eksklusif",
      description: "Platform e-commerce yang dirancang khusus untuk memberikan pengalaman berbelanja yang luar biasa bagi pelanggan Anda, dengan fokus pada konversi tinggi.",
      features: ["Shopping Cart Premium", "Payment Gateway", "Inventory Management", "Analytics Dashboard"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7b47ca0-4306-454e-8ff9-7c7fc8c85a8e.png"
    },
    {
      title: "Corporate Website",
      description: "Website korporat yang menampilkan profesionalitas tertinggi untuk membangun kredibilitas dan kepercayaan dengan stakeholder bisnis Anda.",
      features: ["Company Profile", "Team Showcase", "Service Portfolio", "Client Testimonials"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d6934ba1-ed2a-46a1-9d7b-8945dd7b4b7c.png"
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6 font-poppins">
            Layanan Website Eksklusif
          </h2>
          <p className="text-xl text-brand-gray-500 max-w-3xl mx-auto leading-relaxed font-inter">
            Setiap website yang kami buat adalah{" "}
            <span className="text-brand-blue-800 font-semibold">karya seni digital</span>{" "}
            yang dirancang khusus untuk bisnis Anda. Kami tidak menggunakan template - semuanya{" "}
            <span className="text-brand-blue-800 font-semibold">custom dan eksklusif</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-lg overflow-hidden bg-white"
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-brand-blue-900 font-poppins">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-brand-gray-500 leading-relaxed font-inter">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center space-x-3 text-sm text-brand-gray-500 font-inter"
                    >
                      <div className="w-2 h-2 bg-brand-yellow-500 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-brand-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-4 font-poppins">
              Mengapa Memilih Website Eksklusif?
            </h3>
            <p className="text-lg text-brand-gray-500 max-w-2xl mx-auto font-inter">
              Investasi terbaik untuk masa depan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Desain Eksklusif
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Tidak ada yang sama. Setiap desain dibuat khusus untuk Anda.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Kualitas Premium
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Menggunakan teknologi terdepan dan standar kualitas tertinggi.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                ROI Tinggi
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Website yang mengkonversi pengunjung menjadi pelanggan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Support 24/7
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Tim dedicated yang siap membantu Anda kapan saja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;