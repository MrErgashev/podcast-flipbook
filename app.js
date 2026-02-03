/**
 * ============================================
 * PODCAST FLIPBOOK STORYBOOK - APP.JS
 * Interactive comic-style flipbook for
 * "6 Minute English — Anger Episode"
 * ============================================
 */

// ============================================
// PAGE-TURN SOUND EFFECT (Base64 Encoded)
// ============================================
// Short page flip sound (~0.3s, optimized for web)
const PAGE_TURN_SOUND_BASE64 = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdH2LkYyBc2hqcn6Kj4qCd25scHqEiomEfHRxcnh+g4WEgX16d3d4e36BgoKBf3x6eXl6fH6AgYGAf356eXl5ent9f4CAgH9+fHt6ent8fX5/f39/fn18e3p6ent8fX5+f39+fX18e3t6ent7fH1+fn5+fX18fHt7e3t7fHx9fX5+fn19fHx7e3t7e3x8fH19fX19fXx8fHt7e3t8fHx8fX19fX19fHx8e3t7e3x8fHx8fX19fX18fHx8e3x8fHx8fHx9fX19fX18fHx8fHx8fHx8fH19fX19fX18fHx8fHx8fHx8fX19fX19fX18fHx8fHx8fHx8fH19fX18fHx8fHx8fHx8fHx8fH19fXx8fHx8fHx8fHx8fHx8fH18fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fA==';

let pageTurnSound = null;

/**
 * Initialize page turn sound
 */
function initPageTurnSound() {
  try {
    pageTurnSound = new Audio(PAGE_TURN_SOUND_BASE64);
    pageTurnSound.volume = 0.4;
  } catch (e) {
    console.warn('Audio not supported');
  }
}

/**
 * Play page turn sound effect
 */
function playPageTurnSound() {
  if (!state.soundEnabled || state.reducedMotion || !pageTurnSound) return;

  try {
    pageTurnSound.currentTime = 0;
    pageTurnSound.play().catch(() => {
      // Silent fail - autoplay may be blocked
    });
  } catch (e) {
    // Ignore errors
  }
}

/**
 * Toggle sound on/off
 */
function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  localStorage.setItem('flipbook-sound', state.soundEnabled ? 'on' : 'off');
  updateSoundButton();

  // Play test sound when enabling
  if (state.soundEnabled) {
    playPageTurnSound();
  }
}

/**
 * Update sound button UI
 */
function updateSoundButton() {
  const btn = document.getElementById('soundToggle');
  if (!btn) return;

  btn.setAttribute('aria-pressed', state.soundEnabled);
  btn.innerHTML = state.soundEnabled
    ? '<span class="sound-icon">&#128266;</span><span class="sound-label">Sound</span>'
    : '<span class="sound-icon">&#128263;</span><span class="sound-label">Muted</span>';
  btn.title = state.soundEnabled ? 'Sound On - Click to mute' : 'Sound Off - Click to unmute';
}

