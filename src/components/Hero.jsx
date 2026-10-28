import QuantumArt from './QuantumArt';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="tiny-line" /> A new quantum society at Bristol</p>
          <h1>Quantum is moving.<br />We want to move <em>with it.</em></h1>
          <p className="hero-description">We are building a student community around quantum computing, quantum technology and research.</p>
          <p className="hero-detail">The plan is simple: learn the subject properly, bring in people who work on it, write about what is changing and start research projects of our own.</p>
          <div className="actions"><a className="button primary" href="#about">What we are building</a><a className="text-link light" href="#events">See the programme</a></div>
        </div>
        <QuantumArt />
      </div>
      <div className="hero-footer container"><span>FOR STUDENTS WHO WANT TO GO FURTHER</span><a href="#about">Start with the society <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
