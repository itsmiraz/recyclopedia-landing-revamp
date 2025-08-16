import React from "react";
import {
  CheckCircle,
  Award,
  Shield,
  Clock,
  Users,
  Zap,
  Globe,
  HeartHandshake,
} from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "Trusted by 100+ Communities",
      description:
        "From small towns to major cities, iWasteNot powers waste reduction programs across North America.",
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description:
        "Fully accessible, cyber-secure platforms designed for municipal, campus, and organizational needs.",
    },
    {
      icon: Clock,
      title: "Always Up to Date",
      description:
        "Real-time updates keep your community’s recycling and reuse information accurate — no more outdated flyers.",
    },
    {
      icon: Users,
      title: "Built With You",
      description:
        "Shaped by feedback from environmental coordinators, educators, and sustainability leaders.",
    },
    {
      icon: Zap,
      title: "Fast, Easy Answers",
      description:
        "Two clicks to find out what goes where — making correct disposal effortless.",
    },
    {
      icon: Globe,
      title: "Beyond Recycling",
      description:
        "Reuse, repair, refill, reduce — our tools cover the full circular economy, not just recycling.",
    },
  ];

  const testimonialQuote = {
    text: "The site has exceeded expectations significantly. For those of us who need to justify participation to management, we couldn't have hoped for more ammo!",
    author: "David Baker",
    role: "Education & Outreach",
    company: "Thurston County Solid Waste",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Communities Choose iWasteNot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We make it just as easy to act sustainably as it is to order online
            and throw something away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Benefits List */}
          <div className="space-y-8 animate-slide-up">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-all duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 group-hover:bg-emerald-600 rounded-xl flex items-center justify-center transition-all duration-300">
                    <benefit.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Card */}
          <div
            className="animate-fade-in  sticky top-20"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-gradient-eco rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <HeartHandshake className="h-8 w-8 text-white" />
                  <span className="text-emerald-100 font-medium">
                    Real Client Feedback
                  </span>
                </div>

                <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                  "{testimonialQuote.text}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonialQuote.avatar}
                    alt={testimonialQuote.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <div className="font-bold text-lg">
                      {testimonialQuote.author}
                    </div>
                    <div className="text-emerald-100">
                      {testimonialQuote.role}, {testimonialQuote.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 p-6 rounded-2xl text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  100+
                </div>
                <div className="text-blue-700 text-sm">Communities Served</div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">
                  20+ Years
                </div>
                <div className="text-emerald-700 text-sm">
                  Experience in Waste Reduction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-4">
            <CheckCircle className="h-5 w-5" />
            <span>Join communities making waste reduction the easy choice</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Explore Our Tools
            </a>
            <a
              href="#contact"
              className="border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
