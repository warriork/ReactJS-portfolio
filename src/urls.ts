import { slugify } from './utils/slugify'
export const urls = {
  bredanEich: 'https://wikipedia.org/wiki/Brendan_Eich',
  warriorkGitLab: 'https://gitlab.com/warriork',
  itAbsolvent: 'https://www.it-absolvent.cz',
  layout: '/',
  homepage: '/',
  jsHistory: '/js-history',
  counterApp: '/counter-app',
  todoApp: '/todo',
  mortgageCalculator: '/mortgage-calculator',
  hackerTyper: '/hacker-typer',
  memoryGame: '/memory-game',
  httpFilter: '/http-filter',
  blogApp: '/blog',
  blogAppWithNestedChildren: '/blog/*',
  createArticle: `/new-article`,
  articleDetail: '/articles/',
  slug: ':slug',
} as const

export const getArticleUrl = (title: string) =>
  `${urls.blogApp}${urls.articleDetail}${slugify(title)}`
export const newArticleUrl = `${urls.blogApp}${urls.createArticle}`
export const articleDetailUrl = `${urls.articleDetail}${urls.slug}`
