import { useState } from 'react';
import SectionHeading from './SectionHeading';
import ArticleDialog from './ArticleDialog';
import { articles } from '../data/siteContent';

export default function Journal() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  return (
    <section className="section container" id="journal">
      <SectionHeading eyebrow="04 / THE DIRAC JOURNAL" title="What we are reading." accent="What we are thinking." side="Short articles from the society, written clearly." />
      <div className="journal-grid">
        {articles.map((article, index) => (
          <article className="journal-card" key={article.title}>
            <div className={`article-art ${article.style}`} aria-hidden="true"><span className="art-index">DIRAC / FIELD NOTES 0{index + 1}</span><span className="art-symbol">{article.symbol}</span><span className="art-caption">{article.category}</span></div>
            <div className="article-meta">{article.category}<span>INTRODUCTORY READ</span></div>
            <h3><button onClick={() => setSelectedArticle(article)}>{article.title}</button></h3><p>{article.summary}</p>
            <button className="read-link" onClick={() => setSelectedArticle(article)}>Read article <span className="sr-only">: {article.title}</span></button>
          </article>
        ))}
      </div>
      <p className="journal-note">These are starting articles. New pieces from members will be added as the society develops.</p>
      <ArticleDialog article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </section>
  );
}
