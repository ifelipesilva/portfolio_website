import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};

  @font-face {
  font-family: 'ClashDisplay-Variable';
  src: url('/fonts/ClashDisplay-Variable.woff2') format('woff2'),
    url('/fonts/ClashDisplay-Variable.woff') format('woff'),
    url('/fonts/ClashDisplay-Variable.ttf') format('truetype');
  font-weight: 200 700;
  font-display: swap;
  font-style: normal;
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`

export default GlobalStyles
