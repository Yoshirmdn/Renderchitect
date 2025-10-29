import { useState } from "react";
import {
  Search,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
  Calendar,
  DollarSign,
  TrendingUp,
  Zap,
  Eye,
  Download,
} from "lucide-react";
import Navbar from "../Components/Navbar";

export default function CheckOrderPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState(undefined);

  // Sample transaction data with download URLs
  const transactions = [
    {
      date: "26-10-2025 22:04:47",
      category: "VR APK Conversion",
      price: "Rp 4.500.000",
      invoiceNo: "INV76********VR4N",
      status: "pending",
      fileUrl: null,
    },
    {
      date: "26-10-2025 21:44:50",
      category: "Desktop EXE Conversion",
      price: "Rp 3.900.000",
      invoiceNo: "INV-17******-7028",
      status: "success",
      fileUrl: "/assets/app/Pujasera.exe",
    },
    {
      date: "26-10-2025 21:42:40",
      category: "VR APK Conversion",
      price: "Rp 5.400.000",
      invoiceNo: "INV-17******-7029",
      status: "success",
      fileUrl: "/assets/app/Pujasera.apk",
    },
    {
      date: "26-10-2025 21:42:31",
      category: "Desktop EXE Conversion",
      price: "Rp 4.560.000",
      invoiceNo: "INV76********9XCC",
      status: "success",
      fileUrl: "/assets/app/Pujasera.exe",
    },
    {
      date: "26-10-2025 21:40:51",
      category: "VR APK Conversion",
      price: "Rp 4.500.000",
      invoiceNo: "INV76********PEVZ",
      status: "success",
      fileUrl: "/assets/app/Pujasera.apk",
    },
    {
      date: "26-10-2025 21:38:27",
      category: "Desktop EXE Conversion",
      price: "Rp 6.080.000",
      invoiceNo: "INV76********3N62",
      status: "success",
      fileUrl: "/assets/app/Pujasera.exe",
    },
    {
      date: "26-10-2025 21:38:00",
      category: "VR APK Conversion",
      price: "Rp 4.995.000",
      invoiceNo: "INV76********R8XT",
      status: "success",
      fileUrl: "/assets/app/Pujasera.apk",
    },
    {
      date: "26-10-2025 21:37:04",
      category: "Desktop EXE Conversion",
      price: "Rp 3.900.000",
      invoiceNo: "INV76********GY52",
      status: "success",
      fileUrl: "/assets/app/Pujasera.exe",
    },
    {
      date: "26-10-2025 21:32:54",
      category: "VR APK Conversion",
      price: "Rp 5.733.000",
      invoiceNo: "INV76********LSRJ",
      status: "success",
      fileUrl: "/assets/app/Pujasera.apk",
    },
    {
      date: "26-10-2025 21:32:28",
      category: "Desktop EXE Conversion",
      price: "Rp 4.750.000",
      invoiceNo: "INV76********UCCT",
      status: "pending",
      fileUrl: null,
    },
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // Simulate API call
    setTimeout(() => {
      const result = transactions.find((t) =>
        t.invoiceNo.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResult(result || null);
      setIsSearching(false);
    }, 1000);
  };

  const handleDownload = (fileUrl, invoiceNo, category) => {
    if (!fileUrl) return;

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;

    // Extract file extension from category
    const extension = category.includes("VR") ? "apk" : "exe";
    const fileName = `Pujasera_${invoiceNo.slice(-4)}.${extension}`;

    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status) => {
    if (status === "success") {
      return (
        <span className="inline-flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-lg text-sm font-semibold border border-green-300 shadow-sm">
          <CheckCircle className="w-4 h-4" />
          <span>Success</span>
        </span>
      );
    } else if (status === "pending") {
      return (
        <span className="inline-flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 rounded-lg text-sm font-semibold border border-yellow-300 shadow-sm animate-pulse-slow">
          <Clock className="w-4 h-4" />
          <span>Pending</span>
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-lg text-sm font-semibold border border-red-300 shadow-sm">
          <XCircle className="w-4 h-4" />
          <span>Failed</span>
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50"></div>
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-orb"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-float-orb-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float-medium"></div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6 animate-fade-in-up backdrop-blur-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full absolute"></div>
            <Package className="w-4 h-4" />
            <span>Live Order Tracking</span>
          </div>

          <h1
            className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Track Your Order
            </span>
          </h1>
          <p
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Real-time transaction monitoring with invoice number or phone number
            verification
          </p>

          {/* Search Box */}
          <div
            className="max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

              <div className="relative bg-white rounded-2xl shadow-2xl p-3 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <Search className="w-6 h-6 text-gray-400 ml-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="Enter Invoice Number or Phone Number"
                    className="flex-1 px-4 py-4 text-lg bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 placeholder-gray-400 transition-all"
                  />
                  <button
                    onClick={handleSearch}
                    disabled={isSearching || !searchQuery.trim()}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2 mr-2"
                  >
                    {isSearching ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Searching...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        <span>Check Now</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Search Result - Success */}
            {searchResult && (
              <div className="mt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl p-8 border border-green-200 relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-bl-full"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-gray-900">
                            Order Found!
                          </h3>
                          <p className="text-sm text-gray-600">
                            Transaction details below
                          </p>
                        </div>
                      </div>
                      {getStatusBadge(searchResult.status)}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                          <Package className="w-4 h-4" />
                          <span>Invoice Number</span>
                        </div>
                        <div className="font-bold text-gray-900 text-lg font-mono">
                          {searchResult.invoiceNo}
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                          <Zap className="w-4 h-4" />
                          <span>Category</span>
                        </div>
                        <div className="font-bold text-gray-900 text-lg">
                          {searchResult.category}
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                          <DollarSign className="w-4 h-4" />
                          <span>Total Price</span>
                        </div>
                        <div className="font-black text-blue-600 text-2xl">
                          {searchResult.price}
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>Transaction Date</span>
                        </div>
                        <div className="font-bold text-gray-900">
                          {searchResult.date}
                        </div>
                      </div>
                    </div>

                    {searchResult.status === "success" &&
                      searchResult.fileUrl && (
                        <button
                          onClick={() =>
                            handleDownload(
                              searchResult.fileUrl,
                              searchResult.invoiceNo,
                              searchResult.category
                            )
                          }
                          className="w-full mt-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                          <Download className="w-5 h-5" />
                          <span>
                            Download{" "}
                            {searchResult.category.includes("VR")
                              ? "APK"
                              : "EXE"}{" "}
                            File
                          </span>
                        </button>
                      )}

                    {searchResult.status === "pending" && (
                      <div className="w-full mt-6 py-4 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 text-yellow-800 rounded-xl font-bold flex items-center justify-center space-x-2">
                        <Clock className="w-5 h-5 animate-spin" />
                        <span>Order is being processed...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Search Result - Not Found */}
            {searchResult === null && searchQuery && !isSearching && (
              <div className="mt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-8 text-center shadow-xl">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <XCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-red-900 mb-2">
                    Order Not Found
                  </h3>
                  <p className="text-red-600 mb-4">
                    Please check your invoice number and try again
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSearchResult(undefined);
                    }}
                    className="px-6 py-2 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors border border-red-300"
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Real-time Transactions Section */}
      <div className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full text-green-700 text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>Live Updates</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Real-time Transactions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor all Renderchitect conversions happening right now across
              the platform
            </p>
          </div>

          {/* Stats Cards */}
          <div
            className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-blue-700 text-sm font-semibold">
                    Total Transactions
                  </div>
                  <Package className="w-8 h-8 text-blue-600 opacity-50" />
                </div>
                <div className="text-4xl font-black text-blue-900">
                  {transactions.length}
                </div>
                <div className="text-xs text-blue-600 mt-2">
                  +12% from last week
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-green-700 text-sm font-semibold">
                    Successful Orders
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600 opacity-50" />
                </div>
                <div className="text-4xl font-black text-green-900">
                  {transactions.filter((t) => t.status === "success").length}
                </div>
                <div className="text-xs text-green-600 mt-2">
                  98.5% success rate
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-yellow-700 text-sm font-semibold">
                    Processing Now
                  </div>
                  <Clock className="w-8 h-8 text-yellow-600 opacity-50 animate-pulse" />
                </div>
                <div className="text-4xl font-black text-yellow-900">
                  {transactions.filter((t) => t.status === "pending").length}
                </div>
                <div className="text-xs text-yellow-600 mt-2">
                  Avg. time: 2 minutes
                </div>
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                      <tr>
                        <th className="px-6 py-5 text-left text-sm font-bold">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>Date & Time</span>
                          </div>
                        </th>
                        <th className="px-6 py-5 text-left text-sm font-bold">
                          <div className="flex items-center space-x-2">
                            <Zap className="w-4 h-4" />
                            <span>Service Type</span>
                          </div>
                        </th>
                        <th className="px-6 py-5 text-left text-sm font-bold">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4" />
                            <span>Amount</span>
                          </div>
                        </th>
                        <th className="px-6 py-5 text-left text-sm font-bold">
                          <div className="flex items-center space-x-2">
                            <Package className="w-4 h-4" />
                            <span>Invoice ID</span>
                          </div>
                        </th>
                        <th className="px-6 py-5 text-left text-sm font-bold">
                          <div className="flex items-center space-x-2">
                            <Eye className="w-4 h-4" />
                            <span>Status</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {transactions.map((transaction, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group"
                          style={{
                            animationDelay: `${index * 50}ms`,
                          }}
                        >
                          <td className="px-6 py-5 text-sm text-gray-700 font-medium">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <span>{transaction.date}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                  transaction.category.includes("VR")
                                    ? "bg-blue-100 text-blue-600"
                                    : "bg-green-100 text-green-600"
                                }`}
                              >
                                {transaction.category.includes("VR")
                                  ? "🥽"
                                  : "💻"}
                              </div>
                              <span className="text-sm font-bold text-gray-900">
                                {transaction.category}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="text-sm font-black text-gray-900">
                              {transaction.price}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <code className="text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg font-mono">
                              {transaction.invoiceNo}
                            </code>
                          </td>
                          <td className="px-6 py-5">
                            {getStatusBadge(transaction.status)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float-orb {
          animation: float-orb 20s ease-in-out infinite;
        }
        
        .animate-float-orb-delayed {
          animation: float-orb-delayed 25s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
