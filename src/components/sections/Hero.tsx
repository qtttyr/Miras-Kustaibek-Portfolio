import { portfolioConfig } from '../../config/portfolio.config';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 pt-20">
      <div className="max-w-[1400px]">
        <h1 className="text-[clamp(4rem,15vw,18rem)] leading-[0.85] text-vibrant-red mb-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          DESIGNER <br />
          & CODER.
        </h1>
        
        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <p className="max-w-md text-xl md:text-2xl font-medium leading-tight">
            {portfolioConfig.about}
          </p>
          
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] opacity-50 font-bold">Currently based in</span>
            <span className="text-xl font-bold uppercase italic">Astana, KZ</span>
          </div>
        </div>
      </div>
      
      {/* Decorative wide line */}
      <div className="w-full h-px bg-vibrant-red/20 mt-20" />
    </section>
  );
};

export default Hero;
