"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      position: "CEO",
      company: "Premium Fashion Indonesia",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/170a3ded-5321-4223-8bc9-b02d6eb6724b.png",
      content: "Website kami kini tampak lebih profesional dan membantu meningkatkan konversi hingga 300%. Pelayanan luar biasa dan hasil yang melebihi ekspektasi!",
      rating: 5,
      revenue_increase: "+300%",
      conversion_rate: "12.5%"
    },
    {
      id: 2,
      name: "Dr. Sarah Wijaya",
      position: "Medical Director",
      company: "Elite Healthcare Group",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52e581e4-989f-48c0-8763-fb2032c834e8.png",
      content: "Kami sangat terkesan dengan desain dan kualitas website kami. Ini adalah investasi yang sangat berharga untuk bisnis kami dan meningkatkan trust pasien secara signifikan.",
      rating: 5,
      revenue_increase: "+250%",
      conversion_rate: "18.3%"
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Founder & CTO",
      company: "TechInnovate Startup",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c950ce85-6af3-4499-99f9-534e5e0adbd7.png",
      content: "Platform SaaS kami menjadi game-changer berkat website eksklusif ini. User experience yang luar biasa dan performance yang optimal membuat client retention naik drastis.",
      rating: 5,
      revenue_increase: "+400%",
      conversion_rate: "15.7%"
    },
    {
      id: 4,
      name: "Amanda Putri",
      position: "Marketing Director",
      company: "Luxury Property Development",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b07ff040-c237-491b-bc41-0c233455c824.png",
      content: "Website real estate kami sekarang menjadi showcase premium yang sempurna. Virtual tour dan user interface yang elegan benar-benar membedakan kami dari kompetitor.",
      rating: 5,
      revenue_increase: "+180%",
      conversion_rate: "9.8%"
    },
    {
      id: 5,
      name: "Rizki Pratama",
      position: "Restaurant Owner",
      company: "Fine Dining Restaurant Chain",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0f931f1-bbdc-4543-9129-51ae4313466b.png",
      content: "Sistem reservasi online dan branding website yang eksklusif meningkatkan image restaurant kami. Booking online naik 500% dan customer satisfaction meningkat drastis.",
      rating: 5,
      revenue_increase: "+500%",
      conversion_rate: "22.1%"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <span key={i} className="text-brand-yellow-500 text-xl">★</span>
    ));
  };

  return (
    <section id="testimoni" className="py-20 bg-brand-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-yellow-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Testimoni Klien Premium
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-inter">
            Kepercayaan dan kepuasan klien adalah{" "}
            <span className="text-brand-yellow-300 font-semibold">
              prioritas utama kami
            </span>
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                {/* Client Image */}
                <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-brand-yellow-300">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-inter italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Client Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-brand-yellow-300 mb-1 font-poppins">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-white/80 font-inter">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-brand-yellow-300 font-semibold font-poppins">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>

                {/* Results */}
                <div className="flex justify-center items-center gap-8 mt-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-yellow-300 mb-1 font-poppins">
                      {testimonials[currentTestimonial].revenue_increase}
                    </div>
                    <div className="text-white/80 text-sm font-inter">Revenue Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-yellow-300 mb-1 font-poppins">
                      {testimonials[currentTestimonial].conversion_rate}
                    </div>
                    <div className="text-white/80 text-sm font-inter">Conversion Rate</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center items-center gap-4 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-brand-yellow-300 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-poppins">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-sm font-inter">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-white/90 text-sm leading-relaxed font-inter">
                  "{testimonial.content.slice(0, 120)}..."
                </p>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-brand-yellow-300 font-bold font-poppins">
                      {testimonial.revenue_increase}
                    </div>
                    <div className="text-white/60 text-xs font-inter">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-brand-yellow-300 font-bold font-poppins">
                      {testimonial.conversion_rate}
                    </div>
                    <div className="text-white/60 text-xs font-inter">Conversion</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                50+
              </div>
              <div className="text-white/80 font-inter">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                100%
              </div>
              <div className="text-white/80 font-inter">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                250%
              </div>
              <div className="text-white/80 font-inter">Avg. ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                24/7
              </div>
              <div className="text-white/80 font-inter">Premium Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;