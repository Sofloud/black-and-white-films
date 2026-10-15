import { Film } from '../types/film';



export const INITIAL_FILMS: Film[] = [

  // ==========================================

  // SOVIET MONTAGE (1924–1930)

  // ==========================================

  {

    id: 'battleship-potemkin-1925',

    title: 'Battleship Potemkin',

    originalTitle: 'Броненосец «Потёмкин»',

    releaseYear: 1925,

    director: 'Sergei Eisenstein',

    writer: 'Nina Agadzhanova, Sergei Eisenstein',

    cinematographer: 'Eduard Tisse',

    cinematographerId: 'eduard-tisse',

    genres: ['Historical Drama', 'Silent', 'Propaganda', 'War'],

    movementId: 'soviet-montage',

    movementName: 'Soviet Montage',

    runtimeMinutes: 75,

    aspectRatio: '1.33:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_QL75_UY562_CR9,0,380,562_.jpg',

    synopsis:

      'In the 1905 Russian Revolution, the oppressed sailors of the imperial battleship Potemkin mutiny against brutal officers over spoiled meat, sparking a civilian uprising in the Black Sea port of Odessa that is violently crushed by tsarist troops.'

  },

  {

    id: 'man-with-a-movie-camera-1929',

    title: 'Man with a Movie Camera',

    originalTitle: 'Человек с киноаппаратом',

    releaseYear: 1929,

    director: 'Dziga Vertov',

    writer: 'Dziga Vertov',

    cinematographer: 'Mikhail Kaufman',

    genres: ['Documentary', 'Avant-Garde', 'Experimental', 'Silent'],

    movementId: 'soviet-montage',

    movementName: 'Soviet Montage',

    runtimeMinutes: 68,

    aspectRatio: '1.33:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTcyOTk0MDY2OF5BMl5BanBnXkFtZTgwNzYyMTM2MTE@._V1_QL75_UX380_CR0,7,380,562_.jpg',

    synopsis:

      'A lyrical, non-narrative portrait of Soviet urban life from dawn to dusk across Moscow, Kyiv, and Odesa, chronicled by an intrepid cameraman who reveals the technical mechanics of the camera itself.'

  },



  // ==========================================

  // FILM NOIR (1940–1958)

  // ==========================================

  {

    id: 'shadow-of-a-doubt-1943',

    title: 'Shadow of a Doubt',

    releaseYear: 1943,

    director: 'Alfred Hitchcock',

    directorId: 'hitchcock',

    writer: 'Thornton Wilder, Sally Benson, Alma Reville',

    cinematographer: 'Joseph Valentine',

    genres: ['Film Noir', 'Psychological Thriller', 'Mystery'],

    movementId: 'film-noir',

    movementName: 'Film Noir',

    runtimeMinutes: 108,

    aspectRatio: '1.37:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDFhMzBlYzctMDhkOC00OTFiLTgyYzEtZTBkNmQzNGRlMmNlXkEyXkFqcGc@._V1_SX300.jpg',

    synopsis:

      'Bored small-town teenager Charlie Newton is thrilled when her beloved, charismatic Uncle Charlie comes to visit California, until she gradually uncovers dark clues that he is the elusive "Merry Widow Murderer".'

  },

  // ==========================================

  // ITALIAN NEOREALISM (1943–1954)

  // ==========================================

  {

    id: 'bicycle-thieves-1948',

    title: 'Bicycle Thieves',

    originalTitle: 'Ladri di biciclette',

    releaseYear: 1948,

    director: 'Vittorio De Sica',

    writer: 'Cesare Zavattini, Vittorio De Sica, Suso Cecchi d’Amico',

    cinematographer: 'Carlo Montuori',

    genres: ['Italian Neorealism', 'Drama', 'Social Realism'],

    movementId: 'italian-neorealism',

    movementName: 'Italian Neorealism',

    runtimeMinutes: 89,

    aspectRatio: '1.37:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjIzMzAyMzg1Nl5BMl5BanBnXkFtZTgwMzMyNzk0MTE@._V1_QL75_UY562_CR5,0,380,562_.jpg',

    synopsis:

      'In impoverished post-war Rome, an unemployed father finally secures a job hanging advertising posters, but his essential bicycle is stolen on his first day, sending him and his young son on a desperate quest across the city.'

  },



  // ==========================================

  // FRENCH NEW WAVE (1958–1968)

  // ==========================================

  {

    id: 'the-400-blows-1959',

    title: 'The 400 Blows',

    originalTitle: 'Les Quatre Cents Coups',

    releaseYear: 1959,

    director: 'François Truffaut',

    directorId: 'truffaut',

    writer: 'François Truffaut, Marcel Moussy',

    cinematographer: 'Henri Decaë',

    cinematographerId: 'henri-decae',

    genres: ['French New Wave', 'Coming-of-Age Drama', 'Autobiographical'],

    movementId: 'french-new-wave',

    movementName: 'French New Wave',

    runtimeMinutes: 99,

    aspectRatio: '2.35:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOTU3YTM0YzQtMmFlOS00OTIxLWFmZjctMDJkOGQxNTVhODM3XkEyXkFqcGc@._V1_QL75_UY562_CR22,0,380,562_.jpg',

    synopsis:

      'Misunderstood Paris schoolboy Antoine Doinel, alienated by uncaring parents and strict authoritarian teachers, descends into petty delinquency and truancy before being sent to a juvenile observation center.'

  },

  {

    id: 'breathless-1960',

    title: 'Breathless',

    originalTitle: 'À bout de souffle',

    releaseYear: 1960,

    director: 'Jean-Luc Godard',

    directorId: 'godard',

    writer: 'Jean-Luc Godard, François Truffaut',

    cinematographer: 'Raoul Coutard',

    cinematographerId: 'raoul-coutard',

    genres: ['French New Wave', 'Crime Drama', 'Romantic Noir'],

    movementId: 'french-new-wave',

    movementName: 'French New Wave',

    runtimeMinutes: 90,

    aspectRatio: '1.37:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZGI5MWNjYmEtNzUxZC00YTI3LWE5MzctZTdhYjJkMGMxYzI3XkEyXkFqcGc@._V1_QL75_UY562_CR14,0,380,562_.jpg',

    synopsis:

      'A charming, impulsive car thief and Bogart-worshipping criminal murders a motorcycle policeman and flees to Paris, where he attempts to persuade an American journalism student to escape with him to Rome.'

  },



  // ==========================================

  // AKIRA KUROSAWA

  // ==========================================

  {

    id: 'rashomon-1950',

    title: 'Rashomon',

    originalTitle: '羅生門',

    releaseYear: 1950,

    director: 'Akira Kurosawa',

    directorId: 'kurosawa',

    writer: 'Akira Kurosawa, Shinobu Hashimoto',

    cinematographer: 'Kazuo Miyagawa',

    cinematographerId: 'kazuo-miyagawa',

    genres: ['Psychological Drama', 'Mystery', 'Period Drama'],

    runtimeMinutes: 88,

    aspectRatio: '1.37:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTk1MDU5MjQ5NF5BMl5BanBnXkFtZTgwMDM2OTE4MzE@._V1_QL75_UY562_CR8,0,380,562_.jpg',

    synopsis:

      'In 8th-century Kyoto, sheltering beneath the crumbling Rashomon gate during a torrential rainstorm, a priest, a woodcutter, and a commoner recount four conflicting, self-serving testimonies regarding the murder of a samurai.'

  },

  {

    id: 'seven-samurai-1954',

    title: 'Seven Samurai',

    originalTitle: '七人の侍',

    releaseYear: 1954,

    director: 'Akira Kurosawa',

    directorId: 'kurosawa',

    writer: 'Akira Kurosawa, Shinobu Hashimoto, Hideo Oguni',

    cinematographer: 'Asakazu Nakai',

    cinematographerId: 'asakazu-nakai',

    genres: ['Epic Action', 'Historical Drama', 'Humanist'],

    runtimeMinutes: 207,

    aspectRatio: '1.37:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjliMWExOTMtZDQ3ZS00NWU3LWIyN2EtMjllNzk3ZTNlYzg4XkEyXkFqcGc@._V1_QL75_UY562_CR9,0,380,562_.jpg',

    synopsis:

      'A desperate farming village plagued by bandits hires seven masterless samurai (ronin) for mere bowls of white rice to protect their harvest and teach them self-defense.'

  },

  {

    id: 'high-and-low-1963',

    title: 'High and Low',

    originalTitle: '天国と地獄',

    releaseYear: 1963,

    director: 'Akira Kurosawa',

    directorId: 'kurosawa',

    writer: 'Akira Kurosawa, Hideo Oguni, Ryūzō Kikushima, Eijirō Hisaita',

    cinematographer: 'Asakazu Nakai',

    cinematographerId: 'asakazu-nakai',

    genres: ['Police Procedural', 'Crime Drama', 'Social Realism'],

    runtimeMinutes: 143,

    aspectRatio: '2.35:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMGJiNzllYjktODAzNS00OGUzLTlmY2MtMjA2ZTZhYTY1OTc4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg',

    synopsis:

      'A wealthy shoe company executive mortgaging everything for a corporate buyout is blackmailed when kidnappers accidentally abduct his chauffeur’s son instead of his own.'

  },



  // ==========================================

  // INGMAR BERGMAN

  // ==========================================

  {

    id: 'the-seventh-seal-1957',

    title: 'The Seventh Seal',

    originalTitle: 'Det sjunde inseglet',

    releaseYear: 1957,

    director: 'Ingmar Bergman',

    directorId: 'bergman',

    writer: 'Ingmar Bergman',

    cinematographer: 'Gunnar Fischer',

    cinematographerId: 'gunnar-fischer',

    genres: ['Philosophical Drama', 'Medieval Fantasy', 'Existential'],

    runtimeMinutes: 96,

    aspectRatio: '1.37:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZDlmYTkzOWUtODQ0MS00MmM4LWE3ZjMtYTEwNGUwMmJkYzIxXkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg',

    synopsis:

      'A disillusioned medieval knight returning from the Crusades to plague-ravaged Sweden challenges the cloaked figure of Death to a game of chess to stall for time and seek proof of God’s existence.'

  },

  {

    id: 'persona-1966',

    title: 'Persona',

    releaseYear: 1966,

    director: 'Ingmar Bergman',

    directorId: 'bergman',

    writer: 'Ingmar Bergman',

    cinematographer: 'Sven Nykvist',

    cinematographerId: 'sven-nykvist',

    genres: ['Psychological Drama', 'Avant-Garde', 'Modernist'],

    runtimeMinutes: 85,

    aspectRatio: '1.37:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYTRhNzkzMDktZDNlNi00MDIwLWFiNjAtNTlmYjZjYWZlMTEzXkEyXkFqcGc@._V1_QL75_UX380_CR0,8,380,562_.jpg',

    synopsis:

      'An acclaimed stage actress falls completely mute during a performance of Electra and is sent to an isolated seaside cottage under the care of a devoted nurse, whose identities blur.'

  },

  {

    id: 'cries-and-whispers-1972',

    title: 'Cries and Whispers',

    originalTitle: 'Viskningar och rop',

    releaseYear: 1972,

    director: 'Ingmar Bergman',

    directorId: 'bergman',

    writer: 'Ingmar Bergman',

    cinematographer: 'Sven Nykvist',

    cinematographerId: 'sven-nykvist',

    genres: ['Psychological Drama', 'Period Piece', 'Tragedy'],

    runtimeMinutes: 91,

    aspectRatio: '1.66:1',

    colorProcess: 'Color',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZGJkMWJiZjYtZTZiMC00MDJmLWIxMDEtZDkxMzYzYTAyODZkXkEyXkFqcGc@._V1_QL75_UX380_CR0,7,380,562_.jpg',

    synopsis:

      'In a 19th-century Swedish manor house, a woman dies painfully of cancer while her two emotionally detached sisters and a devoted faithful maid confront their inner repressions and cruelty.'

  },



  // ==========================================

  // DAVID LYNCH

  // ==========================================

  {

    id: 'blue-velvet-1986',

    title: 'Blue Velvet',

    releaseYear: 1986,

    director: 'David Lynch',

    directorId: 'lynch',

    writer: 'David Lynch',

    cinematographer: 'Frederick Elmes',

    cinematographerId: 'frederick-elmes',

    genres: ['Neo-Noir', 'Psychological Mystery', 'Surrealist Drama'],

    runtimeMinutes: 120,

    aspectRatio: '2.35:1',

    colorProcess: 'Color',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzkwZGUyYjQtM2QyOC00MTBjLWE0NGYtMTZmOGM5MjI0Mzg0XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg',

    synopsis:

      'After finding a severed human ear in an overgrown meadow, a college student is drawn into a criminal underworld of voyeurism, a tormented nightclub singer, and a psychopathic criminal in idyllic Lumberton.'

  },

  {

    id: 'mulholland-drive-2001',

    title: 'Mulholland Drive',

    releaseYear: 2001,

    director: 'David Lynch',

    directorId: 'lynch',

    writer: 'David Lynch',

    cinematographer: 'Peter Deming',

    cinematographerId: 'peter-deming',

    genres: ['Neo-Noir', 'Psychological Thriller', 'Surrealism', 'Mystery'],

    runtimeMinutes: 147,

    aspectRatio: '1.85:1',

    colorProcess: 'Color',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNjliY2UwMjQtYjVlNi00NzExLTg1MDMtMjE2OTYwYjI0NTcxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',

    synopsis:

      'Following a car crash on Mulholland Drive, an amnesiac brunette and a perky aspiring Hollywood actress search for her identity, descending into a waking nightmare of illusory desire and shattered ambition.'

  },

  {

    id: 'eraserhead-1977',

    title: 'Eraserhead',

    releaseYear: 1977,

    director: 'David Lynch',

    directorId: 'lynch',

    writer: 'David Lynch',

    cinematographer: 'Frederick Elmes',

    cinematographerId: 'frederick-elmes',

    genres: ['Surrealist Horror', 'Body Horror', 'Avant-Garde'],

    runtimeMinutes: 89,

    aspectRatio: '1.37:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGYxNzZkYzAtMDExMS00MzE1LTg5ZGItMTgzMzJhZWMyNTBjXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg',

    synopsis:

      'Henry Spencer struggles to survive in a desolate industrial landscape while caring for a crying, grotesque mutant child and slipping into surreal radiator dreams.'

  },



  // ==========================================

  // ALFRED HITCHCOCK

  // ==========================================

  {

    id: 'rear-window-1954',

    title: 'Rear Window',

    releaseYear: 1954,

    director: 'Alfred Hitchcock',

    directorId: 'hitchcock',

    writer: 'John Michael Hayes',

    cinematographer: 'Robert Burks',

    cinematographerId: 'robert-burks',

    genres: ['Mystery', 'Suspense Thriller', 'Psychological Thriller'],

    runtimeMinutes: 112,

    aspectRatio: '1.66:1',

    colorProcess: 'Color',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BODZhOWI1ODgtMzdiOS00YjNkLTgwOGUtYmIyZDg5ZmQwMzQ1XkEyXkFqcGc@._V1_QL75_UY562_CR2,0,380,562_.jpg',

    synopsis:

      'Confinced to a wheelchair with a broken leg in his Greenwich Village apartment during a blistering heatwave, photojournalist L.B. Jefferies spies on his courtyard neighbors and suspects one has murdered his wife.'

  },

  {

    id: 'vertigo-1958',

    title: 'Vertigo',

    releaseYear: 1958,

    director: 'Alfred Hitchcock',

    directorId: 'hitchcock',

    writer: 'Alec Coppel, Samuel A. Taylor',

    cinematographer: 'Robert Burks',

    cinematographerId: 'robert-burks',

    genres: ['Psychological Thriller', 'Romantic Noir', 'Mystery'],

    runtimeMinutes: 128,

    aspectRatio: '1.85:1',

    colorProcess: 'Color',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzEyZTUxMWItMGVhYy00Y2NlLTljYTMtYzBmMzI1YmUyMDBkXkEyXkFqcGc@._V1_QL75_UX380_CR0,13,380,562_.jpg',

    synopsis:

      'A retired San Francisco detective suffering from acrophobia and vertigo is hired to follow his friend’s suicidal wife, becoming consumed by romantic obsession and ghostly illusions.'

  },

  {

    id: 'psycho-1960',

    title: 'Psycho',

    releaseYear: 1960,

    director: 'Alfred Hitchcock',

    directorId: 'hitchcock',

    writer: 'Joseph Stefano',

    cinematographer: 'John L. Russell',

    genres: ['Psychological Horror', 'Suspense Thriller', 'Proto-Slasher'],

    runtimeMinutes: 109,

    aspectRatio: '1.85:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg',

    synopsis:

      'A Phoenix secretary on the run with stolen money stops at the remote Bates Motel, run by a soft-spoken young taxidermist who lives under the domineering shadow of his mother.'

  },



  // ==========================================

  // PAWEŁ PAWLIKOWSKI

  // ==========================================



  // ==========================================

  // FEDERICO FELLINI

  // ==========================================



  // ==========================================

  // WIM WENDERS

  // ==========================================

  {

    id: 'paris-texas-1984',

    title: 'Paris, Texas',

    releaseYear: 1984,

    director: 'Wim Wenders',

    directorId: 'wenders',

    writer: 'Sam Shepard, L.M. Kit Carson',

    cinematographer: 'Robby Müller',

    cinematographerId: 'robby-muller',

    genres: ['Road Drama', 'Humanist Drama', 'American Odyssey'],

    runtimeMinutes: 145,

    aspectRatio: '1.66:1',

    colorProcess: 'Color',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYWY5YzE4YmUtZWFhMS00YjYxLWI5ZGUtNDEyNmMzNDVjMGEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,12,380,562_.jpg',

    synopsis:

      'A silent, disheveled man emerges from the desolate Texas desert after four years of disappearance, reconnects with his young son in Los Angeles, and sets out to locate his missing estranged wife.'

  },

  {

    id: 'wings-of-desire-1987',

    title: 'Wings of Desire',

    originalTitle: 'Der Himmel über Berlin',

    releaseYear: 1987,

    director: 'Wim Wenders',

    directorId: 'wenders',

    writer: 'Wim Wenders, Peter Handke',

    cinematographer: 'Henri Alekan',

    genres: ['Poetic Fantasy', 'Existential Drama', 'Romance'],

    runtimeMinutes: 128,

    aspectRatio: '1.66:1',

    colorProcess: 'Color & Black/White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYTUwY2EyMDktMGI0Ny00MDNlLWE0ODMtZWIwOGNhNmY1OWIwXkEyXkFqcGc@._V1_QL75_UX380_CR0,15,380,562_.jpg',

    synopsis:

      'Immortal, invisible angels watch over the citizens of divided Cold War Berlin, listening to their thoughts until one angel falls in love with a French trapeze artist and longs for mortal flesh.'

  },


  {
    id: 'metropolis-1927',
    title: 'Metropolis',
    originalTitle: 'Metropolis',
    releaseYear: 1927,
    director: 'Fritz Lang',
    writer: 'Thea von Harbou, Fritz Lang',
    cinematographer: 'Karl Freund, Günther Rittau',
    genres: ['Science Fiction', 'Expressionist', 'Dystopian', 'Silent'],
    movementId: 'german-expressionism',
    movementName: 'German Expressionism',
    runtimeMinutes: 153,
    aspectRatio: '1.33:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://images.vpro.nl/62x97kjifwuu/w_2000/pfn_fughkpmrp0g.jpg',
    synopsis: 'In a futuristic city divided between wealthy rulers and underground workers, a young heir discovers the brutal machinery sustaining their society.'
  },

  {
    id: 'perfect-days-2023',
    title: 'Perfect Days',
    originalTitle: 'Perfect Days',
    releaseYear: 2023,
    director: 'Wim Wenders',
    writer: 'Wim Wenders, Takuma Takasaki',
    cinematographer: 'Franz Lustig',
    genres: ['Drama', 'Slice of Life'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 123,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://www.nippon.com/en/ncommon/contents/japan-topics/2541413/2541413.jpg',
    synopsis: 'A Tokyo toilet cleaner finds quiet meaning in a carefully ordered life built around work, music, books, photography, and small daily encounters.'
  },


  {
    id: 'elevator-to-the-gallows-1958',
    title: 'Elevator to the Gallows',
    originalTitle: 'Ascenseur pour l’échafaud',
    releaseYear: 1958,
    director: 'Louis Malle',
    writer: 'Roger Nimier, Louis Malle, Noël Calef',
    cinematographer: 'Henri Decaë',
    genres: ['Crime', 'Film Noir', 'Thriller'],
    movementId: 'french-new-wave',
    movementName: 'French New Wave',
    runtimeMinutes: 91,
    aspectRatio: '1.66:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://cdn.posteritati.com/posters/000/000/077/366/elevator-to-the-gallows-md-web.jpg',
    synopsis: 'A murder intended to look perfect begins to unravel when a chance mishap traps the killer in an elevator.'
  },




  {
    id: 'beauty-and-the-beast-1946',
    title: 'Beauty and the Beast',
    originalTitle: 'La Belle et la Bête',
    releaseYear: 1946,
    director: 'Jean Cocteau',
    directorId: 'cocteau',
    writer: 'Jean Cocteau',
    cinematographer: 'Henri Alekan',
    genres: ['Fantasy', 'Romance', 'Surrealism'],
    movementId: 'surrealism',
    movementName: 'Surrealism',
    runtimeMinutes: 93,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZWJjZDNjMTMtYzJlYy00MDFhLWE0ZWQtYmNkYTQ0NmQzNDU4XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg',
    synopsis: 'A young woman agrees to live with a mysterious beast in his enchanted castle and gradually discovers the humanity behind his monstrous appearance.'
  },

  {
    id: 'orpheus-1950',
    title: 'Orpheus',
    originalTitle: 'Orphée',
    releaseYear: 1950,
    director: 'Jean Cocteau',
    directorId: 'cocteau',
    writer: 'Jean Cocteau',
    cinematographer: 'Nicolas Hayer',
    genres: ['Drama', 'Fantasy', 'Surrealism', 'Romance'],
    movementId: 'surrealism',
    movementName: 'Surrealism',
    runtimeMinutes: 95,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNTIwMzliN2ItMzYxYy00MTU3LTk4MDQtNDhkNWRkY2FjNWU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    synopsis: 'In post-war Paris, celebrated poet Orpheus becomes obsessed with a mysterious Princess—Death herself—and journeys through liquid mirrors into the Underworld to retrieve his lost love.'
  },








  {
    id: 'rebecca-1940',
    title: 'Rebecca',
    originalTitle: 'Rebecca',
    releaseYear: 1940,
    director: 'Alfred Hitchcock',
    writer: 'Robert E. Sherwood, Joan Harrison, Philip MacDonald, Michael Hogan, based on Daphne du Maurier',
    cinematographer: 'George Barnes',
    genres: ['Mystery', 'Psychological Drama', 'Gothic'],
    movementId: 'classical-hollywood',
    movementName: 'Classical Hollywood',
    runtimeMinutes: 130,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://myhotposters.com/cdn/shop/products/HP2970_9dabf52f-99e7-4d9d-a21d-b38aa8b10333_1024x1024.jpg?v=1748537207',
    synopsis: 'A young bride arrives at the imposing Manderley estate and finds herself haunted by the memory and influence of her husband’s first wife.'
  },












  {
    id: 'wild-strawberries-1957',
    title: 'Wild Strawberries',
    originalTitle: 'Smultronstället',
    releaseYear: 1957,
    director: 'Ingmar Bergman',
    writer: 'Ingmar Bergman',
    cinematographer: 'Gunnar Fischer',
    genres: ['Drama', 'Psychological', 'Road Movie'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 92,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzA0NmZhYjMtZGM0MS00ZTE2LTkzYTctNGEwNGFkYjZiZTU0XkEyXkFqcGc%40._V1_.jpg',
    synopsis: 'An elderly professor travelling to receive an honorary degree reflects on his past through dreams, memories, and encounters on the road.'
  },



  {
    id: 'sunset-boulevard-1950',
    title: 'Sunset Boulevard',
    originalTitle: 'Sunset Blvd.',
    releaseYear: 1950,
    director: 'Billy Wilder',
    writer: 'Charles Brackett, Billy Wilder, D. M. Marshman Jr.',
    cinematographer: 'John F. Seitz',
    genres: ['Film Noir', 'Drama'],
    movementId: 'film-noir',
    movementName: 'Film Noir',
    runtimeMinutes: 110,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://pixieposters.co.uk/cdn/shop/files/sunset-blvd_6248bb9d_e60b19d5-ddf1-44c2-b171-1deb5389fe6c.jpg?v=1730028135',
    synopsis: 'A struggling screenwriter becomes entangled with a faded silent-film star who dreams of returning to the screen.'
  },





  {
    id: 'la-haine-1995',
    title: 'La Haine',
    originalTitle: 'La Haine',
    releaseYear: 1995,
    director: 'Mathieu Kassovitz',
    writer: 'Mathieu Kassovitz',
    cinematographer: 'Pierre Aïm',
    genres: ['Crime', 'Drama'],
    movementId: 'french-new-wave',
    movementName: 'French New Wave',
    runtimeMinutes: 98,
    aspectRatio: '1.85:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://a.1stdibscdn.com/la-haine-1995-french-grande-film-poster-for-sale-picture-3/22569652/f_322546721673884509019/la_haine_12968_3_master.jpg',
    synopsis: 'Three young men navigate a tense day in the Paris suburbs after a riot, as anger and violence build toward an inevitable confrontation.'
  },





  {
    id: 'the-elephant-man-1980',
    title: 'The Elephant Man',
    originalTitle: 'The Elephant Man',
    releaseYear: 1980,
    director: 'David Lynch',
    writer: 'Christopher De Vore, Eric Bergren, David Lynch',
    cinematographer: 'Freddie Francis',
    genres: ['Drama', 'Biography'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 124,
    aspectRatio: '2.35:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://filmartgallery.com/cdn/shop/products/The-Elephant-Man-Vintage-Movie-Poster-Original_9148aecb.jpg?v=1741734541',
    synopsis: 'A Victorian surgeon becomes acquainted with John Merrick, a severely disfigured man whose intelligence and dignity challenge the prejudices around him.'
  },




  {
    id: 'the-devils-eye-1960',
    title: 'The Devil’s Eye',
    originalTitle: 'Djävulens öga',
    releaseYear: 1960,
    director: 'Ingmar Bergman',
    writer: 'Ingmar Bergman',
    cinematographer: 'Gunnar Fischer',
    genres: ['Comedy', 'Fantasy'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 87,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: '',
    synopsis: 'Satan sends Don Juan back to Earth to seduce a young woman and cure a celestial affliction.'
  },


  {
    id: 'hour-of-the-wolf-1968',
    title: 'Hour of the Wolf',
    originalTitle: 'Vargtimmen',
    releaseYear: 1968,
    director: 'Ingmar Bergman',
    writer: 'Ingmar Bergman',
    cinematographer: 'Sven Nykvist',
    genres: ['Psychological Horror', 'Drama'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 90,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNThmZTZjOTUtMjdlZS00MTM0LWE3NWEtNjgyMWYyYzA0M2FjXkEyXkFqcGc%40._V1_.jpg',
    synopsis: 'An artist living on an isolated island begins to lose his grip on reality as nightmares and memories of sinister figures invade his life.'
  }
,

  {
    id: 'lost-highway-1997',
    title: 'Lost Highway',
    releaseYear: 1997,
    director: 'David Lynch',
    directorId: 'lynch',
    writer: 'David Lynch, Barry Gifford',
    cinematographer: 'Peter Deming',
    cinematographerId: 'peter-deming',
    genres: ['Neo-Noir', 'Psychological Thriller', 'Surrealism', 'Mystery'],
    runtimeMinutes: 134,
    aspectRatio: '2.39:1',
    colorProcess: 'Color',
    posterUrl: 'https://www.originalfilmart.co.uk/cdn/shop/products/lost_highway_1997_german_a1_original_film_art_a_1024x1024.jpg?v=1588792013',
    synopsis: 'A jazz musician receives mysterious videotapes of his home, is convicted of murdering his wife, and inexplicably transforms into another man whose life begins to echo his own.'
  },

  {
    id: 'the-magician-1958',
    title: 'The Magician',
    originalTitle: 'Ansiktet',
    releaseYear: 1958,
    director: 'Ingmar Bergman',
    directorId: 'bergman',
    writer: 'Ingmar Bergman',
    cinematographer: 'Gunnar Fischer',
    cinematographerId: 'gunnar-fischer',
    genres: ['Psychological Drama', 'Gothic', 'Mystery'],
    runtimeMinutes: 107,
    aspectRatio: '1.33:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://pictures.abebooks.com/inventory/30333114865.jpg',
    synopsis: 'A travelling mesmerist and his troupe arrive in Stockholm, where a skeptical medical adviser subjects their supposed supernatural powers to a humiliating test.'
  },

  {
    id: 'autumn-sonata-1978',
    title: 'Autumn Sonata',
    originalTitle: 'Höstsonaten',
    releaseYear: 1978,
    director: 'Ingmar Bergman',
    directorId: 'bergman',
    writer: 'Ingmar Bergman',
    cinematographer: 'Sven Nykvist',
    cinematographerId: 'sven-nykvist',
    genres: ['Psychological Drama', 'Family Drama'],
    runtimeMinutes: 99,
    aspectRatio: '1.66:1',
    colorProcess: 'Color',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTBhMWJhNjktNDU3NC00MDNjLWI0MDAtYmM5Y2FjZTJkNGZjXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg',
    synopsis: 'A celebrated concert pianist reunites with her daughter after years apart, and a night together brings long-buried resentment, guilt, and emotional wounds to the surface.'
  },

  {
    id: 'fanny-and-alexander-1982',
    title: 'Fanny and Alexander',
    originalTitle: 'Fanny och Alexander',
    releaseYear: 1982,
    director: 'Ingmar Bergman',
    directorId: 'bergman',
    writer: 'Ingmar Bergman',
    cinematographer: 'Sven Nykvist',
    cinematographerId: 'sven-nykvist',
    genres: ['Family Drama', 'Period Drama', 'Fantasy'],
    runtimeMinutes: 188,
    aspectRatio: '1.66:1',
    colorProcess: 'Color',
    posterUrl: 'https://www.originalfilmart.com/cdn/shop/products/fanny_and_alexander_1982_original_film_art_600x.jpg?v=1562541500',
    synopsis: 'Seen through the eyes of young Alexander and his sister Fanny, the joys and tensions of a theatrical Swedish family are transformed after their father dies and their mother remarries a severe bishop.',
    historicalSignificance: 'Bergman’s celebrated final theatrical feature exists in a 188-minute theatrical cut and a 312-minute television version.'
  },

  {
    id: 'the-virgin-spring-1960',
    title: 'The Virgin Spring',
    originalTitle: 'Jungfrukällan',
    releaseYear: 1960,
    director: 'Ingmar Bergman',
    directorId: 'bergman',
    writer: 'Ulla Isaksson',
    cinematographer: 'Sven Nykvist',
    cinematographerId: 'sven-nykvist',
    genres: ['Historical Drama', 'Tragedy', 'Medieval Drama'],
    runtimeMinutes: 89,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://filmartgallery.com/cdn/shop/products/The-Virgin-Spring-Vintage-Movie-Poster-Original_2f756c24.jpg?v=1771956108&width=1200',
    synopsis: 'In medieval Sweden, a prosperous farmer’s daughter is murdered on her way to church; the arrival of the killers at her parents’ home sets a devastating chain of vengeance in motion.'
  },

  {
    id: 'summer-with-monika-1953',
    title: 'Summer with Monika',
    originalTitle: 'Sommaren med Monika',
    releaseYear: 1953,
    director: 'Ingmar Bergman',
    directorId: 'bergman',
    writer: 'Ingmar Bergman, Per Anders Fogelström',
    cinematographer: 'Gunnar Fischer',
    cinematographerId: 'gunnar-fischer',
    genres: ['Romantic Drama', 'Coming-of-Age'],
    runtimeMinutes: 97,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOGJjODNhNzQtMWQzYi00NDFlLTllMDktYzA4MzM0OGFkNzJhXkEyXkFqcGc%40._V1_.jpg',
    synopsis: 'Two working-class Stockholm teenagers escape their difficult home lives for a carefree summer together on an island, but freedom gives way to the responsibilities and disappointments of adulthood.'
  },

  {
    id: 'scenes-from-a-marriage-1973',
    title: 'Scenes from a Marriage',
    originalTitle: 'Scener ur ett äktenskap',
    releaseYear: 1973,
    director: 'Ingmar Bergman',
    directorId: 'bergman',
    writer: 'Ingmar Bergman',
    cinematographer: 'Sven Nykvist',
    cinematographerId: 'sven-nykvist',
    genres: ['Relationship Drama', 'Psychological Drama'],
    runtimeMinutes: 168,
    aspectRatio: '1.37:1',
    colorProcess: 'Color',
    posterUrl: 'https://cdn.posteritati.com/posters/000/000/057/738/scenes-from-a-marriage-md-web.jpg',
    synopsis: 'Over years of intimacy, betrayal, separation, and reconciliation, a seemingly successful couple confronts the shifting truths and contradictions of their marriage.',
    historicalSignificance: 'Originally made as a six-part television miniseries, later edited into a shorter theatrical version.'
  },

  {
    id: 'ikiru-1952',
    title: 'Ikiru',
    originalTitle: '生きる',
    releaseYear: 1952,
    director: 'Akira Kurosawa',
    directorId: 'kurosawa',
    writer: 'Akira Kurosawa, Shinobu Hashimoto, Hideo Oguni',
    cinematographer: 'Asakazu Nakai',
    cinematographerId: 'asakazu-nakai',
    genres: ['Drama', 'Humanist', 'Existential'],
    runtimeMinutes: 143,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://www.originalfilmart.com/cdn/shop/products/ikiru_1952_linen_original__film_art_1600x.jpg?v=1618503303',
    synopsis: 'After learning he has terminal cancer, a long-serving Tokyo bureaucrat searches for meaning and finds purpose in helping local residents build a children’s playground.'
  }

];