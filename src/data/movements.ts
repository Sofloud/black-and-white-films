import { MovementInfo } from '../types/film';

// Movements sorted chronologically by timeline as required
export const MOVEMENTS_DATA: MovementInfo[] = [
  {
    id: 'german-expressionism',
    name: 'German Expressionism',
    era: '1919 – 1933',
    timelineStartYear: 1919,
    timelineEndYear: 1933,
    originCountry: 'Germany',
    manifesto:
      'Cinema must externalize the invisible architecture of the human psyche, transforming fear, alienation, and psychological instability into distorted spaces, impossible geometry, and expressive light and shadow.',
    coreAesthetics: [
      'Distorted Sets & Angular Expressionist Architecture',
      'Extreme Chiaroscuro & Painted Shadows',
      'Oblique Camera Angles & Unnatural Perspective',
      'Psychological Horror & Subjective Reality',
      'Theatrical Gesture, Stylized Makeup & Symbolic Composition'
    ],
    historicalContext:
      'Emerging in the aftermath of World War I during the Weimar Republic, German Expressionist cinema transformed postwar anxiety, social instability, and psychological alienation into radical visual design. Filmmakers such as Robert Wiene, F. W. Murnau, and Fritz Lang pioneered stylized mise-en-scène and atmospheric lighting in landmark films including The Cabinet of Dr. Caligari (1920), Nosferatu (1922), and Metropolis (1927). Its visual language later profoundly influenced Hollywood horror and Film Noir, particularly through the work of German-speaking émigré filmmakers.',
    visualMotif: {
      symbol: 'DISTORTED SPACE // PSYCHOLOGICAL SHADOW',
      description: 'Painted diagonal shadows, warped architectural planes, impossible perspective, and stark chiaroscuro that externalize inner psychological states.',
      accentColor: '#7C3AED'
    },
    attachments: [],
  },
  {
    id: 'soviet-montage',
    name: 'Soviet Montage',
    era: '1924 – 1930',
    timelineStartYear: 1924,
    timelineEndYear: 1930,
    originCountry: 'Soviet Union',
    manifesto:
      'Film meaning is not born within a single shot, but through the collision and dialectical synthesis of two adjacent shots.',
    coreAesthetics: [
      'Metric & Intellectual Montage',
      'Kuleshov Effect & Conceptual Juxtaposition',
      'Dynamic Geometric Diagonals',
      'Typage & Non-Individual Collective Protagonists',
      'Rhythmic Temporal Acceleration'
    ],
    historicalContext:
      'Emerging in the immediate aftermath of the Russian Revolution and Civil War, Soviet avant-garde filmmakers (Eisenstein, Vertov, Kuleshov, Pudovkin) operated with limited film stock, turning editing into the central theoretical and ideological engine of cinema.',
    visualMotif: {
      symbol: 'COLLISION // CONSTRUCTIVIST DIAGONAL',
      description: 'Dialectical shock cutting, metric temporal collisions, and constructivist geometric vectors.',
      accentColor: '#DC2626'
    },
    attachments: [],
  },
  {
    id: 'film-noir',
    name: 'Film Noir',
    era: '1940 – 1958',
    timelineStartYear: 1940,
    timelineEndYear: 1958,
    originCountry: 'United States',
    manifesto:
      'A moral underworld rendered visible through expressionistic shadow, claustrophobic fatalism, and the stark psychology of urban corruption.',
    coreAesthetics: [
      'Chiaroscuro & Hard Low-Key Lighting',
      'Venetian Blind Patterns & Deep Cage Shadows',
      'Dutch Angles & Unbalanced Compositions',
      'Voiceover Retrospection & Fatalistic Flashbacks',
      'Femmes Fatales & Cynical Anti-Heroes'
    ],
    historicalContext:
      'Catalyzed by post-WWII disillusionment, the arrival of European émigré directors escaping fascism, and hardboiled pulp fiction, Film Noir brought German Expressionist shadow architecture into American urban crime cinema.',
    visualMotif: {
      symbol: 'CHIAROSCURO // VENETIAN CAGE',
      description: 'Single-source hard lighting, deep inky voids, and diagonal venetian blind shadow bars.',
      accentColor: '#D97706'
    },
    attachments: [],
  },
  {
    id: 'italian-neorealism',
    name: 'Italian Neorealism',
    era: '1943 – 1954',
    timelineStartYear: 1943,
    timelineEndYear: 1954,
    originCountry: 'Italy',
    manifesto:
      'Cinema must descend into the bombed streets and examine real human struggle without studio glamour, artificial melodramatic resolutions, or bourgeois contrivance.',
    coreAesthetics: [
      'On-Location Street Filming',
      'Non-Professional Everyday Actors',
      'Natural Available Sunlight',
      'Episodic & Open-Ended Narrative Structures',
      'Moral & Socioeconomic Urgent Reality'
    ],
    historicalContext:
      'Following the collapse of the fascist regime and the physical destruction of Rome’s Cinecittà studios, filmmakers like Rossellini, De Sica, and Visconti picked up cameras in ruined cities to chronicle working-class survival with raw ethical integrity.',
    visualMotif: {
      symbol: 'NATURAL LIGHT // STREET CAMERA',
      description: 'Available daylight, non-professional actors, on-location pavements, and unvarnished realism.',
      accentColor: '#2563EB'
    },
    attachments: [],
  },
  {
    id: 'french-new-wave',
    name: 'French New Wave (La Nouvelle Vague)',
    era: '1958 – 1968',
    timelineStartYear: 1958,
    timelineEndYear: 1968,
    originCountry: 'France',
    manifesto:
      'The director is an auteur whose personal camera pen (la caméra-stylo) shatters classical industrial conventions in favor of existential spontaneity.',
    coreAesthetics: [
      'Discontinuous Jump Cuts & Elliptical Editing',
      'Handheld Lightweight Camera Mobility',
      'Direct Address to Camera & Meta-Cinematic Play',
      'On-Location Parisian Shooting with High-Speed Film',
      'Philosophical & Cinephilic Dialogue Homages'
    ],
    historicalContext:
      'Spurred by the fiery film criticism of Cahiers du Cinéma against the rigid "tradition of quality", young critics Truffaut, Godard, Rohmer, Chabrol, and Rivette took cameras into the Parisian boulevards to reinvent film language.',
    visualMotif: {
      symbol: 'JUMP CUT // CAMÉRA-STYLO',
      description: 'Discontinuous rhythm, handheld Éclair camera, Paris Left Bank streets, and cinephilic rebellion.',
      accentColor: '#059669'
    },
    attachments: [],
  }
];
