import { useState, useEffect } from "react";
import {
  Upload,
  Eye,
  Smartphone,
  Monitor,
  Zap,
  Shield,
  Cloud,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Menu,
  X,
  Home,
  Play,
  Package,
  Sparkles,
  Box,
  Cpu,
} from "lucide-react";
import Navbar from "../Components/Navbar";

export default function HomePage({ auth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50"></div>
        </div>

        {/* Floating Orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-orb"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-float-orb-delayed"></div>
        </div>

        <Navbar auth={auth} />

        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-32 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full absolute"></div>
                <span>Trusted by 500+ Professionals</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-gray-900">Transform Your</span>
                <br />
                <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                  3D Vision
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Convert SketchUp models into immersive VR experiences and
                standalone applications with enterprise-grade quality and
                real-time preview.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={auth?.user ? "/dashboard" : "/register"}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Converting
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-indigo-600 blur-xl opacity-50"></div>
                </a>
                <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
                  Watch Demo
                  <span className="inline-block ml-2 group-hover:scale-110 transition-transform">
                    ▶
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { value: "500+", label: "Projects" },
                  { value: "99.9%", label: "Success Rate" },
                  { value: "24/7", label: "Support" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group animate-fade-in-up"
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Mockup */}
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative group perspective-1000">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl border border-gray-200 transform transition-all duration-500 group-hover:rotate-y-2">
                  {/* Window Frame */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    {/* Traffic Lights */}
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div
                        className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                        style={{
                          animationDelay: "200ms",
                        }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                        style={{
                          animationDelay: "400ms",
                        }}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-3/4 animate-shimmer"></div>
                      <div
                        className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-full animate-shimmer"
                        style={{
                          animationDelay: "200ms",
                        }}
                      ></div>
                      <div
                        className="h-3 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full w-5/6 animate-shimmer"
                        style={{
                          animationDelay: "400ms",
                        }}
                      ></div>

                      {/* 3D Preview Box */}
                      <div className="relative h-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.5)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Box className="w-20 h-20 text-blue-400 animate-float-slow" />
                        </div>
                        {/* Corner Grid */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-400"></div>
                          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-400"></div>
                          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-400"></div>
                          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400"></div>
                        </div>
                      </div>

                      <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-2/3 animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-3xl opacity-20 blur-2xl animate-float-medium"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-2xl animate-float-slow"></div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-20 space-y-4 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Powerful Features</span>
              </div>
              <h2 className="text-5xl font-black text-gray-900">
                Everything You Need
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professional-grade tools for seamless 3D model conversion
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Smartphone,
                  title: "VR APK Export",
                  desc: "Convert SketchUp models into VR-ready Android APK files optimized for Oculus Quest, Pico, and other VR platforms.",
                  color: "blue",
                  features: [
                    "Oculus Quest compatible",
                    "Optimized performance",
                    "Easy deployment",
                  ],
                },
                {
                  icon: Monitor,
                  title: "Desktop EXE",
                  desc: "Create standalone Windows executables for easy distribution and presentation of your 3D architectural models.",
                  color: "green",
                  features: [
                    "No installation required",
                    "Client-ready format",
                    "Professional branding",
                  ],
                },
                {
                  icon: Eye,
                  title: "Live Preview",
                  desc: "Preview and inspect your 3D models in real-time directly in your browser before conversion.",
                  color: "purple",
                  features: [
                    "360° rotation",
                    "Zoom & pan controls",
                    "Material inspection",
                  ],
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}
                  ></div>
                  <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.desc}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <CheckCircle
                            className={`w-5 h-5 text-${feature.color}-600 mr-3 flex-shrink-0`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-5xl font-black text-gray-900">
                Simple Process
              </h2>
              <p className="text-xl text-gray-600">
                From upload to download in minutes
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 transform -translate-y-1/2"></div>

              <div className="grid md:grid-cols-4 gap-8 relative">
                {[
                  {
                    icon: Upload,
                    color: "blue",
                    title: "Upload",
                    desc: "Upload your SketchUp file",
                    step: "01",
                  },
                  {
                    icon: Eye,
                    color: "green",
                    title: "Preview",
                    desc: "Inspect in real-time",
                    step: "02",
                  },
                  {
                    icon: Zap,
                    color: "purple",
                    title: "Convert",
                    desc: "Select output format",
                    step: "03",
                  },
                  {
                    icon: Cloud,
                    color: "orange",
                    title: "Download",
                    desc: "Get your file instantly",
                    step: "04",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative animate-fade-in-up"
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                      <div className="absolute -top-6 left-8 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold rounded-full text-sm shadow-lg">
                        {item.step}
                      </div>
                      <div
                        className={`w-20 h-20 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all`}
                      >
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-center">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          {/* Subtle pattern background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzM3NDBmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
          </div>

          {/* Floating shapes */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl animate-float-medium"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200 rounded-full blur-3xl animate-float-slow"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-10">
              {/* Icon with subtle shadow */}
              <div className="inline-flex relative">
                <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl"></div>
                <div className="relative p-6 bg-white rounded-3xl border border-gray-200 shadow-xl animate-float-slow">
                  <Shield className="w-20 h-20 text-blue-600" />
                </div>
              </div>

              {/* Heading with gradient text */}
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Ready to Transform Your
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    3D Workflow?
                  </span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Join <span className="font-bold text-gray-900">10,000+</span>{" "}
                  architects, designers, and developers who trust
                  <span className="font-semibold text-blue-600">
                    {" "}
                    Renderchitect
                  </span>{" "}
                  for professional 3D model conversion.
                </p>
              </div>

              {/* CTA Buttons with enhanced effects */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
                <a
                  href={auth?.user ? "/dashboard" : "/register"}
                  className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Get Started Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>

                <button className="group relative px-12 py-6 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300">
                  <span className="flex items-center justify-center gap-3">
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Contact Sales
                  </span>
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">
                    No Credit Card Required
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Free 14-Day Trial</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 text-gray-600 py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="relative group">
                    <img
                      src="/icon/HouseRenderchitect.png"
                      alt="Logo"
                      className="w-11 h-11 object-contain transform group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    Renderchitect
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Professional 3D model conversion platform trusted by industry
                  leaders worldwide.
                </p>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-sm text-gray-500 mb-4 md:mb-0">
                  © 2025 Renderchitect. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
                @keyframes float-orb {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -30px) scale(1.1); }
                    66% { transform: translate(-30px, 30px) scale(0.9); }
                }
                
                @keyframes float-orb-delayed {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(-30px, 30px) scale(1.1); }
                    66% { transform: translate(30px, -30px) scale(0.9); }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes float-medium {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }

                @keyframes shimmer {
                    0% { background-position: -100% 0; }
                    100% { background-position: 200% 0; }
                }

                @keyframes shine {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(100%); }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes scroll {
                    0% { transform: translateY(0); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(12px); opacity: 0; }
                }

                .animate-float-orb {
                    animation: float-orb 20s ease-in-out infinite;
                }
                
                .animate-float-orb-delayed {
                    animation: float-orb-delayed 25s ease-in-out infinite;
                }

                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }

                .animate-float-medium {
                    animation: float-medium 4s ease-in-out infinite;
                }

                .animate-shimmer {
                    background-size: 200% 100%;
                    animation: shimmer 2s infinite linear;
                }

                .animate-shine {
                    animation: shine 3s ease-in-out infinite;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }

                .animate-scroll {
                    animation: scroll 2s ease-in-out infinite;
                }

                .perspective-1000 {
                    perspective: 1000px;
                }

                .rotate-y-2:hover {
                    transform: rotateY(2deg);
                }

                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
    </>
  );
}
