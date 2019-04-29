import React, { Component } from 'react';
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
  flex-direction: row;
  @media (min-width: 1001px) {

    margin: 10px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

class Header extends Component {
  render() {
    const { pushMenuOpen } = this.props;
    console.log(pushMenuOpen);
    return (

      <HeaderStyles>
        <NavMenu pushMenuOpen={this.props.pushMenuOpen} />
      </HeaderStyles>
    );
  }
}

export default Header;