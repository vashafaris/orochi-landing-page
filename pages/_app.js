import Head from 'next/head';

import GlobalStyle from '../src/styles/GlobalStyle';
import Header from '../src/components/Header';
import { Footer } from '../src/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Warriors Orochi</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
