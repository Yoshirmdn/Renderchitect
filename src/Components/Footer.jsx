import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-700 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              {/* Logo Placeholder */}
              <img
                src="HouseRenderchitect.png"
                alt="Renderchitect Logo"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-gray-900">
                Renderchitect
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Platform konversi model 3D profesional yang dipercaya oleh para
              pemimpin industri di seluruh dunia. Transformasi digital untuk
              arsitektur modern.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                <Mail size={16} />
                <span>hello@renderchitect.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                <Phone size={16} />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "API", "Integrations", "Changelog"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Press Kit", "Partners"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Documentation",
                "Community",
                "Contact",
                "Status",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="max-w-xl">
            <h4 className="text-gray-900 font-bold mb-3 text-lg">
              Stay Updated
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Dapatkan update terbaru tentang fitur baru dan tips penggunaan
              platform.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-gray-500 order-2 md:order-1">
              © {currentYear} Renderchitect. All rights reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 order-1 md:order-2">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 transform hover:scale-110 shadow-sm hover:shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm order-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
