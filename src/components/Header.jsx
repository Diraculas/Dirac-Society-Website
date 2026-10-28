import { useEffect, useState } from 'react';
import Logo from './Logo';

const links = [
  ['The society', '#about'],
  ['Research', '#research'],
  ["What's on", '#events'],
  ['Journal', '#journal'],
  ['Our people', '#committee'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <Logo />
        <button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>
          Menu <span aria-hidden="true">☰</span>
        </button>
        <nav id="navigation" className={open ? 'open' : ''} aria-label="Main navigation" onClick={() => setOpen(false)}>
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="nav-cta" href="#involve">Get involved</a>
        </nav>
      </div>
    </header>
  );
}
