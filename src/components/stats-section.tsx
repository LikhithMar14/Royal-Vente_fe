export function StatsSection() {
    const stats = [
      { number: "10,000+", label: "Active Users" },
      { number: "50M+", label: "Orders Processed" },
      { number: "99.9%", label: "Uptime" },
      { number: "24/7", label: "Support" },
    ]
  
    return (
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#68EDFF]/5 via-transparent to-[#5726BF]/5 animate-gradient-shift"></div>
  
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Trusted by Thousands
              </span>
            </h2>
            <p className="text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Join the growing community of successful businesses using RoyalVente
            </p>
          </div>
  
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div 
                  className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#68EDFF] via-[#789eff] to-[#5726BF] bg-clip-text text-transparent mb-2 animate-gradient-x group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    backgroundSize: "400% 400%", 
                    textShadow: "0 0 20px rgba(104, 237, 255, 0.2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeWidth: "0.2px",
                    WebkitTextStrokeColor: "rgba(104, 237, 255, 0.1)"
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  