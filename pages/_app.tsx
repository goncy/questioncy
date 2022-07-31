import type {AppProps} from "next/app";

import {ChakraProvider, Container} from "@chakra-ui/react";

import theme from "../theme";

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth="container.xl" paddingY={4}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
