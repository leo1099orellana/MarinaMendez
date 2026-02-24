import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Proyects from './components/Proyects'
import Press from './components/Press'
import LinkedIn from './components/LinkedIn'
import Footer from './components/Footer'
export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Proyects />
      <Press />
      <LinkedIn />
      <Footer />
    </div>
  );
}