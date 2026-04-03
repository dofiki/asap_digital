import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import gsap from "gsap";
const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const navmenuRef = useRef(null);

  // navmenu animation
  useEffect(() => {
    if (menuStatus && navmenuRef.current) {
      gsap.fromTo(
        navmenuRef.current,
        { clipPath: "circle(0% at 90% 0%)", opacity: 0 },
        {
          clipPath: "circle(150% at 90% 0%)",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
      );
    }
  }, [menuStatus]);

  // "disabling" scroll
  useEffect(() => {
    if (menuStatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuStatus]);

  function handleHamburger() {
    setMenuStatus(!menuStatus);
  }

  return (
    <>
      <div
        className="flex justify-around w-80 md:w-250  items-center mt-5 rounded-xl fixed
       bg-primary z-1000 outline-1 outline-white"
      >
        <div
          className="cursor-pointer font-bold text-2xl text-text-primary p-4 
        rounded-2xl"
        >
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
        <div
          ref={navmenuRef}
          className="md:hidden fixed text-white  w-screen h-screen 
          p-5 pt-30 z-999 
         outline outline-white bg-primary"
        >
          <ul className="flex flex-col justify-center items-center text-2xl">
            <li className="p-2">
              <a href="#Home" onClick={() => setMenuStatus(false)}>
                Home
              </a>
            </li>
            <li className="p-2">
              <a href="#Services" onClick={() => setMenuStatus(false)}>
                Services
              </a>
            </li>
            <li className="p-2">
              <a href="#Client" onClick={() => setMenuStatus(false)}>
                Clients
              </a>
            </li>
            <li className="p-2">
              <a href="#Works" onClick={() => setMenuStatus(false)}>
                Works
              </a>
            </li>
            <li className="p-2">
              <a href="#Footer" onClick={() => setMenuStatus(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
