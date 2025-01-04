import { Env } from './env';

export const Site = {
  title: 'gohan blog',
  description: 'internet inventor',
  url: Env.BaseUrl,
  locale: 'en_US',
  icon: '🍚',
  userName: '',
} as const;
