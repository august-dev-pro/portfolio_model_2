import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-0 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {/* Section de contact */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p>123 Main Street, City, Country</p>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (234) 567-890</p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2 hover:text-orange-400 transition-colors">
              <Link href="#about">About Us</Link>
            </li>
            <li className="mb-2 hover:text-orange-400 transition-colors">
              <Link href="#services">Services</Link>
            </li>
            <li className="mb-2 hover:text-orange-400 transition-colors">
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li className="mb-2 hover:text-orange-400 transition-colors">
              <Link href="#contacts">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
