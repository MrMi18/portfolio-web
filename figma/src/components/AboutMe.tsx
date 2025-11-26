import { Button } from "./ui/button";
import { Github, ArrowRight } from "lucide-react";

export function AboutMe() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl mb-6 text-white">About me.</h2>
        
        <div className="space-y-4 text-white/80 leading-relaxed">
          <p>
            I have been coding for over 5 years, beginning my 
            journey in 2020. Initially, I learned HTML, CSS, 
            and JavaScript to build websites.
          </p>
          
          <p>
            My first project was a simple website built with 
            HTML, CSS, and JavaScript (~mid-2020).
          </p>
          
          <p>
            As I progressed, I focused heavily on React.js and 
            Next.js. Now, I specialize in building SaaS 
            applications with modern web technologies.
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-6 pt-4">
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Github size={18} />
          View my Github
          <ArrowRight size={16} />
        </Button>
        
        <button className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
          Contact me
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}