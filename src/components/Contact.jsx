import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MessageCircle, Send, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const scrollRef = useScrollReveal();
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setCharCount(0);
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:imran.mohd1910@example.com",
      label: "Email"
    },
    {
      name: "Discord",
      icon: MessageCircle,
      href: "#",
      label: "Discord"
    },
    {
      name: "Twitter / X",
      icon: "𝕏",
      href: "#",
      label: "Twitter / X"
    },
    {
      name: "Instagram",
      icon: "📷",
      href: "https://www.instagram.com/mrmi_18",
      label: "Instagram"
    }
  ];

  return (
    <div className="space-y-8 my-20">
      <div className="flex items-center gap-3 mb-8 animate-fade-in">
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
          <Mail size={18} className="text-white" />
        </div>
        <h2 className="text-2xl text-white">Contact me.</h2>
      </div>
      
      <div className="mb-8 animate-slide-up">
        <p className="text-white/80 leading-relaxed">
          I'm always eager to explore new opportunities and take on exciting projects. If you have a project in 
          mind, or just want to say hi, feel free to send me a message.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white flex items-center gap-1">
              Name<span className="text-red-400">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/20 rounded-lg"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white flex items-center gap-1">
              Email<span className="text-red-400">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@doe.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/20 rounded-lg"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-white flex items-center gap-1">
            Message<span className="text-red-400">*</span>
          </Label>
          <div className="relative">
            <Textarea
              id="message"
              name="message"
              placeholder="Hello there, I would like to ask you about..."
              value={formData.message}
              onChange={handleInputChange}
              required
              maxLength={maxChars}
              rows={6}
              className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/20 resize-none rounded-lg"
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400">
              {charCount}/{maxChars} characters
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Send size={16} />
            Send
          </Button>
        </div>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-gray-700/50"></div>
        <span className="text-white/60 text-sm">Or contact me with...</span>
        <div className="flex-1 h-px bg-gray-700/50"></div>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 text-white/80 hover:text-white transition-all duration-200 group"
          >
            {typeof social.icon === 'string' ? (
              <span className="text-lg">{social.icon}</span>
            ) : (
              <social.icon size={18} />
            )}
            <span className="text-sm">{social.label}</span>
            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact
