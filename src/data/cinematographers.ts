import { CinematographerInfo } from '../types/film';

export const CINEMATOGRAPHERS_DATA: CinematographerInfo[] = [
  {
    id: 'kazuo-miyagawa',
    name: 'Kazuo Miyagawa',
    lifespan: '1908 – 1999',
    nationality: 'Japan',
    lightingStyle:
      'Pioneered pointing the camera directly into the sun through forest canopies using giant mirrors to bounce natural light; lush tonal greys and delicate wet ink wash textures.',
    cameraPhilosophy:
      'The camera should move as gracefully as a dancer, capturing nature and human passion as inseparable forces.',
    notableCollaborators: ['Akira Kurosawa', 'Kenji Mizoguchi', 'Yasujirō Ozu'],
    keyTechnique: 'Mirror-reflected sunbeam lighting & fluid forest tracking'
  },
  {
    id: 'sven-nykvist',
    name: 'Sven Nykvist',
    lifespan: '1922 – 2006',
    nationality: 'Sweden',
    lightingStyle:
      'Master of indirect, bounced soft light and natural Scandinavian daylight; eliminated harsh studio backlights in favor of quiet, luminous human facial contours.',
    cameraPhilosophy:
      'The human face is the most interesting landscape in cinema. To illuminate a face is to reveal the interior truth of the soul.',
    notableCollaborators: ['Ingmar Bergman', 'Andrei Tarkovsky', 'Woody Allen', 'Roman Polanski'],
    keyTechnique: 'Soft indirect bounced lighting & psychological two-shot intimacy'
  },
  {
    id: 'raoul-coutard',
    name: 'Raoul Coutard',
    lifespan: '1924 – 2016',
    nationality: 'France',
    lightingStyle:
      'Former photojournalist who adapted high-speed Kodak Tri-X 35mm still film stock for motion picture cameras; bounced light from photoflood bulbs pinned onto ceilings.',
    cameraPhilosophy:
      'Liberate the camera from heavy tripods and industrial lighting rigs; follow the actors naturally as they breathe and move through real world spaces.',
    notableCollaborators: ['Jean-Luc Godard', 'François Truffaut', 'Costa-Gavras'],
    keyTechnique: 'Handheld Éclair Cameflex & ceiling-bounced photoflood lighting'
  },
  {
    id: 'robby-muller',
    name: 'Robby Müller',
    lifespan: '1940 – 2018',
    nationality: 'Netherlands',
    lightingStyle:
      'Known as the "High Priest of Natural Light"; embraced neon greens, incandescent tungsten golds, twilight cyan skies, and roadside motels with minimal artificial enhancement.',
    cameraPhilosophy:
      'Do not fight the existing light of the location. Let the color of sodium vapor and car headlights paint the emotion of the journey.',
    notableCollaborators: ['Wim Wenders', 'Jim Jarmusch', 'Lars von Trier'],
    keyTechnique: 'Available low-light neon palette & lateral tracking road views'
  },
  {
    id: 'robert-burks',
    name: 'Robert Burks',
    lifespan: '1909 – 1968',
    nationality: 'United States',
    lightingStyle:
      'Hitchcock’s legendary visual architect; master of rich three-strip Technicolor, deep focus, precise shadow geometry, and dramatic chromatic tension.',
    cameraPhilosophy:
      'Every camera move must carry narrative psychological intent, tightening suspense and placing the spectator directly in the protagonist’s shoes.',
    notableCollaborators: ['Alfred Hitchcock'],
    keyTechnique: 'The Vertigo dolly-zoom (trombone shot) & subjective POV framing'
  },
  {
    id: 'lukasz-zal',
    name: 'Łukasz Żal',
    lifespan: '1981 – Present',
    nationality: 'Poland',
    lightingStyle:
      'Luminous monochrome and deliberate exposure control; high-contrast chiaroscuro with velvety shadows and silvery midtones.',
    cameraPhilosophy:
      'Frame characters low in the 1.37:1 Academy frame with expansive head-room to evoke the weight of history, religion, and sky pressing down on mortal beings.',
    notableCollaborators: ['Paweł Pawlikowski', 'Jonathan Glazer', 'Charlie Kaufman'],
    keyTechnique: '1.37:1 Academy head-room composition & pristine static monochrome'
  },
  {
    id: 'gianni-di-venanzo',
    name: 'Gianni Di Venanzo',
    lifespan: '1920 – 1966',
    nationality: 'Italy',
    lightingStyle:
      'Radiant, overexposed white daylight juxtaposed with inky black shadows; rendered modernist alienation and surreal dreamscapes with crisp sculptural clarity.',
    cameraPhilosophy:
      'Light is not just illumination; it is a manifestation of the protagonist’s internal psychological crisis and moral clarity.',
    notableCollaborators: ['Federico Fellini', 'Michelangelo Antonioni', 'Francesco Rosi'],
    keyTechnique: 'High-key white overexposure & dynamic multi-plane wide angle staging'
  },
  {
    id: 'otello-martelli',
    name: 'Otello Martelli',
    lifespan: '1902 – 2000',
    nationality: 'Italy',
    lightingStyle:
      'Pioneered the transition from harsh Italian neorealist street grit to Fellini’s enchanted, dreamlike nighttime carnivals and dawn seashores.',
    cameraPhilosophy:
      'Capture the poetic mystery of the human condition when night descends upon the open road.',
    notableCollaborators: ['Federico Fellini', 'Roberto Rossellini', 'Vittorio De Sica'],
    keyTechnique: 'Atmospheric nocturnal depth & poetic circus chiaroscuro'
  },
  {
    id: 'peter-deming',
    name: 'Peter Deming',
    lifespan: '1957 – Present',
    nationality: 'United States',
    lightingStyle:
      'Hyper-saturated, glossy, hallucinatory noir lighting; deep velvety blacks, sodium yellow streetlamps, and unsettling surreal clarity.',
    cameraPhilosophy:
      'Create a seductive surface that slowly reveals an unfathomable, sinister reality lurking just around the corner.',
    notableCollaborators: ['David Lynch', 'Sam Raimi', 'Wes Craven'],
    keyTechnique: 'Subjective slow camera creep & saturated nocturnal noir lighting'
  },
  {
    id: 'frederick-elmes',
    name: 'Frederick Elmes',
    lifespan: '1946 – Present',
    nationality: 'United States',
    lightingStyle:
      'Tactile industrial shadows, amber glow, deep monochromatic textures, and vivid primary color pops inside dark rooms.',
    cameraPhilosophy:
      'Give shadows weight and tangible physical presence, transforming architectural interiors into psychological realms.',
    notableCollaborators: ['David Lynch', 'Jim Jarmusch', 'Ang Lee'],
    keyTechnique: 'Industrial tactile blacks & vivid neo-noir chromatic accents'
  },
  {
    id: 'asakazu-nakai',
    name: 'Asakazu Nakai',
    lifespan: '1901 – 1988',
    nationality: 'Japan',
    lightingStyle:
      'Extreme telephoto compression, multi-camera coordinated tracking, and filming through torrents of mud, rain, and galloping cavalry.',
    cameraPhilosophy:
      'Keep the camera in the heart of battle; telephoto lenses flatten distance and bring the spectator into brutal physical combat.',
    notableCollaborators: ['Akira Kurosawa', 'Mikio Naruse'],
    keyTechnique: 'Multi-camera telephoto compression & kinetic weather staging'
  },
  {
    id: 'gunnar-fischer',
    name: 'Gunnar Fischer',
    lifespan: '1910 – 2011',
    nationality: 'Sweden',
    lightingStyle:
      'Expressionistic, high-contrast black-and-white lighting with stark silhouetted figures against stormy Scandinavian skies.',
    cameraPhilosophy:
      'Every frame should have the graphic power of a medieval woodcut, delineating the battle between life and death.',
    notableCollaborators: ['Ingmar Bergman'],
    keyTechnique: 'Medieval woodcut silhouette lighting & stark sky horizons'
  },
  {
    id: 'eduard-tisse',
    name: 'Eduard Tisse',
    lifespan: '1897 – 1961',
    nationality: 'Soviet Union / Latvia',
    lightingStyle:
      'Dynamic low-angle compositions, heroic diagonal axes, crisp outdoor daylight, and graphic geometric clarity designed for montage juxtaposition.',
    cameraPhilosophy:
      'The camera is an instrument of revolutionary construction, framing the clash of human masses and machine structures.',
    notableCollaborators: ['Sergei Eisenstein'],
    keyTechnique: 'Low-angle diagonal monumentality & rhythmic montage setups'
  },
  {
    id: 'henri-decae',
    name: 'Henri Decaë',
    lifespan: '1915 – 1987',
    nationality: 'France',
    lightingStyle:
      'Pioneered lightweight location filming in Paris, using real streetlights, natural grey daylight, and unobtrusive fluid dollies.',
    cameraPhilosophy:
      'Do not let the camera call attention to itself; let the city and the adolescent face unfold with authentic documentary poetry.',
    notableCollaborators: ['François Truffaut', 'Jean-Pierre Melville', 'Claude Chabrol'],
    keyTechnique: 'Natural Paris daylight mobility & iconic freeze-frame telephoto'
  },
  {
    id: 'john-alton',
    name: 'John Alton',
    lifespan: '1901 – 1996',
    nationality: 'Hungary / United States',
    lightingStyle:
      'Legendary author of "Painting with Light"; master of single-source hard key lighting, silhouettes, floor-level uplighting, and deep impenetrable shadows.',
    cameraPhilosophy:
      'It’s not what you light, it’s what you keep in darkness that creates suspense and emotional resonance.',
    notableCollaborators: ['Anthony Mann', 'Joseph H. Lewis', 'Vincente Minnelli'],
    keyTechnique: 'Single-source hard light & low-angle silhouette architecture'
  },
  {
    id: 'nicholas-musuraca',
    name: 'Nicholas Musuraca',
    lifespan: '1892 – 1975',
    nationality: 'Italy / United States',
    lightingStyle:
      'RKO’s ultimate shadow sculptor; dense diagonal slashes of light, deep blacks, wet pavement glisten, and terrifying unseen voids.',
    cameraPhilosophy:
      'The monster or the threat is always more frightening when veiled in the pitch black shadows of the imagination.',
    notableCollaborators: ['Jacques Tourneur', 'Robert Siodmak'],
    keyTechnique: 'Diagonal venetian shadow slashes & deep atmospheric black'
  }
];
