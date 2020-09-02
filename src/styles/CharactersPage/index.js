import styled from 'styled-components';

export const CharacterPageContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export const Background = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  max-width: 70%;
`;

export const PrimaryCharacter = styled.img`
  position: absolute;
  left: 25%;
  top: 50%;
  transform: translate(0, -50%);
  width: auto;
  height: auto;
  max-height: 75%;
  z-index: 1;
`;

export const SecondaryCharacter = styled.img`
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translate(0, -50%);
  width: auto;
  height: auto;
  max-height: 50%;
`;
