import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <WorkExperience />
        <Skills />
        <Awards />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
