import styled from 'styled-components';

export const LandingSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding-top: 7.2rem;
  background-image: url('/assets/landing/bg.png');
  background-size: cover;

  img {
    position: relative;
    margin-left: 50%;
    margin-top: 25%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    max-width: 50%;
  }

  .content-container {
    /* display: flex; */
    /* align-self: center; */
    /* justify-self: center; */
  }
`;

export const LSImage = styled.img``;

export const CardSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    padding: 0.5rem;
  }
`;

export const CharacterSection = styled.section`
  position: relative;
  height: 100vh;
`;

export const Orochi = styled.div`
  .background {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    max-width: 70%;
  }

  .primary-img {
    position: absolute;
    left: 25%;
    top: 50%;
    transform: translate(0, -50%);
    width: auto;
    height: auto;
    max-height: 75%;
    z-index: 1;
  }

  .secondary-img {
    position: absolute;
    left: 15%;
    top: 50%;
    transform: translate(0, -50%);
    width: auto;
    height: auto;
    max-height: 50%;
  }

  h2 {
    position: absolute;
    left: 30%;
    top: 10%;
    transform: translate(0, -50%);
    width: auto;
    height: auto;
    max-height: 50%;
    font-size: 2.8rem;
    font-family: 'SF Pro Display';
  }
`;

// export const OBackground = styled.img`
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   width: auto;
//   height: auto;
//   max-width: 70%;
// `;

// export const OPrimaryCharacter = styled.img`
//   position: absolute;
//   left: 25%;
//   top: 50%;
//   transform: translate(0, -50%);
//   width: auto;
//   height: auto;
//   max-height: 75%;
//   z-index: 1;
// `;

// export const OSecondaryCharacter = styled.img`
//   position: absolute;
//   left: 15%;
//   top: 50%;
//   transform: translate(0, -50%);
//   width: auto;
//   height: auto;
//   max-height: 50%;
// `;

// export const OName = styled.h2`
//   position: absolute;
//   left: 30%;
//   top: 10%;
//   transform: translate(0, -50%);
//   width: auto;
//   height: auto;
//   max-height: 50%;
//   font-size: 2.8rem;
//   font-family: 'SF Pro Display';
// `;
