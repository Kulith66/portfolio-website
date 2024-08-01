"use client";
import { usePathname } from "next/navigation";
import Link from 'next/link';

const links = [
  {
    name: 'Home',
    path: '/home'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'Resume',
    path: '/resume'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="justify-end"><nav className='flex justify-end gap-8'>
    {links.map((link, index) => {
      const isActive = link.path === pathname;
      return (
        <Link
          href={link.path}
          key={index}
          className={isActive ? 'text-accent border-b-2 border-accent hover:text-blue-500 ' : 'hover:text-blue-500'}
        >
          {link.name}
        </Link>
      );
    })}
  </nav></div>
  );
};

export default Nav;
