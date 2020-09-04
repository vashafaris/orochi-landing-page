import Head from 'next/head';
import {
  LandingSection,
  CardSection,
  CharacterSection,
  Orochi,
  TrailerSection,
  TrailerVideo,
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
      title: 'Rulers of Darkness',
      description:
        'A new faction that will create a storyline that you’ve never seen before in the Warriors series. Discover all these deadly characters within the game and know their story.',
    },
    {
      image: 'card-3.png',
      title: 'New Legendary Characters',
      description:
        'The villains are not without additional resistance. Introducing 6 new additional characters that will also help your journey to fight against Orochi and his minions. ',
    },
    {
      image: 'card-4.png',
      title: 'New Attack Move',
      description:
        'We’re adding a lot of new attack move for you beloved characters. Be sure to upgrade them as you progress along the storyline to unleash their full potential',
    },
    {
      image: 'card-5.png',
      title: 'Modern Graphics',
      description:
        'We’re using the new Unreal Engine to remodel our existing characters and battlefield to give you a more immersive next gen experience.',
    },
    {
      image: 'card-6.png',
      title: 'Wombo Combo',
      description:
        'We understand you really love the combo mechanics, now we’re giving more rewarding and satisfying rewards every time you finish a combo.',
    },
  ];

  return (
    <>
      <LandingSection>
        <img src='/assets/landing/logo.png' />
        <div className='content-container'>
          <Row>
            <Column>
              <h1>Coming September 2007</h1>
            </Column>
            <Column>
              <button type='button' className='left-btn'>
                KNOW MORE
              </button>
              <button type='button' className='right-btn'>
                PRE ORDER NOW
              </button>
            </Column>
          </Row>
        </div>
      </LandingSection>

      <TrailerSection>
        <iframe
          height='400'
          width='700'
          src='https://www.youtube.com/embed/pGqfPJ5UTAY'
        ></iframe>
      </TrailerSection>

      <CardSection>
        <Text fontSize={'6rem'} fontWeight={'800'}>
          The All New
        </Text>
        <Row>
          {cardsData.map((item) => (
            <Column lg={3}>
              <div className='card'>
                <img src={`/assets/cards/${item.image}`} />
                <h2 fontWeight={'bold'}>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Column>
          ))}
        </Row>
      </CardSection>

      <CharacterSection>
        {/* <div className='title'>
          <h1>Main Characters</h1>
        </div> */}
        <Orochi>
          <h2 className='name'>Orochi (遠呂智)</h2>
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
          <img
            src='/assets/characters/char-1-line-up.png'
            alt=''
            className='line-up-img'
          />
          <img
            src='/assets/characters/char-1-line-down.png'
            alt=''
            className='line-down-img'
          />
          <div className='info-up'>
            <h2 className='title-char'>Role</h2>
            <p className='description-char'>
              Orochi is an immensely powerful being that folded space and time,
              combining the Three Kingdoms era of China with the Sengoku period
              of Japan, in order to provide himself with a challenge. Obsessed
              with the entropic decay of the universe, Orochi seeks someone
              worthy of his strength. Perhaps this is one big cosmic death wish,
              but Orochi has shattered the space-time continuum just to find
              someone to best him. To Orochi, his existence is confirmed in the
              nonexistence of others.
            </p>
          </div>
          <div className='info-down'>
            <h2 className='title-char'>Eien no kumon (永遠の苦悶)</h2>
            <p className='description-char'>
              The Eternal Agony is Orochi’s weapon of choice. Crafted by the
              dark lord Manda in the 7th hell, Orochi harvest the soul and turns
              them into his power
            </p>
          </div>
        </Orochi>
      </CharacterSection>
    </>
  );
}
