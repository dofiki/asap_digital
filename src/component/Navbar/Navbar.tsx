import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  function handleHamburger() {
    setMenuStatus(!menuStatus);
  }

  return (
    <>
      <div className="flex justify-around w-80 md:w-250  items-center mt-5 rounded-xl fixed bg-primary z-1000 outline-1 outline-white">
        <div className="cursor-pointer font-bold text-2xl text-text-primary p-4 rounded-2xl">
          ASAP Digital
        </div>

        <div className="flex gap-10 text-[1.1rem] text-text-primary">
          <ul className="hidden gap-8 md:flex cursor-pointer items-center">
            <li className="hover:-translate-y-1 hover:underline transition-all">
              <a href="#Home">Home</a>
            </li>
            <li className="hover:-translate-y-1 hover:underline transition-all">
              <a href="#Services">Services</a>
            </li>
            <li className="hover:-translate-y-1 hover:underline transition-all">
              <a href="#Client">Clients</a>
            </li>
            <li className="hover:-translate-y-1 hover:underline transition-all">
              <a href="#Works">Works</a>
            </li>
            <li className="hover:-translate-y-1 hover:underline transition-all">
              <a href="#Footer">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex md:hidden text-white">
          <GiHamburgerMenu size={20} onClick={handleHamburger} />
        </div>
      </div>

      {menuStatus && (
        <div className="md:hidden fixed bg-amber-300 top-20 w-80 p-5 ">
          <ul>
            <li>Home</li>
            <li>Our Services</li>
            <li>Our Clients</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
