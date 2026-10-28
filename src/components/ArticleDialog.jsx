import { useEffect, useRef } from 'react';

export default function ArticleDialog({ article, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (article && !dialog.open) dialog.showModal();
    document.body.classList.toggle('dialog-open', Boolean(article));
    return () => document.body.classList.remove('dialog-open');
  }, [article]);

  if (!article) return null;

  return (
    <dialog ref={dialogRef} aria-labelledby="article-title" onClose={onClose} onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}>
      <div className="dialog-toolbar"><span>THE DIRAC JOURNAL</span><button onClick={() => dialogRef.current.close()} aria-label="Close article">Close ×</button></div>
      <div id="article-content">
        <p className="eyebrow">{article.category}</p><h2 id="article-title">{article.title}</h2><p className="article-standfirst">{article.summary}</p>
        {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </dialog>
  );
}
