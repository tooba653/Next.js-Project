"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname() || ''; 

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link href="/">MyWebsite</Link>
      </div>
      <div className="flex space-x-4">
        <Link
          href="/"
          className={`hover:underline ${pathname === '/' ? 'font-bold' : ''}`}
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:underline ${pathname === '/about' ? 'font-bold' : ''}`}
          aria-current={pathname === '/about' ? 'page' : undefined}
        >
          About
        </Link>
        <Link
          href="/blog/1"
          className={`hover:underline ${pathname.startsWith('/blog') ? 'font-bold' : ''}`}
          aria-current={pathname.startsWith('/blog') ? 'page' : undefined}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`hover:underline ${pathname === '/contact' ? 'font-bold' : ''}`}
          aria-current={pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
