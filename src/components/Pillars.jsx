import SectionHeading from './SectionHeading';
import { pillars } from '../data/siteContent';

export default function Pillars() {
  return (
    <section className="section pillars-section">
      <div className="container">
        <SectionHeading eyebrow="WHAT WE WILL DO" title="Learn the subject." accent="Then do something with it." side="Four parts of the society, all connected." />
        <div className="pillars">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.number}>
              <div className="pillar-top"><span>{pillar.number}</span><span className="pillar-symbol" aria-hidden="true">{pillar.symbol}</span></div>
              <h3>{pillar.title}</h3><p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
