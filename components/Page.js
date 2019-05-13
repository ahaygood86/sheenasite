import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import firebase from 'firebase/app';
import "firebase/auth";
import Header from './Header';
import Meta from './Meta';
import PushMenu from './PushMenu';
import OpenPushButton from './OpenPushButton';

const theme = {
  backgroundColorMain: 'linear-gradient(to bottom right, #3A3A3A, orange)', //off-black
  backgroundColorAlt: '#FF0000', //red
  backgroundColorNavLinks: 'blue',
  backgroundColorNavMenu: 'green',
  borderColorLogo: '#3A3A3A', //dark grey
  borderColorMain: 'grey',
  borderColorNavMenu: 'white',
  fontColorMain: '#393939',
  fontColorLink: '#FF0000', //red
  fontColorLogo: '#EDEDED', //off-white
  viewportSizePhoneMax: '360px',
  viewportSizeTabletMin: '361px',
  viewportSizeTabletMax: '1024px',
  viewportSizeDesktopMin: '1025px',
};

const StyledPage = styled.div`
  background-image: ${props => props.theme.backgroundColorMain};
  color: ${props => props.theme.fontColorMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: 95vw;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.backgroundColorAlt};
  border: 2px solid ${props => props.theme.borderColorMain};
  border-radius: 10px;
  flex-grow: 1;
  min-width: 80vw;
`;

const Logo = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin: auto;
  text-align: center;
  background: ${props => props.theme.backgroundColorAlt};
  color: ${props => props.theme.fontColorLogo};
  border: 5px solid ${props => props.theme.borderColorLogo};
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
    color: ${theme.fontColorLink};
  }
`;

class Page extends Component {

    state = {
        pushMenuOpen: false
    };

    componentDidMount() {
      //TODO: set this elsewhere
      var firebaseConfig = {
          apiKey: "AIzaSyDB7uHKG3EP7XI7B4DfLAK--0c-Qa3BNM4",
          authDomain: "sheenasite-bc72b.firebaseapp.com",
          databaseURL: "https://sheenasite-bc72b.firebaseio.com",
          projectId: "sheenasite-bc72b",
          storageBucket: "sheenasite-bc72b.appspot.com",
          messagingSenderId: "1048213810361",
          appId: "1:1048213810361:web:5ce0b2023cde1f17"
      };
         
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            console.log(user)
          } else {
            // No user is signed in.
            console.log('no!')
          }
        });
  }

    handlePushMenu = () => {
        this.setState(prevState => ({
          pushMenuOpen: !prevState.pushMenuOpen
        }));
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <GlobalStyle />
                    <Meta />
                    <PushMenu 
                      pushMenuOpen={this.state.pushMenuOpen}
                      handlePushMenu={this.handlePushMenu} 
                    />
                    <OpenPushButton 
                      pushMenuOpen={this.state.pushMenuOpen}
                      handlePushMenu={this.handlePushMenu} 
                    />
                    <Logo>Sheena Bowker Logo</Logo>
                    <Header pushMenuOpen={this.state.pushMenuOpen} />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>                
            </ThemeProvider>
        );
    }
}

export default Page;