import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { PiGraduationCapFill } from "react-icons/pi";
import SmallIcon from "./customComponents/SmallIcon";
import { AiOutlinePlus } from "react-icons/ai";
import { experienceDet } from "../utils/experience";
import { educationDet } from "../utils/education";

const About = () => {
  const [expDet, setExperienceDet] = useState(experienceDet);
  const [edu, setEducation] = useState(educationDet);

  useEffect(() => {
    setExperienceDet(experienceDet);
    setEducation(educationDet);
    return () => {};
  }, []);

  return (
    <div>
      <div className="p-4 border-b-2 flex gap-8">
        <p className="text-slate-500 text-sm md:text-base">
          Hi! I'm a full stack developer with 3 years of expertise in React,
          MERN stack. I am committed to continuous learning and staying
          up-to-date. I prioritize clean code and to deliver high-quality
          solutions that enhance user experiences.
        </p>
        <div className="float-right">
          <SmallIcon>
            {/* AiOutlinePlus */}
            <MdOutlineEdit size={"1rem"} />
          </SmallIcon>
        </div>
      </div>
      <div className="p-4 border-b-2">
        <div className="flex justify-between">
          <h5>Experience</h5>
          <SmallIcon>
            <AiOutlinePlus />
          </SmallIcon>
        </div>
        {expDet.map((exp) => (
          <div key={exp.companyName} className="my-2 flex gap-y-6">
            <div className="float-left mr-4">
              <SmallIcon det>
                <BsBriefcaseFill size={"1.5rem"} />
              </SmallIcon>
            </div>
            <div className="flex gap-y-4 flex-col w-full">
              <div className="flex justify-between ">
                <div className="flex flex-col">
                  <h3 className="text-base text-slate-800 font-bold">
                    {exp.companyName}
                  </h3>
                  <h6 className="text-sm text-slate-500 font-medium">
                    {exp.location}
                  </h6>
                  <p className="text-sm text-slate-400 font-light">
                    {exp.duration}
                  </p>
                </div>
                <div className="flex">
                  <SmallIcon>
                    <MdOutlineEdit size={"0.8rem"} />
                  </SmallIcon>
                </div>
              </div>
              <div>
                <p className="text-xs pr-8">{exp.specialization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-b-2">
        <div className="flex justify-between">
          <h5>Education</h5>
          <SmallIcon>
            <AiOutlinePlus />
          </SmallIcon>
        </div>
        {edu.map((education) => (
          <div key={education.schoolName} className="my-2 flex gap-y-6">
            <div className="float-left mr-4">
              <SmallIcon det>
                <PiGraduationCapFill size={"1.2rem"} />
              </SmallIcon>
            </div>
            <div className="flex gap-y-4 flex-col w-full">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h3 className="text-base text-slate-800 font-bold">
                    {education.schoolName}
                  </h3>
                  <h6 className="text-sm text-slate-500 font-medium">
                    {education.location}
                  </h6>
                  <p className="text-sm text-slate-400 font-light">
                    {education.duration}
                  </p>
                </div>
                <div className="flex">
                  <SmallIcon>
                    <MdOutlineEdit size={"0.8rem"} />
                  </SmallIcon>
                </div>
              </div>
              <div>
                <p className="text-xs pr-8">{education.specialization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
