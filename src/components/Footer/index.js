import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 7.2rem;

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

  .row {
    display: flex;
    flex-direction: row;
  }
`;

export const Footer = () => (
  <Container>
    <>
      <h1>All rights reserved</h1>
    </>
    <div className='row'>
      <p>Made with ❤️ in Bandoeng</p>
      <p className='margin'>✹</p>
      <p>
        A design by{' '}
        <a
          target='_blank'
          href='https://www.behance.net/gallery/102993663/Warriors-Orochi-Game-Appreciation-Website-Mockup'
        >
          <span>JR</span>
        </a>
      </p>
      <p className='margin'>✹</p>
      <p>
        Code here{' '}
        <a
          target='_blank'
          href='https://github.com/vashafaris/orochi-landing-page'
        >
          <span>github.com</span>
        </a>
      </p>
    </div>
  </Container>
);
