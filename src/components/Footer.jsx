import Logo from './Logo';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-main"><Logo footer /><p>University of Bristol Dirac Society</p><a href="#home">Back to top ↑</a></div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Dirac Society</span><span>Quantum computing, technology and research.</span></div>
    </footer>
  );
}
