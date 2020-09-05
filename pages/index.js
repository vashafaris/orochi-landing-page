import { isMobile } from 'react-device-detect';

import {
  LandingSection,
  CardSection,
  CharacterSection,
  Orochi,
  TrailerSection,
  OSTSection,
  POSection,
  Honda,
  Lubu,
} from '../src/styles/LandingPage';
import Text from '../src/components/Text';
import { Row, Column } from '../src/components/Grid';
import { Mobile } from '../src/components/Mobile';
import Header from '../src/components/Header';
import { Footer } from '../src/components/Footer';

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

  if (isMobile) {
    return <Mobile />;
  }

  return (
    <>
      <Header />
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
        <div className='iframe-container'>
          <iframe
            height='400'
            width='700'
            src='https://www.youtube.com/embed/pGqfPJ5UTAY'
            frameborder='0'
          ></iframe>
        </div>

        <img src='/assets/trailer/bg-left.png' alt='' className='bg-left' />
        <img src='/assets/trailer/bg-right.png' alt='' className='bg-right' />
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
                <h2 className='title-card' fontWeight={'bold'}>
                  {item.title}
                </h2>
                <p className='description-card'>{item.description}</p>
              </div>
            </Column>
          ))}
        </Row>
      </CardSection>

      <CharacterSection>
        <div className='title'>
          <h1>Main Characters</h1>
        </div>
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
              nonexistence of others
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

        <Honda>
          <h2 className='name'>Honda Tadakatsu (本多 忠勝)</h2>
          <img src='/assets/characters/honda/bg.png' className='background' />
          <img
            src='/assets/characters/honda/honda.png'
            alt=''
            className='primary-img'
          />
          <img
            src='/assets/characters/honda/line-up.png'
            alt=''
            className='line-up-img'
          />
          <img
            src='/assets/characters/honda/line-middle.png'
            alt=''
            className='line-middle-img'
          />
          <img
            src='/assets/characters/honda/line-down.png'
            alt=''
            className='line-down-img'
          />
          <div className='info-up'>
            <h2 className='title-char'>Role</h2>
            <p className='description-char'>
              After the Battle of Sekigahara, Tadakatsu was the first ever
              officer ever to be snatched by Orochi. He refused the bargain of
              power and alliance with Orochi. He now leads the Alliance to save
              his comrades and bring an end to the chaos
            </p>
          </div>
          <div className='info-middle'>
            <h2 className='title-char'>Armor</h2>
            <p className='description-char'>
              His helmet, famously adorned with deer antlers, ensured that he
              was always a recognizable figure on the field of battle
            </p>
          </div>
          <div className='info-down'>
            <h2 className='title-char'>Tonbo-Giri(蜻蛉切)</h2>
            <p className='description-char'>
              The Dragonfly Cutter, the tip of the spear was so sharp that a
              dragonfly that landed on it was cut in two. His fighting prowess
              with it was so great that it became known as one of the "Three
              Great Spears of Japan". Aside from this incredible spear
            </p>
          </div>
        </Honda>

        <Lubu>
          <h2 className='name'>Lu Bu (良風)</h2>
          <img src='/assets/characters/lubu/bg.png' className='background' />
          <img
            src='/assets/characters/lubu/lubu.png'
            alt=''
            className='primary-img'
          />
          <img
            src='/assets/characters/lubu/line-up.png'
            alt=''
            className='line-up-img'
          />
          <img
            src='/assets/characters/lubu/line-middle.png'
            alt=''
            className='line-middle-img'
          />
          <img
            src='/assets/characters/lubu/line-down.png'
            alt=''
            className='line-down-img'
          />
          <div className='info-up'>
            <h2 className='title-char'>Role</h2>
            <p className='description-char'>
              After the battle of Xiapi, Lu Bu was captured by the forces as his
              power was too much to handle. Orochi arrived exactly on time
              before the execution took place and bailed him out to another
              dimension. He is now fighting for the Serpent King. A terrible
              news for the Allied forces.
            </p>
          </div>
          <div className='info-middle'>
            <h2 className='title-char'>Armor</h2>
            <p className='description-char'>
              The famous headpiece “antenna” is now stronger than ever. Forged
              by the fire of the 7th Hell mixed with the King’s venom, Lu Bu
              enters the fray with terrifiying power than ever.
            </p>
          </div>
          <div className='info-down'>
            <h2 className='title-char'>The crescent-moon spear (三日月の槍)</h2>
            <p className='description-char'>
              The spear that took many lives back in the days has been re-forged
              by the Blacksmith of the Snake, now four times the power.
            </p>
          </div>
        </Lubu>
      </CharacterSection>
      <OSTSection>
        <h1 className='title-ost'>Original Soundtrack</h1>
        <p className='description'>
          A battle is nothing without an epic music. We gather all your
          favourite soundtrack from the whole series into one long playlist. The
          soundtrack team is pleased to bring you their wonderful work in
          High-Res/Lossless compression format. Your pre-order will also include
          2 Original Soundtrack discs listing more than 50 tracks for you to
          listen outside the battle.{' '}
        </p>
        <img src='/assets/ost/ost-1.png' alt='' className='ost-img' />
        <img src='/assets/ost/ost-2.png' alt='' className='ost-img' />
        <img src='/assets/ost/bg-1.png' alt='' className='bg-img' />
      </OSTSection>
      <POSection>
        <h1 className='title'>PRE ORDER NOW </h1>
        <p className='description'>
          The game will be available on the Sony’s Playstation 2 and Microsoft’s
          Xbox 360. Each bundle contains 2 bonus wallpapers signed by the the
          team here at Koei.
        </p>
        <div className='console-container'>
          <img src='/assets/po/ps-2.png' alt='' className='console' />
          <img src='/assets/po/xbox.png' alt='' className='console' />
        </div>
        <div className='dvd-container'>
          <img src='/assets/po/dvd.png' alt='' className='dvd' />
        </div>
      </POSection>

      <Footer />
    </>
  );
}
