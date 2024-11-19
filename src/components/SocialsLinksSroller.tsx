import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link"; // Importation de Link depuis Next.js

const SocialsLinksScroller = () => {
  return (
    <div className="fixed socials-s-links z-20 right-4 top-[15%] flex flex-col space-y-5 p-[10px] bg-gray-900 text-white">
      {/* Facebook */}
      <Link className="" href="#" passHref>
        <div
          className="transition-transform transform hover:scale-110"
          title="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </Link>

      {/* Twitter */}
      <Link href="#" passHref>
        <div
          className="transition-transform transform hover:scale-110"
          title="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </Link>

      {/* Instagram */}
      <Link href="#" passHref>
        <div
          className="transition-transform transform hover:scale-110"
          title="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </Link>

      {/* LinkedIn */}
      <Link href="#" passHref>
        <div
          className="transition-transform transform hover:scale-110"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </Link>
    </div>
  );
};

export default SocialsLinksScroller;
