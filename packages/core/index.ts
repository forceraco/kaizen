export type PillarId =
  | 'seduction'
  | 'intimacy'
  | 'body'
  | 'mind'
  | 'health'
  | 'discipline'
  | 'habits'
  | 'challenges'
  | 'style'
  | 'charisma';

export interface Pillar {
  id: PillarId;
  name: string;
  description: string;
  icon: string;
}

export const PILLARS: Pillar[] = [
  { id: 'seduction', name: 'Зваблення та притягальність', description: 'Впевненість, флірт, мова тіла', icon: 'heart' },
  { id: 'intimacy', name: 'Інтимність (18+)', description: 'Освіта про близькість, згода', icon: 'lock' },
  { id: 'body', name: 'Тренування тіла', description: 'Силові, домашні, у залі', icon: 'dumbbell' },
  { id: 'mind', name: 'Медитація та розум', description: 'Усвідомленість, дихання, фокус', icon: 'lotus' },
  { id: 'health', name: 'Чоловіче здоров\'я', description: 'Тестостерон, сон, енергія', icon: 'activity' },
  { id: 'discipline', name: 'Дисципліна', description: 'Сила волі, ранкові ритуали', icon: 'shield' },
  { id: 'habits', name: 'Звички', description: 'Будування/розрив звичок', icon: 'flame' },
  { id: 'challenges', name: 'Челенджі', description: '7/30/75-денні виклики', icon: 'trophy' },
  { id: 'style', name: 'Стиль і грумінг', description: 'Гардероб, догляд, борода', icon: 'scissors' },
  { id: 'charisma', name: 'Харизма та комунікація', description: 'Голос, сторітелінг, лідерство', icon: 'message-circle' },
];

export interface UserProgress {
  userId: string;
  pillarId: PillarId;
  score: number;
  level: number;
  xp: number;
}
