import Head from 'next/head';
import { LandingPageContainer } from '../src/styles/LandingPage';
import {
  CharacterPageContainer,
  Background,
  PrimaryCharacter,
  SecondaryCharacter,
} from '../src/styles/CharactersPage';

export default function Home() {
  return (
    <>
      <LandingPageContainer>
        <img src='/assets/bg-landing-page.png' />
      </LandingPageContainer>
      <CharacterPageContainer>
        <Background src='/assets/characters/char-1-bg.png' />
        <PrimaryCharacter src='/assets/characters/char-1-primary.png' />
        <SecondaryCharacter src='/assets/characters/char-1-secondary.png' />
      </CharacterPageContainer>
    </>
  );
}
