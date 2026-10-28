export default function SectionHeading({ eyebrow, title, accent, side }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}<br /><em>{accent}</em></h2></div>
      {side && <p>{side}</p>}
    </div>
  );
}
