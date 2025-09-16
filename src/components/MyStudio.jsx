import { Button } from "./ui/button";
import { Download, Code, Palette } from "lucide-react";

function MyStudio() {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
          <Code size={14} className="text-white" />
        </div>
        <span className="text-orange-400 uppercase tracking-wider">MY STUDIO</span>
      </div>
      
      <div className="mb-6">
        <p className="text-white/90 leading-relaxed">
          Namaste!🙏 <span className="text-orange-400">imran.dev</span> is more than a 
          portfolio; it's a window into my 
          world, where passion meets purpose. 
          Discover my work.
        </p>
      </div>
      
      <Button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mb-6 transition-colors">
        <Download size={16} className="mr-2" />
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
      </Button>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <Code size={14} className="text-white" />
            </div>
            <h3 className="text-white">Web Development</h3>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Building high-performance websites 
            with clean code and 
            strong SEO 
            fundamentals.
          </p>
        </div>
        
        <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <Palette size={14} className="text-white" />
            </div>
            <h3 className="text-white">UI/UX Design</h3>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Crafting modern, 
            intuitive user 
            interfaces that 
            engage and convert 
            users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyStudio