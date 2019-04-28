import Link from 'next/link'
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const HeaderStyles = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background: green;
  border: 5px solid yellow;
  border-radius: 10px;
  @media (min-width: 1001px) {
    flex-direction: row;
    margin: 10px;
  }
  @media (max-width: 1000px) {
    &.open {
      flex-direction: column;
    }
    &:not(.open) {
      display: none;
    }
    /* display: none; */
  }
`;

const LinkStyles = styled.a`
  background: blue;
  cursor: pointer;
  margin: 10px 5px;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    background: grey;
  }
`;

const Header = () => (
  <HeaderStyles>
    <Link href="/">
      <LinkStyles>Home</LinkStyles>
    </Link>
    <Link href="/about">
      <LinkStyles>About</LinkStyles>
    </Link>
    <Link href="/gallery">
      <LinkStyles>Gallery</LinkStyles>
    </Link>
    <Link href="/blog">
      <LinkStyles>Blog</LinkStyles>
    </Link>
    <Link href="/club">
      <LinkStyles>Fan Club</LinkStyles>
    </Link>
    <Link href="/login">
      <LinkStyles>Login</LinkStyles>
    </Link>
  </HeaderStyles>
)

export default Header