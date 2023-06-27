import React, { useState } from "react";
import Card from "./customComponents/Card";
import { IoIosPeople } from "react-icons/io";
import ProfilePicture from "../assets/profileImages/man.png";
import { AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import SmallIcon from "./customComponents/SmallIcon";
import PieChart from "./PieChart";
import ProgressBar from "./customComponents/ProgressBar";

const ProfileCard = () => {
  const [toggle, setToggle] = useState(false);
  const chartData = {
    labels: [],
    datasets: [
      {
        label: "# of opportunities",
        data: Array(10).fill(5),
        backgroundColor: [
          ...[
            "rgb(139 92 246 / 1)",
            "rgb(139 92 246 / 1)",
            "rgb(139 92 246 / 1)",
            "rgb(139 92 246 / 1)",
            "rgb(255 255 246 / 1)",
          ],
          ...Array(5).fill("rgb(255 255 246 / 1)"),
        ],
        borderColor: [
          "rgb(139 92 246 / 1)",
          "rgb(139 92 246 / 1)",
          "rgb(139 92 246 / 1)",
          "rgb(139 92 246 / 1)",
          "rgb(139 92 246 / 1)",
          "rgb(139 92 246 / 1)",
        ],
        borderWidth: 0,
        spacing: 4,
      },
    ],
  };
  return (
    <Card>
      <div className="p-4">
        {/* profile Image */}
        <div className="flex flex-wrap justify-center">
          <div className="w-40 h-40 px-4 -mt-24 rounded-full border-8 border-white flex justify-center items-center  max-w-xs">
            <img
              className="rounded-full shadow-lg max-w-full h-auto align-middle border-none "
              src={ProfilePicture}
            />
          </div>
        </div>
        {/* user details */}
        <div className="text-center mb-4">
          <h5 className="text-violet-700 text-2xl font-bold leading-normal mt-0 mb-0">
            Girish Manchineeru
          </h5>
          <p className="text-violet-400 mb-2 text-base ">Developer</p>
          <div className="mt-0 mb-2 text-violet-600 text-xs flex items-center justify-center gap-2">
            <IoIosPeople size={"1.3rem"} />
            50 follower<span className="ml-2">120 following</span>
          </div>
        </div>
        {/* visibility container */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h6 className="text-violet-800">
              Make my profile visible to employer
            </h6>
            <div>
              <button
                onClick={() => setToggle(!toggle)}
                className={`${
                  toggle ? "bg-violet-500" : "bg-gray-400"
                } w-10 h-6 rounded-full relative`}
              >
                <span
                  className={`${
                    toggle ? "translate-x-4 bg-white" : "translate-x-0 bg-white"
                  } block w-4 h-4 rounded-full absolute top-1 left-1 transition`}
                ></span>
              </button>
            </div>
          </div>
          <p className="text-xs text-violet-400">
            Sharing more details about yourself will help you stand out more.
          </p>
        </div>
        {/* other links */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h6 className="text-violet-800">Other Links</h6>
            <div>
              <SmallIcon>
                <AiOutlinePlus />
              </SmallIcon>
            </div>
          </div>
          <p className="text-xs text-violet-400">
            Add your online portfolio link to increase your profile strength.
          </p>
          <div className="flex justify-center  p-4">
            <div className="bg-violet-100 w-auto rounded-md mt-4 flex justify-center gap-4 py-4 px-6">
              <a href="https://girish-dev.web.app/" target="_blank">
                <VscAccount size={"1.5rem"} className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/girishmanchineeru/"
                target="_blank"
              >
                <FaLinkedin size={"1.5rem"} className="cursor-pointer" />
              </a>
              <a href="https://github.com/Girish3214/" target="_blank">
                <FaGithub size={"1.5rem"} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* progress bar */}
        <div className="mb-4">
          <div className="flex justify-center p-2">
            <div className="bg-violet-100 w-full rounded-md mt-4 flex items-center  justify-center gap-4 py-4 px-6 flex-col">
              <h6 className="text-xs text-violet-700 font-bold flex">
                <span className="mr-2">Wheel of opportunities</span>
                <AiOutlineInfoCircle size={"1rem"} />
              </h6>
              <div>
                <PieChart data={chartData} />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h6 className="text-violet-800">Your Ranking</h6>
          </div>
          <ProgressBar progress={70} />
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
