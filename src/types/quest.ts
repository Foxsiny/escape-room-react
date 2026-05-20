export type QuestGenre = 'adventures' | 'horror' | 'mystic' | 'detective' | 'sci-fi';
export type QuestLevel = 'easy' | 'medium' | 'hard';

export type Quest = {
  id: string;
  title: string;
  description: string;
  previewImg: string;
  previewImgWebp: string;
  coverImg: string;
  coverImgWebp: string;
  type: QuestGenre;
  level: QuestLevel;
  peopleCount: [number, number]; // [минимум, максимум] участников
  duration: number;
};
