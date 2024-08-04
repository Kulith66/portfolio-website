// components/HireMeButton.jsx
import Link from 'next/link';
import { forwardRef } from 'react';

const HireMeButton = forwardRef(({ href, onClick }, ref) => {
  return (
    <Link> href={href}
      onClick={onClick}
      ref={ref}
      className="inline-block px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
    
      Hire Me</Link>
  );
     
});

HireMeButton.displayName = 'HireMeButton';

export default HireMeButton;
