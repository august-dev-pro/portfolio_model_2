import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction qui s'active à chaque scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Le header devient opaque après avoir scrollé de plus de 50px
    } else {
      setIsScrolled(false); // Si on est de retour en haut de la page, il devient transparent
    }
  };

  // Utilisation du hook useEffect pour gérer l'événement de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  const headerLinks = [
    { title: "home", link: "/" },
    { title: "About", link: "#about" },
    { title: "skills", link: "#skills" },
    { title: "Projets", link: "#portfolio" },
    { title: "Contact", link: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full text-[15px] ${
        isScrolled ? "bg-white bg-opacity-90 shadow-lg" : "bg-white"
      }  transition-all duration-300 z-10`}
    >
      <div className="container px-4 sm:px-0 py-4 header_container">
        <div className="header_content">
          {/* Menu Hamburger */}
          <div className="md:hidden cursor-pointer">
            <div
              className=" text-black z-[100]"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Change l'état pour afficher/masquer le menu
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
              {/* Menu mobile */}
            </div>
            {isMenuOpen && (
              <div className="absolute top-10 right-0 bg-white shadow-lg w-full h-screen md:hidden  z-[100]">
                <ul className="flex flex-col items-center py-10 space-y-6">
                  {headerLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        className={`text-gray-700 text-lg hover:text-orange-400`}
                        onClick={() => {
                          setActiveLink(item.link);
                          setIsMenuOpen(false); // Ferme le menu après un clic
                        }}
                        href={item.link}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <nav className="hidden md:flex items-center gap-[100px] justify-center">
            <ul className="flex gap-8 capitalize">
              {headerLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    className={`flex flex-col items-center tracking-[0.1em] relative after:content-[''] after:block after:bg-orange-400 after:transition-all ${
                      activeLink === item.link
                        ? "text-orange-400 after:h-[0.8px] after:w-[70%]"
                        : "text-gray-700 after:h-0"
                    } hover:text-orange-400 hover:after:h-[0.8px] hover:after:w-full transition-all duration-300`}
                    onClick={() => setActiveLink(item.link)}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={"#"}
              className="bg-orange-color text-white rounded-full py-2 px-6 font-semibold hover:bg-orange-b-color transition-all"
            >
              Me Contacter
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
