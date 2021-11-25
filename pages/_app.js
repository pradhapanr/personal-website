import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/Main';
import Fonts from '../components/Fonts';
import theme from '../lib/Theme';
import { AnimatePresence } from 'framer-motion';

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
