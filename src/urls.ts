import { slugify } from './utils/slugify'
export const urls = {
  bredanEich: 'https://wikipedia.org/wiki/Brendan_Eich',
  myGitLab: 'https://gitlab.com/warriork',
  rsSchool: 'https://rs.school/',
  myGithub: 'https://github.com/warriork',
  myMail: 'mailto:fesinaihor@gmail.com',
  myLinkedin: 'https://www.linkedin.com/in/ihor-fesina/',
  itAbsolvent: 'https://www.it-absolvent.cz',
  webDevCamp: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
  layout: '/',
  homepage: '/',
  pfizerPrize:
    'https://www.pfizer.cz/news/spole%C4%8Dnost-pfizer-op%C4%9Bt-ocenila-nadan%C3%A9-studenty',
  jsHistory: '/js-history',
  counterApp: '/counter-app',
  todoApp: '/todo',
  mortgageCalculator: '/mortgage-calculator',
  ticTacToe: 'https://warriork-game.netlify.app/',
  qoutes: 'https://warriork-random-quotes.netlify.app/',
  portfolio: 'https://portfolio-video.netlify.app/',
  hackerTyper: '/hacker-typer',
  memoryGame: '/memory-game',
  httpFilter: '/http-filter',
  blogApp: '/blog',
  blogAppWithNestedChildren: '/blog/*',
  createArticle: '/new-article',
  articleDetail: '/articles/',
  slug: ':slug',
} as const

export const getArticleUrl = (title: string) =>
  `${urls.blogApp}${urls.articleDetail}${slugify(title)}`
export const newArticleUrl = `${urls.blogApp}${urls.createArticle}`
export const articleDetailUrl = `${urls.articleDetail}${urls.slug}`
