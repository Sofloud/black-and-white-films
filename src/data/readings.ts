export interface ReadingArticle {
  id: string;
  title: string;
  originalTitle?: string;
  author: string;
  authorRole: 'Critic' | 'Filmmaker' | 'Cinematographer' | 'Theorist';
  year: number;
  publication: string;
  category: 'Manifestos' | 'Auteur Theory' | 'Cinematography & Craft' | 'Realism & Ontology' | 'Editing & Montage';
  relatedMovement?: string;
  relatedAuteur?: string;
  thesisQuote: string;
  summary: string;
  keyConcepts: string[];
}

export const RECOMMENDED_READINGS: ReadingArticle[] = [
  {
    id: 'truffaut-certain-tendency-1954',
    title: 'A Certain Tendency of the French Cinema',
    originalTitle: 'Une certaine tendance du cinéma français',
    author: 'François Truffaut',
    authorRole: 'Filmmaker',
    year: 1954,
    publication: 'Cahiers du cinéma (Issue 31)',
    category: 'Auteur Theory',
    relatedMovement: 'French New Wave',
    relatedAuteur: 'François Truffaut',
    thesisQuote:
      'The film of tomorrow will not be directed by civil servants of the camera, but by artists for whom making a film is an adventure, a passionate confession.',
    summary:
      'Truffaut’s incendiary polemic that launched the French New Wave. He attacks the dominant French "tradition of quality" and literary adaptations, arguing that directors who do not write or control their visual form are mere metteurs-en-scène rather than true cinematic auteurs.',
    keyConcepts: ['Politique des Auteurs', 'Tradition of Quality Critique', 'Psychological Realism vs Screenplay Servitude']
  },
];
