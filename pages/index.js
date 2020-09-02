import Head from 'next/head';
import { LandingPageContainer } from '../src/styles/LandingPage';

export default function Home() {
  return (
    <>
      <LandingPageContainer>
        <img src='/assets/bg-landing-page.png' />
      </LandingPageContainer>
    </>
  );
}
