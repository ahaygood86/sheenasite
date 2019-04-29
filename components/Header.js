import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import NavMenu from './NavMenu';

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
    display: none;
  }
`;

const Header = () => (
  <HeaderStyles>
    <NavMenu />
  </HeaderStyles>
)

export default Header