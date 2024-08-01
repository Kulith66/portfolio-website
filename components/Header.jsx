import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-black text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
            <h1 className="text-4xl font-semibold">
              Kulith <span className="text-blue-500">.</span>
            </h1>
          
        </Link>
        <div className=" xl:flex items-center    space-x-4 text-white">
         <Nav />
          
        </div>
        <Link href="/contact" passHref>
        <Button variant="secondary" className="text-white hover:text-blue-500">
              hire me
            </Button> 

          </Link>
      </div>
    </header>
  );
};

export default Header;
