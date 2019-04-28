import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1600px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: black;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background: red;
  border: 2px solid grey;
  border-radius: 10px;
`;

const Logo = styled.div`
font-size: 4rem;
  margin: auto;
  text-align: center;
  color: ${props => props.theme.offWhite};
  border: 5px solid grey;
  border-radius: 10px;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;  }
  a {
    text-decoration: none;
    color: ${theme.red};
  }
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <GlobalStyle />
                    <Meta />
                    <Logo>Sheena Bowker Logo</Logo>
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>                
            </ThemeProvider>
        );
    }
}

export default Page;