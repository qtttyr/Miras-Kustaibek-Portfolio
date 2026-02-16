import { portfolioConfig } from '../../config/portfolio.config';

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 px-8 md:px-20 bg-vibrant-red text-cream">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <h2 className="text-6xl md:text-9xl leading-none italic uppercase">
          TECH.
        </h2>
        <p className="max-w-xs text-sm uppercase tracking-widest leading-relaxed opacity-80 mt-4 md:mt-10">
          My primary stack handles everything from design systems to scalable backends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
        {portfolioConfig.skills.map(category => (
          <div key={category.name} className="border-t border-cream/20 pt-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] opacity-50 mb-8">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {category.items.map(item => (
                <span 
                  key={item} 
                  className="text-4xl md:text-6xl font-bold uppercase transition-all hover:italic hover:text-white cursor-default select-none group relative"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full" />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
