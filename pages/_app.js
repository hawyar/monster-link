import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyle';
import { Reset } from 'styled-reset';
import { theme } from '../theme/theme';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
