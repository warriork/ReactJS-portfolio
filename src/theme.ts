import { css } from 'styled-components'

export const styles = {
  color: {
    black: 'rgb(0, 0, 0)',
    blue: 'rgb(0, 0, 175)',
    grey: '	rgba(128,128,128, 0.25)',
    green: 'rgb(50, 205, 50)',
    brown: 'rgb(223, 177, 117)',
    wheat: '#f5deb3',
    lightblue: 'rgb(173, 216, 230)',
    darkBrown: '#bb8b6c',
    red: 'rgb(153, 51, 51)',
    consoleGreen: 'rgb(0, 255, 0)',
    consoleRed: 'rgb(255, 0, 0)',
    white: 'rgb(255, 255, 255)',
    main: 'rgb(255,255,255)',
    layout: 'rgb(65,125,140)',
    layoutFont: 'rgb(229,250,227)',
    layoutActive: 'rgb(0,66,66)',
    fontDark: 'rgb(24,48,53)',
    darkBlue: '#006b7e',
  },
  fontFamily: {
    roboto: 'roboto, sans-serif',
    courier: 'Courier Prime, mono space',
  },
  breakingPoints: {
    xs: '480px',
    s: '768px',
    m: '1024px',
  },
} as const
