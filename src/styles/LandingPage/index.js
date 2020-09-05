import styled from 'styled-components';

export const LandingSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding-top: 7.2rem;
  background-image: url('/assets/landing/bg.png');
  background-size: cover;

  img {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%);
    width: auto;
    height: auto;
    max-width: 45%;
    max-height: 35%;
  }

  .content-container {
    position: absolute;
    top: 75%;
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

  .iframe-container {
    width: 700px;
    height: 400px;
    border-radius: 0.8rem;
    overflow: hidden;
  }

  .bg-left {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    max-height: 90%;
  }

  .bg-right {
    z-index: -1;
    position: absolute;
    bottom: -30%;
    right: 0;
    max-height: 90%;
  }
`;

export const TrailerVideo = styled.iframe`
  width: 70rem;
  height: 40rem;
  border-radius: 0.8rem;
`;

export const CardSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    position: relative;
    max-width: 100%;
  }

  .card {
    display: block;
    padding: 0.5rem;

    .title-card {
      font-size: 2.4rem;
      font-weight: semibold;
    }

    .description-card {
      font-size: 1.4rem;
      line-height: 2.2rem;
      font-family: 'SF Pro Text';
      font-weight: medium;
    }
  }
`;

export const CharacterSection = styled.section`
  position: relative;
  min-height: 100vh;
  margin-top: 7.2rem;
  .title {
    display: flex;
    justify-content: center;
    position: relative;
    height: 7.2rem;
    h1 {
      font-size: 6rem;
      font-weight: bold;
    }
  }
`;

export const Orochi = styled.div`
  position: relative;
  height: 100vh;

  .background {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 70%;
  }

  .primary-img {
    position: absolute;
    left: 25%;
    top: 50%;
    transform: translate(0, -50%);
    max-height: 75%;
    z-index: 1;
  }

  .secondary-img {
    position: absolute;
    left: 15%;
    top: 50%;
    transform: translate(0, -50%);
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
    top: 70%;
    width: auto;
    height: auto;
    max-width: 20%;
  }

  .info-up {
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: absolute;
    left: 65%;
    top: 30%;
    width: 30%;
    transform: translate(1rem, -1rem);

    @media (max-width: 1277px) {
      transform: translate(1rem, -0.8rem);
    }
  }

  .info-down {
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: absolute;
    left: 65%;
    top: 70%;
    width: 30%;
    transform: translate(1rem, -1.2rem);

    @media (max-width: 1277px) {
      transform: translate(1rem, -0.8rem);
    }
  }

  .title-char {
    left: 0;
    font-size: 2.4rem;
    font-weight: bold;
    position: relative;
    line-height: 0;

    @media (max-width: 1277px) {
      font-size: 2rem;
    }
  }

  .description-char {
    color: #d6d6d6;
    line-height: 2.2rem;
    font-size: 1.4rem;
    font-family: 'SF Pro Text';
    font-weight: medium;
    margin-top: 0.4rem;
  }

  .name {
    position: absolute;
    left: 30%;
    top: 10%;
    transform: translate(0, -50%);
    max-height: 50%;
    font-size: 2.8rem;
    font-family: 'SF Pro Display';
  }
`;

export const Honda = styled.div`
  position: relative;
  height: 100vh;

  .name {
    position: absolute;
    right: 20%;
    transform: translate(0, -50%);
    max-height: 50%;
    font-size: 2.8rem;
    font-family: 'SF Pro Display';
  }

  .background {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
  }

  .primary-img {
    position: absolute;
    right: 20%;
    top: 50%;
    transform: translate(0, -50%);
    max-height: 75%;
    z-index: 1;
  }

  .line-up-img {
    z-index: 2;
    position: absolute;
    left: 30%;
    top: 10%;
    max-width: 35%;
  }

  .line-middle-img {
    z-index: 2;
    position: absolute;
    left: 30%;
    top: 40%;
    max-width: 20%;
  }

  .line-down-img {
    z-index: 2;
    position: absolute;
    left: 30%;
    top: 60%;
    max-width: 10%;
  }

  .info-up {
    display: block;
    z-index: 2;
    position: absolute;
    left: 10%;
    top: 10%;
    width: 22%;
    transform: translate(1rem, -1rem);

    @media (max-width: 1277px) {
      transform: translate(1rem, -0.8rem);
    }
  }

  .info-middle {
    display: block;
    z-index: 2;
    position: absolute;
    left: 10%;
    top: 40%;
    width: 25%;
    transform: translate(1rem, -1rem);

    @media (max-width: 1277px) {
      transform: translate(1rem, -0.8rem);
    }
  }

  .info-down {
    display: block;
    z-index: 2;
    position: absolute;
    left: 10%;
    top: 60%;
    width: 22%;
    transform: translate(1rem, -1.2rem);

    @media (max-width: 1277px) {
      transform: translate(1rem, -0.8rem);
    }
  }

  .title-char {
    left: 0;
    font-size: 2.4rem;
    font-weight: bold;
    position: relative;
    line-height: 0;

    @media (max-width: 1277px) {
      font-size: 2rem;
    }
  }

  .description-char {
    color: #d6d6d6;
    line-height: 2.2rem;
    font-size: 1.4rem;
    font-family: 'SF Pro Text';
    font-weight: medium;
    margin-top: 0.4rem;
  }
`;

export const Lubu = styled.div`
  position: relative;
  height: 100vh;

  .name {
    position: absolute;
    left: 13%;
    transform: translate(0, -50%);
    max-height: 50%;
    font-size: 2.8rem;
    font-family: 'SF Pro Display';
  }

  .background {
    position: absolute;
    right: 5%;
    top: 40%;
    transform: translate(0, -50%);
    max-width: 50%;
  }

  .primary-img {
    position: absolute;
    left: 5%;
    top: 45%;
    transform: translate(0, -50%);
    max-height: 75%;
    z-index: 1;
  }

  .line-up-img {
    z-index: 2;
    position: absolute;
    right: 50%;
    top: 10%;
    max-width: 25%;
  }

  .line-middle-img {
    z-index: 2;
    position: absolute;
    right: 50%;
    top: 45%;
    max-width: 15%;
  }

  .line-down-img {
    z-index: 2;
    position: absolute;
    right: 50%;
    top: 70%;
    max-width: 10%;
  }

  .info-up {
    display: block;
    z-index: 2;
    position: absolute;
    left: 52%;
    top: 10%;
    width: 25%;
    transform: translate(1rem, -1rem);

    @media (max-width: 1277px) {
      transform: translate(1rem, -0.8rem);
    }
  }

  .info-middle {
    display: block;
    z-index: 2;
    position: absolute;
    left: 52%;
    top: 45%;
    width: 25%;
    transform: translate(1rem, -1rem);

    @media (max-width: 1277px) {
      transform: translate(1rem, -0.8rem);
    }
  }

  .info-down {
    display: block;
    z-index: 2;
    position: absolute;
    left: 52%;
    top: 70%;
    width: 40%;
    transform: translate(1rem, -1.2rem);

    @media (max-width: 1277px) {
      transform: translate(1rem, -0.8rem);
    }
  }

  .title-char {
    left: 0;
    font-size: 2.4rem;
    font-weight: bold;
    position: relative;
    line-height: 0;

    @media (max-width: 1277px) {
      font-size: 2rem;
    }
  }

  .description-char {
    color: #d6d6d6;
    line-height: 2.2rem;
    font-size: 1.4rem;
    font-family: 'SF Pro Text';
    font-weight: medium;
    margin-top: 0.4rem;
  }
`;

export const OSTSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-ost {
    font-size: 6rem;
    margin: 1.6rem;
    margin-top: 6.7rem;
  }

  .description {
    font-family: 'SF Pro Text';
    font-size: 1.8rem;
    margin-left: 20%;
    margin-right: 20%;
    letter-spacing: 1%;
    line-height: 150%;
  }

  .ost-img {
    max-width: 65%;
  }

  .bg-img {
    z-index: -1;
    position: absolute;
    bottom: -50%;
    left: 0;
    max-height: 67%;
  }
`;

export const POSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;

  .title {
    font-size: 6rem;
    margin: 1.6rem;
    margin-top: 6.7rem;
  }

  .description {
    font-family: 'SF Pro Text';
    font-size: 1.8rem;
    margin-left: 20%;
    margin-right: 20%;
    letter-spacing: 1%;
    line-height: 150%;
  }

  .console-container {
    margin: 1.6rem;
    display: flex;
    width: 100%;
    justify-content: center;

    .console {
      width: auto;
      height: auto;
      max-width: 20%;
    }
  }

  .dvd-container {
    display: flex;
    width: 100%;
    justify-content: center;

    .dvd {
      max-width: 80%;
    }
  }
`;
