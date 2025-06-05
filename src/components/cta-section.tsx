import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CtaSection() {
  const benefits = ["14-day free trial", "No setup fees", "Cancel anytime", "24/7 support"]

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#68EDFF]/10 via-transparent to-[#5726BF]/10 animate-gradient-shift-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Build Your
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
                Digital Empire?
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Join thousands of successful businesses already using RoyalVente to grow their online presence.
            </p>

            {/* Email signup */}
            <div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 flex-1 focus:border-[#68EDFF] transition-all duration-300"
              />
              <Button className="bg-gradient-to-r from-[#68EDFF] to-[#5726BF] hover:from-[#5726BF] hover:to-[#68EDFF] text-white font-semibold px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#68EDFF]/25">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center animate-fade-in-up hover:text-gray-300 transition-colors duration-300"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <CheckCircle className="h-4 w-4 text-[#68EDFF] mr-2 animate-pulse" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="border-t border-gray-800 pt-16 animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-400 mb-6">
              Our enterprise team can help you build a tailored solution for your specific needs.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-900 hover:border-[#68EDFF] transition-all duration-300 hover:scale-105"
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
