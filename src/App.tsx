import BaseLayout from './components/layout/BaseLayout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

function App() {
  return (
    <BaseLayout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      
      {/* Dynamic Background Scroll Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>
    </BaseLayout>
  );
}

export default App;
