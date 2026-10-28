import PersonCard from './PersonCard';
import { committee, teamMembers } from '../data/siteContent';

export default function People() {
  return (
    <section className="section container committee-section" id="committee">
      <div className="committee-heading"><p className="eyebrow">05 / OUR PEOPLE</p><h2>The <em>committee.</em></h2><p>The people setting up Dirac Society and its first programme.</p></div>
      <div className="committee-grid leadership-grid">{committee.map((person, index) => <PersonCard key={`${person.name}-${person.role}`} person={person} index={index} />)}</div>
      <div className="team-heading"><p className="eyebrow">THE WIDER TEAM</p><h3>Team members</h3><p>More people will be added here as the society grows.</p></div>
      <div className="committee-grid team-grid">{teamMembers.map((person, index) => <PersonCard key={person.role} person={person} index={index} compact />)}</div>
    </section>
  );
}
