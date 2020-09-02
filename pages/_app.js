import Head from 'next/head';

import GlobalStyle from '../src/styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Warriors Orochi</title>
        <link rel='icon' href='/assets/logo-brand.png' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
