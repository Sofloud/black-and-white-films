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

  {

    id: 'ida-2013',

    title: 'Ida',

    releaseYear: 2013,

    director: 'Paweł Pawlikowski',

    directorId: 'pawlikowski',

    writer: 'Paweł Pawlikowski, Rebecca Lenkiewicz',

    cinematographer: 'Łukasz Żal',

    cinematographerId: 'lukasz-zal',

    genres: ['Historical Drama', 'Period Piece', 'Philosophical'],

    runtimeMinutes: 82,

    aspectRatio: '1.37:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjI1ODAyN2EtYzg3Mi00OWY5LWI2MzgtMmVlNGRjZmNjMDgxXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg',

    synopsis:

      'In 1962 communist Poland, an 18-year-old novitiate nun preparing to take her vows discovers a dark family secret: she is Jewish, leading her and her cynical communist judge aunt on a road journey.'

  },

  {

    id: 'cold-war-2018',

    title: 'Cold War',

    originalTitle: 'Zimna wojna',

    releaseYear: 2018,

    director: 'Paweł Pawlikowski',

    directorId: 'pawlikowski',

    writer: 'Paweł Pawlikowski, Janusz Głowacki',

    cinematographer: 'Łukasz Żal',

    cinematographerId: 'lukasz-zal',

    genres: ['Romantic Drama', 'Historical Drama', 'Music'],

    runtimeMinutes: 88,

    aspectRatio: '1.37:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMWQ5ZjYyMjAtNzBkMS00ZDJkLThmMmQtYTBjOTRiMjhkNGNkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',

    synopsis:

      'A passionate, impossible love story between a musical director and a spirited young folk singer across the ruined landscapes of 1950s Poland, Berlin, Yugoslavia, and Paris during the Cold War.'

  },



  // ==========================================

  // FEDERICO FELLINI

  // ==========================================

  {

    id: '8-and-a-half-1963',

    title: '8½',

    originalTitle: 'Otto e mezzo',

    releaseYear: 1963,

    director: 'Federico Fellini',

    directorId: 'fellini',

    writer: 'Federico Fellini, Ennio Flaiano, Tullio Pinelli, Brunello Rondi',

    cinematographer: 'Gianni Di Venanzo',

    cinematographerId: 'gianni-di-venanzo',

    genres: ['Modernist Comedy-Drama', 'Surrealism', 'Meta-Cinema'],

    runtimeMinutes: 138,

    aspectRatio: '1.85:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNmI4YWJlYzAtNGU5MS00NTljLThhN2QtNzMwMWM4NTA0ODNlXkEyXkFqcGc@._V1_QL75_UX380_CR0,8,380,562_.jpg',

    synopsis:

      'A harried, blocked Italian film director retreats to a luxury thermal spa to recover his health and find inspiration for his next science-fiction film, but finds his reality overtaken by dreams.'

  },

  {

    id: 'la-dolce-vita-1960',

    title: 'La Dolce Vita',

    releaseYear: 1960,

    director: 'Federico Fellini',

    directorId: 'fellini',

    writer: 'Federico Fellini, Ennio Flaiano, Tullio Pinelli, Brunello Rondi',

    cinematographer: 'Otello Martelli',

    cinematographerId: 'otello-martelli',

    genres: ['Satirical Drama', 'Modernist', 'Existential'],

    runtimeMinutes: 174,

    aspectRatio: '2.35:1',

    colorProcess: 'Black & White',

    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTkxMjQ4NzU5N15BMl5BanBnXkFtZTgwMTkwODkzMTE@._V1_QL75_UY562_CR0,0,380,562_.jpg',

    synopsis:

      'Over seven decadent days and nights in Rome, charming tabloid journalist Marcello Rubini drifts through aristocratic parties, media spectacles, and fleeting romances, seeking authentic meaning.'

  },



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
    id: 'a-trip-to-the-moon-1902',
    title: 'A Trip to the Moon',
    originalTitle: 'Le Voyage dans la Lune',
    releaseYear: 1902,
    director: 'Georges Méliès',
    writer: 'Georges Méliès',
    cinematographer: 'Théophile Michault, Lucien Tainguy',
    genres: ['Silent', 'Science Fiction', 'Fantasy', 'Adventure'],
    movementId: 'early-cinema',
    movementName: 'Early Cinema',
    runtimeMinutes: 14,
    aspectRatio: '1.33:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://pics.filmaffinity.com/le_voyage_dans_la_lune-371999813-large.jpg',
    synopsis: 'A group of astronomers travels to the Moon, where they encounter strange creatures and discover a fantastical lunar world.'
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
    id: 'the-worst-person-in-the-world-2021',
    title: 'The Worst Person in the World',
    originalTitle: 'Verdens verste menneske',
    releaseYear: 2021,
    director: 'Joachim Trier',
    writer: 'Joachim Trier, Eskil Vogt',
    cinematographer: 'Kasper Tuxen',
    genres: ['Romantic Drama', 'Comedy', 'Coming-of-Age'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 128,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://movienonsense.com/wp-content/uploads/2022/02/verdens-verste-menneske.jpg?w=1018',
    synopsis: 'Over several years in Oslo, Julie navigates love, career uncertainty, family expectations, and the difficulty of choosing a life.'
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
    id: 'persepolis-2007',
    title: 'Persepolis',
    originalTitle: 'Persepolis',
    releaseYear: 2007,
    director: 'Marjane Satrapi, Vincent Paronnaud',
    writer: 'Marjane Satrapi, Vincent Paronnaud',
    cinematographer: 'Stéphane Fontaine',
    genres: ['Animation', 'Biography', 'Drama'],
    movementId: 'french-new-wave',
    movementName: 'French New Wave',
    runtimeMinutes: 96,
    aspectRatio: '1.85:1',
    colorProcess: 'Black & White / Color',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZThjMmZlMjUtMWQ1Ny00Mjk2LWFhMzUtMDE2NzJiNWU0YTFhXkEyXkFqcGc%40._V1_.jpg',
    synopsis: 'Marjane grows up in Iran during revolution and war, then experiences exile and adulthood while trying to reconcile identity and home.'
  },

  {
    id: 'inglourious-basterds-2009',
    title: 'Inglourious Basterds',
    originalTitle: 'Inglourious Basterds',
    releaseYear: 2009,
    director: 'Quentin Tarantino',
    writer: 'Quentin Tarantino',
    cinematographer: 'Robert Richardson',
    genres: ['War', 'Drama', 'Black Comedy'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 153,
    aspectRatio: '2.39:1',
    colorProcess: 'Color',
    posterUrl: 'https://cdn.shopify.com/s/files/1/1416/8662/products/inglourious_basterds_2009_original_film_art_spo_2000x.jpg?v=1551890426',
    synopsis: 'Several groups of resistance fighters and assassins converge on Nazi-occupied France with plans to change the course of the war.'
  },

  {
    id: 'sentimental-value-2025',
    title: 'Sentimental Value',
    originalTitle: 'Affeksjonsverdi',
    releaseYear: 2025,
    director: 'Joachim Trier',
    writer: 'Joachim Trier, Eskil Vogt',
    cinematographer: 'Kasper Tuxen',
    genres: ['Drama', 'Family', 'Psychological Drama'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 133,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://img.theaterdebussel.nl/vuCSskfHX2GxZAlm1SYIBPajAi-w7ZpmK_USdHbK8GI/rs%3Afit%3A1920%3A800%3A1/aHR0cHM6Ly93d3cudGhlYXRlcmRlYnVzc2VsLm5sLy9jbXNfZmlsZXMvc3lzdGVtL2ltYWdlcy9pbWc4NjQ1X29yaWcuanBn',
    synopsis: 'Two sisters confront their estranged filmmaker father when he returns with an ambitious project that forces the family to revisit old wounds.'
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
    posterUrl: 'https://www.impawards.com/intl/france/1950/imp_orphee.jpg',
    synopsis: 'In post-war Paris, celebrated poet Orpheus becomes obsessed with a mysterious Princess—Death herself—and journeys through liquid mirrors into the Underworld to retrieve his lost love.'
  },

  {
    id: 'manhattan-1979',
    title: 'Manhattan',
    originalTitle: 'Manhattan',
    releaseYear: 1979,
    director: 'Woody Allen',
    writer: 'Woody Allen, Marshall Brickman',
    cinematographer: 'Gordon Willis',
    genres: ['Comedy', 'Drama', 'Romance'],
    movementId: 'new-hollywood',
    movementName: 'New Hollywood',
    runtimeMinutes: 96,
    aspectRatio: '2.39:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://movieposterhub.com/cdn/shop/files/manhattan_styleB.jpg?v=1707470716&width=3450',
    synopsis: 'A television writer in Manhattan struggles with relationships, artistic ideals, and the contradictions of his romantic life.'
  },

  {
    id: 'cabaret-1972',
    title: 'Cabaret',
    originalTitle: 'Cabaret',
    releaseYear: 1972,
    director: 'Bob Fosse',
    writer: 'Jay Presson Allen',
    cinematographer: 'Geoffrey Unsworth',
    genres: ['Musical', 'Drama', 'Romance'],
    movementId: 'new-hollywood',
    movementName: 'New Hollywood',
    runtimeMinutes: 124,
    aspectRatio: '1.66:1',
    colorProcess: 'Color',
    posterUrl: 'https://filmartgallery.com/cdn/shop/files/Cabaret-Vintage-Movie-Poster-Original_b6163cad_5000x.jpg?v=1771933913',
    synopsis: 'An American singer becomes involved with a cabaret performer in 1930s Berlin as political extremism grows around them.'
  },

  {
    id: 'gentlemen-prefer-blondes-1953',
    title: 'Gentlemen Prefer Blondes',
    originalTitle: 'Gentlemen Prefer Blondes',
    releaseYear: 1953,
    director: 'Howard Hawks',
    writer: 'Charles Lederer, Joseph Fields, Anita Loos',
    cinematographer: 'Harry J. Wild',
    genres: ['Musical', 'Comedy', 'Romance'],
    movementId: 'classical-hollywood',
    movementName: 'Classical Hollywood',
    runtimeMinutes: 91,
    aspectRatio: '1.37:1',
    colorProcess: 'Color',
    posterUrl: 'https://posterhubstudio.com/cdn/shop/files/LES-HOMMES-PREFERENT-LES-BLONDES-MARILYN-MONROE-1953-repro-affiche-cinema-VINTAGE-HQ_e331018b.webp?v=1765471926&width=1946',
    synopsis: 'Two showgirls travel to Paris while pursuing romance, wealth, and their very different ideas of what makes a good husband.'
  },

  {
    id: 'taxi-driver-1976',
    title: 'Taxi Driver',
    originalTitle: 'Taxi Driver',
    releaseYear: 1976,
    director: 'Martin Scorsese',
    writer: 'Paul Schrader',
    cinematographer: 'Michael Chapman',
    genres: ['Crime', 'Psychological Drama', 'Neo-Noir'],
    movementId: 'new-hollywood',
    movementName: 'New Hollywood',
    runtimeMinutes: 114,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://www.posterconservation.com/cdn/shop/files/TaxiDriver.jpg?v=1747094274',
    synopsis: 'A lonely New York taxi driver becomes increasingly alienated and obsessed with cleansing the city of what he sees as its corruption.'
  },

  {
    id: 'before-sunrise-1995',
    title: 'Before Sunrise',
    originalTitle: 'Before Sunrise',
    releaseYear: 1995,
    director: 'Richard Linklater',
    writer: 'Richard Linklater, Kim Krizan',
    cinematographer: 'Lee Daniel',
    genres: ['Romance', 'Drama'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 101,
    aspectRatio: '1.66:1',
    colorProcess: 'Color',
    posterUrl: 'https://i.pinimg.com/originals/7c/e8/72/7ce87207ad4b88212d498b2a4d713409.jpg',
    synopsis: 'Two young travellers meet on a train and spend one night walking through Vienna, talking about love, life, and the possibility of connection.'
  },

  {
    id: 'annie-hall-1977',
    title: 'Annie Hall',
    originalTitle: 'Annie Hall',
    releaseYear: 1977,
    director: 'Woody Allen',
    writer: 'Woody Allen, Marshall Brickman',
    cinematographer: 'Gordon Willis',
    genres: ['Comedy', 'Romance', 'Drama'],
    movementId: 'new-hollywood',
    movementName: 'New Hollywood',
    runtimeMinutes: 93,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://cdn.posteritati.com/posters/000/000/067/343/annie-hall-md-web.jpg',
    synopsis: 'A comedian looks back on his intense relationship with Annie Hall and the patterns of intimacy and separation that shaped it.'
  },

  {
    id: 'the-red-shoes-1948',
    title: 'The Red Shoes',
    originalTitle: 'The Red Shoes',
    releaseYear: 1948,
    director: 'Michael Powell, Emeric Pressburger',
    writer: 'Emeric Pressburger',
    cinematographer: 'Jack Cardiff',
    genres: ['Drama', 'Musical', 'Romance'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 135,
    aspectRatio: '1.37:1',
    colorProcess: 'Color',
    posterUrl: 'https://images.squarespace-cdn.com/content/v1/58bf6bbbcd0f68b2abf9a74e/6669580e-36a1-4341-ae95-49ab1647333c/the%2Bred%2Bshoes%2Bposter.jpg',
    synopsis: 'A young ballerina joins an obsessive impresario’s company and is torn between her devotion to dance and her love for a composer.'
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
    id: 'romeo-and-juliet-1968',
    title: 'Romeo and Juliet',
    originalTitle: 'Romeo and Juliet',
    releaseYear: 1968,
    director: 'Franco Zeffirelli',
    writer: 'Franco Brusati, Masolino D’Amico, Franco Zeffirelli',
    cinematographer: 'Pasqualino De Santis',
    genres: ['Romance', 'Drama', 'Tragedy'],
    movementId: 'classical-hollywood',
    movementName: 'Classical Hollywood',
    runtimeMinutes: 138,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://www.ogdoo.gr/images/articles_images/poster-william.jpg',
    synopsis: 'Two young lovers from feuding families fall in love in Verona, with their romance ending in tragedy.'
  },

  {
    id: 'betty-blue-1986',
    title: 'Betty Blue',
    originalTitle: '37°2 le matin',
    releaseYear: 1986,
    director: 'Jean-Jacques Beineix',
    writer: 'Philippe Djian, Jean-Jacques Beineix',
    cinematographer: 'Jean-François Robin',
    genres: ['Romance', 'Drama'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 119,
    aspectRatio: '1.66:1',
    colorProcess: 'Color',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDlmMDZiOGItNDkzYi00ZDhlLWFjYjUtOGM0NzMwYzVhZTg0XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg',
    synopsis: 'A young writer falls into an intense relationship with Betty, whose emotional instability gradually overwhelms their shared dream of a creative life.'
  },

  {
    id: 'a-clockwork-orange-1971',
    title: 'A Clockwork Orange',
    originalTitle: 'A Clockwork Orange',
    releaseYear: 1971,
    director: 'Stanley Kubrick',
    writer: 'Stanley Kubrick',
    cinematographer: 'John Alcott',
    genres: ['Crime', 'Dystopian', 'Psychological Drama'],
    movementId: 'new-hollywood',
    movementName: 'New Hollywood',
    runtimeMinutes: 136,
    aspectRatio: '1.66:1',
    colorProcess: 'Color',
    posterUrl: 'https://cdn.shopify.com/s/files/1/1057/4964/products/A-Clockwork-Orange-Vintage-Movie-Poster-Original-1-Sheet-27x41-4495.jpg?v=1657947646',
    synopsis: 'A violent young delinquent undergoes an experimental treatment designed to remove his capacity for violence, raising questions about free will.'
  },

  {
    id: 'barry-lyndon-1975',
    title: 'Barry Lyndon',
    originalTitle: 'Barry Lyndon',
    releaseYear: 1975,
    director: 'Stanley Kubrick',
    writer: 'Stanley Kubrick',
    cinematographer: 'John Alcott',
    genres: ['Historical Drama', 'Epic'],
    movementId: 'new-hollywood',
    movementName: 'New Hollywood',
    runtimeMinutes: 185,
    aspectRatio: '1.66:1',
    colorProcess: 'Color',
    posterUrl: 'https://cdn.posteritati.com/posters/000/000/070/417/barry-lyndon-md-web.jpg',
    synopsis: 'An ambitious Irish adventurer rises through eighteenth-century European society by luck, deception, marriage, and opportunism.'
  },

  {
    id: 'avatar-2009',
    title: 'Avatar',
    originalTitle: 'Avatar',
    releaseYear: 2009,
    director: 'James Cameron',
    writer: 'James Cameron',
    cinematographer: 'Mauro Fiore',
    genres: ['Science Fiction', 'Adventure', 'Action'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 162,
    aspectRatio: '2.39:1',
    colorProcess: 'Color',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc%40._V1_FMjpg_UY2902_.jpg',
    synopsis: 'A former Marine enters the body of a Na’vi avatar on Pandora and becomes caught between human exploitation and the planet’s indigenous society.'
  },

  {
    id: 'the-terminator-1984',
    title: 'The Terminator',
    originalTitle: 'The Terminator',
    releaseYear: 1984,
    director: 'James Cameron',
    writer: 'James Cameron, Gale Anne Hurd',
    cinematographer: 'Adam Greenberg',
    genres: ['Science Fiction', 'Action', 'Thriller'],
    movementId: 'new-hollywood',
    movementName: 'New Hollywood',
    runtimeMinutes: 107,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://filmartgallery.com/cdn/shop/products/The-Terminator-Vintage-Movie-Poster-Original_0e05a9af.jpg?v=1741716403',
    synopsis: 'A soldier from the future arrives in 1984 to protect Sarah Connor from a cyborg assassin sent to kill her before the birth of her son.'
  },

  {
    id: 'titanic-1997',
    title: 'Titanic',
    originalTitle: 'Titanic',
    releaseYear: 1997,
    director: 'James Cameron',
    writer: 'James Cameron',
    cinematographer: 'Russell Carpenter',
    genres: ['Romance', 'Drama', 'Epic'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 194,
    aspectRatio: '2.39:1',
    colorProcess: 'Color',
    posterUrl: 'https://www.originalfilmart.com/cdn/shop/products/titanic_1997_styleA_original_film_art_ff6e5718-c79d-4bfd-850b-1068970032f2_5000x.jpg?v=1668710472',
    synopsis: 'A young aristocrat and a working-class artist fall in love aboard the Titanic shortly before the ship’s disastrous maiden voyage.'
  },

  {
    id: 'the-cranes-are-flying-1957',
    title: 'The Cranes Are Flying',
    originalTitle: 'Летят журавли',
    releaseYear: 1957,
    director: 'Mikhail Kalatozov',
    writer: 'Viktor Rozov',
    cinematographer: 'Sergey Urusevsky',
    genres: ['War', 'Romance', 'Drama'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 95,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://www.longtake.it/upload/documenti/9/94/942/9425.jpg',
    synopsis: 'A young woman loses the man she loves to war and struggles with grief, guilt, and survival during the German invasion of the Soviet Union.'
  },

  {
    id: 'once-upon-a-time-in-hollywood-2019',
    title: 'Once Upon a Time... in Hollywood',
    originalTitle: 'Once Upon a Time... in Hollywood',
    releaseYear: 2019,
    director: 'Quentin Tarantino',
    writer: 'Quentin Tarantino',
    cinematographer: 'Robert Richardson',
    genres: ['Comedy', 'Drama', 'Historical'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 161,
    aspectRatio: '2.39:1',
    colorProcess: 'Color',
    posterUrl: 'https://assets.megamediaradios.fm/sites/2/2019/08/4541_1_5d5ec40559a9c.jpg',
    synopsis: 'A fading actor and his stunt double navigate 1969 Los Angeles while the film reimagines a violent chapter of Hollywood history.'
  },

  {
    id: 'cinema-paradiso-1988',
    title: 'Cinema Paradiso',
    originalTitle: 'Nuovo Cinema Paradiso',
    releaseYear: 1988,
    director: 'Giuseppe Tornatore',
    writer: 'Giuseppe Tornatore',
    cinematographer: 'Blasco Giurato',
    genres: ['Drama', 'Romance'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 124,
    aspectRatio: '1.66:1',
    colorProcess: 'Color',
    posterUrl: 'https://www.originalfilmart.com/cdn/shop/files/cinema_paradiso_1988_original_film_art_600x.webp?v=1687376242',
    synopsis: 'A successful filmmaker remembers the projectionist who introduced him to cinema in the Sicilian village of his childhood.'
  },

  {
    id: 'run-lola-run-1998',
    title: 'Run Lola Run',
    originalTitle: 'Lola rennt',
    releaseYear: 1998,
    director: 'Tom Tykwer',
    writer: 'Tom Tykwer',
    cinematographer: 'Frank Griebe',
    genres: ['Action'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 81,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://www.originalfilmart.co.uk/cdn/shop/products/run_lola_run_1998_german_a1_original_film_art_66d54ead-c9df-48f1-a8d2-3e9a066b1655_600x.jpg?v=1600173663',
    synopsis: 'Lola has twenty minutes to find the money needed to save her boyfriend, with three variations exploring how tiny changes alter their fate.'
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
    id: 'lolita-1962',
    title: 'Lolita',
    originalTitle: 'Lolita',
    releaseYear: 1962,
    director: 'Stanley Kubrick',
    writer: 'Vladimir Nabokov',
    cinematographer: 'Oswald Morris',
    genres: ['Drama', 'Black Comedy', 'Romance'],
    movementId: 'new-hollywood',
    movementName: 'New Hollywood',
    runtimeMinutes: 153,
    aspectRatio: '1.66:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://a.1stdibscdn.com/1962-lolita-original-vintage-poster-for-sale-picture-2/f_84052/f_384712421708265150486/lolita1_8b2ebdd1_fe57_43b0_a86b_944cc87077f2_master.jpg?width=768',
    synopsis: 'A literature professor becomes obsessively involved with a young girl and narrates the destructive consequences of his fixation.'
  },

  {
    id: 'some-like-it-hot-1959',
    title: 'Some Like It Hot',
    originalTitle: 'Some Like It Hot',
    releaseYear: 1959,
    director: 'Billy Wilder',
    writer: 'Billy Wilder, I. A. L. Diamond',
    cinematographer: 'Charles Lang',
    genres: ['Comedy', 'Musical', 'Romance'],
    movementId: 'classical-hollywood',
    movementName: 'Classical Hollywood',
    runtimeMinutes: 121,
    aspectRatio: '1.85:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://www.originalfilmart.com/cdn/shop/products/some_like_it_hot_1959_linen_original_film_art_1200x.jpg?v=1602780063',
    synopsis: 'Two musicians fleeing gangsters disguise themselves as women and join an all-female band, complicating their romantic lives.'
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
    id: 'the-seven-year-itch-1955',
    title: 'The Seven Year Itch',
    originalTitle: 'The Seven Year Itch',
    releaseYear: 1955,
    director: 'Billy Wilder',
    writer: 'Billy Wilder, George Axelrod',
    cinematographer: 'Milton R. Krasner',
    genres: ['Comedy', 'Romance'],
    movementId: 'classical-hollywood',
    movementName: 'Classical Hollywood',
    runtimeMinutes: 105,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://atthemovies.uk/cdn/shop/products/TheSevenYearItch1955us81x81in15000LB.jpg?v=1621386602',
    synopsis: 'A married publisher left alone in New York imagines an affair with his glamorous upstairs neighbour.'
  },

  {
    id: 'dr-strangelove-or-how-i-learned-to-stop-worrying-and-love-the-bomb-1964',
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    originalTitle: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    releaseYear: 1964,
    director: 'Stanley Kubrick',
    writer: 'Stanley Kubrick, Peter George, Terry Southern',
    cinematographer: 'Gilbert Taylor',
    genres: ['Black Comedy', 'War', 'Satire'],
    movementId: 'new-hollywood',
    movementName: 'New Hollywood',
    runtimeMinutes: 95,
    aspectRatio: '1.66:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://filmartgallery.com/cdn/shop/files/Dr_-Strangelove-Vintage-Movie-Poster-Original-1-Sheet-27x41-7584_800x.progressive.jpg?v=1699420054',
    synopsis: 'A paranoid general launches a nuclear strike, forcing military and political leaders into a frantic attempt to prevent global catastrophe.'
  },

  {
    id: 'walking-the-streets-of-moscow-1964',
    title: 'Walking the Streets of Moscow',
    originalTitle: 'Я шагаю по Москве',
    releaseYear: 1964,
    director: 'Georgiy Daneliya',
    writer: 'Gennady Shpalikov',
    cinematographer: 'Vadim Yusov',
    genres: ['Comedy', 'Romance', 'Coming-of-Age'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 78,
    aspectRatio: '1.37:1',
    colorProcess: 'Color',
    posterUrl: 'https://cdn.prod.website-files.com/5bb2b3c278d5c75322bc8890/5ce05ab53771c275c3c190c9_Movies%20%D0%90%D1%84%D0%B8%D1%88%D0%B0%20%28Need%202x%29.1.1.1.1.1.1.1.1.1.1.1.1.1.jpg',
    synopsis: 'A young Siberian arrives in Moscow and spends a day wandering the city, meeting strangers and reflecting on youth and love.'
  },

  {
    id: 'singin-in-the-rain-1952',
    title: 'Singin\' in the Rain',
    originalTitle: 'Singin’ in the Rain',
    releaseYear: 1952,
    director: 'Stanley Donen, Gene Kelly',
    writer: 'Betty Comden, Adolph Green',
    cinematographer: 'Harold Rosson',
    genres: ['Musical', 'Comedy', 'Romance'],
    movementId: 'classical-hollywood',
    movementName: 'Classical Hollywood',
    runtimeMinutes: 103,
    aspectRatio: '1.37:1',
    colorProcess: 'Color',
    posterUrl: 'https://www.movieposters.com/cdn/shop/products/77d3fbc8df6c97097f5c29b15e704ce8_6968ee92-6e4d-4fb7-b200-5bdeaefb1d47_1024x1024.jpg?v=1762509471',
    synopsis: 'Silent-film stars struggle with the arrival of sound while a charming performer helps their studio adapt to talking pictures.'
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
    id: 'kwaidan-1964',
    title: 'Kwaidan',
    originalTitle: '怪談',
    releaseYear: 1964,
    director: 'Masaki Kobayashi',
    writer: 'Yoko Mizuki, based on Lafcadio Hearn',
    cinematographer: 'Yoshio Miyajima',
    genres: ['Horror', 'Anthology', 'Fantasy'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 183,
    aspectRatio: '2.35:1',
    colorProcess: 'Color',
    posterUrl: 'https://cdn.posteritati.com/posters/000/000/054/304/kwaidan-md-web.jpg',
    synopsis: 'Four stylized supernatural tales explore desire, betrayal, memory, and the consequences of encounters with the dead.'
  },

  {
    id: 'father-mother-sister-brother-2025',
    title: 'Father Mother Sister Brother',
    originalTitle: 'Father Mother Sister Brother',
    releaseYear: 2025,
    director: 'Jim Jarmusch',
    writer: 'Jim Jarmusch',
    cinematographer: 'Frederick Elmes',
    genres: ['Comedy', 'Drama', 'Family'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 110,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://www.duplexcinema.com/storage/resources/films/poster/3802b223-fmsb_po_ster-espan_a.jpg',
    synopsis: 'Estranged adult siblings reunite with their emotionally distant parents, confronting old tensions and the complicated bonds of family.'
  },

  {
    id: 'fatherland-1994',
    title: 'Fatherland',
    originalTitle: 'Fatherland',
    releaseYear: 1994,
    director: 'Christopher Menaul',
    writer: 'Stanley Weiser, based on Robert Harris',
    cinematographer: 'Peter Sova',
    genres: ['Alternate History', 'Mystery', 'Drama'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 106,
    aspectRatio: '1.78:1',
    colorProcess: 'Color',
    posterUrl: 'https://image.tmdb.org/t/p/original/sSOyk8fWs2sN7YHXsbsp5ZxcGG5.jpg',
    synopsis: 'In an alternate 1960s where Nazi Germany won the Second World War, a German police officer investigates a mysterious death that could expose the regime’s secrets.'
  },

  {
    id: 'fjord-2026',
    title: 'Fjord',
    originalTitle: 'Fjord',
    releaseYear: 2026,
    director: 'Cristian Mungiu',
    writer: 'Cristian Mungiu',
    cinematographer: 'Tudor Vladimir Panduru',
    genres: ['Drama'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 146,
    aspectRatio: '1.85:1',
    colorProcess: 'Color',
    posterUrl: 'https://cdn.sanity.io/images/j0wdmpyb/production/a333853103decb5a522d8707ce1f9ad2d0bcafa8-1500x2143.webp?auto=format&h=2040&rect=0%2C10%2C1500%2C2125&w=1440',
    synopsis: 'A Romanian-Norwegian family faces a child-protection investigation after cultural differences over parenting bring them into conflict with Norwegian authorities.'
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
    id: 'all-about-eve-1950',
    title: 'All About Eve',
    originalTitle: 'All About Eve',
    releaseYear: 1950,
    director: 'Joseph L. Mankiewicz',
    writer: 'Joseph L. Mankiewicz',
    cinematographer: 'Milton R. Krasner',
    genres: ['Drama', 'Comedy'],
    movementId: 'classical-hollywood',
    movementName: 'Classical Hollywood',
    runtimeMinutes: 138,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: 'https://cdn.shopify.com/s/files/1/1416/8662/products/all_about_eve_1950_british_quad_original_film_art_2000x.jpg?v=1586637184',
    synopsis: 'An ambitious young actress insinuates herself into the life of a celebrated Broadway star, threatening to replace her.'
  },

  {
    id: 'war-and-peace-1965-1966',
    title: 'War and Peace 1965',
    originalTitle: 'Война и мир',
    releaseYear: 1966,
    director: 'Sergei Bondarchuk',
    writer: 'Sergei Bondarchuk, Vasili Solovyov, based on Leo Tolstoy',
    cinematographer: 'Anatoly Petritsky',
    genres: ['Historical Drama'],
    movementId: '',
    movementName: '',
    runtimeMinutes: 422,
    aspectRatio: '2.20:1',
    colorProcess: 'Color',
    posterUrl: 'https://i0.wp.com/sovietmoviesonline.com/wp-content/uploads/16-1.jpg?fit=740%2C1040&ssl=1',
    synopsis: 'Tolstoy’s epic follows aristocratic families through love, war, and social upheaval during Napoleon’s invasion of Russia.'
  },

  {
    id: 'godland-2022',
    title: 'Godland',
    originalTitle: 'Volaða land',
    releaseYear: 2022,
    director: 'Hlynur Pálmason',
    writer: 'Hlynur Pálmason',
    cinematographer: 'Maria von Hausswolff',
    genres: ['Drama', 'Historical'],
    movementId: 'nordic-cinema',
    movementName: 'Nordic Cinema',
    runtimeMinutes: 143,
    aspectRatio: '1.33:1',
    colorProcess: 'Color',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzIxYTAyNzAtMDUwMi00OTU2LTkyNDgtMzBkMzQzYTE1YWZkXkEyXkFqcGc%40._V1_.jpg',
    synopsis: 'A Danish priest travels to a remote part of Iceland to build a church and photograph its people, but his mission becomes a struggle against landscape and human hostility.'
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
    id: 'el-1953',
    title: 'Él',
    originalTitle: 'Él',
    releaseYear: 1953,
    director: 'Luis Buñuel',
    writer: 'Luis Buñuel, Luis Alcoriza',
    cinematographer: 'Gabriel Figueroa',
    genres: ['Psychological Drama', 'Romance'],
    movementId: 'surrealism',
    movementName: 'Surrealism',
    runtimeMinutes: 92,
    aspectRatio: '1.37:1',
    colorProcess: 'Black & White',
    posterUrl: '',
    synopsis: 'A wealthy man’s obsessive jealousy and paranoia transform his marriage into an increasingly disturbing psychological nightmare.'
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


  // ==========================================
  // REQUESTED ADDITIONS
  // ==========================================
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
