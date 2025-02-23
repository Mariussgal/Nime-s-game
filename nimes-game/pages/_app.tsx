import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (

      
       
          <ChakraProvider >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>

      

  );
}

export default MyApp;