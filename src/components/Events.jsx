import SectionHeading from './SectionHeading';
import { events } from '../data/siteContent';

export default function Events() {
  return (
    <section className="events-section section" id="events">
      <div className="container">
        <SectionHeading eyebrow="03 / THE PROGRAMME" title="Talks, workshops" accent="and proper discussion." side="We are planning the first term now." />
        <div className="event-list">
          {events.map((event) => <article className="event" key={event.type}><span className="event-type">{event.type}</span><div><h3>{event.title}</h3><p>{event.text}</p></div><span className="event-status">{event.status}</span></article>)}
        </div>
        <p className="programme-note">Dates, speakers and registration links will be posted here once they are confirmed.</p>
      </div>
    </section>
  );
}
