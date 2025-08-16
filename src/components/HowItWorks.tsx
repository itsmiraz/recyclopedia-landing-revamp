import React from "react";
import { Camera, Search, Leaf } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Snap or Search Instantly",
      description:
        "Point your camera or type an item’s name. Our AI identifies it and checks your local recycling rules in seconds.",
      color: "bg-blue-500",
    },
    {
      icon: Search,
      title: "Get Local Recycling Rules",
      description:
        "See exactly how to prepare and sort items according to your city’s guidelines — no more guesswork.",
      color: "bg-emerald-500",
    },
    {
      icon: Leaf,
      title: "Act & Track Your Impact",
      description:
        "Recycle, reuse, or compost with confidence — and watch your positive environmental impact grow over time.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Recyclopedia Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From scan to action — recycling the right way has never been easier.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div
                className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
              >
                <step.icon className="h-10 w-10 text-white" />
              </div>

              {/* Step Number */}
              <div className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                Step {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-200">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#demo"
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            Start Recycling Smarter
            <Camera className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
