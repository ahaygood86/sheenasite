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
  margin: 10px;
  text-align: center;
  background: green;
  border: 5px solid yellow;
  border-radius: 10px;
`;

const LinkStyles = styled.a`
  background: blue;
  cursor: pointer;
  margin: 10px 5px;
  padding: 5px;
  border-radius: 10px;
`;

const Header = () => (
  <HeaderStyles>
    <Link href="/">
      <LinkStyles role="button">Home</LinkStyles>
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