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
} as const
export const apiRequests = {
  filter: (value: string) => `${process.env.REACT_APP_URL}?search=${value}`,
}
