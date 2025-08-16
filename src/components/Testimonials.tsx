import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Recyclopedia has completely changed how our family approaches waste management. My kids now actively look for items to recycle correctly!",
      author: "Maria Rodriguez",
      role: "Parent & Environmental Advocate",
      location: "San Francisco, CA",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 5,
    },
    {
      id: 2,
      text: "The integration with our municipal website was seamless. Our residents have reduced contamination by 40% since implementing Recyclopedia.",
      author: "David Chen",
      role: "Waste Management Director",
      location: "Austin, TX",
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      rating: 5,
    },
    {
      id: 3,
      text: "As a business owner, Recyclopedia has helped us achieve our sustainability goals. The analytics dashboard is incredibly insightful.",
      author: "Jennifer Kim",
      role: "Operations Manager",
      location: "Seattle, WA",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      rating: 5,
    },
    {
      id: 4,
      text: "The AI recognition is spot-on! I used to be confused about what goes where, but now I'm confident in my recycling decisions.",
      author: "Michael Thompson",
      role: "College Student",
      location: "Boston, MA",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what real users and partners
            say about Recyclopedia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Main Testimonial */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-emerald-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-gray-600">{currentTestimonial.role}</div>
                  <div className="text-gray-500 text-sm">
                    {currentTestimonial.location}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentIndex
                          ? "bg-emerald-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-lg border border-gray-200 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-lg border border-gray-200 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Mini Testimonials */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {testimonials
              .filter((_, index) => index !== currentIndex)
              .slice(0, 4)
              .map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() =>
                    setCurrentIndex(
                      testimonials.findIndex((t) => t.id === testimonial.id)
                    )
                  }
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-900 transition-colors duration-200">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Final CTA */}
        <div
          className="text-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#demo"
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            Join Thousands of Happy Users
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
