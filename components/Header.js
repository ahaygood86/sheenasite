import Link from 'next/link'

const Header = () => (
  <div>
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
  </div>
)

export default Header