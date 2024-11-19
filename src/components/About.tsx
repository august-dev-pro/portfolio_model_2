import React from "react";
const personalSkills = [
  { skill: "Communication", level: "Excellente", percentage: 90 },
  { skill: "Travail d'équipe", level: "Très bon", percentage: 80 },
  { skill: "Gestion du temps", level: "Bon", percentage: 75 },
  { skill: "Résolution", level: "Excellente", percentage: 85 },
];

const languagesSpoken = [
  { language: "Français", percentage: 95 },
  { language: "Anglais", percentage: 70 },
  { language: "Espagnol", percentage: 40 },
];

const About = () => {
  return (
    <div id="about" className="about section">
      <div className="container px-4 sm:px-0">
        <div className="about_content section-content flex flex-col gap-10 w-full">
          <div className="section-head">
            <div className="section-title">About Me</div>
            <div className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit
              quod ipsam sapiente consectetur quidem ab commodi? Dolores
              cupiditate esse qui nemo velit? Veritatis, autem. Hic excepturi
              officia iure tempora?
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-20 items-center justify-between w-full">
            <div className="language w-full md:w-[350px] lg:w-[400px]">
              {languagesSpoken.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg font-semibold text-gray-800">
                      {item.language}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-gradient-to-r from-orange-200 to-orange-500 h-4 rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="personalSkills w-fit grid grid-cols-2 m-[0_auto] justify-between gap-5 sm:gap-10 lg:gap-20 lg:m-0">
              {personalSkills.map((item, index) => (
                <div
                  key={index}
                  className="flex border-2 shadow-md border-b-0 rounded-br-none rounded-bl-none flex-col items-center py-4 w-[145px] sm:w-[180px]  rounded-lg bg-white"
                >
                  {" "}
                  <div
                    className="rounded-[50%] w-[100px] h-[100px] flex items-center justify-center "
                    style={{
                      background: `conic-gradient(#FF7500 ${item.percentage}%, transparent 0)`,
                      clipPath: "circle(50%)",
                    }}
                  >
                    <div className="rounded-[50%] bg-white w-[85px] h-[85px] flex items-center justify-center font-[900] font-sansbold text-[25px]">
                      {item.percentage}%
                    </div>
                  </div>
                  <div className="text-center mt-2 w-max m-[0_auto]">
                    {item.skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
