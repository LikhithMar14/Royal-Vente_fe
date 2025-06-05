import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, PenTool, Mail, Zap, Shield, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const mainFeatures = [
    {
      icon: ShoppingCart,
      title: "Advanced Ecommerce",
      description: "Complete online store solution with inventory management, payment processing, and order tracking.",
      features: ["Multi-payment gateways", "Inventory management", "Order analytics", "Customer management"],
    },
    {
      icon: PenTool,
      title: "Dynamic Blogging",
      description:
        "Professional blogging platform with SEO optimization, content scheduling, and audience engagement tools.",
      features: ["SEO optimization", "Content scheduling", "Comment system", "Social sharing"],
    },
    {
      icon: Mail,
      title: "Smart Newsletter",
      description:
        "Intelligent email marketing with automation, segmentation, and detailed analytics to grow your audience.",
      features: ["Email automation", "Audience segmentation", "A/B testing", "Performance analytics"],
    },
  ]

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with global CDN and advanced caching",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SSL encryption and regular backups",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting across all platforms",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#68EDFF]/5 to-[#5726BF]/5 animate-gradient-shift-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Everything You Need to
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
              Dominate Online
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Three powerful platforms unified into one seamless experience. Build, sell, engage, and grow with
            RoyalVente.
          </p>
        </div>

        {/* Main features grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-[#68EDFF]/50 transition-all duration-500 group backdrop-blur-sm animate-fade-in-up hover:scale-105 hover:shadow-xl hover:shadow-[#68EDFF]/10"
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#68EDFF] to-[#5726BF] flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-[#68EDFF] transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#68EDFF] mr-3 animate-pulse" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional features */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/30 border-gray-800 hover:bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:border-[#68EDFF]/30 animate-fade-in-up"
              style={{ animationDelay: `${1000 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 hover:bg-gradient-to-r hover:from-[#68EDFF] hover:to-[#5726BF] transition-all duration-300">
                    <feature.icon className="h-5 w-5 text-[#68EDFF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
