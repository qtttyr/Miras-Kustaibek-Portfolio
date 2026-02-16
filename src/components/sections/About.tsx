import { portfolioConfig } from '../../config/portfolio.config';
import { Download, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-8 md:px-20 border-t border-vibrant-red/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Photo Wrapper */}
        <div className="relative aspect-4/5 overflow-hidden group bg-vibrant-red/5">
          <img 
            src={portfolioConfig.profileImage} 
            alt={portfolioConfig.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-vibrant-red/10 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Decorative frame */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-4 border-r-4 border-vibrant-red -z-10" />
        </div>

        {/* Bio Content */}
        <div>
          <h2 className="text-5xl md:text-8xl mb-8 leading-none">
            {portfolioConfig.name}.
          </h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 opacity-80">
            {portfolioConfig.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={portfolioConfig.resumeLink}
              download
              className="px-8 py-5 bg-vibrant-red text-white font-bold uppercase tracking-widest flex items-center justify-between group hover:bg-black transition-colors duration-300"
            >
              <span>Download CV</span>
              <Download className="ml-4 transition-transform group-hover:translate-y-1" />
            </a>
            
            <a 
              href={`mailto:${portfolioConfig.contact.email}`}
              className="px-8 py-5 border-2 border-vibrant-red text-vibrant-red font-bold uppercase tracking-widest flex items-center justify-between hover:bg-vibrant-red hover:text-white transition-all duration-300"
            >
              <span>Get in touch</span>
              <ArrowRight className="ml-4" />
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-vibrant-red/10">
            <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-30 mb-8">Role & Expertise</p>
            <p className="text-3xl md:text-4xl font-bold italic uppercase leading-tight">
              {portfolioConfig.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
