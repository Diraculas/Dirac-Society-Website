export default function PersonCard({ person, index, compact = false }) {
  return (
    <article className={`member${compact ? ' team-member' : ''}`}>
      <div className="avatar" aria-label={`Portrait placeholder for ${person.name}`}>
        <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="38" r="14" /><path d="M23 82c0-19 12-29 27-29s27 10 27 29" /></svg>
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3>{person.name}</h3><p>{person.role}</p>
    </article>
  );
}
