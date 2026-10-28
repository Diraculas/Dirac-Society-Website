import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Research from './components/Research';
import Events from './components/Events';
import Journal from './components/Journal';
import GetInvolved from './components/GetInvolved';
import People from './components/People';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <div className="discipline-strip">
          <div className="container">
            <span>Quantum computing</span><span className="asterisk">✳</span>
            <span>Quantum technologies</span><span className="asterisk">✳</span>
            <span>Research and papers</span><span className="asterisk">✳</span>
            <span>Talks and workshops</span>
          </div>
        </div>
        <About />
        <Pillars />
        <Research />
        <Events />
        <Journal />
        <GetInvolved />
        <People />
      </main>
      <Footer />
    </>
  );
}
