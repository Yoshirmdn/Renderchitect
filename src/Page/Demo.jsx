import { useState } from "react";
import {
  Upload,
  Smartphone,
  Monitor,
  CheckCircle,
  X,
  Download,
  Sparkles,
  Zap,
  Loader2,
  Home,
  Play,
  Package,
} from "lucide-react";
import Navbar from "../Components/Navbar";

export default function DemoPage() {
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [buildingType, setBuildingType] = useState("house");
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("12");
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [invoiceId, setInvoiceId] = useState("");

  const calculateArea = () => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    return (l * w).toFixed(2);
  };

  const calculatePrice = () => {
    const area = parseFloat(calculateArea());
    if (!selectedFormat || area === 0) return 0;

    const pricePerM2 = selectedFormat === "apk" ? 80000 : 20000;
    const basePrice = area * pricePerM2;
    const minPrice = selectedFormat === "apk" ? 8000000 : 2000000;

    return Math.max(basePrice, minPrice);
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
      });
      setStep(2);
    }
  };

  const goToCheckout = () => {
    if (selectedFormat && calculateArea() > 0) {
      setStep(3);
    }
  };

  const startOrder = () => {
    setIsProcessing(true);
    setStep(4);

    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    const newInvoiceId = `INV-${timestamp}-${randomNum}`;
    setInvoiceId(newInvoiceId);

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 12;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsProcessing(false);
          setStep(5);
        }, 500);
      }
      setProcessingProgress(Math.min(progress, 100));
    }, 400);
  };

  const resetDemo = () => {
    setStep(1);
    setSelectedFile(null);
    setBuildingType("house");
    setLength("10");
    setWidth("12");
    setSelectedFormat(null);
    setIsProcessing(false);
    setProcessingProgress(0);
    setInvoiceId("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">
            Renderchitect
          </h1>
          <p className="text-gray-600">
            Convert SketchUp to VR APK or Desktop EXE
          </p>
        </div>

        {step <= 3 && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Make Your Choice
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Design Type
                  </label>
                  <select
                    value={buildingType}
                    onChange={(e) => setBuildingType(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  >
                    <option value="house">House</option>
                    <option value="office">Office Building</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Length (M)
                  </label>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="Enter length"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Wide (M)
                  </label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="Enter width"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="text-sm text-blue-700 font-medium">
                    Total Area
                  </div>
                  <div className="text-3xl font-black text-blue-600">
                    {calculateArea()} m²
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedFormat("apk")}
                    className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      selectedFormat === "apk"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-orange-50 border border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Smartphone className="w-5 h-5" />
                      <span>VR APK</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedFormat("exe")}
                    className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      selectedFormat === "exe"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-orange-50 border border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Monitor className="w-5 h-5" />
                      <span>Desktop EXE</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Upload Design
                </h2>
              </div>

              {!selectedFile ? (
                <label className="cursor-pointer block">
                  <input
                    type="file"
                    className="hidden"
                    accept=".skp"
                    onChange={handleFileUpload}
                  />
                  <div className="border-4 border-dashed border-gray-300 rounded-2xl p-12 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 text-center group">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                        />
                        <polyline points="17 21 17 13 7 13 7 21" />
                        <polyline points="7 3 7 8 15 8" />
                      </svg>
                    </div>
                    <div className="text-gray-600 font-medium mb-2">
                      Upload Design
                    </div>
                    <div className="text-sm text-gray-400">
                      The permitted file is .skp
                    </div>
                  </div>
                </label>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 relative">
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="absolute top-3 right-3 p-1 hover:bg-green-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-green-700" />
                    </button>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm mb-1">
                          {selectedFile.name}
                        </h3>
                        <p className="text-xs text-gray-600">
                          Size: {selectedFile.size}
                        </p>
                        <p className="text-xs text-green-600 font-semibold mt-1">
                          ✓ File uploaded successfully
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                    <div className="text-sm text-blue-700 font-medium mb-2">
                      3D Preview
                    </div>
                    <div className="w-full h-32 bg-white/50 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-blue-400 animate-pulse" />
                    </div>
                  </div> */}

                  {selectedFormat && (
                    <button
                      onClick={goToCheckout}
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      Continue to Checkout
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className={`w-8 h-8 ${
                    step >= 3 ? "bg-green-500" : "bg-gray-300"
                  } text-white rounded-full flex items-center justify-center font-bold`}
                >
                  3
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Checkout & Order
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Order Summary
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Design Type:</span>
                      <span className="font-medium text-gray-900 capitalize">
                        {buildingType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Area:</span>
                      <span className="font-medium text-gray-900">
                        {calculateArea()} m²
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span className="font-medium text-gray-900">
                        {selectedFormat
                          ? selectedFormat === "apk"
                            ? "VR APK"
                            : "Desktop EXE"
                          : "-"}
                      </span>
                    </div>
                    {selectedFile && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">File:</span>
                        <span className="font-medium text-gray-900 truncate max-w-[150px]">
                          {selectedFile.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <div className="text-sm text-gray-600 mb-2">Total:</div>
                  <div className="text-3xl font-black text-gray-900 mb-4">
                    {formatRupiah(calculatePrice())}
                  </div>

                  <div className="text-xs text-gray-600 mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span>Estimate:</span>
                      <span className="font-semibold">
                        {selectedFormat === "exe"
                          ? "1-2 hours"
                          : selectedFormat === "apk"
                          ? "3-4 days"
                          : "-"}
                      </span>
                    </div>
                    {selectedFormat && (
                      <div className="text-gray-500 mt-2">
                        Rate:{" "}
                        {formatRupiah(selectedFormat === "apk" ? 80000 : 20000)}
                        /m²
                      </div>
                    )}
                  </div>

                  {step === 3 ? (
                    <button
                      onClick={startOrder}
                      disabled={!selectedFile || !selectedFormat}
                      className={`w-full py-3.5 rounded-xl font-bold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                        selectedFile && selectedFormat
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg transform hover:scale-105"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                    >
                      <span>📦 Order</span>
                    </button>
                  ) : (
                    <div className="text-center text-sm text-gray-500">
                      Complete steps 1 & 2 to order
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-12 border border-gray-200 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
                  <Loader2 className="w-12 h-12 text-white animate-spin" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Processing Your Order
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  {processingProgress < 25
                    ? "🔍 Validating file..."
                    : processingProgress < 50
                    ? "⚙️ Optimizing 3D meshes..."
                    : processingProgress < 75
                    ? "📦 Building application..."
                    : "✨ Finalizing export..."}
                </p>
              </div>

              <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-300 relative overflow-hidden"
                    style={{
                      width: `${processingProgress}%`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Processing...</span>
                  <span className="font-bold">
                    {Math.round(processingProgress)}%
                  </span>
                </div>
              </div>

              <div className="max-w-md mx-auto space-y-3">
                {[
                  "File validation",
                  "3D mesh optimization",
                  "Texture compression",
                  "Application packaging",
                ].map((task, i) => (
                  <div
                    key={i}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      processingProgress > (i + 1) * 25
                        ? "bg-green-50"
                        : "bg-gray-50"
                    }`}
                  >
                    {processingProgress > (i + 1) * 25 ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                    )}
                    <span
                      className={`text-sm font-medium ${
                        processingProgress > (i + 1) * 25
                          ? "text-green-700"
                          : "text-gray-600"
                      }`}
                    >
                      {task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-12 border border-gray-200 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Order Complete! 🎉
                </h2>
                <p className="text-gray-600 text-lg">
                  Your file is ready for download
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {selectedFormat === "apk" ? (
                        <Smartphone className="w-8 h-8 text-green-600" />
                      ) : (
                        <Monitor className="w-8 h-8 text-green-600" />
                      )}
                      <div className="text-left">
                        <h3 className="font-bold text-gray-900">
                          {selectedFile.name.replace(
                            ".skp",
                            selectedFormat === "apk" ? ".apk" : ".exe"
                          )}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {selectedFormat === "apk"
                            ? "VR APK File"
                            : "Desktop EXE File"}
                        </p>
                      </div>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <button className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download File</span>
                  </button>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 text-left">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Order Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="col-span-2 mb-2">
                      <div className="text-gray-600 mb-1">Invoice ID</div>
                      <div className="font-bold text-blue-600 text-base">
                        {invoiceId}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Total Area</div>
                      <div className="font-bold text-gray-900">
                        {calculateArea()} m²
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Total Price</div>
                      <div className="font-bold text-gray-900">
                        {formatRupiah(calculatePrice())}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Processing Time</div>
                      <div className="font-bold text-gray-900">4.2s</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">File Size</div>
                      <div className="font-bold text-gray-900">
                        {selectedFormat === "apk" ? "24MB" : "18MB"}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={resetDemo}
                  className="w-full py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
                >
                  Convert Another File
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
