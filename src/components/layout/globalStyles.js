import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap');

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    box-sizing: inherit;
    font-size: 62.5%;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({theme}) => theme.grey};
    color: #fff;
}

a {
    text-decoration: none;
    color: ${({theme}) => theme.lightest}
}

.player {
    width: 100% !important;
    height: 100% !important;
}
`

export default GlobalStyles