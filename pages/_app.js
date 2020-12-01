import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
