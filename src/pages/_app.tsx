import { ThemesProvider } from '../contexts/ThemeContext';
import GlobalStyles from '../styles/global';

const App = ({ Component, pageProps }) => {
  return (
    <ThemesProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemesProvider>
  );
};

export default App;
