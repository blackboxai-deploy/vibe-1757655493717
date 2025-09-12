"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Premium E-Commerce Fashion",
      category: "e-commerce",
      description: "Platform e-commerce premium untuk brand fashion eksklusif dengan sistem inventory dan payment gateway terintegrasi.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/934178c6-79ed-4350-98ca-e72fc92eb857.png",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      completionTime: "8 minggu",
      client: "Luxury Fashion Brand"
    },
    {
      id: 2,
      title: "Corporate Banking Website",
      category: "corporate",
      description: "Website korporat untuk institusi perbankan dengan fokus pada trust, security, dan profesionalitas tingkat enterprise.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4f847df-22b1-4270-b604-34de24102bb5.png",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      completionTime: "12 minggu",
      client: "Regional Bank"
    },
    {
      id: 3,
      title: "Medical Clinic Management",
      category: "healthcare",
      description: "Sistem manajemen klinik terintegrasi dengan booking online, patient records, dan telemedicine capabilities.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4b97cdf-4a19-41a3-be2f-87b2e6d9686a.png",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      completionTime: "10 minggu",
      client: "Premium Healthcare Group"
    },
    {
      id: 4,
      title: "Real Estate Portfolio",
      category: "real-estate",
      description: "Platform real estate premium dengan virtual tour 360°, property management, dan advanced search filters.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d0747d90-1843-4cf0-8ebf-0a62f0aa9767.png",
      technologies: ["Next.js", "Three.js", "Mapbox", "Prisma"],
      completionTime: "14 minggu",
      client: "Luxury Property Developer"
    },
    {
      id: 5,
      title: "Restaurant Chain Management",
      category: "hospitality",
      description: "Website dan sistem manajemen untuk chain restaurant dengan online ordering, reservation, dan loyalty program.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0b5dda5-4cfb-43eb-a396-57ab2fb60f77.png",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      completionTime: "6 minggu",
      client: "Fine Dining Restaurant Group"
    },
    {
      id: 6,
      title: "Tech Startup Platform",
      category: "technology",
      description: "SaaS platform untuk startup teknologi dengan dashboard analytics, user management, dan subscription billing.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65de8a26-009e-44fe-91ce-4ac29ddb6ecd.png",
      technologies: ["React", "Node.js", "GraphQL", "Redis"],
      completionTime: "16 minggu",
      client: "AI Technology Startup"
    }
  ];

  const categories = [
    { key: "all", label: "Semua Proyek" },
    { key: "e-commerce", label: "E-Commerce" },
    { key: "corporate", label: "Corporate" },
    { key: "healthcare", label: "Healthcare" },
    { key: "real-estate", label: "Real Estate" },
    { key: "hospitality", label: "Hospitality" },
    { key: "technology", label: "Technology" }
  ];

  const filteredPortfolio = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portofolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6 font-poppins">
            Portofolio Website Eksklusif
          </h2>
          <p className="text-xl text-brand-gray-500 max-w-3xl mx-auto leading-relaxed font-inter">
            Setiap proyek adalah{" "}
            <span className="text-brand-blue-800 font-semibold">masterpiece digital</span>{" "}
            yang mencerminkan eksklusivitas dan profesionalitas tingkat enterprise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 font-poppins ${
                activeFilter === category.key
                  ? "bg-brand-gradient text-white shadow-lg scale-105"
                  : "bg-brand-gray-100 text-brand-gray-500 hover:bg-brand-blue-800 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <Card key={item.id} className="hover-lift overflow-hidden border-0 shadow-lg bg-white">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-brand-gradient text-white px-3 py-1 rounded-full text-xs font-semibold font-poppins">
                    {item.completionTime}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Project Title & Client */}
                <div>
                  <h3 className="text-xl font-bold text-brand-blue-900 mb-2 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-yellow-500 font-semibold font-poppins">
                    {item.client}
                  </p>
                </div>

                {/* Project Description */}
                <p className="text-brand-gray-500 text-sm leading-relaxed font-inter">
                  {item.description}
                </p>

                {/* Technologies */}
                <div>
                  <p className="text-xs font-semibold text-brand-blue-900 mb-2 font-poppins uppercase tracking-wide">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-brand-blue-800 text-white px-2 py-1 rounded text-xs font-medium font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-brand-blue-900 font-poppins">100%</div>
                    <div className="text-xs text-brand-gray-500 font-inter">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-brand-blue-900 font-poppins">95+</div>
                    <div className="text-xs text-brand-gray-500 font-inter">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-brand-blue-900 font-poppins">#1</div>
                    <div className="text-xs text-brand-gray-500 font-inter">SEO Rank</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <div className="bg-brand-gradient rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
              Siap Menjadi Bagian dari Portofolio Eksklusif Kami?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-inter">
              Bergabunglah dengan klien-klien premium kami yang telah merasakan perbedaan dengan website eksklusif
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#kontak");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-brand-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Konsultasi Gratis Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;