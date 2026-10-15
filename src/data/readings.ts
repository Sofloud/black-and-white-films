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
  {
    id: 'astruc-camera-stylo-1948',
    title: 'The Birth of a New Avant-Garde: The Caméra-Stylo',
    originalTitle: 'Naissance d’une nouvelle avant-garde: la caméra-stylo',
    author: 'Alexandre Astruc',
    authorRole: 'Critic',
    year: 1948,
    publication: 'L’Écran français',
    category: 'Manifestos',
    relatedMovement: 'French New Wave',
    thesisQuote:
      'Cinema is gradually becoming a language. By language, I mean a form in which and by which an artist can express his thoughts, however abstract they may be, or translate his obsessions exactly as he does today in an essay or a novel.',
    summary:
      'The foundational theoretical spark for modern auteur cinema. Astruc envisioned the camera as a fountain pen (caméra-stylo), freeing film from theatrical staging into a personal philosophical instrument.',
    keyConcepts: ['La Caméra-Stylo', 'Visual Language Autonomy', 'Personal Authorship']
  },
  {
    id: 'bazin-ontology-photographic-image-1945',
    title: 'The Ontology of the Photographic Image',
    originalTitle: 'Ontologie de l’image photographique',
    author: 'André Bazin',
    authorRole: 'Theorist',
    year: 1945,
    publication: 'Qu’est-ce que le cinéma?',
    category: 'Realism & Ontology',
    relatedMovement: 'Italian Neorealism',
    thesisQuote:
      'Photography does not create eternity, as art does, it embalms time, rescuing it simply from its proper corruption.',
    summary:
      'Bazin establishes the essential realist theory of cinema: unlike painting, which relies on human intervention, photography mechanicalizes recording, capturing an objective trace of reality itself. Foundational for understanding Bazin’s defense of deep focus and Italian Neorealism.',
    keyConcepts: ['Mummy Complex of Art', 'Temporal Embalming', 'Objective Mechanical Reproduction']
  },
  {
    id: 'eisenstein-dialectic-approach-1929',
    title: 'A Dialectic Approach to Film Form',
    originalTitle: 'За кадром / Монтаж',
    author: 'Sergei Eisenstein',
    authorRole: 'Filmmaker',
    year: 1929,
    publication: 'Film Form: Essays in Film Theory',
    category: 'Editing & Montage',
    relatedMovement: 'Soviet Montage',
    relatedAuteur: 'Sergei Eisenstein',
    thesisQuote:
      'Montage is an idea that arises from the collision of independent shots—shots even opposite to one another: the "dramatic" principle, not the epic one.',
    summary:
      'Eisenstein articulates his five methods of montage (metric, rhythmic, tonal, overtonal, and intellectual). He rejects linkage of shots (Pudovkin) in favor of violent juxtaposition and collision, drawing from Marxist dialectics and Japanese kanji ideograms.',
    keyConcepts: ['Collision Montage', 'Metric & Intellectual Editing', 'Marxist Dialectical Form']
  },
  {
    id: 'vertov-kinoks-revolution-1923',
    title: 'Kinoks: A Revolution',
    originalTitle: 'Киноки. Переворот',
    author: 'Dziga Vertov',
    authorRole: 'Filmmaker',
    year: 1923,
    publication: 'LEF (Left Front of the Arts)',
    category: 'Manifestos',
    relatedMovement: 'Soviet Montage',
    thesisQuote:
      'I am an eye. A mechanical eye. I, the machine, show you a world the way only I can see it. I free myself for today and forever from human immobility.',
    summary:
      'Vertov’s constructivist declaration of war on narrative theatrical cinema. He champions non-fiction documentary and the Kino-Eye apparatus, liberating vision from the physical constraints of human ocular anatomy.',
    keyConcepts: ['Kino-Eye (Kino-Glaz)', 'Liberation from Theater', 'Constructivist Mechanical Vision']
  },
  {
    id: 'zavattini-some-ideas-cinema-1953',
    title: 'Some Ideas on the Cinema',
    originalTitle: 'Alcune idee sul cinema',
    author: 'Cesare Zavattini',
    authorRole: 'Filmmaker',
    year: 1953,
    publication: 'Sight & Sound',
    category: 'Realism & Ontology',
    relatedMovement: 'Italian Neorealism',
    thesisQuote:
      'The cinema should never turn its back on reality. It must look at things as they are, without makeup, without moralizing, without spectacle.',
    summary:
      'De Sica’s longtime screenwriter and ideological architect of Italian Neorealism explains why showing ninety minutes in the life of a man to whom nothing happens is more profound than Hollywood melodrama. Art must find the heroic in the everyday.',
    keyConcepts: ['Pedinamento (Shadowing Reality)', 'Rejection of Hollywood Spectacle', 'Moral Urgency of the Street']
  },
  {
    id: 'schrader-notes-on-film-noir-1972',
    title: 'Notes on Film Noir',
    author: 'Paul Schrader',
    authorRole: 'Filmmaker',
    year: 1972,
    publication: 'Film Comment (Vol. 8, No. 1)',
    category: 'Manifestos',
    relatedMovement: 'Film Noir',
    thesisQuote:
      'Film noir is not a genre. It is an era of film history defined more by tone and mood than by setting and characters.',
    summary:
      'The seminal analytical essay mapping the four catalytic forces of American Film Noir: post-war disillusionment, post-war realism, German expressionist émigrés, and the hard-boiled literary tradition. Breaks Noir into three distinct visual and thematic phases.',
    keyConcepts: ['Tone over Genre', 'Post-War Claustrophobia', 'Chiaroscuro Psychological Space']
  },
  {
    id: 'alton-painting-with-light-1949',
    title: 'Painting with Light: The Mystery of the Shadow',
    author: 'John Alton',
    authorRole: 'Cinematographer',
    year: 1949,
    publication: 'Macmillan Publishing / American Society of Cinematographers',
    category: 'Cinematography & Craft',
    relatedMovement: 'Film Noir',
    thesisQuote:
      'Anyone can illuminate a room; it takes an artist to create suspense, terror, and romance using the absence of light.',
    summary:
      'The definitive treatise on black-and-white cinematography by the legendary Director of Photography. Alton details hard single-key lighting, rim lighting, floor-level uplighting, and the psychological architecture of shadow in crime melodrama.',
    keyConcepts: ['Single-Source Key Light', 'Negative Space & Shadows', 'Atmospheric Uplighting']
  },
  {
    id: 'godard-montage-my-fine-care-1956',
    title: 'Montage, My Fine Care',
    originalTitle: 'Montage, mon beau souci',
    author: 'Jean-Luc Godard',
    authorRole: 'Filmmaker',
    year: 1956,
    publication: 'Cahiers du cinéma (Issue 65)',
    category: 'Editing & Montage',
    relatedMovement: 'French New Wave',
    relatedAuteur: 'Jean-Luc Godard',
    thesisQuote:
      'If directing is a look, montage is a heartbeat. To anticipate is the characteristic of both, but what one seeks to foresee in space, the other seeks in time.',
    summary:
      'Godard dismantles the false dichotomy between mise-en-scène and montage, arguing that directing and cutting are unified acts of rhythmic consciousness. Previews the editing philosophy that would explode in Breathless.',
    keyConcepts: ['Directing as Space, Montage as Time', 'Rhythmic Anticipation', 'The Gaze and the Cut']
  },
  {
    id: 'wood-hitchcock-films-1965',
    title: 'Why We Take Hitchcock Seriously',
    author: 'Robin Wood',
    authorRole: 'Critic',
    year: 1965,
    publication: 'Hitchcock’s Films (Studio Vista)',
    category: 'Auteur Theory',
    relatedMovement: 'Film Noir',
    relatedAuteur: 'Alfred Hitchcock',
    thesisQuote:
      'Hitchcock’s films are not merely clever technical thrillers; they are among the profoundest moral explorations of guilt, order, and human vulnerability in modern art.',
    summary:
      'The book and opening chapter that elevated Alfred Hitchcock from commercial entertainer to serious academic artist in English-language film criticism, applying Leavisite moral analysis to Vertigo and Rear Window.',
    keyConcepts: ['Moral Ambiguity of Suspense', 'Spectator Complicity', 'Architectural Form as Psychology']
  },
  {
    id: 'nykvist-reverence-for-light-1997',
    title: 'Reverence for Light: On Filming the Human Face',
    originalTitle: 'Vördnad för ljuset',
    author: 'Sven Nykvist',
    authorRole: 'Cinematographer',
    year: 1997,
    publication: 'Bonniers / ASC Retrospective',
    category: 'Cinematography & Craft',
    relatedAuteur: 'Ingmar Bergman',
    thesisQuote:
      'The truth is in the eyes. If you light a face artificially, the soul disappears. My entire work with Bergman was a struggle to eliminate false light.',
    summary:
      'Bergman’s legendary cinematographer reflects on thirty years of collaboration, detailing the radical decision to banish direct studio key lights in favor of indirect, soft bounce boards and Scandinavian window daylight in Persona and Cries and Whispers.',
    keyConcepts: ['Indirect Bounced Daylight', 'The Facial Landscape', 'Elimination of Studio Artificiality']
  },
  {
    id: 'wenders-logic-of-images-1988',
    title: 'The Logic of Images: Walking and Filming',
    originalTitle: 'Die Logik der Bilder',
    author: 'Wim Wenders',
    authorRole: 'Filmmaker',
    year: 1988,
    publication: 'Faber and Faber',
    category: 'Manifestos',
    relatedAuteur: 'Wim Wenders',
    thesisQuote:
      'Stories exist to make us endure the places we pass through. But first comes the place, with its unique light, its silence, and its geometry.',
    summary:
      'Wenders meditates on the American road movie, collaborating with Robby Müller, and the tension between narrative drive and observational contemplation in Paris, Texas and Alice in the Cities.',
    keyConcepts: ['Topography Precedes Narrative', 'The Road as Cinema', 'Observational Horizon']
  }
];
