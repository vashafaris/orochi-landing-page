import styled from 'styled-components';

const TextStyled = styled.p`
  font-size: ${({ fontSize }) => fontSize && fontSize};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  font-family: ${({ type }) => type === 'text' && 'SF Pro Text'};
`;

const Text = ({ children, fontSize, fontWeight, type }) => (
  <TextStyled fontSize={fontSize} fontWeight={fontWeight} type={type}>
    {children}
  </TextStyled>
);

export default Text;
