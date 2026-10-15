import React, { useState, useEffect, useMemo } from 'react';
import { RECOMMENDED_READINGS } from '../data/readings';
import { BookOpen, Check } from 'lucide-react';

const STORAGE_KEY_READ_ARTICLES = 'cinematheque_read_articles_v1';

export const ReadingsView: React.FC = () => {
  const [readArticleIds, setReadArticleIds] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_READ_ARTICLES);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return { 'truffaut-certain-tendency-1954': true, 'bazin-ontology-photographic-image-1945': true };
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filterReadStatus, setFilterReadStatus] = useState<'all' | 'read' | 'unread'>('all');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_READ_ARTICLES, JSON.stringify(readArticleIds));
    } catch (e) {
      console.error(e);
    }
  }, [readArticleIds]);

  const toggleReadStatus = (articleId: string) => {
    setReadArticleIds((prev) => ({
      ...prev,
      [articleId]: !prev[articleId]
    }));
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const categories = ['All', 'Manifestos', 'Auteur Theory', 'Cinematography & Craft', 'Realism & Ontology', 'Editing & Montage'];

  const filteredArticles = useMemo(() => {
    return RECOMMENDED_READINGS.filter((article) => {
      if (selectedCategory !== 'All' && article.category !== selectedCategory) return false;
      const isRead = Boolean(readArticleIds[article.id]);
      if (filterReadStatus === 'read' && !isRead) return false;
      if (filterReadStatus === 'unread' && isRead) return false;
      return true;
    });
  }, [selectedCategory, filterReadStatus, readArticleIds]);

  const totalArticles = RECOMMENDED_READINGS.length;
  const readCount = RECOMMENDED_READINGS.filter((a) => readArticleIds[a.id]).length;
  const readPercentage = Math.round((readCount / totalArticles) * 100);

  return (
    <div className="space-y-10">
      
      {/* Header: Title is Reading */}
      <div className="border-b border-[#cfc0bd] pb-6">
        <h1 className="font-serif-cinematic text-3xl sm:text-5xl text-[#222d2b] font-semibold">
          Reading
        </h1>

        {/* Category Selector Tabs */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = cat === 'All'
              ? RECOMMENDED_READINGS.length
              : RECOMMENDED_READINGS.filter((a) => a.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => handleSelectCategory(cat)}
                className={`px-3 py-1.5 text-xs rounded transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#586f6b] text-[#ffffff] font-semibold'
                    : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] hover:border-[#b8b8aa]'
                }`}
              >
                <span>{cat}</span>
                <span className={`font-mono text-[11px] ${isSelected ? 'text-[#ffffff]' : 'text-[#7f9183]'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Read vs Unread Filter Bar & Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-[#e3deda] text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#7f9183] uppercase tracking-wider text-[11px] font-semibold">Filter essays:</span>
            <div className="flex items-center gap-1 bg-[#ffffff] p-1 rounded border border-[#cfc0bd]">
              <button
                onClick={() => setFilterReadStatus('all')}
                className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                  filterReadStatus === 'all' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterReadStatus('read')}
                className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                  filterReadStatus === 'read' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                Read ({readCount})
              </button>
              <button
                onClick={() => setFilterReadStatus('unread')}
                className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                  filterReadStatus === 'unread' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                Unread ({totalArticles - readCount})
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#586f6b]">
            <BookOpen className="w-3.5 h-3.5 text-[#7f9183]" />
            <span>Syllabus Progress:</span>
            <strong className="text-[#222d2b] font-semibold">{readCount} of {totalArticles} read ({readPercentage}%)</strong>
          </div>
        </div>
      </div>

      {/* Reading Articles Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredArticles.map((article) => {
          const isRead = Boolean(readArticleIds[article.id]);

          return (
            <article
              key={article.id}
              className={`border rounded-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-150 bg-[#ffffff] shadow-sm hover:shadow-md ${
                isRead
                  ? 'border-[#cfc0bd]'
                  : 'border-[#cfc0bd] hover:border-[#7f9183]'
              }`}
            >
              <div>
                {/* Meta Top Line (Zero-Pill rule) */}
                <div className="flex items-start justify-between gap-3 text-xs font-mono text-[#586f6b] mb-2">
                  <div className="flex flex-wrap items-center gap-x-2">
                    <span className="text-[#7f9183] uppercase tracking-widest font-semibold">{article.category}</span>
                    <span className="text-[#cfc0bd]">·</span>
                    <span className="text-[#222d2b] font-semibold">{article.year}</span>
                    <span className="text-[#cfc0bd]">·</span>
                    <span className="text-[#586f6b]">{article.authorRole}</span>
                  </div>

                  {/* Mark as read button */}
                  <button
                    onClick={() => toggleReadStatus(article.id)}
                    title={isRead ? 'Mark as unread' : 'Mark as read'}
                    className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      isRead
                        ? 'bg-[#7f9183]/20 text-[#222d2b] border border-[#7f9183] font-semibold'
                        : 'bg-[#f7f5f3] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd]'
                    }`}
                  >
                    <Check className={`w-3.5 h-3.5 ${isRead ? 'opacity-100 text-[#586f6b]' : 'opacity-40'}`} />
                    <span>{isRead ? 'Completed' : 'Mark Read'}</span>
                  </button>
                </div>

                {/* Title & Author */}
                <h2 className="font-serif-cinematic text-2xl text-[#222d2b] font-semibold leading-snug mb-1">
                  {article.title}
                </h2>
                {article.originalTitle && (
                  <p className="text-xs text-[#586f6b] italic mb-2">
                    {article.originalTitle}
                  </p>
                )}

                <div className="text-xs text-[#586f6b] font-mono mb-4 pb-3 border-b border-[#e3deda]">
                  <span className="text-[#222d2b] font-semibold">{article.author}</span>
                  <span className="text-[#cfc0bd] mx-2">·</span>
                  <span className="text-[#586f6b]">{article.publication}</span>
                  {article.relatedMovement && (
                    <>
                      <span className="text-[#cfc0bd] mx-2">·</span>
                      <span className="text-[#7f9183] font-medium">{article.relatedMovement}</span>
                    </>
                  )}
                  {article.relatedAuteur && (
                    <>
                      <span className="text-[#cfc0bd] mx-2">·</span>
                      <span className="text-[#222d2b]">Auteur: {article.relatedAuteur}</span>
                    </>
                  )}
                </div>

                {/* Thesis Pull Quote */}
                <blockquote className="bg-[#f7f5f3] border-l-2 border-[#586f6b] p-3.5 rounded-r text-xs italic text-[#455854] leading-relaxed font-serif-cinematic text-sm mb-4">
                  "{article.thesisQuote}"
                </blockquote>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#455854] leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              {/* Key theoretical concepts (Unboxed list with separators) */}
              <div className="pt-3 border-t border-[#e3deda] text-xs text-[#586f6b] flex flex-wrap items-center gap-x-2 gap-y-1 font-mono">
                <span className="text-[#7f9183] text-[10px] uppercase tracking-wider font-semibold">Concepts:</span>
                {article.keyConcepts.map((concept, idx) => (
                  <span key={concept}>
                    {idx > 0 && <span className="text-[#cfc0bd] mr-2">/</span>}
                    <span className="text-[#222d2b] font-medium">{concept}</span>
                  </span>
                ))}
              </div>

            </article>
          );
        })}
      </div>

    </div>
  );
};
