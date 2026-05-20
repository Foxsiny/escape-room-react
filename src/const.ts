export const AppRoute = {
  Main: '/',
  Quest: '/quest/:id',
  Contacts: '/contacts',
  Booking: '/booking/:id',
  Login: '/login',
  MyQuests: '/my-quests',
} as const;

export enum QuestLevelLabel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}
