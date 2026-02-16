import { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio.config';
import { Github, ExternalLink, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-8 md:px-20">
      <div className="flex justify-between items-end mb-20 border-b-4 border-vibrant-red pb-4">
        <h2 className="text-6xl md:text-9xl leading-none italic uppercase text-vibrant-red">
          WORKS.
        </h2>
        <span className="text-xl font-bold italic text-vibrant-red">
          {portfolioConfig.projects.length.toString().padStart(2, '0')} Projects
        </span>
      </div>

      <div className="flex flex-col">
        {portfolioConfig.projects.map((project, index) => (
          <div key={project.id} className="border-b border-vibrant-red/10">
            <button 
              onClick={() => toggleProject(project.id)}
              className="w-full text-left group py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all"
            >
              <div className="flex items-center gap-8">
                <span className="text-sm font-bold opacity-30 mt-2">0{index + 1}</span>
                <h3 className="text-4xl md:text-8xl group-hover:italic group-hover:text-vibrant-red transition-all duration-300">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-12">
                <p className="hidden md:block max-w-[200px] text-xs uppercase tracking-widest opacity-50">
                  {project.description}
                </p>
                <div className="w-16 h-16 rounded-full border-2 border-vibrant-red/20 group-hover:bg-vibrant-red group-hover:border-vibrant-red flex items-center justify-center transition-all duration-500">
                  {expandedId === project.id ? (
                    <Minus className="text-vibrant-red group-hover:text-cream transition-colors" />
                  ) : (
                    <Plus className="text-vibrant-red group-hover:text-cream transition-colors" />
                  )}
                </div>
              </div>
            </button>

            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20 pt-4">
                    <div className="aspect-video overflow-hidden bg-vibrant-red/5">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                          {project.detailedDescription}
                        </p>
                        
                        <div className="mb-10">
                          <p className="text-[10px] uppercase tracking-widest font-black text-vibrant-red mb-4">Core Stack</p>
                          <div className="flex flex-wrap gap-3">
                            {project.stack.map(s => (
                              <span key={s} className="px-4 py-2 border border-vibrant-red/20 text-[11px] font-bold uppercase tracking-tight hover:bg-vibrant-red hover:text-white transition-all duration-300">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <a 
                          href={project.github}
                          className="flex-1 px-6 py-4 border-2 border-vibrant-red text-vibrant-red font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-vibrant-red hover:text-white transition-all"
                        >
                          <Github size={16} /> GitHub
                        </a>
                        <a 
                          href={project.live}
                          className="flex-1 px-6 py-4 bg-vibrant-red text-white font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-all"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
