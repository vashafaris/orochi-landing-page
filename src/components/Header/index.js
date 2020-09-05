import styled from 'styled-components';

const Container = styled.nav`
  position: absolute;
  top: 0;
  height: 7.2rem;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  background: black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding-left: 7.2rem;
  padding-right: 7.2rem;

  a,
  img {
    cursor: pointer;
  }

  .left {
    display: flex;
    flex: 1;
    margin-right: 7.4rem;
    .item {
      margin-right: 3.6rem;
    }
    .gold {
      color: #c69e4b;
    }
  }

  .right {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-left: 7.4rem;
    img {
      width: auto;
      height: auto;
      max-height: 3.6rem;
      margin-left: 3.6rem;
    }
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
    <div className='left'>
      <img src='assets/burger-menu.png' className='item' />
      <a className='item'>Story</a>
      <a className='item'>Characters</a>
      <a className='item'>Soundtrack</a>
      <a className='item gold'>Pre Order Now</a>
    </div>
    <div className='right'>
      <img src='assets/header/brand-2.png' />
      <img src='assets/header/brand-1.png' />
    </div>
  </Container>
);

export default Header;
