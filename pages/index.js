import Head from 'next/head';
import {
  LandingSection,
  CardSection,
  CharacterSection,
  Orochi,
} from '../src/styles/LandingPage';
import Text from '../src/components/Text';
import { Row, Column } from '../src/components/Grid';

export default function Home() {
  const cardsData = [
    {
      image: 'card-1.png',
      title: 'Samurai x Dynasty',
      description:
        'For the first time ever, your favorite characters from the world of Samurai Warriors and Dynasty Warriors face up with and against each other in this new chaotic world that Orochi created. All 200 characters can be unlocked and are playable by playing and completing secret missions.',
    },
    {
      image: 'card-2.png',
      title: 'Samurai x Dynasty',
      description:
        'For the first time ever, your favorite characters from the world of Samurai Warriors and Dynasty Warriors face up with and against each other in this new chaotic world that Orochi created. All 200 characters can be unlocked and are playable by playing and completing secret missions.',
    },
    {
      image: 'card-3.png',
      title: 'Samurai x Dynasty',
      description:
        'For the first time ever, your favorite characters from the world of Samurai Warriors and Dynasty Warriors face up with and against each other in this new chaotic world that Orochi created. All 200 characters can be unlocked and are playable by playing and completing secret missions.',
    },
    {
      image: 'card-4.png',
      title: 'Samurai x Dynasty',
      description:
        'For the first time ever, your favorite characters from the world of Samurai Warriors and Dynasty Warriors face up with and against each other in this new chaotic world that Orochi created. All 200 characters can be unlocked and are playable by playing and completing secret missions.',
    },
    {
      image: 'card-5.png',
      title: 'Samurai x Dynasty',
      description:
        'For the first time ever, your favorite characters from the world of Samurai Warriors and Dynasty Warriors face up with and against each other in this new chaotic world that Orochi created. All 200 characters can be unlocked and are playable by playing and completing secret missions.',
    },
    {
      image: 'card-6.png',
      title: 'Samurai x Dynasty',
      description:
        'For the first time ever, your favorite characters from the world of Samurai Warriors and Dynasty Warriors face up with and against each other in this new chaotic world that Orochi created. All 200 characters can be unlocked and are playable by playing and completing secret missions.',
    },
  ];

  return (
    <>
      <LandingSection>
        <img src='/assets/landing/logo.png' />
        <div className='content-container'>
          <Text>Coming September 2007</Text>
        </div>
      </LandingSection>

      <CardSection>
        {/* <Row>
          <Text fontSize={'6rem'} fontWeight={'800'}>
            The All New
          </Text>
        </Row> */}
        <Row>
          {cardsData.map((item) => (
            <Column lg={3}>
              <img src={`/assets/cards/${item.image}`} />
              {/* <Text fontWeight={'bold'}>{item.title}</Text>
              <Text>{item.description}</Text> */}
            </Column>
          ))}
        </Row>
      </CardSection>

      <CharacterSection>
        <Orochi>
          <img src='/assets/characters/char-1-bg.png' className='background' />
          <img
            src='/assets/characters/char-1-primary.png'
            alt=''
            className='primary-img'
          />
          <img
            src='/assets/characters/char-1-secondary.png'
            alt=''
            className='secondary-img'
          />
          <h2>Orochi (遠呂智)</h2>
        </Orochi>
      </CharacterSection>
    </>
  );
}
