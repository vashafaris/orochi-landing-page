import styled from 'styled-components';

export const Layout = styled.section`
  height: ${({ height }) => (height ? height : '100%')};
  background: black;
`;
