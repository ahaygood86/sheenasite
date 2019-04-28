import Link from 'next/link'
import styled from 'styled-components';

const HeaderStyles = styled.div`
  margin: 10px;
  text-align: center;
  background: green;
`;

const Header = () => (
  <HeaderStyles>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/gallery">
      <a>Gallery</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <Link href="/club">
      <a>Fan Club</a>
    </Link>
    <Link href="/login">
      <a>Login</a>
    </Link>
  </HeaderStyles>
)

export default Header