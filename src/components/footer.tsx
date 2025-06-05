import Link from "next/link"
import { Crown, Twitter, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "API", href: "/api" },
        { name: "Documentation", href: "/docs" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Guides", href: "/guides" },
        { name: "Webinars", href: "/webinars" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/royalvente", label: "Twitter" },
    { icon: Github, href: "https://github.com/royalvente", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/royalvente", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@royalvente.com", label: "Email" },
  ]

  return (
    <footer className="bg-gray-950 border-t border-gray-800 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#68EDFF]/5 to-[#5726BF]/5 animate-gradient-shift-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <Crown className="h-8 w-8 text-[#68EDFF] group-hover:scale-110 transition-all duration-300 animate-pulse-slow" />
              <span 
                className="text-2xl font-bold bg-gradient-to-r from-[#68EDFF] via-[#789eff] to-[#5726BF] bg-clip-text text-transparent animate-gradient-x"
                style={{ 
                  backgroundSize: "400% 400%", 
                  textShadow: "0 0 15px rgba(104, 237, 255, 0.2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStrokeWidth: "0.1px",
                  WebkitTextStrokeColor: "rgba(104, 237, 255, 0.1)"
                }}
              >
                RoyalVente
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              The ultimate platform for building your digital empire. Combine ecommerce, blogging, and newsletter
              management in one powerful solution.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-[#68EDFF] hover:to-[#5726BF] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#68EDFF] transition-all duration-300 hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} RoyalVente. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/status" className="text-gray-400 hover:text-[#68EDFF] transition-colors duration-300">
              System Status
            </Link>
            <Link href="/security" className="text-gray-400 hover:text-[#68EDFF] transition-colors duration-300">
              Security
            </Link>
            <Link href="/accessibility" className="text-gray-400 hover:text-[#68EDFF] transition-colors duration-300">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
