import Link from 'next/link';

import Container from '@/components/Container';

const NavBar = () => {
  return (
    <header className="bg-black py-5">
      <Container className="flex items-center justify-between text-white">
        <Link href="/" className="block hover:text-yellow-100 uppercase">
          Driving Routes
        </Link>
        <ul className="flex items-center space-x-6 lg:space-x-12">
          <li>
            <Link href="/" className="hover:text-yellow-100 hover:underline underline-offset-4">
              Home
            </Link>
          </li>
          <li>
            <Link href="/routes"className="hover:text-yellow-100 hover:underline underline-offset-4">
              Routes
            </Link>
          </li>
          <li>
            <Link href="/submit" className="block py-2 px-4 bg-yellow-300 text-black hover:bg-yellow-500 rounded whitespace-nowrap">
              Submit <span className="hidden md:inline">Your Own</span>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default NavBar;
