import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
    }
    
    html, body, #root, .App {
        height: auto;
        color: #333333;
        background-color: #F5F5F5;
        font-family: 'Bebas Neue', Arial, Helvetica, sans-serif;
        scroll-behavior: smooth; 
    }

    .App {
        display: flex;
        @media(max-width: 550px) {
            flex-direction: column;
        }
    }
`

export default GlobalStyle;