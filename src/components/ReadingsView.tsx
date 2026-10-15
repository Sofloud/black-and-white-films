import React, { useEffect, useMemo, useState } from 'react';
import { RECOMMENDED_READINGS, ReadingArticle } from '../data/readings';
import { BookOpen, Check, Pencil, Trash2, X } from 'lucide-react';

const STORAGE_KEY_READ_ARTICLES = 'cinematheque_read_articles_v1';
const STORAGE_KEY_READING_OVERRIDES = 'cinematheque_reading_overrides_v1';
const STORAGE_KEY_DELETED_READINGS = 'cinematheque_deleted_readings_v1';

const emptyArticle = (article: ReadingArticle): ReadingArticle => ({ ...article, keyConcepts: [...article.keyConcepts] });

export const ReadingsView: React.FC = () => {
  const [readArticleIds, setReadArticleIds] = useState<Record<string, boolean>>(() => {
    try { const stored = localStorage.getItem(STORAGE_KEY_READ_ARTICLES); if (stored) return JSON.parse(stored); } catch {}
    return { 'truffaut-certain-tendency-1954': true, 'bazin-ontology-photographic-image-1945': true };
  });
  const [overrides, setOverrides] = useState<Record<string, ReadingArticle>>(() => {
    try { const stored = localStorage.getItem(STORAGE_KEY_READING_OVERRIDES); if (stored) return JSON.parse(stored); } catch {}
    return {};
  });
  const [deletedIds, setDeletedIds] = useState<string[]>(() => {
    try { const stored = localStorage.getItem(STORAGE_KEY_DELETED_READINGS); if (stored) return JSON.parse(stored); } catch {}
    return [];
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filterReadStatus, setFilterReadStatus] = useState<'all' | 'read' | 'unread'>('all');
  const [editing, setEditing] = useState<ReadingArticle | null>(null);

  useEffect(() => { try { localStorage.setItem(STORAGE_KEY_READ_ARTICLES, JSON.stringify(readArticleIds)); } catch {} }, [readArticleIds]);
  useEffect(() => { try { localStorage.setItem(STORAGE_KEY_READING_OVERRIDES, JSON.stringify(overrides)); } catch {} }, [overrides]);
  useEffect(() => { try { localStorage.setItem(STORAGE_KEY_DELETED_READINGS, JSON.stringify(deletedIds)); } catch {} }, [deletedIds]);

  const articles = useMemo(() => RECOMMENDED_READINGS.filter(a => !deletedIds.includes(a.id)).map(a => overrides[a.id] || a), [overrides, deletedIds]);
  const categories = ['All', 'Manifestos', 'Auteur Theory', 'Cinematography & Craft', 'Realism & Ontology', 'Editing & Montage'];
  const filteredArticles = useMemo(() => articles.filter(article => {
    if (selectedCategory !== 'All' && article.category !== selectedCategory) return false;
    const isRead = Boolean(readArticleIds[article.id]);
    if (filterReadStatus === 'read' && !isRead) return false;
    if (filterReadStatus === 'unread' && isRead) return false;
    return true;
  }), [articles, selectedCategory, filterReadStatus, readArticleIds]);
  const readCount = articles.filter(a => readArticleIds[a.id]).length;

  const toggleReadStatus = (id: string) => setReadArticleIds(prev => ({ ...prev, [id]: !prev[id] }));
  const saveArticle = (article: ReadingArticle) => { setOverrides(prev => ({ ...prev, [article.id]: emptyArticle(article) })); setEditing(null); };
  const removeArticle = (id: string) => { setDeletedIds(prev => prev.includes(id) ? prev : [...prev, id]); setEditing(null); };

  return (
    <div className="space-y-10">
      <div className="border-b border-[#cfc0bd] pb-6">
        <h1 className="font-serif-cinematic text-3xl sm:text-5xl text-[#222d2b] font-semibold">Reading</h1>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {categories.map(cat => {
            const count = cat === 'All' ? articles.length : articles.filter(a => a.category === cat).length;
            return <button key={cat} onClick={() => { setSelectedCategory(cat); window.scrollTo({ top: 0, behavior: 'instant' }); }} className={`px-3 py-1.5 text-xs rounded transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${selectedCategory === cat ? 'bg-[#586f6b] text-[#ffffff] font-semibold' : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd]'}`}><span>{cat}</span><span className={`font-mono text-[11px] ${selectedCategory === cat ? 'text-[#ffffff]' : 'text-[#7f9183]'}`}>({count})</span></button>;
          })}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-[#e3deda] text-xs font-mono">
          <div className="flex items-center gap-3"><span className="text-[#7f9183] uppercase tracking-wider text-[11px] font-semibold">Filter essays:</span><div className="flex items-center gap-1 bg-[#ffffff] p-1 rounded border border-[#cfc0bd]">
            {(['all', 'read', 'unread'] as const).map(status => <button key={status} onClick={() => setFilterReadStatus(status)} className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${filterReadStatus === status ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b]'}`}>{status === 'all' ? 'All' : status === 'read' ? `Read (${readCount})` : `Unread (${articles.length - readCount})`}</button>)}
          </div></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredArticles.map(article => {
          const isRead = Boolean(readArticleIds[article.id]);
          return <article key={article.id} className={`border rounded-lg p-6 sm:p-7 bg-[#ffffff] shadow-sm hover:shadow-md ${isRead ? 'border-[#cfc0bd]' : 'border-[#cfc0bd]'}`}>
            <div className="flex items-start justify-between gap-3 text-xs font-mono text-[#586f6b] mb-2">
              <div className="flex flex-wrap items-center gap-x-2"><span className="text-[#7f9183] uppercase tracking-widest font-semibold">{article.category}</span><span>·</span><span className="text-[#222d2b] font-semibold">{article.year}</span><span>·</span><span>{article.authorRole}</span></div>
              <div className="flex items-center gap-1">
                <button onClick={() => setEditing(emptyArticle(article))} title="Edit essay" className="p-1.5 rounded hover:bg-[#f7f5f3] cursor-pointer"><Pencil className="w-3.5 h-3.5" /></button>
                <button onClick={() => removeArticle(article.id)} title="Remove essay" className="p-1.5 rounded hover:bg-red-50 text-[#7f9183] hover:text-red-600 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>
                <button onClick={() => toggleReadStatus(article.id)} title={isRead ? 'Mark as unread' : 'Mark as read'} className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer ${isRead ? 'bg-[#7f9183]/20 text-[#222d2b] border border-[#7f9183]' : 'bg-[#f7f5f3] text-[#586f6b] border border-[#cfc0bd]'}`}><Check className="w-3.5 h-3.5" /><span>{isRead ? 'Completed' : 'Mark Read'}</span></button>
              </div>
            </div>
            <h2 className="font-serif-cinematic text-2xl text-[#222d2b] font-semibold leading-snug mb-1">{article.title}</h2>
            {article.originalTitle && <p className="text-xs text-[#586f6b] italic mb-2">{article.originalTitle}</p>}
            <div className="text-xs text-[#586f6b] font-mono mb-4 pb-3 border-b border-[#e3deda]"><span className="text-[#222d2b] font-semibold">{article.author}</span><span className="mx-2">·</span><span>{article.publication}</span>{article.relatedMovement && <><span className="mx-2">·</span><span>{article.relatedMovement}</span></>}{article.relatedAuteur && <><span className="mx-2">·</span><span>Auteur: {article.relatedAuteur}</span></>}</div>
            <blockquote className="bg-[#f7f5f3] border-l-2 border-[#586f6b] p-3.5 rounded-r text-sm italic text-[#455854] leading-relaxed font-serif-cinematic mb-4">"{article.thesisQuote}"</blockquote>
            <p className="text-xs sm:text-sm text-[#455854] leading-relaxed mb-4">{article.summary}</p>
            <div className="pt-3 border-t border-[#e3deda] text-xs text-[#586f6b] flex flex-wrap items-center gap-x-2 gap-y-1 font-mono"><span className="text-[#7f9183] text-[10px] uppercase tracking-wider font-semibold">Concepts:</span>{article.keyConcepts.map((concept, idx) => <span key={concept}>{idx > 0 && <span className="text-[#cfc0bd] mr-2">/</span>}<span className="text-[#222d2b] font-medium">{concept}</span></span>)}</div>
          </article>;
        })}
      </div>

      {editing && <ReadingEditor article={editing} onChange={setEditing} onSave={saveArticle} onClose={() => setEditing(null)} />}
    </div>
  );
};

const ReadingEditor: React.FC<{ article: ReadingArticle; onChange: (article: ReadingArticle) => void; onSave: (article: ReadingArticle) => void; onClose: () => void }> = ({ article, onChange, onSave, onClose }) => {
  const update = (patch: Partial<ReadingArticle>) => onChange({ ...article, ...patch });
  return <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4" onClick={onClose}>
    <div className="bg-white border border-[#cfc0bd] rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
      <div className="flex items-center justify-between border-b border-[#e3deda] pb-3 mb-4"><h2 className="font-serif-cinematic text-2xl font-semibold">Edit Essay</h2><button onClick={onClose} className="p-1 hover:bg-[#f7f5f3] rounded cursor-pointer"><X className="w-4 h-4" /></button></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <label>Title<input value={article.title} onChange={e => update({ title: e.target.value })} className="editor-input" /></label>
        <label>Original Title<input value={article.originalTitle || ''} onChange={e => update({ originalTitle: e.target.value || undefined })} className="editor-input" /></label>
        <label>Author<input value={article.author} onChange={e => update({ author: e.target.value })} className="editor-input" /></label>
        <label>Year<input type="number" value={article.year} onChange={e => update({ year: Number(e.target.value) })} className="editor-input" /></label>
        <label>Publication<input value={article.publication} onChange={e => update({ publication: e.target.value })} className="editor-input" /></label>
        <label>Category<select value={article.category} onChange={e => update({ category: e.target.value as ReadingArticle['category'] })} className="editor-input"><option>Manifestos</option><option>Auteur Theory</option><option>Cinematography & Craft</option><option>Realism & Ontology</option><option>Editing & Montage</option></select></label>
        <label>Movement<input value={article.relatedMovement || ''} onChange={e => update({ relatedMovement: e.target.value || undefined })} className="editor-input" /></label>
        <label>Auteur<input value={article.relatedAuteur || ''} onChange={e => update({ relatedAuteur: e.target.value || undefined })} className="editor-input" /></label>
      </div>
      <div className="space-y-3 mt-3 text-xs"><label className="block">Thesis Quote<textarea rows={3} value={article.thesisQuote} onChange={e => update({ thesisQuote: e.target.value })} className="editor-input" /></label><label className="block">Summary<textarea rows={6} value={article.summary} onChange={e => update({ summary: e.target.value })} className="editor-input" /></label><label className="block">Key Concepts (comma separated)<input value={article.keyConcepts.join(', ')} onChange={e => update({ keyConcepts: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} className="editor-input" /></label></div>
      <div className="flex justify-end gap-2 mt-5"><button onClick={onClose} className="px-4 py-2 border border-[#cfc0bd] rounded text-xs cursor-pointer">Cancel</button><button onClick={() => onSave(article)} className="px-4 py-2 bg-[#586f6b] text-white rounded text-xs font-semibold cursor-pointer">Save</button></div>
    </div>
  </div>;
};
