import { Quest } from '../types/quest';

export const QUESTS_MOCKS: Quest[] = [
  {
    id: '1',
    title: 'Склеп',
    description: 'Вы оказались в ловушке в древнем фамильном склепе...',
    previewImg: 'img/content/crypt/crypt-size-s.jpg',
    previewImgWebp: 'img/content/crypt/crypt-size-s.webp',
    coverImg: 'img/content/crypt/crypt-size-m.jpg',
    coverImgWebp: 'img/content/crypt/crypt-size-m.webp',
    type: 'horror',
    level: 'hard',
    peopleCount: [2, 5],
    duration: 60,
  },
  {
    id: '2',
    title: 'Тайны старого театра',
    description: 'За кулисами заброшенного театра происходят странные вещи...',
    previewImg: 'img/content/theater/theater-size-s.jpg',
    previewImgWebp: 'img/content/theater/theater-size-s.webp',
    coverImg: 'img/content/theater/theater-size-m.jpg',
    coverImgWebp: 'img/content/theater/theater-size-m.webp',
    type: 'mystic',
    level: 'medium',
    peopleCount: [2, 6],
    duration: 75,
  },
  {
    id: '3',
    title: 'Оливер Твист',
    description: 'Попробуйте сбежать из логова карманников в викторианском Лондоне.',
    previewImg: 'img/content/london/london-size-s.jpg',
    previewImgWebp: 'img/content/london/london-size-s.webp',
    coverImg: 'img/content/london/london-size-m.jpg',
    coverImgWebp: 'img/content/london/london-size-m.webp',
    type: 'adventures',
    level: 'easy',
    peopleCount: [2, 7],
    duration: 60,
  }
];
