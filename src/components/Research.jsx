import SectionHeading from './SectionHeading';
import { researchTopics } from '../data/siteContent';

export default function Research() {
  return (
    <section className="section container" id="research">
      <SectionHeading eyebrow="02 / RESEARCH" title="We want to read papers." accent="We also want to write them." side="The research side will grow with the people who join." />
      <div className="research-grid">
        <div className="research-intro">
          <span className="tag">HOW WE WILL START</span>
          <h3>Read. Discuss.<br />Choose a problem. Work.</h3>
          <p>We will begin with small reading groups and focused projects. The aim is to understand the existing work, find questions we can realistically take on and build towards proper research.</p>
          <p className="small-note">Projects and papers will be added here once the research groups begin.</p>
        </div>
        <div className="research-topics">
          {researchTopics.map((topic) => <article className="topic" key={topic.number}><span>{topic.number}</span><div><h3>{topic.title}</h3><p>{topic.text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
