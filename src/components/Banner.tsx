import Image from "next/image";
import React from "react";
import user from "@/imgs/stephan-wahl.1024x1024-removebg-preview.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const Banner = () => {
  return (
    <div className="banner section bg-gray-50 !pt-20">
      <div className="container px-4 sm:px-0">
        <div className="banner_content section-content flex !flex-col-reverse gap-10 md:!flex-row items-center justify-between ">
          <div className="text-[17px] inner_text-container md:max-w-[450px] flex flex-col gap-2 text-center md:text-left">
            <span className="font-semibold text-orange-color ">Hi, I am</span>
            <span className="font-bold text-[55px] font-mono tracking-wider">
              Ali Awan
            </span>
            <span className="capitalize font-semibold">
              expert UX/UI Designer
            </span>
            <p className=" text-center md:text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              perspiciatis doloribus, ipsa dolore magnam blanditiis pariatur
              nemo, sunt doloremque quasi eum debitis soluta nisi distinctio
              eligendi optio neque provident dolorum!
            </p>
            <div className="callback flex gap-4 py-4 justify-center md:justify-start">
              <Link
                className="text-[15px] sm:text-[16px] py-1 px-4 sm:py-2 sm:px-8 rounded-full bg-orange-color text-white  hover:bg-orange-b-color transition-all"
                href={"#"}
              >
                Dowload CV <FontAwesomeIcon icon={faDownload} />
              </Link>
              <Link
                className="text-[15px] sm:text-[16px] py-1 px-4 sm:py-2 sm:px-8 rounded-full border border-orange-color text-orange-color hover:text-white hover:bg-orange-b-color transition-all"
                href={"#portfolio"}
              >
                My Portfolio <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </Link>
            </div>
          </div>
          <div className="image_container border-t border-r border-l rounded-full bg-orange-400">
            <Image src={user.src} alt="user image" height={500} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
