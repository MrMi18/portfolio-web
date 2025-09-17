import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "./ui/button";
import dishifySc from '../assets/dishify-sc.png'
import brosolveSc from '../assets/brosolve-sc.png'


const Projects = () => {
 const projects = [
    {
      id: 1,
      title: "BroSolve",
      description: "AI + community-powered debugging platform built with Next.js, TypeScript, Firebase, and OpenAI API. Supports real-time bug posting, AI-assisted solutions, secure auth, and responsive UI with TailwindCSS + Shadcn.A comprehensive analytics dashboard built with React, Next.js, and Tailwind CSS. Features real-time data visualization, user management, and responsive design.",
      image: brosolveSc,
      technologies: ["React", "Next.js", "TypeScript", "Firebase ", "OpenAI Api", "Tailwind CSS", "Shadcn"],
      liveUrl: "https://BroSolve.online",
      githubUrl: "https://github.com/MrMi18/broSolve",
      featured: true
    },
    {
      id: 2,
      title: "Dishify",
      description: "Modern A restaurant discovery app built with React, Redux Toolkit, Node.js, Express, and MongoDB. Features real-time data fetching, secure authentication (JWT & bcrypt), scalable backend, and responsive UI with TailwindCSS.",
      image: dishifySc,
      technologies: ["React", "Redux Toolkit" ,"Node.js", "express" , "MongoDB", "Tailwindcss", ],
      liveUrl: "https://dishify-by-mrmi.netlify.app/",
      githubUrl: "https://github.com/MrMi18/Dishify-",
      featured: true
    }
  ];

  return (
    <div className="space-y-8 my-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
          <Layers size={18} className="text-white" />
        </div>
        <h2 className="text-2xl text-white">Featured Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm overflow-hidden group hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden"
              onClick={() => window.open(project.liveUrl , "_blank", "noopener,noreferrer")}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              
              {/* Live Project Button - Overlay */}
              <div className="absolute top-4 right-4">
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs"
                >
                  <ExternalLink size={12} className="mr-1" />
                  Live
                </Button>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl text-white mb-3 group-hover:text-orange-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-700/50 text-orange-400 rounded text-xs border border-gray-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Button
                 onClick={() => window.open(project.liveUrl , "_blank", "noopener,noreferrer")}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  View Project
                </Button>
                
                <Button
                 onClick={() => window.open(project.githubUrl , "_blank", "noopener,noreferrer")}
                  size="sm"
                  variant="outline"
                  className="border-gray-600 bg-white text-black hover:bg-gray-700 flex items-center gap-2"
                >
                  <Github size={14} />
                  Code
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Projects Link */}
      <div className="text-center pt-6">
        <button className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2 mx-auto">
          View all projects
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
}

export default Projects