// ============================================
// BOOK DATA - ALL DIALOGUES INCLUDED
// ============================================
const bookData = [
  // Page 0: Front Cover
  {
    id: 0,
    type: 'cover',
    title: '6 Minute English',
    subtitle: 'Anger Episode',
    panels: [{ type: 'cover-art', icon: '😤' }],
    dialogues: [],
    vocab: []
  },

  // Page 1: Table of Contents
  {
    id: 1,
    type: 'toc',
    title: 'Contents',
    scenes: [
      { title: 'Scene 01 — Introduction', page: 2 },
      { title: 'Scene 02 — Losing Temper', page: 3 },
      { title: 'Scene 03 — The Survey', page: 4 },
      { title: 'Scene 04 — Blood Boiling', page: 5 },
      { title: 'Scene 05 — Fuming', page: 6 },
      { title: 'Scene 06 — Expert Opinion', page: 7 },
      { title: 'Scene 07 — Frustrations', page: 8 },
      { title: 'Scene 08 — Expectations', page: 9 },
      { title: 'Scene 09 — Angry Inside', page: 10 },
      { title: 'Scene 10 — Quiz Answer', page: 11 },
      { title: 'Scene 11 — Survey Results', page: 12 },
      { title: 'Scene 12 — Vocabulary', page: 13 },
      { title: 'Scene 13 — Goodbye', page: 14 },
      { title: 'Recap', page: 15 },
    ]
  },

  // Page 2: Scene 01 — Introduction (0:00-0:28)
  {
    id: 2,
    type: 'content',
    title: 'Scene 01 — Introduction',
    time: '0:00 - 0:28',
    panels: [{ type: 'studio', caption: 'Radio Studio', icon: '🎙️' }],
    dialogues: [
      {
        speaker: 'Rob',
        text: 'This is 6 Minute English from BBC Learning English. My name is Rob and I\'m joined in the studio by Jennifer.'
      },
      {
        speaker: 'Jennifer',
        text: 'Hello.'
      },
      {
        speaker: 'Rob',
        text: 'Hello. In today\'s programme we\'re talking about anger — what makes us angry and how we can control it.'
      }
    ],
    vocab: [
      { term: 'anger', hint: 'A strong feeling of displeasure or hostility' }
    ]
  },

  // Page 3: Scene 02 — Losing Temper (0:28-0:53)
  {
    id: 3,
    type: 'content',
    title: 'Scene 02 — Losing Temper',
    time: '0:28 - 0:53',
    panels: [{ type: 'emotional', caption: 'Feeling Frustrated', icon: '😠' }],
    dialogues: [
      {
        speaker: 'Jennifer',
        text: 'Oh yes. There are many things that make me lose my temper — like bad customer service or when the train is delayed.'
      },
      {
        speaker: 'Rob',
        text: 'Well, we\'ll hear what they are soon. But let me just check you\'re not about to explode with anger!'
      },
      {
        speaker: 'Jennifer',
        text: 'It\'s OK, Rob. I\'m in a good mood today. Let\'s hear what makes other people angry.'
      }
    ],
    vocab: [
      { term: 'lose my temper', hint: 'To suddenly become very angry' },
      { term: 'explode', hint: 'To express emotions suddenly and violently' }
    ]
  },

  // Page 4: Scene 03 — The Survey (0:53-1:39)
  {
    id: 4,
    type: 'content',
    title: 'Scene 03 — The Survey',
    time: '0:53 - 1:39',
    panels: [{ type: 'research', caption: 'BBC Survey', icon: '📊' }],
    dialogues: [
      {
        speaker: 'Rob',
        text: 'OK. In a BBC survey, what was the most common thing that made people angry? Was it: a) waiting in a queue, b) bad drivers, or c) call centres? We\'ll find out the answer later.'
      },
      {
        speaker: 'Jennifer',
        text: 'Well, public transport annoys me a lot. When people push and shove to get on the train, I get really frustrated.'
      }
    ],
    vocab: [
      { term: 'survey', hint: 'A study of opinions or experiences of a group' },
      { term: 'push and shove', hint: 'To push people roughly to move forward' }
    ]
  },

  // Page 5: Scene 04 — Blood Boiling (1:39-2:13)
  {
    id: 5,
    type: 'content',
    title: 'Scene 04 — Blood Boiling',
    time: '1:39 - 2:13',
    panels: [{ type: 'emotional', caption: 'Blood Boiling', icon: '🌡️' }],
    dialogues: [
      {
        speaker: 'Rob',
        text: 'Yes, rudeness from other people really makes my blood boil. I can\'t stand it when people are impolite.'
      },
      {
        speaker: 'Jennifer',
        text: 'Anger is actually a survival skill. In the past, hunger would make us angry and give us energy to go and find food.'
      }
    ],
    vocab: [
      { term: 'makes my blood boil', hint: 'Makes me extremely angry' },
      { term: 'rudeness', hint: 'Behaviour that is not polite or respectful' },
      { term: 'survival skill', hint: 'An ability that helps you stay alive' }
    ]
  },

  // Page 6: Scene 05 — Fuming (2:13-2:47)
  {
    id: 6,
    type: 'content',
    title: 'Scene 05 — Fuming',
    time: '2:13 - 2:47',
    panels: [{ type: 'emotional', caption: 'Steam Rising', icon: '💨' }],
    dialogues: [
      {
        speaker: 'Rob',
        text: 'These days we start fuming over small things — things that don\'t really matter that much.'
      },
      {
        speaker: 'Jennifer',
        text: 'Yes, modern life is to blame. We have so much more to deal with now than in the past.'
      },
      {
        speaker: 'Rob',
        text: 'Let\'s hear from psychologist Dr. Sandi Mann now about why modern life makes us so angry.'
      }
    ],
    vocab: [
      { term: 'fuming', hint: 'Feeling or showing great anger' },
      { term: 'to blame', hint: 'Responsible for something bad' }
    ]
  },

  // Page 7: Scene 06 — Expert Opinion (2:48-3:25)
  {
    id: 7,
    type: 'content',
    title: 'Scene 06 — Expert Opinion',
    time: '2:48 - 3:25',
    panels: [{ type: 'research', caption: 'Psychology Expert', icon: '🧠' }],
    dialogues: [
      {
        speaker: 'Speaker3',
        text: 'Stress levels are really high. Modern life is very fast-paced. We have ongoing frustrations building up, and small things can tip us over the edge.'
      },
      {
        speaker: 'Rob',
        text: 'So modern life is fast-paced — things happen quickly and we\'re always busy.'
      },
      {
        speaker: 'Jennifer',
        text: 'Yes, we rush around — gym, meeting friends, shopping, work, getting enough sleep — it\'s all very stressful!'
      }
    ],
    vocab: [
      { term: 'fast-paced', hint: 'Happening very quickly' },
      { term: 'stress', hint: 'Mental or emotional pressure' },
      { term: 'tip us over the edge', hint: 'Make us suddenly lose control' }
    ]
  },

  // Page 8: Scene 07 — Frustrations (3:26-3:56)
  {
    id: 8,
    type: 'content',
    title: 'Scene 07 — Frustrations',
    time: '3:26 - 3:56',
    panels: [{ type: 'emotional', caption: 'Building Frustration', icon: '😤' }],
    dialogues: [
      {
        speaker: 'Rob',
        text: 'We have ongoing frustrations — things that annoy us continuously, day after day. And these frustrations build up until we explode!'
      },
      {
        speaker: 'Jennifer',
        text: 'Rob, calm down! You\'re looking a bit red. Don\'t let the red mist descend — that\'s when you get so angry you can\'t think clearly.'
      }
    ],
    vocab: [
      { term: 'frustrations', hint: 'Feelings of being upset when unable to do something' },
      { term: 'red mist', hint: 'Extreme anger that prevents clear thinking' },
      { term: 'build up', hint: 'To gradually increase' }
    ]
  },

  // Page 9: Scene 08 — Expectations (3:56-4:22)
  {
    id: 9,
    type: 'content',
    title: 'Scene 08 — Expectations',
    time: '3:56 - 4:22',
    panels: [{ type: 'transport', caption: 'Modern Impatience', icon: '⏰' }],
    dialogues: [
      {
        speaker: 'Rob',
        text: 'OK, I\'m fine. But it\'s true — we have high expectations now. If the wifi is slow or the train is late, we get angry. We want things now!'
      },
      {
        speaker: 'Jennifer',
        text: 'Do you ever get angry with other people, not just situations?'
      }
    ],
    vocab: [
      { term: 'expectations', hint: 'Beliefs that something will happen or be the case' },
      { term: 'wifi', hint: 'Wireless internet connection' }
    ]
  },

  // Page 10: Scene 09 — Angry Inside (4:22-4:52)
  {
    id: 10,
    type: 'content',
    title: 'Scene 09 — Angry Inside',
    time: '4:22 - 4:52',
    panels: [{ type: 'street', caption: 'Hidden Anger', icon: '😶' }],
    dialogues: [
      {
        speaker: 'Rob',
        text: 'Sometimes. Like when someone pushes past me at the ticket barriers. I don\'t say anything, but I\'m angry inside. I might curse under my breath.'
      },
      {
        speaker: 'Jennifer',
        text: 'Well, experts say we should allow more time for things, try to do less, and practice anger management techniques like deep breathing.'
      }
    ],
    vocab: [
      { term: 'curse', hint: 'To use rude or offensive words' },
      { term: 'anger management', hint: 'Techniques to control anger' },
      { term: 'under my breath', hint: 'Very quietly, so others can\'t hear' }
    ]
  },

  // Page 11: Scene 10 — Quiz Answer (4:53-5:14)
  {
    id: 11,
    type: 'content',
    title: 'Scene 10 — Quiz Answer',
    time: '4:53 - 5:14',
    panels: [{ type: 'quiz', caption: 'The Answer!', icon: '✅' }],
    dialogues: [
      {
        speaker: 'Rob',
        text: 'OK, time to reveal the answer to our quiz question. What was the most common thing that made people angry?'
      },
      {
        speaker: 'Jennifer',
        text: 'I said c) call centres.'
      },
      {
        speaker: 'Rob',
        text: 'You are right!'
      },
      {
        speaker: 'Jennifer',
        text: 'Oh!'
      }
    ],
    vocab: [
      { term: 'reveal', hint: 'To make something known that was hidden' },
      { term: 'call centre', hint: 'An office where staff handle phone calls' }
    ]
  },

  // Page 12: Scene 11 — Survey Results (5:14-5:38)
  {
    id: 12,
    type: 'content',
    title: 'Scene 11 — Survey Results',
    time: '5:14 - 5:38',
    panels: [{ type: 'research', caption: 'Survey Findings', icon: '📈' }],
    dialogues: [
      {
        speaker: 'Rob',
        text: 'The survey found that being put on hold when calling someone was the most annoying thing. Interestingly, women reported getting angry more often than men. But when men do get angry, their aggression is often more intense. So remember — take a deep breath and count to ten!'
      }
    ],
    vocab: [
      { term: 'on hold', hint: 'Waiting on the phone to be connected' },
      { term: 'aggression', hint: 'Hostile or violent behaviour' },
      { term: 'deep breath', hint: 'Breathing slowly to calm down' }
    ]
  },

  // Page 13: Scene 12 — Vocabulary Review (5:39-6:04)
  {
    id: 13,
    type: 'content',
    title: 'Scene 12 — Vocabulary',
    time: '5:39 - 6:04',
    panels: [{ type: 'vocab', caption: 'Key Words', icon: '📚' }],
    dialogues: [
      {
        speaker: 'Jennifer',
        text: 'Here are the words we learned today: anger, lose my temper, makes my blood boil, fuming, fast-paced, stress, frustrations, red mist, curse, anger management, and aggression.'
      }
    ],
    vocab: [
      { term: 'anger', hint: 'Strong feeling of displeasure' },
      { term: 'lose my temper', hint: 'Suddenly become very angry' },
      { term: 'makes my blood boil', hint: 'Makes extremely angry' },
      { term: 'fuming', hint: 'Showing great anger' },
      { term: 'fast-paced', hint: 'Happening quickly' }
    ]
  },

  // Page 14: Scene 13 — Goodbye (6:05-6:19)
  {
    id: 14,
    type: 'content',
    title: 'Scene 13 — Goodbye',
    time: '6:05 - 6:19',
    panels: [{ type: 'goodbye', caption: 'See You Next Time!', icon: '👋' }],
    dialogues: [
      {
        speaker: 'Rob',
        text: 'Thank you for listening. Don\'t forget to check out our website for more programmes. Goodbye!'
      },
      {
        speaker: 'Jennifer',
        text: 'Bye.'
      },
      {
        speaker: 'Rob',
        text: 'Bye.'
      }
    ],
    vocab: []
  },

  // Page 15: Recap
  {
    id: 15,
    type: 'recap',
    title: 'Vocabulary Recap',
    vocab: [
      { term: 'anger', hint: 'A strong feeling of displeasure or hostility' },
      { term: 'lose my temper', hint: 'To suddenly become very angry' },
      { term: 'makes my blood boil', hint: 'Makes me extremely angry' },
      { term: 'fuming', hint: 'Feeling or showing great anger' },
      { term: 'fast-paced', hint: 'Happening very quickly' },
      { term: 'stress', hint: 'Mental or emotional pressure' },
      { term: 'frustrations', hint: 'Feelings of upset when unable to do something' },
      { term: 'red mist', hint: 'Extreme anger preventing clear thinking' },
      { term: 'curse', hint: 'To use rude or offensive words' },
      { term: 'anger management', hint: 'Techniques to control anger' },
      { term: 'aggression', hint: 'Hostile or violent behaviour' }
    ]
  },

  // Page 16: Back Cover
  {
    id: 16,
    type: 'back-cover',
    title: 'Thank You',
    text: 'This is an unofficial interactive storybook adaptation of the BBC Learning English podcast "6 Minute English" — Anger Episode.',
    credits: 'Created with HTML, CSS & Vanilla JavaScript'
  }
];

