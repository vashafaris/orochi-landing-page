import styled from 'styled-components';

export const LandingSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding-top: 7.2rem;
  background-image: url('/assets/landing/bg.png');
  background-size: cover;

  img {
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translate(-50%);
    width: auto;
    height: auto;
    max-width: 45%;
  }

  .content-container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 3.6rem;
      font-weight: bold;
    }

    button {
      padding: 1.6rem 4.8rem 1.6rem 4.8rem;
      margin: 0.8rem;
      border: none;
      border-radius: 0.4rem;
      background: none;
      font-size: 1.6rem;
      font-weight: bold;
      &:hover {
        cursor: pointer;
      }
    }

    .left-btn {
      color: white;
      background: black;
      border: #c62e25 solid 1px;
    }

    .right-btn {
      background: #c69e4b;
    }
  }
`;

export const TrailerSection = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrailerVideo = styled.iframe`
  width: 70rem;
  height: 40rem;
`;

export const CardSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    position: relative;
    width: auto;
    height: auto;
    max-width: 100%;
    /* padding: 0.5rem; */
  }

  .card {
    display: block;
    padding: 0.5rem;
  }
`;

export const CharacterSection = styled.section`
  position: relative;
  height: 100vh;

  .title {
    display: flex;
    justify-content: center;

    h1 {
      font-size: 6rem;
      font-weight: bold;
    }
  }
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

  .line-up-img {
    z-index: 2;
    position: absolute;
    right: 35%;
    top: 30%;
    width: auto;
    height: auto;
    max-width: 15%;
  }

  .line-down-img {
    z-index: 2;
    position: absolute;
    right: 35%;
    bottom: 30%;
    width: auto;
    height: auto;
    max-width: 20%;
  }

  .info-up {
    display: block;
    z-index: 2;
    position: absolute;
    right: 10%;
    top: 30%;
    width: 25%;
    transform: translate(1rem, -1rem);
  }

  .info-down {
    display: block;
    z-index: 2;
    position: absolute;
    right: 10%;
    bottom: 20%;
    width: 25%;
    transform: translate(1rem, -1.2rem);
  }

  .title-char {
    left: 0;
    font-size: 2.4rem;
    font-weight: bold;
    position: relative;
    line-height: 0;
  }

  .description-char {
    color: #d6d6d6;
    line-height: 1.5rem;
    font-size: 1.4rem;
    font-family: 'SF Pro Text';
    font-weight: medium;
  }

  .name {
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
