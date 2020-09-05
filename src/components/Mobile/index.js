import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 6rem;
  }
`;

export const Mobile = () => (
  <Container>
    <h1>📵</h1>
    <p>🖥 Please open via desktop.</p>
  </Container>
);