// ============================================
// APP STATE
// ============================================
const state = {
  currentPage: 0,
  totalPages: bookData.length,
  isFlipping: false,
  isStudyMode: false,
  isMobile: window.innerWidth <= 900,
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  soundEnabled: localStorage.getItem('flipbook-sound') !== 'off', // Default: ON
  touchStartX: 0,
  touchEndX: 0
};

// ============================================
// DOM ELEMENTS
// ============================================
const elements = {
  book: document.getElementById('book'),
  currentPageEl: document.getElementById('currentPage'),
  totalPagesEl: document.getElementById('totalPages'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  readModeBtn: document.getElementById('readModeBtn'),
  studyModeBtn: document.getElementById('studyModeBtn'),
  tocModal: document.getElementById('tocModal'),
  tocTrigger: document.getElementById('tocTrigger'),
  tocClose: document.getElementById('tocClose'),
  tocList: document.getElementById('tocList'),
  announcer: document.getElementById('announcer'),
  keyboardHelp: document.getElementById('keyboardHelp'),
  flipbookContainer: document.getElementById('flipbook-container')
};

// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Render the entire book
 */
function renderBook() {
  elements.book.innerHTML = '<div class="book-spine"></div>';
  elements.totalPagesEl.textContent = state.totalPages;

  // Check mobile state before rendering
  state.isMobile = window.innerWidth <= 900;

  bookData.forEach((pageData, index) => {
    const pageEl = createPageElement(pageData, index);
    elements.book.appendChild(pageEl);
  });

  renderTOC();
  updatePageIndicator();
  updateNavButtons();
  updatePageVisibility();

  // Ensure correct page display on mobile
  if (state.isMobile) {
    const pages = elements.book.querySelectorAll('.page');
    pages.forEach((page, index) => {
      if (index === state.currentPage) {
        page.classList.add('active');
        page.style.display = 'block';
      } else {
        page.style.display = 'none';
      }
    });
  }
}

/**
 * Create a page element
 */
function createPageElement(pageData, index) {
  const page = document.createElement('div');
  page.className = `page ${state.isMobile ? 'right-page' : (index % 2 === 0 ? 'right-page' : 'left-page')}`;
  page.dataset.pageId = index;
  page.setAttribute('role', 'article');
  page.setAttribute('aria-label', `Page ${index + 1}: ${pageData.title || 'Content'}`);

  // Create front face
  const front = document.createElement('div');
  front.className = 'page-front';
  front.innerHTML = renderPageContent(pageData);

  // Create back face (empty or with faint pattern)
  const back = document.createElement('div');
  back.className = 'page-back';
  back.innerHTML = '<div class="page-content" style="background: #f0ebe0;"></div>';

  page.appendChild(front);
  page.appendChild(back);

  // Mark flipped pages
  if (index < state.currentPage) {
    page.classList.add('flipped');
  }

  // Mobile active state
  if (state.isMobile && index === state.currentPage) {
    page.classList.add('active');
  }

  return page;
}

/**
 * Render page content based on type
 */
function renderPageContent(pageData) {
  switch (pageData.type) {
    case 'cover':
      return renderCoverPage(pageData);
    case 'toc':
      return renderTOCPage(pageData);
    case 'content':
      return renderContentPage(pageData);
    case 'recap':
      return renderRecapPage(pageData);
    case 'back-cover':
      return renderBackCoverPage(pageData);
    default:
      return '<div class="page-content">Page content</div>';
  }
}

/**
 * Render cover page
 */
function renderCoverPage(data) {
  return `
    <div class="page-content cover">
      <div class="cover-art">${data.panels[0]?.icon || '📖'}</div>
      <h2 class="cover-title">${data.title}</h2>
      <p class="cover-subtitle">${data.subtitle}</p>
      <p class="cover-info">Interactive Storybook (Unofficial)</p>
    </div>
  `;
}

/**
 * Render table of contents page
 */
function renderTOCPage(data) {
  const items = data.scenes.map(scene => `
    <li class="toc-item" data-goto="${scene.page}" tabindex="0" role="button">
      <span class="toc-item-title">${scene.title}</span>
      <span class="toc-item-page">${scene.page + 1}</span>
    </li>
  `).join('');

  return `
    <div class="page-content toc">
      <h2 class="toc-page-title">${data.title}</h2>
      <ul class="toc-list-page">${items}</ul>
    </div>
  `;
}

/**
 * Render content page
 */
function renderContentPage(data) {
  const panelsHTML = data.panels.map(panel => `
    <div class="comic-panel ${panel.type}">
      <span class="panel-icon">${panel.icon || '🎬'}</span>
      ${panel.caption ? `<span class="panel-caption">${panel.caption}</span>` : ''}
    </div>
  `).join('');

  const dialoguesHTML = data.dialogues.map(d => renderDialogue(d)).join('');

  const vocabHTML = data.vocab.length > 0
    ? `<div class="vocab-container">${data.vocab.map(v => renderVocabChip(v)).join('')}</div>`
    : '';

  return `
    <div class="page-content">
      <header class="page-header">
        <h3 class="scene-title">${data.title}</h3>
        <span class="timecode">${data.time}</span>
      </header>
      <div class="panel-container">${panelsHTML}</div>
      <div class="dialogue-container">${dialoguesHTML}</div>
      ${vocabHTML}
    </div>
  `;
}

/**
 * Render a single dialogue bubble
 */
function renderDialogue(dialogue) {
  const speakerClass = dialogue.speaker.toLowerCase().replace(' ', '');
  return `
    <div class="dialogue ${speakerClass}">
      <span class="speaker-label ${speakerClass}">${dialogue.speaker}</span>
      <div class="speech-bubble">${dialogue.text}</div>
    </div>
  `;
}

/**
 * Render vocabulary chip
 */
function renderVocabChip(vocab) {
  return `
    <span class="vocab-chip" tabindex="0">
      ${vocab.term}
      <span class="vocab-hint">${vocab.hint}</span>
    </span>
  `;
}

/**
 * Render recap page
 */
function renderRecapPage(data) {
  const itemsHTML = data.vocab.map(v => `
    <div class="recap-item">
      <span class="recap-term">${v.term}</span>
      <span class="recap-definition">${v.hint}</span>
    </div>
  `).join('');

  return `
    <div class="page-content recap">
      <h2 class="recap-title">${data.title}</h2>
      <div class="recap-list">${itemsHTML}</div>
    </div>
  `;
}

/**
 * Render back cover page
 */
function renderBackCoverPage(data) {
  return `
    <div class="page-content back-cover">
      <h2 class="cover-title">${data.title}</h2>
      <p class="back-cover-text">${data.text}</p>
      <p class="back-cover-credits">${data.credits}</p>
    </div>
  `;
}

/**
 * Render modal TOC
 */
function renderTOC() {
  const tocContent = bookData
    .filter(p => p.type === 'content' || p.type === 'recap')
    .map(page => `
      <button data-goto="${page.id}">
        <span class="toc-scene-title">${page.title}</span>
        <span class="toc-scene-page">${page.id + 1}</span>
      </button>
    `).join('');

  elements.tocList.innerHTML = tocContent;
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

/**
 * Go to specific page
 */
function goToPage(pageNum) {
  if (pageNum < 0 || pageNum >= state.totalPages || state.isFlipping) return;
  if (pageNum === state.currentPage) return;

  const direction = pageNum > state.currentPage ? 'forward' : 'backward';

  if (state.isMobile) {
    // Mobile: simple page swap
    flipMobile(pageNum);
  } else {
    // Desktop: animate through pages
    if (Math.abs(pageNum - state.currentPage) > 1) {
      // Jump directly for large differences
      state.currentPage = pageNum;
      updateAllPages();
    } else {
      // Single page flip with animation
      flipPage(direction);
    }
  }

  closeTOC();
}

/**
 * Next page
 */
function nextPage() {
  if (state.currentPage < state.totalPages - 1 && !state.isFlipping) {
    if (state.isMobile) {
      playPageTurnSound();
      flipMobile(state.currentPage + 1);
    } else {
      flipPage('forward');
    }
  }
}

/**
 * Previous page
 */
function prevPage() {
  if (state.currentPage > 0 && !state.isFlipping) {
    if (state.isMobile) {
      playPageTurnSound();
      flipMobile(state.currentPage - 1);
    } else {
      flipPage('backward');
    }
  }
}

/**
 * Flip page with animation
 */
function flipPage(direction) {
  if (state.isFlipping) return;

  state.isFlipping = true;
  const pages = elements.book.querySelectorAll('.page');

  // Play page turn sound
  playPageTurnSound();

  if (direction === 'forward') {
    const currentPageEl = pages[state.currentPage];
    if (currentPageEl) {
      currentPageEl.classList.add('flipping-forward');

      const duration = state.reducedMotion ? 10 : 600;
      setTimeout(() => {
        currentPageEl.classList.remove('flipping-forward');
        currentPageEl.classList.add('flipped');
        state.currentPage++;
        updatePageIndicator();
        updateNavButtons();
        updatePageVisibility();
        announcePageChange();
        state.isFlipping = false;
      }, duration);
    }
  } else {
    state.currentPage--;
    const currentPageEl = pages[state.currentPage];
    if (currentPageEl) {
      currentPageEl.classList.add('flipping-backward');
      currentPageEl.classList.remove('flipped');

      const duration = state.reducedMotion ? 10 : 600;
      setTimeout(() => {
        currentPageEl.classList.remove('flipping-backward');
        updatePageIndicator();
        updateNavButtons();
        updatePageVisibility();
        announcePageChange();
        state.isFlipping = false;
      }, duration);
    }
  }
}

/**
 * Mobile page flip (no animation, just swap)
 */
function flipMobile(targetPage) {
  const pages = elements.book.querySelectorAll('.page');

  // Remove all states first
  pages.forEach((page) => {
    page.classList.remove('active', 'flipped', 'flipping-forward', 'flipping-backward');
    page.style.display = 'none';
  });

  // Show only target page
  const targetPageEl = pages[targetPage];
  if (targetPageEl) {
    targetPageEl.classList.add('active');
    targetPageEl.style.display = 'block';
  }

  state.currentPage = targetPage;
  updatePageIndicator();
  updateNavButtons();
  announcePageChange();
}

/**
 * Update all page states (for jumps)
 */
function updateAllPages() {
  const pages = elements.book.querySelectorAll('.page');

  pages.forEach((page, index) => {
    page.classList.remove('flipping-forward', 'flipping-backward', 'active');

    if (index < state.currentPage) {
      page.classList.add('flipped');
    } else {
      page.classList.remove('flipped');
    }

    if (state.isMobile && index === state.currentPage) {
      page.classList.add('active');
    }
  });

  updatePageIndicator();
  updateNavButtons();
  updatePageVisibility();
  announcePageChange();
}

/**
 * Update page visibility for performance
 */
function updatePageVisibility() {
  const pages = elements.book.querySelectorAll('.page');
  pages.forEach((page, index) => {
    // Show only nearby pages for performance
    const distance = Math.abs(index - state.currentPage);
    if (distance <= 2) {
      page.style.visibility = 'visible';
    } else {
      page.style.visibility = 'hidden';
    }
  });
}

/**
 * Update page indicator
 */
function updatePageIndicator() {
  elements.currentPageEl.textContent = state.currentPage + 1;
}

/**
 * Update navigation button states
 */
function updateNavButtons() {
  elements.prevBtn.disabled = state.currentPage === 0;
  elements.nextBtn.disabled = state.currentPage === state.totalPages - 1;
}

/**
 * Announce page change for screen readers
 */
function announcePageChange() {
  const pageData = bookData[state.currentPage];
  const announcement = `Page ${state.currentPage + 1} of ${state.totalPages}. ${pageData.title || ''}`;
  elements.announcer.textContent = announcement;
}

// ============================================
// MODE TOGGLE
// ============================================

/**
 * Toggle between read and study mode
 */
function toggleMode(mode) {
  state.isStudyMode = mode === 'study';

  document.body.classList.toggle('study-mode', state.isStudyMode);

  elements.readModeBtn.classList.toggle('active', !state.isStudyMode);
  elements.readModeBtn.setAttribute('aria-pressed', !state.isStudyMode);

  elements.studyModeBtn.classList.toggle('active', state.isStudyMode);
  elements.studyModeBtn.setAttribute('aria-pressed', state.isStudyMode);

  const announcement = state.isStudyMode
    ? 'Study mode enabled. Hover over vocabulary words to see definitions.'
    : 'Read mode enabled.';
  elements.announcer.textContent = announcement;
}

// ============================================
// TOC MODAL
// ============================================

/**
 * Open TOC modal
 */
function openTOC() {
  elements.tocModal.hidden = false;
  elements.tocClose.focus();
}

/**
 * Close TOC modal
 */
function closeTOC() {
  elements.tocModal.hidden = true;
  elements.tocTrigger.focus();
}

// ============================================
// KEYBOARD HELP
// ============================================

/**
 * Toggle keyboard help
 */
function toggleKeyboardHelp() {
  elements.keyboardHelp.hidden = !elements.keyboardHelp.hidden;
}

// ============================================
// TOUCH/SWIPE HANDLING
// ============================================

/**
 * Initialize touch events
 */
function initSwipe() {
  const container = elements.flipbookContainer;

  container.addEventListener('touchstart', (e) => {
    state.touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    state.touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
}

/**
 * Handle swipe gesture
 */
function handleSwipe() {
  const threshold = 50;
  const diff = state.touchStartX - state.touchEndX;

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      // Swipe left = next page
      nextPage();
    } else {
      // Swipe right = prev page
      prevPage();
    }
  }
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

/**
 * Initialize keyboard events
 */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    // Ignore if typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevPage();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextPage();
        break;
      case 'Home':
        e.preventDefault();
        goToPage(0);
        break;
      case 'End':
        e.preventDefault();
        goToPage(state.totalPages - 1);
        break;
      case 't':
      case 'T':
        e.preventDefault();
        if (elements.tocModal.hidden) {
          openTOC();
        } else {
          closeTOC();
        }
        break;
      case 'm':
      case 'M':
        e.preventDefault();
        toggleMode(state.isStudyMode ? 'read' : 'study');
        break;
      case 's':
      case 'S':
        e.preventDefault();
        toggleSound();
        break;
      case '?':
        e.preventDefault();
        toggleKeyboardHelp();
        break;
      case 'Escape':
        if (!elements.tocModal.hidden) {
          e.preventDefault();
          closeTOC();
        }
        if (!elements.keyboardHelp.hidden) {
          e.preventDefault();
          elements.keyboardHelp.hidden = true;
        }
        break;
    }
  });
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
  // Navigation buttons
  elements.prevBtn.addEventListener('click', prevPage);
  elements.nextBtn.addEventListener('click', nextPage);

  // Mode toggle
  elements.readModeBtn.addEventListener('click', () => toggleMode('read'));
  elements.studyModeBtn.addEventListener('click', () => toggleMode('study'));

  // Sound toggle
  const soundBtn = document.getElementById('soundToggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', toggleSound);
  }

  // TOC
  elements.tocTrigger.addEventListener('click', openTOC);
  elements.tocClose.addEventListener('click', closeTOC);
  elements.tocModal.querySelector('.toc-backdrop').addEventListener('click', closeTOC);

  // TOC navigation
  elements.tocList.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn && btn.dataset.goto) {
      goToPage(parseInt(btn.dataset.goto, 10));
    }
  });

  // In-page TOC (on TOC page)
  elements.book.addEventListener('click', (e) => {
    const tocItem = e.target.closest('.toc-item');
    if (tocItem && tocItem.dataset.goto) {
      goToPage(parseInt(tocItem.dataset.goto, 10));
    }
  });

  // Page click to flip (desktop only)
  elements.book.addEventListener('click', (e) => {
    if (state.isMobile) return;

    const page = e.target.closest('.page');
    if (!page) return;

    // Ignore if clicking vocab or TOC items
    if (e.target.closest('.vocab-chip') || e.target.closest('.toc-item')) return;

    const pageIndex = parseInt(page.dataset.pageId, 10);

    // Click on current right page = next
    if (pageIndex === state.currentPage) {
      nextPage();
    }
    // Click on previous pages = go back
    else if (pageIndex < state.currentPage) {
      prevPage();
    }
  });

  // Resize handler
  window.addEventListener('resize', debounce(() => {
    const wasMobile = state.isMobile;
    state.isMobile = window.innerWidth <= 900;

    if (wasMobile !== state.isMobile) {
      renderBook();
    }
  }, 250));

  // Reduced motion preference change
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    state.reducedMotion = e.matches;
  });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function
 */
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the app
 */
function init() {
  renderBook();
  initEventListeners();
  initKeyboard();
  initSwipe();
  initPageTurnSound();
  updateSoundButton();

  // Focus book for keyboard navigation
  elements.book.focus();

  console.log('📖 Podcast Flipbook Storybook initialized');
  console.log(`📚 Total pages: ${state.totalPages}`);
  console.log('⌨️ Press ? for keyboard shortcuts');
  console.log('🔊 Sound:', state.soundEnabled ? 'ON' : 'OFF');
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', init);
