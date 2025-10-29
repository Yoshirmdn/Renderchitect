import { useState } from "react";
import { Home, Play, Package, Sparkles, Menu, X } from "lucide-react";
import logo from "../assets/icon/HouseRenderchitect.png";

export default function Navbar({ auth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/50 backdrop-blur-xl bg-white/70">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="relative group">
              <img
                src={logo}
                alt="Logo"
                className="w-11 h-11 object-contain transform group-hover:scale-110 transition-transform"
              />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Render
                <span className="text-blue-600">chitect</span>
              </span>
              <div className="text-xs text-gray-500 -mt-1 flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>3D Conversion Platform</span>
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>
            <a
              href="/demo"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              <Play className="w-4 h-4" />
              <span>Demo</span>
            </a>
            <a
              href="/check-order"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              <Package className="w-4 h-4" />
              <span>Check Order</span>
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {auth?.user ? (
              <a
                href="/dashboard"
                className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium overflow-hidden group"
              >
                <span className="relative z-10">Dashboard</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            ) : (
              <>
                <a
                  href="/login"
                  className="px-6 py-2.5 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  Log in
                </a>
                <a
                  href="/register"
                  className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium overflow-hidden group"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pb-4 border-t border-gray-200 pt-4">
            <a
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              Home
            </a>
            <a
              href="/demo"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              Demo
            </a>
            <a
              href="/check-order"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              <Package className="w-4 h-4" />
              <span>Check Order</span>
            </a>
            {auth?.user ? (
              <a
                href="/dashboard"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium text-center"
              >
                Dashboard
              </a>
            ) : (
              <>
                <a
                  href="/login"
                  className="px-6 py-2.5 text-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Log in
                </a>
                <a
                  href="/register"
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium text-center"
                >
                  Get Started
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
