export default function Logo({ footer = false }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href="#home" aria-label="Dirac Society home">
      <img className="brand-logo" src="./dirac-logo.png" alt="" />
      <span className="brand-name">DIRAC<span className="brand-sub">SOCIETY</span></span>
    </a>
  );
}
