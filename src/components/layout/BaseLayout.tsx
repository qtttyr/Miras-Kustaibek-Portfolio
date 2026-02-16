import React from 'react';
import { portfolioConfig } from '../../config/portfolio.config';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const getIcon = (platform: string) => {
  switch (platform) {
    case 'github': return <Github size={20} />;
    case 'instagram': return <Instagram size={20} />;
    case 'linkedin': return <Linkedin size={20} />;
    case 'x': return <Twitter size={20} />;
    default: return null;
  }
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen selection:bg-vibrant-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none">
        <div className="text-2xl font-bold italic pointer-events-auto cursor-pointer mix-blend-difference invert">
          {portfolioConfig.name}.
        </div>
        <div className="flex gap-4 md:gap-8 pointer-events-auto">
          <a href="#about" className="text-[10px] font-bold uppercase tracking-widest hover:text-vibrant-red transition-colors">About</a>
          <a href="#projects" className="text-[10px] font-bold uppercase tracking-widest hover:text-vibrant-red transition-colors">Works</a>
          <a href="#skills" className="text-[10px] font-bold uppercase tracking-widest hover:text-vibrant-red transition-colors">Tech</a>
        </div>
      </nav>

      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="p-10 md:p-20 border-t border-vibrant-red/10 flex flex-col items-center">
        <p className="text-vibrant-red font-bold text-5xl md:text-8xl uppercase italic mb-12">Let's connect.</p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {portfolioConfig.contact.socials.map((social) => (
            <a 
              key={social.name} 
              href={social.link} 
              className="group flex items-center gap-3 text-xs md:text-sm font-bold uppercase hover:text-vibrant-red transition-all"
            >
              <span className="p-3 border border-vibrant-red/10 rounded-full group-hover:bg-vibrant-red group-hover:text-cream transition-all">
                {getIcon(social.platform)}
              </span>
              {social.name}
            </a>
          ))}
        </div>
        <p className="mt-24 text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-30">
          © {new Date().getFullYear()} {portfolioConfig.name}. Optimized for performance.
        </p>
      </footer>
    </div>
  );
};

export default BaseLayout;
