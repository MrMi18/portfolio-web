// no react-router imports needed for external link
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Github, ArrowRight } from "lucide-react";
import Contact from "./Contact";
// import { GITHUB_URL } from "../constent.js";

const AboutMe = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl mb-6 text-white">About me.</h2>
        
        <div className="space-y-4 text-white/80 leading-relaxed">
          <p>
            I have been coding for over 3 years, beginning my journey in 2022. I started with Python, and my first project was a simple Tic Tac Toe game built using the Turtle graphics library.
          </p>

          <p>
            Soon after, I moved into web development, learning HTML, CSS, and JavaScript to create interactive websites. Like any learning path, there were challenges along the way, but they helped me build strong problem-solving skills and confidence in tackling new technologies.
          </p>

          <p>
            Over time, I focused on React.js and Next.js, and later expanded into the full MERN stack. Each project gave me opportunities to refine my skills, experiment with new ideas, and understand how to build scalable applications.
          </p>

          <p>
            Today, I specialize in building SaaS applications with modern web technologies. My journey has been shaped by both successes and challenges, and each step has contributed to the developer I am now.
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-6 pt-4">
  <Button  onClick={() => window.open("https://github.com/MrMi18", "_blank", "noopener,noreferrer")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Github size={18} />
             View my Github 
          <ArrowRight size={16} />
        </Button>
        
        <button className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
          <a href = "#Contact"> Contact me </a>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default AboutMe
