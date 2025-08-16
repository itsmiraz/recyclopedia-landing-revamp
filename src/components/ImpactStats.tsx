import { useRef } from "react";

const ImpactStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="impact" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Making a Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Together, our community is creating meaningful change for the
            environment. Here's the impact we've made so far.
          </p>
        </div>

        {/* Stats Grid */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>

              <div
                className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2 animate-counter`}
              >
                {formatNumber(stat.value)}
                {stat.suffix}
              </div>

              <div className="text-gray-600 font-medium text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

        {/* Impact Visualization */}
        <div className="bg-gradient-eco rounded-3xl p-8 lg:p-12 text-white text-center animate-slide-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Your Actions Matter
            </h3>
            <p className="text-xl text-emerald-100 leading-relaxed mb-8">
              Every item you recycle correctly contributes to a cleaner planet.
              Join thousands of users who are already making a difference.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-2">🌍</div>
                <div className="font-bold text-lg text-green-950">
                  Global Reach
                </div>
                <div className="text-emerald-700">Worldwide impact</div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-2">♻️</div>
                <div className="font-bold text-lg text-green-950">
                  Smart Recycling
                </div>
                <div className="text-emerald-700">AI-powered guidance</div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-2">🌱</div>
                <div className="font-bold text-lg text-green-950">
                  Sustainable Future
                </div>
                <div className="text-emerald-700">For next generations</div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#demo"
                className="inline-flex items-center bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg"
              >
                Join the Movement
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
