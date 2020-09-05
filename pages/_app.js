import Head from 'next/head';

import GlobalStyle from '../src/styles/GlobalStyle';
import Header from '../src/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Warriors Orochi</title>
        <link rel='icon' href='/assets/logo.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
