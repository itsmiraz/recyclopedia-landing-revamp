import React from "react";
import { Recycle, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const links = {
    products: [
      { label: "Recyclopedia", href: "#recyclopedia" },
      { label: "Recap", href: "#recap" },
      { label: "Student Reuse Portal", href: "#student-reuse" },
    ],
    company: [
      { label: "Clients", href: "#clients" },
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    // keep legal super minimal (only if you actually have these pages)
    legal: [
      { label: "Privacy", href: "#privacy" },
      { label: "Accessibility", href: "#accessibility" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Stay in the loop
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Get occasional updates on new features and resources for waste
                reduction.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-80 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg inline-flex items-center gap-2 group"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                iWasteNot · Recyclopedia
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Digital tools that make it easy to reduce, reuse, and recycle —
              with clear, local guidance for your community.
            </p>

            {/* Optional contact row (use real details or link to contact page) */}
            <div className="mt-6 space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-600" />
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact our team
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>By request (see Contact)</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span>North America</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-3">
              {links.products.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal (optional) */}
        {links.legal?.length > 0 && (
          <div className="mt-10 pt-8 border-t border-gray-800">
            <ul className="flex flex-wrap gap-6 text-sm text-gray-500">
              {links.legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div>
              © {new Date().getFullYear()} iWasteNot Systems. All rights
              reserved.
            </div>
            <div className="opacity-80">Made with 💚 for the planet.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
