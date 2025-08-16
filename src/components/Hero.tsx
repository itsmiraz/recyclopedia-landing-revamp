import { ArrowRight, Play, Smartphone, Globe, Users } from "lucide-react";
import MockUp from "../assets/smartphonemockup.png";
const Hero = () => {
  return (
    <section className="pt-16 lg:pt-20 overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              <span className="text-gradient">
                Recycle Smarter with Instant,{" "}
              </span>
              <br /> Local Guidance
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform how your community recycles with our intelligent
              platform. Get instant guidance, track impact, and build
              sustainable habits that matter.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#demo"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center justify-center group"
              >
                Visit Recyclopedia
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="#how-it-works"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-start flex-col sm:flex-row items-center gap-x-6 gap-y-4 font-medium text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="whitespace-nowrap">
                  Used by 100+ municipalities and campuses
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="whitespace-nowrap">
                  Supporting residents in multiple languages
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span className="whitespace-nowrap">
                  Accessible on any device, anywhere
                </span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative md:order-last order-first animate-slide-up">
            <div className="relative  flex justify-end mx-auto max-w-lg">
              {/* Main Device Mockup */}

              <img src={MockUp} alt="" />
              {/* Floating Elements */}
              <div
                className="absolute top-10  right-60 md:-right-4 bg-blue-100 text-white p-3 rounded-full shadow-lg animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                ♻️
              </div>

              <div
                className="absolute bottom-20 left-60 md:left-24 bg-green-500 text-white p-3 rounded-full shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                🌱
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-emerald-600/5 rounded-full blur-3xl scale-150 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
