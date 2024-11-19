import React, { useState } from "react";
import image1 from "@/imgs/pexels-pixabay-267469.jpg";
import image2 from "@/imgs/whatsapp-detail.png";
import image3 from "@/imgs/OIP2.jpeg";
import Image from "next/image";

import Link from "next/link";

const Portfolio = () => {
  const projects = [
    {
      title: "Projet 1",
      description: "Description du projet 1",
      imageUrl: image1,
    },
    {
      title: "Projet 2",
      description: "Description du projet 2",
      imageUrl: image2,
    },
    {
      title: "Projet 3",
      description: "Description du projet 3",
      imageUrl: image3,
    },
    {
      title: "Projet 4",
      description: "Description du projet 4",
      imageUrl: image1,
    },
    {
      title: "Projet 5",
      description: "Description du projet 5",
      imageUrl: image2,
    },
    {
      title: "Projet 6",
      description: "Description du projet 6",
      imageUrl: image3,
    },
  ];

  return (
    <section id="portfolio" className="section ">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="section-content">
          <div className="section-head">
            <div className="section-title">Mon Portfolio</div>
            <div className="text text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              earum dolore maiores numquam atque distinctio, qui, quibusdam
              necessitatibus quisquam ex magni architecto.
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transform transition-transform duration-500 ease-in-out">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={project.imageUrl.src}
                    width={500}
                    height={500}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex gap-1 flex-col justify-center items-center text-white text-center p-4 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                    <Link
                      className="py-2 px-6 bg-orange-color hover:bg-orange-b-color transition-all"
                      href={"#"}
                    >
                      more +
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
