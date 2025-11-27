import { Button } from "./ui/button";
import { Github, ArrowRight } from "lucide-react";
import { useScrollReveal } from '../hooks/useScrollReveal';

const AboutMe = () => {
  const scrollRef = useScrollReveal();
  return (
    <div className="space-y-6 animate-slide-up scroll-reveal" ref={scrollRef}>
      <div>
        <h2 className="text-2xl mb-6 text-white">About me.</h2>

        <div className="space-y-4 text-white/80 leading-relaxed">
          <p>
            I'm a passionate <span className="text-orange-400">Full Stack Developer</span> from Nagpur, India, with a strong foundation in building scalable web applications. My journey into web development started in 2020 with HTML, CSS, and JavaScript, and has evolved into specializing in modern full-stack technologies.
          </p>

          <p>
            My first project was a simple website built with vanilla technologies, which sparked my passion for creating interactive digital experiences. As I progressed, I deepened my expertise in <span className="text-orange-400">React.js and Next.js</span>, enabling me to build sophisticated SaaS applications and real-world solutions.
          </p>

          <p>
            Today, I focus on building fast, accessible, and delightful web experiences. I'm proficient in both frontend and backend development, with experience in databases, API design, authentication, and DevOps. I believe in writing clean, maintainable code and continuously learning new technologies to stay ahead in this fast-paced industry.
          </p>

          <p>
            When I'm not coding, I enjoy exploring new frameworks, contributing to open-source projects, and sharing knowledge with the developer community. I'm always excited about opportunities to collaborate and build products that make a real impact.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <Button
          onClick={() => window.open("https://github.com/MrMi18", "_blank", "noopener,noreferrer")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors hover-scale justify-center"
        >
          <Github size={18} />
          View my Github
          <ArrowRight size={16} />
        </Button>

        <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-semibold">
          Let's Connect
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
