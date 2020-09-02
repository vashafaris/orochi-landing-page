import styled from 'styled-components';

const Container = styled.nav`
  position: absolute;
  top: 0;
  height: 7.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  background: black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding-left: 7.2rem;
  padding-right: 7.2rem;

  .left {
    display: flex;
    flex: 1;
    margin-right: 7.4rem;
    .item {
      margin-right: 3.6rem;
    }
  }

  .right {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-left: 7.4rem;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translate(-50%);
  width: 14.8rem;
  height: 7.4rem;
`;

const Header = () => (
  <Container>
    <Logo src='/assets/header-logo.png' />
    <div className='left'>
      <img src='assets/burger-menu.png' className='item' />
      <a className='item'>Story</a>
      <a className='item'>Characters</a>
      <a className='item'>Soundtrack</a>
      <a className='item'>Pre Order Now</a>
    </div>
    <div className='right'>
      <a>Search</a>
    </div>
  </Container>
);

export default Header;
