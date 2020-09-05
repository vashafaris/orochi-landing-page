import Head from 'next/head';

import GlobalStyle from '../src/styles/GlobalStyle';
import Header from '../src/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Warriors Orochi</title>
        <link rel='icon' href='/assets/logo.png' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
