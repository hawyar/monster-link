import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyle';
import { Reset } from 'styled-reset';
import { theme } from '../theme/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
