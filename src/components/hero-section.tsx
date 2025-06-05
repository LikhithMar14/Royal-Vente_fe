import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-32">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#68EDFF]/10 via-transparent to-[#5726BF]/10 animate-gradient-shift" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#68EDFF] rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#5726BF] rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#68EDFF] rounded-full animate-float-slow"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-move" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-gray-800 bg-gray-900/50 px-4 py-2 text-sm animate-fade-in-up backdrop-blur-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-[#68EDFF] animate-pulse"></span>
            <span className="text-gray-300">Now Available - All-in-One Platform</span>
          </div>

          {/* Main heading */}
          <h1
            className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Build Your Digital
            </span>
            <br />
            <span 
              className="bg-gradient-to-r from-[#68EDFF] via-[#789eff] to-[#5726BF] bg-clip-text text-transparent animate-gradient-x"
              style={{ 
                backgroundSize: "400% 400%", 
                textShadow: "0 0 20px rgba(104, 237, 255, 0.2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                WebkitTextStrokeWidth: "0.2px",
                WebkitTextStrokeColor: "rgba(104, 237, 255, 0.1)"
              }}
            >
              Empire
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-10 text-xl text-gray-300 sm:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            The ultimate platform combining powerful ecommerce, dynamic blogging, and intelligent newsletter management.
            Everything you need to grow your business online.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#68EDFF] to-[#5726BF] hover:from-[#5726BF] hover:to-[#68EDFF] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#68EDFF]/25 animate-pulse-glow"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-900 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:border-[#68EDFF] group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <p className="text-sm text-gray-400 mb-6">Trusted by 10,000+ businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {["SHOPIFY", "STRIPE", "MAILCHIMP", "WORDPRESS"].map((brand, index) => (
                <div
                  key={brand}
                  className="text-2xl font-bold text-gray-500 hover:text-gray-300 transition-all duration-300 hover:scale-110 animate-slide-in"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
