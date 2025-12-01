import { Briefcase } from "lucide-react";
import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience = () => {
  const scrollRef = useScrollReveal();

  const experiences = [
    {
      id: 1,
      role: "Full Stack Development Intern",
      company: "Simulanis Solutions Pvt. Ltd",
      period: "Aug 2025 - Present",
      description: "Developed React chatbot frontend for AR/VR applications and implemented real-time screen sharing using WebRTC & Socket.io. Automated HR workflows in ERPNext/Frappe, reducing manual processing by 40%. Managed Docker containerization for seamless dev-to-production deployments.",
      skills: ["React", "WebRTC", "Socket.io", "ERPNext", "Frappe", "Python", "Docker", "Linux"]
    },
    {
      id: 2,
      role: "Full Stack Web Development Bootcamp",
      company: "AccioJob",
      period: "2024 - 2025",
      description: "Completed intensive bootcamp covering React, Node.js, Express.js, MongoDB, and RESTful API development. Solved 600+ DSA problems and participated in weekly mock interviews to strengthen technical and communication skills.",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "DSA", "Git", "REST APIs"]
    }
  ];

  return (
    <div className="space-y-8 my-16 scroll-reveal" ref={scrollRef}>
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
          <Briefcase size={18} className="text-white" />
        </div>
        <h2 className="text-2xl text-white">Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-12 h-12 flex items-center justify-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-gray-900 shadow-lg"></div>
            </div>

            {/* Experience card */}
            <div className="ml-20 bg-gray-800/40 rounded-2xl border border-gray-700/50 backdrop-blur-sm p-6 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/60">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <p className="text-sm text-orange-400">{exp.company}</p>
                </div>
                <span className="text-sm text-white/60 whitespace-nowrap">{exp.period}</span>
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded text-xs border border-orange-500/20 hover:bg-orange-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary box */}
      <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl border border-orange-500/20 p-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <p className="text-white/90">
          <span className="text-orange-400 font-semibold">Mission:</span> To create impactful digital solutions that solve real-world problems. Passionate about continuous learning, clean code practices, and building scalable applications that make a difference.
        </p>
      </div>
    </div>
  );
};

export default Experience;
