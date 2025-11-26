import { Github, Mail, MessageCircle, ArrowUp, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:imran@example.com" },
    { name: "Discord", icon: MessageCircle, href: "#" }
  ];

  return (
    <footer className="relative border-t border-gray-700/30 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">I</span>
              </div>
              <span className="text-white text-xl">imran.dev</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Passionate FullStack Developer crafting digital experiences 
              with modern technologies. Always ready for the next challenge.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>📍 Nagpur, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-orange-400 text-sm transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-white">Let's Connect</h3>
            <div className="space-y-3">
              <p className="text-white/70 text-sm">
                Ready to work together? Feel free to reach out!
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 bg-gray-800/50 hover:bg-orange-500/20 border border-gray-700/50 hover:border-orange-500/50 rounded-lg flex items-center justify-center text-white/70 hover:text-orange-400 transition-all duration-200 hover:scale-110"
                    title={social.name}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700/30 gap-4">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>© 2024 Imran. Made with</span>
            <Heart size={14} className="text-red-400 fill-current" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs">
              Built with React, Next.js & TailwindCSS
            </span>
            <Button
              onClick={scrollToTop}
              size="sm"
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 text-white/70 hover:text-white w-9 h-9 p-0 rounded-lg transition-all duration-200"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-1/4 w-px h-12 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-8 bg-gradient-to-b from-blue-500/30 to-transparent"></div>
      </div>
    </footer>
  );
}