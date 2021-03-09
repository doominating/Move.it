import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: ${(props) => props.theme.colors.background};
    --text: ${(props) => props.theme.colors.text};
    --text-highlight: ${(props) => props.theme.colors.textHighlight};
    --title: ${(props) => props.theme.colors.title};

    --white: ${(props) => props.theme.colors.white};
    --gray-line: ${(props) => props.theme.colors.grayLine};
    --red: ${(props) => props.theme.colors.red};
    --green: ${(props) => props.theme.colors.green};
    --blue: ${(props) => props.theme.colors.blue};
    --blue-dark: ${(props) => props.theme.colors.blueDark};
    --blue-twitter: ${(props) => props.theme.colors.blueTwitter};
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }

    /* section {
      grid-template-columns: 1fr;
    }
    .profileContainer {
      margin-top: 4rem;
    } */
  }

  body {
    background: var(--background);
    color: var(--text);
    transition: all 0.25s linear;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherited;
    text-decoration: none;
  }
`;
