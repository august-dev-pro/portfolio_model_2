import React from "react";

const Skills = () => {
  // Exemples de compétences pour affichage
  const skillsData1 = [
    { name: "user experience", level: "80%" },
    { name: "user interface", level: "98%" },
    { name: "user research", level: "78%" },
  ];
  const skillsData2 = [
    { name: "mokups", level: "85%" },
    { name: "prototyping", level: "85%" },
    { name: "wireframe", level: "95%" },
  ];

  return (
    <section id="skills" className="section bg-gray-100">
      <div className="container px-4 sm:px-0">
        <div className="section-content">
          <div className="section-head">
            <div className="section-title">My Skills</div>
            <div className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              tenetur nulla, id laboriosam quos expedita error. Vero, fugiat
              obcaecati a inventore laboriosam totam omnis rem, reiciendis sequi
              veniam perferendis ut?
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="grid grid-cols-1 gap-4">
              {skillsData1.map((skill, index) => (
                <div
                  key={index}
                  className="  rounded-lg w-full sm:w-[300px] lg:w-[400px]"
                >
                  <h3 className="text-lg font-semibold capitalize">
                    {skill.name}
                  </h3>
                  <div className="flex gap-4">
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-orange-400 h-2 relative rounded-full"
                        style={{ width: skill.level }}
                      >
                        <div className="h-[15px] -top-1/2 bg-orange-color rounded-full absolute w-1 right-0"></div>
                      </div>
                    </div>
                    <div className="font-bold">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {skillsData2.map((skill, index) => (
                <div
                  key={index}
                  className="  rounded-lg max-w-full sm:w-[300px] lg:w-[500px]"
                >
                  <h3 className="text-lg font-semibold capitalize">
                    {skill.name}
                  </h3>
                  <div className="flex gap-4">
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-orange-400 h-2 relative rounded-full"
                        style={{ width: skill.level }}
                      >
                        <div className="h-[15px] -top-1/2 bg-orange-color rounded-full absolute w-1 right-0"></div>
                      </div>
                    </div>
                    <div className="font-bold">{skill.level}</div>
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

export default Skills;
