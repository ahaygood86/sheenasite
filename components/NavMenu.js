import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkStyles = styled.div`
  background: ${props => props.theme.backgroundColorNavLinks};
  flex-grow: 0;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  margin: 10px 5px;
  padding: 10px 5px 5px 5px;
  border-radius: 10px;
  &:hover {
    background: grey;
  }
`;

const NavStyles = styled.div`
        display: flex;
        flex-direction: row;
        max-width: 80vw;
`;


class NavMenu extends Component {
    render() {
        return (
            <NavStyles>
                <Link href="/">
                    <LinkStyles><a>Home</a></LinkStyles>
                </Link>
                <Link href="/about">
                    <LinkStyles><a>About</a></LinkStyles>
                </Link>
                <Link href="/gallery">
                    <LinkStyles><a>Gallery</a></LinkStyles>
                </Link>
                <Link href="/blog">
                    <LinkStyles><a>Blog</a></LinkStyles>
                </Link>
                <Link href="/club">
                    <LinkStyles><a>Fan Club</a></LinkStyles>
                </Link>
                <Link href="/login">
                    <LinkStyles><a>Login</a></LinkStyles>
                </Link>
            </NavStyles>
        );
    }
}

export default NavMenu;