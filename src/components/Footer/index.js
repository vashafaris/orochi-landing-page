import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7.2rem;
  justify-content: center;
  align-items: center;

  a {
    color: #ff3d25;
  }

  span {
    text-decoration: underline;
  }

  .margin {
    margin-right: 1.6rem;
    margin-left: 1.6rem;
  }
`;

export const Footer = () => (
  <Container>
    <p>Made with ❤️ in Bandoeng</p>
    <p className='margin'>✹</p>
    <p>
      A design by{' '}
      <a
        target='_blank'
        href='https://www.behance.net/gallery/102993663/Warriors-Orochi-Game-Appreciation-Website-Mockup'
      >
        <span>JR </span>
      </a>
    </p>
  </Container>
);
