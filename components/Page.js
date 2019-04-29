import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import PushMenu from './PushMenu';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background: red;
  border: 2px solid grey;
  border-radius: 10px;
  flex-grow: 1;
  min-width: 80vw;
`;

const Logo = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin: auto;
  text-align: center;
  background: ${props => props.theme.red};
  color: ${props => props.theme.offWhite};
  border: 5px solid grey;
  border-radius: 10px;
  flex-grow: 0;
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
    line-height: 2;
    font-family: 'Kalam', cursive;  
  }
  a {
    text-decoration: none;
    color: ${theme.red};
  }
`;

class Page extends Component {

    state = {
        open: false
    };

    handleClosePush = () => {
        console.log('triggered');
        this.setState({
            open: false
        });
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <GlobalStyle />
                    <Meta />
                    <PushMenu handleClosePush={this.handleClosePush} />
                    <Logo>Sheena Bowker Logo</Logo>
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>                
            </ThemeProvider>
        );
    }
}

export default Page;