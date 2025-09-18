import { Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "TailwindCSS", "HTML", "CSS", "Shadcn"],
      color: "bg-blue-600/20 text-blue-400 border-blue-500/30",
      iconColor: "bg-blue-600"
    },
    {
      name: "Backend", 
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "Prisma", "Firebase", "JWT", "Socket.io"],
      color: "bg-green-600/20 text-green-400 border-green-500/30",
      iconColor: "bg-green-600"
    },
    {
      name: "Tools & DevOps",
      skills: ["Git", "Github", "Docker", "AWS" , "Vercel", "NPM", "ESLint", "Postman", "Render", "Netlify"],
      color: "bg-purple-600/20 text-purple-400 border-purple-500/30",
      iconColor: "bg-purple-600"
    },
    {
      name: "Design & Other",
      skills: ["Figma", "OpenAI API", "WebRTC", "RESTful API", "Agile", "Problem Solving"],
      color: "bg-orange-600/20 text-orange-400 border-orange-500/30",
      iconColor: "bg-orange-600"
    },
    {
      name: "Languages",
      skills: ["Java", "Python", "SQL"],
      color: "bg-pink-600/20 text-pink-400 border-pink-500/30",
      iconColor: "bg-pink-600"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
          <Cpu size={18} className="text-white" />
        </div>
        <h2 className="text-2xl text-white">Technologies I use.</h2>
      </div>
      
      <div className="mb-8">
        <p className="text-white/80 leading-relaxed">
          Over the years, I have worked with a variety of technologies. Here are some of the technologies I have 
          experience with, organized by categories:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            <h3 className="text-white mb-4 flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${category.iconColor}`}></div>
              {category.name}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-lg border text-sm transition-all duration-200 hover:scale-105 ${category.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
        <p className="text-white/80 leading-relaxed">
          <span className="text-orange-400">Specialization:</span> Full-stack development with modern JavaScript frameworks, 
          focusing on scalable web applications, API development, and database design. 
          Experienced in Data Structures & Algorithms and Agile development methodologies.
        </p>
      </div>
    </div>
  );
}

export default Skills
