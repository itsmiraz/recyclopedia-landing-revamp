import React from "react";
import {
  Smartphone,
  MapPin,
  Users,
  Award,
  Zap,
  Shield,
  BarChart,
  Globe,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Responsive by Design",
      description:
        "Works beautifully on phones, tablets, and desktops so residents get answers wherever they are.",
    },
    {
      icon: MapPin,
      title: "Location-Specific Guidance",
      description:
        "Clear instructions that reflect local rules, curbside programs, drop-off sites, and take-back options.",
    },
    {
      icon: Users,
      title: "Outreach Made Easy",
      description:
        "Plain-language guidance that reduces confusion and cuts down calls and printed materials.",
    },
    {
      icon: Award,
      title: "Accessibility & Compliance",
      description:
        "Built for WCAG accessibility; supports campus sustainability goals including AASHE STARS eligibility.",
    },
    {
      icon: Zap,
      title: "Fast, Clear Answers",
      description:
        "Two clicks to learn whether to reuse, recycle, donate, compost, or safely dispose—no guesswork.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade hosting and cyber security to support municipal and campus deployments.",
    },
    {
      icon: BarChart,
      title: "Reporting & Insights",
      description:
        "Track searches and information needs so administrators can target education and improve diversion.",
    },
    {
      icon: Globe,
      title: "Beyond Recycling",
      description:
        "Covers reuse, repair, refill, reduce, and take-back programs—your community’s full materials network.",
    },
  ];

  const mainFeature = {
    title: "Instant, Local Answers",
    description:
      "Search any item and get step-by-step guidance tailored to your community. Reuse, recycle, donate, compost, or dispose—the right choice in seconds, with prep tips and local drop-off links.",
    image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg",
    benefits: [
      "Clear instructions for every item",
      "Local rules and program details",
      "Preparation tips and drop-off links",
      "Real-time updates by administrators",
    ],
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Smarter Recycling
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to give residents clear, up-to-date guidance—and
            everything administrators need to manage it.
          </p>
        </div>

        {/* Main Feature Spotlight */}
        <div className="bg-white rounded-3xl  p-8 lg:p-12 mb-20 animate-slide-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                {mainFeature.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {mainFeature.description}
              </p>

              <ul className="space-y-4">
                {mainFeature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#demo"
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                >
                  See It in Action
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={mainFeature.image}
                alt="Localized recycling guidance in action"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-emerald-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-emerald-100 group-hover:bg-emerald-600 rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
