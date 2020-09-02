import styled from 'styled-components';

export const OCharacterPageContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export const OBackground = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  max-width: 70%;
`;

export const OPrimaryCharacter = styled.img`
  position: absolute;
  left: 25%;
  top: 50%;
  transform: translate(0, -50%);
  width: auto;
  height: auto;
  max-height: 75%;
  z-index: 1;
`;

export const OSecondaryCharacter = styled.img`
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translate(0, -50%);
  width: auto;
  height: auto;
  max-height: 50%;
`;

export const OName = styled.h2`
  position: absolute;
  left: 30%;
  top: 10%;
  transform: translate(0, -50%);
  width: auto;
  height: auto;
  max-height: 50%;
  font-size: 2.8rem;
  font-family: 'SF Pro Display';
`;
